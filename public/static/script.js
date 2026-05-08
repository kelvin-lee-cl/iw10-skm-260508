// --- i18n: English / 繁體中文 ---
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.lessons': 'Lessons',
        'nav.aiArtStudio': 'AI Art Studio',
        'nav.gallery': 'Gallery',
        'nav.user': 'User',
        'nav.logout': 'Logout',
        'hero.date': '2026.05.08 // AI Learning & Creation Workshop',
        'hero.title': 'Self-introduction video clips with generative AI',
        'hero.titleLine1': '🧰 Latest AI tools for primary learning',
        'hero.titleLine2': '📝 Learn text generation and how to write effective prompts',
        'hero.titleLine3': '🧑‍🎨 Hands-on AI avatar explaining a math concept',
        'hero.titleLine4': '🤖 Create your own AI chatbot',
        'hero.login': 'Login',
        'modal.highlights': 'Workshop Highlights',
        'modal.close': 'Close',
        'modal.prev': 'Previous',
        'modal.next': 'Next',
        'login.title': 'Login',
        'login.passkey': 'Passkey (3 digits)',
        'login.confirm': 'Confirm',
        'login.wrongPassword': 'Wrong Password!',
        'login.welcomeId': 'Welcome ID',
        'login.userId': 'User ID',
        'classppt.survey': 'Survey',
        'classppt.promptStatements.title': 'Useful prompt phrases',
        'classppt.promptStatements.lead': 'Copy a prompt into Gemini, Perplexity, or another AI tool, then replace placeholders such as [topic].',
        'classppt.prompt.copyBtn': 'Copy prompt',
        'classppt.prompt.copied': 'Copied!',
        'classppt.prompt.pareto.name': 'Pareto Principle Learning Plan',
        'classppt.prompt.pareto.text': 'I want to learn [topic]. Can you use the Pareto Principle, which identifies the 20% of the topic that will yield 80% of the desired results, to create a focused learning plan for me?',
        'classppt.prompt.resources.name': 'Learning Resources Suggestion',
        'classppt.prompt.resources.text': 'Suggest various learning resources (books, videos, podcasts, interactive exercises) for [topic] that cater to different learning styles.',
        'classppt.prompt.explainSimple.name': 'Explain in Simple Terms',
        'classppt.prompt.explainSimple.text': 'Explain [topic] to me in the simplest terms possible as if I were a complete beginner.',
        'classppt.prompt.mentalModels.name': 'Mental Models & Analogies',
        'classppt.prompt.mentalModels.text': 'Create mental models or analogies to help me understand and remember [topics].',
        'classppt.prompt.visualization.name': 'Visualization Exercise',
        'classppt.prompt.visualization.text': 'Guide me through a visualization exercise to help me internalize [topic] and imagine myself successfully applying it to a real-life situation.',
        'classppt.prompt.socraticMethod.name': 'Socratic Method',
        'classppt.prompt.socraticMethod.text': 'I want you to act as Socrates and use the Socratic Method to help me improve my critical thinking, logic, and reasoning skills. Ask me open-ended questions about what I say; after each answer, give constructive feedback before asking the next question.',
        'classppt.prompt.socraticTutor.name': 'Socratic Tutor',
        'classppt.prompt.socraticTutor.text': 'Act as a Socratic tutor and help me understand [topic]. Ask questions to guide my understanding and give feedback after each reply before moving on.',
        'classppt.prompt.semanticTable.name': 'Semantic Propositions Table',
        'classppt.prompt.semanticTable.text': 'Make a list of propositions for this [vocab list] in the formats "X is a type of Y", "W is caused by X", and "A explains B". Put them in a table with four columns: term, proposition, type (Classification / Cause–Effect / Explanation), and explanation.',
        'classppt.prompt.feynman.name': 'Feynman Technique',
        'classppt.prompt.feynman.text': 'Break down [topic] into core components using the Feynman Technique, then quiz me step by step until I can explain it simply in my own words.',
        'classppt.prompt.rolePlay.name': 'Role-Playing Scenario',
        'classppt.prompt.rolePlay.text': 'Teach me [topic] through a role-playing scenario where I practise applying ideas in a simulated real-world situation, with feedback after each step.',
        'classppt.prompt.compareContrast.name': 'Compare & Contrast',
        'classppt.prompt.compareContrast.text': 'Compare and contrast [topic] with [related topic] in a table: similarities, differences, and when to use each.',
        'classppt.prompt.mindMap.name': 'Mind Map Design',
        'classppt.prompt.mindMap.text': 'Design a text-based mind map for [topic], starting from the central idea and branching into subtopics, examples, and connections.',
        'classppt.prompt.storyLearning.name': 'Story / Narrative Learning',
        'classppt.prompt.storyLearning.text': 'Turn [topic] into a memorable story or narrative. Weave key ideas into the plot so I can remember them through the storyline.',
        'classppt.prompt.debateBothSides.name': 'Debate Both Sides',
        'classppt.prompt.debateBothSides.text': 'Debate both sides of a controversial angle on [topic] with me: argue for and against, then help me refine my stance with counterpoints.',
        'classppt.prompt.teachBack.name': 'Teach-Back Challenge',
        'classppt.prompt.teachBack.text': 'After I have studied [topic], ask me to teach it back to you as if you were a beginner. Comment on clarity, accuracy, and depth, then suggest how I can explain it better.',
        'classppt.prompt.spellGrammar.name': 'Prompt copy (1) — Spelling & Grammar Fix',
        'classppt.prompt.spellGrammar.desc': 'Copy this prompt to correct spelling and grammar with formatting rules.',
        'classppt.prompt.spellGrammar.text': 'Correct all spelling mistakes and make the corrections italic. Correct all grammar mistakes by making the mistakes strikethrough and the corrections bold.',
        'classppt.prompt.argumentEval.name': 'Prompt copy (2) — Argument Evaluation & Rewrite',
        'classppt.prompt.argumentEval.desc': 'Copy this prompt to label arguments, rewrite clearly, and explain your evaluation.',
        'classppt.prompt.argumentEval.text': 'Evaluate the above paragraph by labeling each argument as correct, correct with conditions, partly correct, misleading, or incorrect.\nIn the rewritten response:\n- Present one single flowing paragraph that retains the original ideas.\n- Show correct, conditionally correct, partially correct arguments in italics formatting with label.\n- Show misleading or incorrect arguments with strikethrough formatting with label and replace them immediately with revised statements in bold that clarify or correct the claims.\n- After the paragraph, list each argument in bullet points explaining why you gave that label.',
        'classppt.prompt.mathTutorCheck.name': 'Math Tutor — Check Understanding from Teaching Script',
        'classppt.prompt.mathTutorCheck.preview': 'Use a short teaching script to quiz and check a child’s understanding (one question at a time).',
        'classppt.prompt.mathTutorCheck.text': 'You are a private math tutor for children.\n\nThe user will paste a SHORT TEACHING SCRIPT (for example, in Cantonese or English) that explains one or more math ideas (such as telling time, bus timetables, addition, fractions, etc.).\n\nYour job is to:\n- Read and understand the script.\n- Infer the key math concepts, rules, and examples from that script.\n- Then act as an interactive private tutor to CHECK THE USER’S UNDERSTANDING of those concepts.\n\nTUTORING BEHAVIOR (VERY IMPORTANT):\n1. Always ask ONE question at a time.\n2. After the user answers:\n   - Clearly say if the answer is CORRECT or NOT CORRECT.\n3. If the answer is NOT CORRECT:\n   - Allow up to THREE ATTEMPTS on the SAME IDEA.\n   - Attempt 1: Give a gentle hint (no full solution).\n   - Attempt 2: Give a more concrete, step-by-step hint.\n   - Attempt 3: Almost walk through the steps, but still let the user say the final answer.\n   - If the user is still incorrect after 3 attempts, BREAK THE PROBLEM into an EASIER SUB-QUESTION and continue from there.\n4. If the answer is CORRECT:\n   - Give specific praise AND briefly restate the key idea.\n   - Then LEVEL UP difficulty a little in the NEXT question:\n     - slightly harder numbers, or\n     - a more complex situation, or\n     - fewer hints.\n5. Never solve whole assignments or tests directly. Your goal is to build understanding, not just give answers.\n6. Keep language simple and friendly, suitable for a primary-school learner.\n7. Frequently ask the learner to EXPLAIN their thinking in their own words.\n8. End most replies with ONE open question, so the learner has to respond.\n\nCONVERSATION FLOW:\n- Step 1: The user pastes the teaching script.\n- Step 2: You briefly extract the main math ideas in 1–3 very short sentences (no long summary).\n- Step 3: Immediately start tutoring by asking the FIRST SIMPLE QUESTION based on the script.\n- Then follow the behavior rules above (one question, check answer, up to 3 attempts, level up/level down).\n\nAlways stick closely to the concepts and style implied by the user’s script. Do not introduce completely unrelated topics.',
        'gallery.imagePreview': 'Image Preview',
        'gallery.editImage': 'Edit Image',
        'gallery.rotationControls': 'Rotation Controls',
        'gallery.rotateRight': 'Rotate Right (90°)',
        'gallery.rotate180': 'Rotate 180°',
        'gallery.rotateLeft': 'Rotate Left (270°)',
        'gallery.resetRotation': 'Reset Rotation',
        'gallery.saveChanges': 'Save Changes',
        'gallery.deleteImage': 'Delete Image',
        'gallery.filterByUser': 'Filter by User ID:',
        'gallery.allUsers': 'All Users',
        'gallery.aiStudioTitle': 'AI Art Studio — Student gallery',
        'gallery.aiStudioSubtitle': '',
        'gallery.sectionImages': 'Gallery & submissions',
        'gallery.sectionWritten': 'Self-introduction & Gmail',
        'gallery.cardSelfIntro': 'Self-introduction (English)',
        'gallery.cardGmail': 'Self-introduction (Chinese)',
        'gallery.cardAvatarWorkshop': 'AI avatar & tutor (HeyGen / Perplexity)',
        'gallery.activityHeygenAvatar': 'AI avatar & tutor — HeyGen / Perplexity',
        'gallery.avatarScriptLabel': 'Script',
        'gallery.avatarTrainingAudio': 'Training audio',
        'gallery.avatarHeygenLink': 'HeyGen link',
        'gallery.avatarPerplexityLink': 'Perplexity tutor link',
        'gallery.openLink': 'Open',
        'gallery.cardUserLabel': 'User',
        'gallery.loadImagesError': 'Could not load images.',
        'gallery.activity': 'Activity:',
        'gallery.allActivities': 'All Activities',
        'gallery.activity1': '2.1 — Self-introduction (English)',
        'gallery.activity2': '1 — Profile picture',
        'gallery.activity3': '2.2 — Self-introduction (Chinese)',
        'gallery.activity4': 'Activity 2.3',
        'gallery.activity5': 'Activity 4.1',
        'gallery.activity6': 'Activity 4.2',
        'gallery.activityHeygenAvatarFilter': 'AI avatar & tutor (HeyGen / Perplexity)',
        'gallery.sortBy': 'Sort by:',
        'gallery.newestFirst': 'Newest First',
        'gallery.oldestFirst': 'Oldest First',
        'gallery.mostVotes': 'Most Votes',
        'gallery.voteStatus': 'Vote Status:',
        'gallery.votesRemaining': 'Votes remaining:',
        'gallery.loadingImages': 'Loading images...',
        'imgGen.selectActivity': 'Select Activity',
        'imgGen.opt1Upload': '2) Upload a profile picture from Recraft',
        'imgGen.opt2Recraft': '1) Upload your self-introduction in English version',
        'imgGen.opt3Recraft': '3) Upload your self-introduction in Traditional Chinese version',
        'imgGen.opt4Framework': '2.3) Product Design Prompt',
        'imgGen.opt5UploadOnly': '4.1) Photo Style Transfer',
        'imgGen.opt6UploadOnly': '4.2) Texture/Material Transfer',
        'imgGen.uploadImage': 'Upload Image',
        'imgGen.textToImageRecraft': 'Text to Image Recraft AI',
        'imgGen.textToImageRecraft2': 'Text-to-Image with Recraft AI',
        'imgGen.frameworkTextToImage': 'Framework + Text to Image',
        'imgGen.imageUploadOnly': 'Image Upload Only',
        'imgGen.activityInstruction': 'Activity Instruction',
        'imgGen.instruction1': 'Upload a profile picture you created with Recraft AI. You may add a short prompt (提示) below to describe your image. Then select your file and use Upload to Gallery to submit.',
        'imgGen.instruction2': 'Write your self-introduction in English. When you are ready, click Submit to save it with your workshop account (no image required).',
        'imgGen.instruction3': 'Write your self-introduction in Traditional Chinese. When you are ready, click Submit to save it with your workshop account.',
        'imgGen.instruction4': 'Create your "Product Design" prompt using the framework "Purpose - Angle - Items - Numbers - Texture/Style - Settings". Fill in the fields below, then select style and size, and click Generate Image.',
        'imgGen.instruction5': 'Use Nano Banana\'s advanced feature "Photo Style Transfer" to create a unique image. Upload your result to the gallery with AI type Nano Banana.',
        'imgGen.instruction6': 'Use Nano Banana\'s advanced feature "Texture/Material Transfer" to create a unique image. Upload your result to the gallery with AI type Nano Banana.',
        'imgGen.enterPrompt': 'Enter your prompt',
        'imgGen.promptPlaceholder': 'Describe the image you want to create...',
        'imgGen.selectTheme': 'Select Theme',
        'imgGen.selectSettings': 'Select Settings',
        'imgGen.fillYourself': 'Fill it yourself...(English only)',
        'imgGen.generatedPrompt': 'Generated Prompt',
        'imgGen.selectOptionsPrompt': 'Select options to generate a prompt...',
        'imgGen.framework': 'Framework',
        'imgGen.selectFramework': 'Select Framework',
        'imgGen.character': 'Character',
        'imgGen.scene': 'Scene',
        'imgGen.style': 'Style',
        'imgGen.custom': 'Custom',
        'imgGen.frameworkInput': 'Framework Input',
        'imgGen.frameworkPlaceholder': 'Enter framework details...',
        'imgGen.textPrompt': 'Text Prompt',
        'imgGen.textPromptPlaceholder': 'Enter your text prompt...',
        'imgGen.uploadToGallery': 'Upload to Gallery',
        'imgGen.selectImage': 'Select Image',
        'imgGen.clickOrDrag': 'Click here or drag and drop an image',
        'imgGen.supportedFormats': 'Supported: JPG, PNG, GIF, HEIC',
        'imgGen.aiType': 'AI Type',
        'imgGen.selectAiType': 'Select AI Type',
        'imgGen.promptOptional': 'Prompt (Optional)',
        'imgGen.promptOptionalPlaceholder': 'Describe your image or leave blank...',
        'imgGen.promptCaption': 'Prompt (提示)',
        'imgGen.promptCaptionPlaceholder': 'Optional: describe your Recraft profile picture...',
        'imgGen.selfIntroLabel': 'Self-introduction (English)',
        'imgGen.selfIntroPlaceholder': 'Introduce yourself in English...',
        'imgGen.gmailLabel': 'Self-introduction (Traditional Chinese)',
        'imgGen.gmailPlaceholder': 'Introduce yourself in Traditional Chinese...',
        'imgGen.submit': 'Submit',
        'imgGen.selectStyle': 'Select Style',
        'imgGen.realistic': 'Realistic Image',
        'imgGen.digitalIllustration': 'Digital Illustration',
        'imgGen.vectorIllustration': 'Vector Illustration',
        'imgGen.selectSize': 'Select Size',
        'imgGen.generateImage': 'Generate Image',
        'imgGen.remove': 'Remove',
        'imgGen.heygenWorkshopTitle': 'AI avatar & tutor exercises',
        'imgGen.heygenWorkshopIntro':
            'Choose one exercise from the menu, complete it, and submit. You can do them in any order. Each submission updates your progress in Firebase for teachers on the dashboard.',
        'imgGen.selectHeygenExercise': 'Select exercise',
        'imgGen.heygenOpt1': '1) AI avatar script (text)',
        'imgGen.heygenOpt2': '2) HeyGen voice-training audio',
        'imgGen.heygenOpt3': '3) HeyGen avatar share link',
        'imgGen.heygenOpt4': '4) Perplexity AI tutor link',
        'imgGen.heygenSubmitExercise': 'Submit this exercise',
        'imgGen.heygenStep1Label': '1. One-minute AI avatar script',
        'imgGen.heygenStep1Hint':
            'Paste the full script for your AI avatar—about one minute when read aloud.',
        'imgGen.heygenStep1Placeholder': 'Type or paste your script here…',
        'imgGen.heygenStep2Label': '2. HeyGen voice-training audio',
        'imgGen.heygenStep2Hint': 'Upload the audio file you use with HeyGen for voice cloning or training.',
        'imgGen.heygenStep2HintRecord':
            'Read aloud the script HeyGen shows you for voice training. On your phone, open this page over HTTPS and allow the microphone—or record with another app and upload the file below.',
        'imgGen.heygenOrUploadFile': 'Or upload an audio file',
        'imgGen.heygenStartRecording': 'Start recording',
        'imgGen.heygenStopRecording': 'Stop',
        'imgGen.heygenDiscardRecording': 'Discard recording',
        'imgGen.heygenStep3Label': '3. HeyGen avatar share link',
        'imgGen.heygenStep3Hint': 'Paste the public URL of your generated HeyGen avatar or video.',
        'imgGen.heygenStep3Placeholder': 'https://…',
        'imgGen.heygenStep4Label': '4. Perplexity AI tutor link',
        'imgGen.heygenStep4Hint': 'Paste the link to your Perplexity Space, project, or tutor thread.',
        'imgGen.heygenStep4Placeholder': 'https://…',
        'imgGen.heygenSubmitAll': 'Submit to teacher dashboard',
        'admin.login': 'Admin Login',
        'admin.password': 'Password',
        'admin.loginButton': 'Login',
        'admin.imageManagement': 'Image Management',
        'admin.refresh': 'Refresh',
        'admin.totalImages': 'Total Images',
        'admin.inGallery': 'In Gallery',
        'admin.today': 'Today',
        'admin.totalSize': 'Total Size',
        'admin.gallerySettings': 'Gallery Settings',
        'admin.autoApprove': 'Auto-approve new images for gallery',
        'admin.approveAllPending': 'Approve All Pending',
        'admin.loading': 'Loading...',
        'admin.noImagesFound': 'No images found',
        'admin.noImagesDescription': 'Images will appear here once they are generated by users.',
        'admin.incorrectPassword': 'Incorrect password',
        'admin.prompt': 'Prompt:',
        'admin.user': 'User:',
        'admin.date': 'Date:',
        'admin.showInGallery': 'Show in Gallery',
        'admin.delete': 'Delete',
        'admin.download': 'Download',
        'admin.noPrompt': 'No prompt',
        'admin.unknown': 'Unknown'
    },
    zh: {
        'nav.home': '首頁',
        'nav.lessons': '課堂',
        'nav.aiArtStudio': 'AI 藝術工作室',
        'nav.gallery': '作品廊',
        'nav.user': '用戶',
        'nav.logout': '登出',
        'hero.date': '2026.05.08 // AI 學習 × 創作工作坊',
        'hero.title': '以生成式 AI 製作自我介紹影片',
        'hero.titleLine1': '🧰 小學 AI 學習工具最新趨勢',
        'hero.titleLine2': '📝 從中學習文字生成與有效提示撰寫',
        'hero.titleLine3': '🧑‍🎨 動手做 AI 分身：解釋一個數學概念',
        'hero.titleLine4': '🤖 打造你的 AI 聊天機器人',
        'hero.login': '登入',
        'modal.highlights': '工作坊花絮',
        'modal.close': '關閉',
        'modal.prev': '上一張',
        'modal.next': '下一張',
        'login.title': '登入',
        'login.passkey': '密碼（3位數字）',
        'login.confirm': '確認',
        'login.wrongPassword': '密碼錯誤！',
        'login.welcomeId': '歡迎',
        'login.userId': '用戶編號',
        'classppt.survey': '問卷',
        'classppt.promptStatements.title': '實用提示語句',
        'classppt.promptStatements.lead': '複製提示後貼到 Gemini、Perplexity 或其他 AI 工具，再把【主題】等佔位符換成你的內容。',
        'classppt.prompt.copyBtn': '複製提示',
        'classppt.prompt.copied': '已複製！',
        'classppt.prompt.pareto.name': '帕累托法則學習計劃',
        'classppt.prompt.pareto.text': '我想學習【主題】。請運用帕累托法則（找出能帶來約八成成效的那約兩成重點），為我設計一份聚焦的學習計劃。',
        'classppt.prompt.resources.name': '多元學習資源建議',
        'classppt.prompt.resources.text': '請為【主題】推薦適合不同學習風格的多元資源（例如書籍、影片、podcast、互動練習）。',
        'classppt.prompt.explainSimple.name': '用最簡單的方式說明',
        'classppt.prompt.explainSimple.text': '請用最簡單的方式向我解釋【主題】，假設我是完全的新手。',
        'classppt.prompt.mentalModels.name': '心智模型與類比',
        'classppt.prompt.mentalModels.text': '請為【主題／多個主題】建立心智模型或類比，幫助我理解並記住重點。',
        'classppt.prompt.visualization.name': '視覺化想像練習',
        'classppt.prompt.visualization.text': '請帶我做一段視覺化想像練習，幫我把【主題】內化，並想像自己如何在真實情境中成功運用它。',
        'classppt.prompt.socraticMethod.name': '蘇格拉底提問法',
        'classppt.prompt.socraticMethod.text': '請扮演蘇格拉底，用蘇格拉底提問法訓練我的批判思考、邏輯與推理。針對我的說法提出開放式問題；我每次回答後，請先給予具建設性的回饋，再問下一個問題。',
        'classppt.prompt.socraticTutor.name': '蘇格拉底式導師',
        'classppt.prompt.socraticTutor.text': '請擔任蘇格拉底式導師，幫我理解【主題】。用問題引導我思考，並在我每次回答後給回饋，再繼續下一步。',
        'classppt.prompt.semanticTable.name': '語義命題表格',
        'classppt.prompt.semanticTable.text': '請根據這份【詞彙清單】整理命題，格式包含「X 是一種 Y」「W 由 X 造成」「A 解釋 B」。請製作表格，欄位為：詞項、命題、類型（分類／因果／解釋）、說明。',
        'classppt.prompt.feynman.name': '費曼技巧',
        'classppt.prompt.feynman.text': '請用費曼技巧把【主題】拆成核心概念，再一步一步考我，直到我能用自己的話簡單講清楚為止。',
        'classppt.prompt.rolePlay.name': '角色扮演情境',
        'classppt.prompt.rolePlay.text': '請用角色扮演情境教我【主題】：讓我在模擬的真實情境中練習運用概念，每一步之後給我回饋。',
        'classppt.prompt.compareContrast.name': '比較與對照',
        'classppt.prompt.compareContrast.text': '請用表格比較【主題】與【相關主題】：相似處、相異處，以及各自適合的使用時機。',
        'classppt.prompt.mindMap.name': '心智圖（文字版）',
        'classppt.prompt.mindMap.text': '請為【主題】設計一份文字版心智圖：從中心概念分出子題、例子與關聯。',
        'classppt.prompt.storyLearning.name': '故事／敘事學習',
        'classppt.prompt.storyLearning.text': '請把【主題】改編成好記的故事或敘事，把重要概念編進情節，讓我能順著故事記住重點。',
        'classppt.prompt.debateBothSides.name': '正反辯論',
        'classppt.prompt.debateBothSides.text': '請和我辯論【主題】中具有爭議的一個面向：同時提出正反論點，並協助我用反駁整理出自己的立場。',
        'classppt.prompt.teachBack.name': '教回來挑戰',
        'classppt.prompt.teachBack.text': '在我研讀【主題】之後，請我以「教給完全新手」的方式講給你聽。請評論我的清晰度、正確度與深度，並建議我可以如何講得更好。',
        'classppt.prompt.spellGrammar.name': '提示複製 (1) — 拼字與文法修正',
        'classppt.prompt.spellGrammar.desc': '複製此提示，依格式規則修正拼字與文法。',
        'classppt.prompt.spellGrammar.text': '請修正所有拼字錯誤，並將改正後的文字設為斜體。請修正所有文法錯誤：將有誤的部分加上刪除線，並將改正後的文字設為粗體。',
        'classppt.prompt.argumentEval.name': '提示複製 (2) — 論證評估與改寫',
        'classppt.prompt.argumentEval.desc': '複製此提示以標示論點、清楚改寫並說明你的評估理由。',
        'classppt.prompt.argumentEval.text': '請評估上文段落中的每個論點，並標示為：正確、附條件正確、部分正確、具誤導性，或不正確。\n在改寫版本中：\n- 請輸出一段連貫段落，保留原有想法。\n- 將正確、附條件正確、部分正確的論證以斜體呈現，並附上標籤。\n- 將具誤導性或不正確的論證以刪除線標示並附上標籤，並緊接著以粗體提供修訂語句，用以澄清或更正該主張。\n- 段落之後，請以項目符號列出每一個論證，並說明你給予該標籤的原因。',
        'classppt.prompt.mathTutorCheck.name': '私人數學補習老師 — 按教學講稿檢查理解',
        'classppt.prompt.mathTutorCheck.preview': '用一段短教學講稿出題，逐題提問，檢查小朋友是否真正理解。',
        'classppt.prompt.mathTutorCheck.text': '你是一位教小朋友的私人數學補習老師。\n\n用戶會貼上一段【短教學講稿】（例如廣東話或英文），內容會解釋一個或多個數學概念（例如：看時間、巴士時間表、加法、分數等）。\n\n你的工作是：\n- 閱讀並理解講稿。\n- 從講稿推斷出重點數學概念、規則與例子。\n- 然後以互動式私人導師的方式，檢查用戶是否【真正理解】這些概念。\n\n教學行為（非常重要）：\n1. 每次只問【一條】問題。\n2. 用戶回答後：\n   - 清楚指出答案是【正確】或【不正確】。\n3. 若答案【不正確】：\n   - 針對同一個重點，最多給【三次嘗試】。\n   - 第 1 次：給溫和提示（不要直接給完整解法）。\n   - 第 2 次：給更具體、一步一步的提示。\n   - 第 3 次：幾乎帶着走完整步驟，但仍要讓用戶說出最後答案。\n   - 若 3 次後仍不正確，把問題【拆成更容易的子問題】再繼續。\n4. 若答案【正確】：\n   - 給具體讚賞，並簡短重述重點概念。\n   - 下一條問題要【稍微升級】難度：\n     - 數字稍大一點，或\n     - 情境更複雜一點，或\n     - 提示更少。\n5. 不要直接代做整份功課或測驗。你的目標是建立理解，而不只是給答案。\n6. 用語要簡單友善，適合小學生。\n7. 經常請學習者用自己的話【解釋他/她的想法】。\n8. 大部分回覆的結尾都要留下一條【開放式問題】，讓學習者必須回應。\n\n對話流程：\n- 第 1 步：用戶貼上教學講稿。\n- 第 2 步：你用 1–3 句很短的句子整理主要數學重點（不要長篇總結）。\n- 第 3 步：立刻開始補習，根據講稿問第一條簡單問題。\n- 之後按以上規則進行（一次一題、判斷正誤、最多三次提示、升級/降級）。\n\n請緊貼用戶講稿的概念與風格，不要引入完全無關的題目。',
        'gallery.imagePreview': '圖片預覽',
        'gallery.editImage': '編輯圖片',
        'gallery.rotationControls': '旋轉控制',
        'gallery.rotateRight': '向右旋轉 (90°)',
        'gallery.rotate180': '旋轉 180°',
        'gallery.rotateLeft': '向左旋轉 (270°)',
        'gallery.resetRotation': '重設旋轉',
        'gallery.saveChanges': '儲存變更',
        'gallery.deleteImage': '刪除圖片',
        'gallery.filterByUser': '依用戶 ID 篩選：',
        'gallery.allUsers': '所有用戶',
        'gallery.aiStudioTitle': 'AI 藝術工作室 — 學員作品廊',
        'gallery.aiStudioSubtitle': '',
        'gallery.sectionImages': '畫廊與提交項目',
        'gallery.sectionWritten': '自我介紹與 Gmail',
        'gallery.cardSelfIntro': '自我介紹（英文）',
        'gallery.cardGmail': '自我介紹（中文）',
        'gallery.cardAvatarWorkshop': 'AI 數位人與 Perplexity 導師',
        'gallery.activityHeygenAvatar': 'AI 數位人與導師 — HeyGen／Perplexity',
        'gallery.avatarScriptLabel': '講稿',
        'gallery.avatarTrainingAudio': '訓練音檔',
        'gallery.avatarHeygenLink': 'HeyGen 連結',
        'gallery.avatarPerplexityLink': 'Perplexity 導師連結',
        'gallery.openLink': '開啟',
        'gallery.cardUserLabel': '用戶',
        'gallery.loadImagesError': '無法載入圖片。',
        'gallery.activity': '活動：',
        'gallery.allActivities': '所有活動',
        'gallery.activity1': '2.1 — 自我介紹（英文）',
        'gallery.activity2': '1 — 大頭照',
        'gallery.activity3': '2.2 — 自我介紹（中文）',
        'gallery.activity4': '活動 2.3',
        'gallery.activity5': '活動 4.1',
        'gallery.activity6': '活動 4.2',
        'gallery.activityHeygenAvatarFilter': 'AI 數位人與導師（HeyGen／Perplexity）',
        'gallery.sortBy': '排序：',
        'gallery.newestFirst': '最新優先',
        'gallery.oldestFirst': '最舊優先',
        'gallery.mostVotes': '最多票數',
        'gallery.voteStatus': '投票狀態：',
        'gallery.votesRemaining': '剩餘票數：',
        'gallery.loadingImages': '載入圖片中...',
        'imgGen.selectActivity': '選擇活動',
        'imgGen.opt1Upload': '2) 上傳 Recraft 製作的大頭照',
        'imgGen.opt2Recraft': '1) 上傳英文自我介紹',
        'imgGen.opt3Recraft': '3) 上傳你的繁體中文自我介紹',
        'imgGen.opt4Framework': '2.3) 產品設計提示句',
        'imgGen.opt5UploadOnly': '4.1) 照片風格轉移',
        'imgGen.opt6UploadOnly': '4.2) 紋理/材料轉移',
        'imgGen.uploadImage': '上傳圖片',
        'imgGen.textToImageRecraft': 'Recraft AI 文字轉圖片',
        'imgGen.textToImageRecraft2': '使用 Recraft AI 文字轉圖片',
        'imgGen.frameworkTextToImage': '框架 + 文字轉圖片',
        'imgGen.imageUploadOnly': '僅圖片上傳',
        'imgGen.activityInstruction': '活動說明',
        'imgGen.instruction1': '上傳你用 Recraft AI 製作的大頭照。可在下方填寫簡短提示（提示）描述圖片，然後選擇檔案並按「上傳至畫廊」提交。',
        'imgGen.instruction2': '請以英文撰寫你的自我介紹。完成後按「提交」，系統會將內容與你的工作坊帳號一併儲存（無需上傳圖片）。',
        'imgGen.instruction3': '請以繁體中文撰寫你的自我介紹。完成後按「提交」，系統會與你的工作坊帳號一併儲存。',
        'imgGen.instruction4': '利用框架「目標 - 角度 - 物件 - 數字 - 紋理/風格 - 設定」製作你的「產品設計」提示句。填寫下方欄位後選擇風格與尺寸，點擊生成圖片。',
        'imgGen.instruction5': '利用 Nano Banana 的進階功能「照片風格轉移」製作一張獨特的圖片。將結果上傳至畫廊並選擇 AI 類型 Nano Banana。',
        'imgGen.instruction6': '利用 Nano Banana 的進階功能「紋理/材料轉移」製作一張獨特的圖片。將結果上傳至畫廊並選擇 AI 類型 Nano Banana。',
        'imgGen.enterPrompt': '輸入您的提示',
        'imgGen.promptPlaceholder': '描述您想創作的圖片...',
        'imgGen.selectTheme': '選擇主題',
        'imgGen.selectSettings': '選擇場景',
        'imgGen.fillYourself': '自行填寫（僅英文）',
        'imgGen.generatedPrompt': '生成提示',
        'imgGen.selectOptionsPrompt': '選擇選項以生成提示...',
        'imgGen.framework': '框架',
        'imgGen.selectFramework': '選擇框架',
        'imgGen.character': '角色',
        'imgGen.scene': '場景',
        'imgGen.style': '風格',
        'imgGen.custom': '自訂',
        'imgGen.frameworkInput': '框架輸入',
        'imgGen.frameworkPlaceholder': '輸入框架詳情...',
        'imgGen.textPrompt': '文字提示',
        'imgGen.textPromptPlaceholder': '輸入您的文字提示...',
        'imgGen.uploadToGallery': '上傳至畫廊',
        'imgGen.selectImage': '選擇圖片',
        'imgGen.clickOrDrag': '點擊或拖放圖片',
        'imgGen.supportedFormats': '支援格式：JPG, PNG, GIF, HEIC',
        'imgGen.aiType': 'AI 類型',
        'imgGen.selectAiType': '選擇 AI 類型',
        'imgGen.promptOptional': '提示（選填）',
        'imgGen.promptOptionalPlaceholder': '描述您的圖片或留空...',
        'imgGen.promptCaption': '提示',
        'imgGen.promptCaptionPlaceholder': '選填：描述你的 Recraft 大頭照...',
        'imgGen.selfIntroLabel': '自我介紹（英文）',
        'imgGen.selfIntroPlaceholder': '請以英文介紹自己...',
        'imgGen.gmailLabel': '自我介紹（繁體中文）',
        'imgGen.gmailPlaceholder': '請以繁體中文介紹自己...',
        'imgGen.submit': '提交',
        'imgGen.selectStyle': '選擇風格',
        'imgGen.realistic': '寫實風格',
        'imgGen.digitalIllustration': '數位插畫',
        'imgGen.vectorIllustration': '向量插畫',
        'imgGen.selectSize': '選擇尺寸',
        'imgGen.generateImage': '生成圖片',
        'imgGen.remove': '移除',
        'imgGen.heygenWorkshopTitle': 'AI 數位人與導師 — 四項練習',
        'imgGen.heygenWorkshopIntro':
            '請從選單選擇一項練習，完成後按下提交。順序不限；每次提交會更新 Firebase 中的進度，供教師於教師畫廊查看。',
        'imgGen.selectHeygenExercise': '選擇練習項目',
        'imgGen.heygenOpt1': '1）AI 數位人講稿（文字）',
        'imgGen.heygenOpt2': '2）HeyGen 語音訓練音檔',
        'imgGen.heygenOpt3': '3）HeyGen 數位人分享連結',
        'imgGen.heygenOpt4': '4）Perplexity AI 導師連結',
        'imgGen.heygenSubmitExercise': '提交此項練習',
        'imgGen.heygenStep1Label': '1. 約一分鐘 AI 數位人講稿',
        'imgGen.heygenStep1Hint': '請貼上完整講稿（朗讀約一分鐘為佳）。',
        'imgGen.heygenStep1Placeholder': '請在此輸入或貼上講稿…',
        'imgGen.heygenStep2Label': '2. HeyGen 語音訓練音檔',
        'imgGen.heygenStep2Hint': '上傳你用於 HeyGen 語音複製／語音訓練的音檔。',
        'imgGen.heygenStep2HintRecord':
            '請依照 HeyGen 畫面上提供的文稿朗讀並錄音。建議用手機以 HTTPS 開啟本頁並允許麥克風；或使用其他錄音程式錄製後，於下方上傳音檔。',
        'imgGen.heygenOrUploadFile': '或上傳音檔',
        'imgGen.heygenStartRecording': '開始錄音',
        'imgGen.heygenStopRecording': '停止',
        'imgGen.heygenDiscardRecording': '捨棄錄音',
        'imgGen.heygenStep3Label': '3. HeyGen 數位人分享連結',
        'imgGen.heygenStep3Hint': '貼上已完成之 HeyGen 數位人或影片的公開分享網址。',
        'imgGen.heygenStep3Placeholder': 'https://…',
        'imgGen.heygenStep4Label': '4. Perplexity AI 導師連結',
        'imgGen.heygenStep4Hint': '貼上你在 Perplexity 的 Space、專案或對話串之連結。',
        'imgGen.heygenStep4Placeholder': 'https://…',
        'imgGen.heygenSubmitAll': '提交至教師畫廊',
        'admin.login': '管理員登入',
        'admin.password': '密碼',
        'admin.loginButton': '登入',
        'admin.imageManagement': '圖片管理',
        'admin.refresh': '重新整理',
        'admin.totalImages': '總圖片數',
        'admin.inGallery': '畫廊中',
        'admin.today': '今日',
        'admin.totalSize': '總大小',
        'admin.gallerySettings': '畫廊設定',
        'admin.autoApprove': '自動核准新圖片至畫廊',
        'admin.approveAllPending': '核准全部待審',
        'admin.loading': '載入中...',
        'admin.noImagesFound': '找不到圖片',
        'admin.noImagesDescription': '用戶生成圖片後會顯示於此。',
        'admin.incorrectPassword': '密碼錯誤',
        'admin.prompt': '提示：',
        'admin.user': '用戶：',
        'admin.date': '日期：',
        'admin.showInGallery': '顯示於畫廊',
        'admin.delete': '刪除',
        'admin.download': '下載',
        'admin.noPrompt': '無提示',
        'admin.unknown': '未知'
    }
};

function getTranslation(key) {
    const t = translations[getStoredLang()] || translations.zh;
    return t[key] !== undefined ? t[key] : key;
}
window.getTranslation = getTranslation;

function getStoredLang() {
    const stored = localStorage.getItem('uiLang');
    return (stored === 'zh' || stored === 'en') ? stored : 'zh';
}

function setStoredLang(lang) {
    localStorage.setItem('uiLang', lang);
}

function applyLanguage(lang) {
    const t = translations[lang] || translations.zh;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = lang === 'zh' ? 'English' : '中文';
    updateUserIdDisplay();
    if (typeof window.onLanguageChange === 'function') window.onLanguageChange();
}

function updateUserIdDisplay() {
    const userIdDisplay = document.getElementById('userIdDisplay');
    if (!userIdDisplay) return;
    const currentUserId = localStorage.getItem('currentUserId');
    const lang = getStoredLang();
    const t = translations[lang] || translations.zh;
    const label = t['login.userId'] || 'User ID';
    userIdDisplay.innerHTML = `${label}: <span id="userId"></span>`;
    const idSpan = document.getElementById('userId');
    if (idSpan && currentUserId) idSpan.textContent = currentUserId + ' ' + (getEmojiForUserId(currentUserId) || '');
}

function toggleLanguage() {
    const next = getStoredLang() === 'zh' ? 'en' : 'zh';
    setStoredLang(next);
    applyLanguage(next);
}

document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(getStoredLang());
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
});

showTeacherArea();

let currentImageIndex = 0;
const images = [
    'highlight/1.png',
    'highlight/2.png',
    'highlight/3.jpeg',
    'highlight/4.png',
    'highlight/5.png',
    'highlight/6.png',
    'highlight/7.png',
    'highlight/9.jpg',
    'highlight/10.jpg',
    'highlight/11.jpg',
    'highlight/12.jpg',
    'highlight/13.jpg',
    'highlight/14.jpg'
];

function setImage(index) {
    currentImageIndex = index;
    document.getElementById('modalImage').src = images[currentImageIndex];
}



function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop to first image
    }
    document.getElementById('modalImage').src = images[currentImageIndex];
}

const rows = document.querySelectorAll('.row.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Fade in
        } else {
            entry.target.classList.remove('visible'); // Fade out
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

rows.forEach(row => {
    observer.observe(row);
});

// Add event listener for keydown events
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeImage(-1); // Trigger changeImage for left arrow
    } else if (event.key === 'ArrowRight') {
        changeImage(1); // Trigger changeImage for right arrow
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Slides inline viewer logic (1–67)
    const minSlide = 1;
    const maxSlide = 67;
    const defaultSlide = 1;
    const SLIDE_CANVA_URL = 'https://canva.link/et5ga8u9dykx1ks';
    let currentSlide = defaultSlide;
    const slideImage = document.getElementById('slideImage');
    const slideImageLink = document.getElementById('slideImageLink');
    const slideCounter = document.getElementById('slideCounter');
    const slidePrevBtn = document.getElementById('slidePrevBtn');
    const slideNextBtn = document.getElementById('slideNextBtn');

    function updateSlide() {
        if (slideImage && slideCounter) {
            slideImage.src = `images/slides/${currentSlide}.png`;
            slideCounter.textContent = `${currentSlide} / ${maxSlide}`;
        }
        if (slideImageLink) {
            slideImageLink.href = SLIDE_CANVA_URL;
        }
    }

    if (slidePrevBtn && slideNextBtn) {
        slidePrevBtn.addEventListener('click', function () {
            currentSlide = currentSlide === minSlide ? maxSlide : currentSlide - 1;
            updateSlide();
        });
        slideNextBtn.addEventListener('click', function () {
            currentSlide = currentSlide === maxSlide ? minSlide : currentSlide + 1;
            updateSlide();
        });
    }

    // Keyboard navigation for inline slides viewer
    document.addEventListener('keydown', function (event) {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
        if (slideImage) {
            if (event.key === 'ArrowLeft') {
                currentSlide = currentSlide === minSlide ? maxSlide : currentSlide - 1;
                updateSlide();
            } else if (event.key === 'ArrowRight') {
                currentSlide = currentSlide === maxSlide ? minSlide : currentSlide + 1;
                updateSlide();
            }
        }
    });

    // Initialize default slide
    updateSlide();

    const slidesModal = document.getElementById('slidesModal');
    if (slidesModal) {
        slidesModal.addEventListener('show.bs.modal', function () {
            currentSlide = defaultSlide;
            updateSlide();
        });
    }

    /* Lessons page: copy useful prompt cards (classppt.html) */
    const promptsSection = document.getElementById('usefulPromptsSection');
    if (promptsSection) {
        promptsSection.addEventListener('click', async function (ev) {
            const btn = ev.target.closest('.prompt-statement-copy-btn');
            if (!btn) return;
            const key = btn.getAttribute('data-copy-key');
            if (!key) return;
            const text = typeof getTranslation === 'function' ? getTranslation(key) : '';
            if (!text || text === key) return;
            try {
                await navigator.clipboard.writeText(text);
                const label = btn.querySelector('.prompt-copy-label');
                if (label && typeof getTranslation === 'function') {
                    label.textContent = getTranslation('classppt.prompt.copied');
                    setTimeout(function () {
                        applyLanguage(getStoredLang());
                    }, 1600);
                }
            } catch (err) {
                console.error('Clipboard copy failed:', err);
            }
        });
    }
});

// Reverse mapping: passcode to user ID
const passcodeToUser = {
    // First set (1-55)
    '001': '1', '002': '2', '003': '3', '004': '4', '005': '5',
    '006': '6', '007': '7', '008': '8', '009': '9', '010': '10',
    '011': '11', '012': '12', '013': '13', '014': '14', '015': '15',
    '016': '16', '017': '17', '018': '18', '019': '19', '020': '20',
    '021': '21', '022': '22', '023': '23', '024': '24', '025': '25',
    '026': '26', '027': '27', '028': '28', '029': '29', '030': '30',
    '031': '31', '032': '32', '033': '33', '034': '34', '035': '35',
    '036': '36', '037': '37', '038': '38', '039': '39', '040': '40',
    '041': '41', '042': '42', '043': '43', '044': '44', '045': '45',
    '046': '46', '047': '47', '048': '48', '049': '49', '050': '50',
    '051': '51', '052': '52', '053': '53', '054': '54', '514': '55',
};

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const passcode = document.getElementById('passcode').value.toUpperCase();
            const userId = passcodeToUser[passcode];

            if (userId) {
                // Store the user ID in localStorage
                localStorage.setItem('currentUserId', userId);

                // Hide the login button
                const loginBtn = document.querySelector('[data-bs-target="#loginModal"]');
                loginBtn.style.display = 'none';

                // Show logout button (navbar and main page)
                const logoutBtn = document.getElementById('logoutBtn');
                const mainPageLogoutBtn = document.getElementById('mainPageLogoutBtn');
                console.log('Current userId:', userId);
                if (logoutBtn && userId) {
                    logoutBtn.style.display = 'block';
                    console.log('Showing logout button');
                }
                if (mainPageLogoutBtn && userId) {
                    mainPageLogoutBtn.style.display = 'inline-block';
                }

                // Add welcome message in place of the button
                const welcomeMsg = document.createElement('p');
                welcomeMsg.className = 'mt-5';
                const t = translations[getStoredLang()] || translations.zh;
                welcomeMsg.innerHTML = `${t['login.welcomeId']} ${userId}`;
                loginBtn.parentNode.appendChild(welcomeMsg);

                // Show the class presentation link
                const classPptLink = document.getElementById('classPptLink');
                if (classPptLink) {
                    classPptLink.classList.remove('d-none');
                }
                const imgGenLink = document.getElementById('imgGenLink');
                if (imgGenLink) {
                    imgGenLink.classList.remove('d-none');
                }
                const aiArtStudio = document.getElementById('aiArtStudio');
                if (aiArtStudio) {
                    aiArtStudio.classList.remove('d-none');
                }

                // Show teacher area
                showTeacherArea();
            } else {
                const t = translations[getStoredLang()] || translations.zh;
                alert(t['login.wrongPassword']);
            }
        });
    }
});

// Check login status when page loads
document.addEventListener('DOMContentLoaded', function () {
    const currentUserId = localStorage.getItem('currentUserId');
    console.log('Stored userId:', currentUserId);
    if (currentUserId) {
        // User is logged in, hide login button and show welcome message
        const loginBtn = document.querySelector('[data-bs-target="#loginModal"]');
        if (loginBtn) {
            loginBtn.style.display = 'none';

            const welcomeMsg = document.createElement('p');
            welcomeMsg.className = 'mt-5';
            const t = translations[getStoredLang()] || translations.zh;
            welcomeMsg.innerHTML = `${t['login.userId']} ${currentUserId}`;
            loginBtn.parentNode.appendChild(welcomeMsg);
        }

        // Show logout button (navbar and main page)
        const logoutBtn = document.getElementById('logoutBtn');
        const userIdDisplay = document.getElementById('userIdDisplay');
        const mainPageLogoutBtn = document.getElementById('mainPageLogoutBtn');
        if (logoutBtn && userIdDisplay) {
            userIdDisplay.classList.remove('d-none');
            updateUserIdDisplay();
            logoutBtn.style.display = 'block';
            console.log('Showing logout button on page load');
        }
        if (mainPageLogoutBtn) {
            mainPageLogoutBtn.style.display = 'inline-block';
        }

        // Show the class presentation link
        const classPptLink = document.getElementById('classPptLink');
        if (classPptLink) {
            classPptLink.classList.remove('d-none');
        }

        // Show the AI Art Studio link
        const imgGenLink = document.getElementById('imgGenLink');
        if (imgGenLink) {
            imgGenLink.classList.remove('d-none');
        }

        // Show AI tools link
        const aiArtStudio = document.getElementById('aiArtStudio');
        if (aiArtStudio) {
            aiArtStudio.classList.remove('d-none');
        }
    }
});

// Optional: Add a logout function
function logout() {
    localStorage.removeItem('currentUserId');
    location.reload()
    window.location.href = '../static/index.html';

    // Refresh the page
}

// Check if currentUserId is already declared
if (!window.currentUserId) {
    window.currentUserId = localStorage.getItem('currentUserId');
}

// After successful login and user ID verification
function showTeacherArea() {
    const currentUserId = localStorage.getItem('currentUserId');
    if (currentUserId) {
        const teacherArea = document.getElementById('teacherArea');
        if (teacherArea) teacherArea.classList.remove('d-none');
    }
}

// Array of kid-friendly, positive emojis
const kidFriendlyEmojis = [
    '🌟', '🌈', '🦄', '🐱', '🐶', '🦁', '🐼', '🐨', '🦊', '🦋',
    '🌸', '🌺', '🌻', '🌞', '⭐', '🌙', '☀️', '🌤️', '🌺', '🌷',
    '🍀', '🌱', '🌳', '🌴', '🌵', '🌿', '🍄', '🌼', '🌻', '🌹',
    '🎨', '🎭', '🎪', '🎯', '🎲'
];

// Function to get emoji based on user ID
function getEmojiForUserId(userId) {
    // Subtract 1 from userId since we want to start from 0
    const index = (userId - 1) % kidFriendlyEmojis.length;
    return kidFriendlyEmojis[index];
}

