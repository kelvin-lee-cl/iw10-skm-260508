// Import Firebase functions
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDA-xRi4wnkZ-30fnSfZ7ufaIFyTutAbbA",
    authDomain: "iw10-skm.firebaseapp.com",
    projectId: "iw10-skm",
    storageBucket: "iw10-skm.firebasestorage.app",
    messagingSenderId: "158280477806",
    appId: "1:158280477806:web:aef32aed0ef203d9b28a7f",
    measurementId: "G-DNX5CC83Z4"
};

const PROGRESS_COLLECTION = 'avatar_workshop_progress';

function resolveStorageForApp(appInstance, config) {
    const candidates = [];
    if (config.storageBucket) candidates.push(String(config.storageBucket).replace(/^gs:\/\//, ''));
    candidates.push(`${config.projectId}.appspot.com`);
    const seen = new Set();
    for (const bucketId of candidates) {
        if (!bucketId || seen.has(bucketId)) continue;
        seen.add(bucketId);
        try {
            const st = getStorage(appInstance, `gs://${bucketId}`);
            console.log('[Firebase Storage] bucket:', bucketId);
            return st;
        } catch (e) {
            console.warn('[Firebase Storage] could not use bucket', bucketId, e.message);
        }
    }
    return getStorage(appInstance);
}

let app;
let storage;
let firestoreDb;
try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    console.log("Firebase app ready:", firebaseConfig.projectId);

    try {
        storage = resolveStorageForApp(app, firebaseConfig);
        window.fbStorage = storage;
    } catch (storageError) {
        console.error("Storage initialization failed:", storageError);
        alert("Firebase storage initialization failed. Upload functionality may not be available.");
    }

    try {
        firestoreDb = getFirestore(app);
        window.fbDb = firestoreDb;
        console.log('Firestore ready');
    } catch (firestoreErr) {
        console.warn('Firestore init skipped:', firestoreErr.message);
    }
} catch (firebaseError) {
    console.error("Firebase initialization failed:", firebaseError);
    alert("Firebase initialization failed. Upload functionality is not available.");
}

const errorMessage = document.getElementById('errorMessage');

function showError(message, type = 'error') {
    console.log(`${type.toUpperCase()}:`, message);
    if (!errorMessage) return;
    const msg = String(message || '').trim();
    if (!msg && type === 'success') {
        errorMessage.classList.add('d-none');
        errorMessage.textContent = '';
        return;
    }
    errorMessage.textContent = msg;
    errorMessage.classList.remove('d-none');
    errorMessage.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
}

function parseHttpUrl(str) {
    const s = String(str || '').trim();
    if (!s) return null;
    try {
        const u = new URL(s);
        if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
        return u.href;
    } catch {
        return null;
    }
}

function audioExtension(file) {
    const n = String(file.name || '').toLowerCase();
    const m = n.match(/\.([a-z0-9]+)$/);
    if (m) return m[1];
    const t = String(file.type || '');
    if (t.includes('mpeg')) return 'mp3';
    if (t.includes('wav')) return 'wav';
    if (t.includes('mp4') || t.includes('aac')) return 'm4a';
    if (t.includes('ogg')) return 'ogg';
    if (t.includes('webm')) return 'webm';
    return 'audio';
}

function progressDocId(uidRaw) {
    const s = String(uidRaw || 'unknown').trim() || 'unknown';
    return s.replace(/[/\\]/g, '_').replace(/\s+/g, '_').slice(0, 400);
}

function pickRecorderMimeType() {
    const candidates = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4',
        'audio/ogg;codecs=opus'
    ];
    for (const t of candidates) {
        if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(t)) return t;
    }
    return '';
}

const MAX_AUDIO_BYTES = 25 * 1024 * 1024;

document.addEventListener('DOMContentLoaded', function () {
    if (!window.fbStorage && typeof app !== 'undefined' && app) {
        try {
            window.fbStorage = resolveStorageForApp(app, firebaseConfig);
        } catch (error) {
            console.error('Failed to initialize Firebase storage in DOMContentLoaded:', error);
        }
    }
    if (!window.fbDb && typeof app !== 'undefined' && app) {
        try {
            window.fbDb = getFirestore(app);
        } catch (error) {
            console.warn('Firestore attach in DOMContentLoaded:', error);
        }
    }

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const exerciseSelect = document.getElementById('heygenExerciseSelect');

    function switchHeygenExercise(which) {
        document.querySelectorAll('.heygen-exercise').forEach((el) => el.classList.add('d-none'));
        const map = { '1': 'heygenEx1', '2': 'heygenEx2', '3': 'heygenEx3', '4': 'heygenEx4' };
        const id = map[which] || 'heygenEx1';
        const section = document.getElementById(id);
        if (section) section.classList.remove('d-none');
    }

    if (exerciseSelect) {
        exerciseSelect.addEventListener('change', () => switchHeygenExercise(exerciseSelect.value));
        switchHeygenExercise(exerciseSelect.value || '1');
    }

    async function mergeProgress(patch) {
        const db = window.fbDb || firestoreDb;
        if (!db) throw new Error('Firestore is not ready. Please refresh. / Firestore 尚未就緒，請重新整理。');
        const uidRaw = localStorage.getItem('currentUserId') || 'unknown';
        const pid = progressDocId(uidRaw);
        const refDoc = doc(db, PROGRESS_COLLECTION, pid);
        await setDoc(
            refDoc,
            {
                userId: uidRaw,
                activityId: 'heygen_avatar',
                updatedAt: serverTimestamp(),
                ...patch
            },
            { merge: true }
        );
    }

    async function uploadTrainingAudioBlob(blobOrFile) {
        const fb = window.fbStorage || storage;
        if (!fb) throw new Error('Firebase Storage is not ready. Please refresh. / Firebase 儲存尚未就緒，請重新整理。');
        const uidRaw = localStorage.getItem('currentUserId') || 'unknown';
        const uid = uidRaw.replace(/[^\w\-]/g, '') || 'unknown';
        const ts = Date.now();

        let ext = 'webm';
        if (blobOrFile instanceof File) {
            ext = audioExtension(blobOrFile);
        } else {
            const t = String(blobOrFile.type || '');
            if (t.includes('webm')) ext = 'webm';
            else if (t.includes('mpeg')) ext = 'mp3';
            else if (t.includes('wav')) ext = 'wav';
            else if (t.includes('mp4') || t.includes('aac')) ext = 'm4a';
            else if (t.includes('ogg')) ext = 'ogg';
        }

        const audioPath = `activity_submissions/${uid}_${ts}_heygen_avatar_training.${ext}`;
        const contentType =
            blobOrFile.type ||
            (ext === 'webm' ? 'audio/webm' : `audio/${ext}`);
        await uploadBytes(ref(fb, audioPath), blobOrFile, { contentType });
        const audioDownloadUrl = await getDownloadURL(ref(fb, audioPath));
        return { audioPath, audioDownloadUrl };
    }

    function spin(btn, sp, on) {
        if (btn) btn.disabled = on;
        if (sp) sp.classList.toggle('d-none', !on);
    }

    // --- Exercise 1: script ---
    const scriptInput = document.getElementById('heygenScriptInput');
    const submitEx1 = document.getElementById('submitHeygenEx1Btn');
    const spinEx1 = document.getElementById('submitHeygenEx1Spinner');
    if (submitEx1 && scriptInput) {
        submitEx1.addEventListener('click', async () => {
            const scriptText = scriptInput.value.trim();
            if (!scriptText) {
                showError('Please enter your script. / 請填寫講稿。');
                return;
            }
            try {
                spin(submitEx1, spinEx1, true);
                await mergeProgress({
                    scriptText,
                    scriptSubmittedAt: serverTimestamp()
                });
                showError('Exercise 1 saved. / 練習一已儲存。', 'success');
            } catch (err) {
                console.error(err);
                showError(err.message || 'Save failed. / 儲存失敗。');
            } finally {
                spin(submitEx1, spinEx1, false);
            }
        });
    }

    // --- Exercise 2: record or upload ---
    const audioInput = document.getElementById('heygenAudioInput');
    const audioFileName = document.getElementById('heygenAudioFileName');
    const startRecBtn = document.getElementById('heygenStartRecordBtn');
    const stopRecBtn = document.getElementById('heygenStopRecordBtn');
    const clearRecBtn = document.getElementById('heygenClearRecordBtn');
    const recordPreview = document.getElementById('heygenRecordPreview');
    const recordTimerEl = document.getElementById('heygenRecordTimer');
    const recordStatusEl = document.getElementById('heygenRecordStatus');
    const submitEx2 = document.getElementById('submitHeygenEx2Btn');
    const spinEx2 = document.getElementById('submitHeygenEx2Spinner');

    let selectedFile = null;
    let recordedBlob = null;
    let mediaRecorder = null;
    let recordChunks = [];
    let recordStream = null;
    let recordTimerId = null;
    let recordStartedAt = 0;

    function revokePreviewUrl() {
        if (recordPreview && recordPreview.src && recordPreview.src.startsWith('blob:')) {
            URL.revokeObjectURL(recordPreview.src);
        }
    }

    function updateEx2PreviewFromBlob(blob) {
        revokePreviewUrl();
        recordedBlob = blob;
        if (recordPreview && blob) {
            recordPreview.src = URL.createObjectURL(blob);
            recordPreview.classList.remove('d-none');
        }
        if (clearRecBtn) clearRecBtn.classList.remove('d-none');
        if (audioInput) audioInput.value = '';
        selectedFile = null;
        if (audioFileName) audioFileName.textContent = '';
    }

    function clearRecordingUi() {
        revokePreviewUrl();
        recordedBlob = null;
        if (recordPreview) {
            recordPreview.removeAttribute('src');
            recordPreview.classList.add('d-none');
        }
        if (clearRecBtn) clearRecBtn.classList.add('d-none');
        if (recordTimerEl) recordTimerEl.textContent = '';
    }

    if (audioInput) {
        audioInput.addEventListener('change', () => {
            const f = audioInput.files && audioInput.files[0];
            selectedFile = f || null;
            clearRecordingUi();
            if (audioFileName) audioFileName.textContent = f ? f.name : '';
        });
    }

    const canRecord =
        typeof MediaRecorder !== 'undefined' &&
        navigator.mediaDevices &&
        typeof navigator.mediaDevices.getUserMedia === 'function';

    if (!canRecord && recordStatusEl && startRecBtn) {
        recordStatusEl.textContent =
            'Recording is not supported in this browser. Please upload an audio file instead. / 此瀏覽器不支援錄音，請改為上傳音檔。';
        recordStatusEl.classList.remove('d-none');
        startRecBtn.disabled = true;
        stopRecBtn.disabled = true;
    }

    function formatElapsed(ms) {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        const r = s % 60;
        return `${m}:${r.toString().padStart(2, '0')}`;
    }

    if (startRecBtn && stopRecBtn && canRecord) {
        startRecBtn.addEventListener('click', async () => {
            if (!window.isSecureContext && location.hostname !== 'localhost') {
                showError('Microphone needs HTTPS (except localhost). Open this site over HTTPS on your phone. / 手機錄音需使用 HTTPS（本機 localhost 除外）。');
                return;
            }
            try {
                showError('', 'success');
                recordStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                recordChunks = [];
                const mimeType = pickRecorderMimeType();
                mediaRecorder = mimeType
                    ? new MediaRecorder(recordStream, { mimeType })
                    : new MediaRecorder(recordStream);

                mediaRecorder.ondataavailable = (e) => {
                    if (e.data && e.data.size > 0) recordChunks.push(e.data);
                };

                mediaRecorder.onstop = () => {
                    if (recordStream) {
                        recordStream.getTracks().forEach((t) => t.stop());
                        recordStream = null;
                    }
                    const blobType = mediaRecorder.mimeType || mimeType || 'audio/webm';
                    const blob = new Blob(recordChunks, { type: blobType });
                    if (blob.size < 1000) {
                        showError('Recording too short. Try again. / 錄音太短，請重試。');
                        clearRecordingUi();
                    } else {
                        updateEx2PreviewFromBlob(blob);
                    }
                    mediaRecorder = null;
                    if (recordTimerId) {
                        clearInterval(recordTimerId);
                        recordTimerId = null;
                    }
                    if (recordTimerEl) recordTimerEl.textContent = '';
                    startRecBtn.disabled = false;
                    stopRecBtn.disabled = true;
                };

                mediaRecorder.start(200);
                startRecBtn.disabled = true;
                stopRecBtn.disabled = false;
                recordStartedAt = Date.now();
                if (recordTimerEl) {
                    recordTimerEl.textContent = '0:00';
                    recordTimerId = setInterval(() => {
                        if (recordTimerEl) recordTimerEl.textContent = formatElapsed(Date.now() - recordStartedAt);
                    }, 500);
                }
                if (recordStatusEl) {
                    recordStatusEl.textContent =
                        'Recording… read HeyGen’s script clearly. / 錄音中…請依照 HeyGen 提供的文稿朗讀。';
                    recordStatusEl.classList.remove('d-none');
                }
            } catch (err) {
                console.error(err);
                showError(
                    err.message ||
                        'Could not access microphone. Check permissions. / 無法使用麥克風，請檢查權限設定。'
                );
                startRecBtn.disabled = false;
                stopRecBtn.disabled = true;
            }
        });

        stopRecBtn.addEventListener('click', () => {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
            }
            if (recordStatusEl) {
                recordStatusEl.classList.add('d-none');
                recordStatusEl.textContent = '';
            }
        });
    }

    if (clearRecBtn) {
        clearRecBtn.addEventListener('click', () => {
            clearRecordingUi();
        });
    }

    if (submitEx2) {
        submitEx2.addEventListener('click', async () => {
            const file = selectedFile || (audioInput && audioInput.files && audioInput.files[0]);
            const recBlob = recordedBlob;

            if (!file && !recBlob) {
                showError('Record audio or choose a file to upload. / 請錄音或選擇要上傳的音檔。');
                return;
            }

            const blobOrFile = recBlob || file;
            const size = blobOrFile.size || 0;
            if (size > MAX_AUDIO_BYTES) {
                showError('Audio file is too large (max 25 MB). / 音檔過大（上限 25 MB）。');
                return;
            }

            try {
                spin(submitEx2, spinEx2, true);
                const { audioPath, audioDownloadUrl } = await uploadTrainingAudioBlob(blobOrFile);

                await mergeProgress({
                    heygenTrainingAudioPath: audioPath,
                    heygenTrainingAudioUrl: audioDownloadUrl,
                    audioSubmittedAt: serverTimestamp()
                });

                showError('Exercise 2 saved. / 練習二已儲存。', 'success');
                clearRecordingUi();
                if (audioInput) audioInput.value = '';
                selectedFile = null;
                if (audioFileName) audioFileName.textContent = '';
            } catch (err) {
                console.error(err);
                const code = err && err.code ? err.code : '';
                const hint =
                    code === 'storage/unauthorized'
                        ? ' Check Firebase Storage rules (activity_submissions). / 請確認 Firebase Storage 規則。'
                        : '';
                showError((err.message || String(err)) + hint);
            } finally {
                spin(submitEx2, spinEx2, false);
            }
        });
    }

    // --- Exercise 3 ---
    const heygenLinkInput = document.getElementById('heygenAvatarLinkInput');
    const submitEx3 = document.getElementById('submitHeygenEx3Btn');
    const spinEx3 = document.getElementById('submitHeygenEx3Spinner');
    if (submitEx3 && heygenLinkInput) {
        submitEx3.addEventListener('click', async () => {
            const url = parseHttpUrl(heygenLinkInput.value);
            if (!url) {
                showError('Please paste a valid HeyGen link (http/https). / 請貼上有效的 HeyGen 連結。');
                return;
            }
            try {
                spin(submitEx3, spinEx3, true);
                await mergeProgress({
                    heygenAvatarLink: url,
                    heygenLinkSubmittedAt: serverTimestamp()
                });
                showError('Exercise 3 saved. / 練習三已儲存。', 'success');
            } catch (err) {
                console.error(err);
                showError(err.message || 'Save failed. / 儲存失敗。');
            } finally {
                spin(submitEx3, spinEx3, false);
            }
        });
    }

    // --- Exercise 4 ---
    const perplexityLinkInput = document.getElementById('perplexityTutorLinkInput');
    const submitEx4 = document.getElementById('submitHeygenEx4Btn');
    const spinEx4 = document.getElementById('submitHeygenEx4Spinner');
    if (submitEx4 && perplexityLinkInput) {
        submitEx4.addEventListener('click', async () => {
            const url = parseHttpUrl(perplexityLinkInput.value);
            if (!url) {
                showError('Please paste a valid Perplexity link (http/https). / 請貼上有效的 Perplexity 連結。');
                return;
            }
            try {
                spin(submitEx4, spinEx4, true);
                await mergeProgress({
                    perplexityTutorLink: url,
                    perplexityLinkSubmittedAt: serverTimestamp()
                });
                showError('Exercise 4 saved. / 練習四已儲存。', 'success');
            } catch (err) {
                console.error(err);
                showError(err.message || 'Save failed. / 儲存失敗。');
            } finally {
                spin(submitEx4, spinEx4, false);
            }
        });
    }
});
