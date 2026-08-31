// =========================================================
// i18n — Chinese / English switching for the portfolio
// Hotkey: Ctrl+Shift+L (also via the navbar toggle button)
// Choice is persisted in localStorage so it survives paging.
// =========================================================

const I18N = {
  // ---------- SHARED ----------
  zh: {
    // nav
    "nav.brand": `田旭鹏 <span class="brand-en">Erwin</span>`,
    "nav.home": `首页`,
    "nav.edu": `学历`,
    "nav.projects": `项目`,
    "nav.honors": `荣誉`,
    "nav.hobbies": `爱好`,
    // footer
    "footer.name": `田旭鹏 (Erwin)`,

    // index
    "index.title": `田旭鹏 · Erwin — 个人主页`,
    "index.desc": `田旭鹏 (Erwin) 的个人主页：经济学在读，Java 软件开发者，鸿蒙开发者。欢迎了解我的学历、项目、荣誉与爱好。`,
    "index.eyebrow": `Hi, 你好 👋`,
    "index.heroTitle": `我是 <span class="accent">田旭鹏</span>`,
    "index.heroSub": `Erwin · 经济学在读 / Java 软件开发者`,
    "index.heroLede": `一名热爱技术与创造的学习者。正在攻读经济学学位，同时深耕 Java 软件工程与华为鸿蒙生态开发。相信持续学习与好奇心能把热爱变成能力。`,
    "index.heroBtnProjects": `查看我的项目`,
    "index.heroBtnHonors": `我的证书与荣誉`,
    "index.portraitBig": `田旭鹏`,
    "index.portraitAlt": `田旭鹏照片`,
    "index.factRoleK": `当前身份`,
    "index.factRoleV": `经济学本科在读`,
    "index.factFocusK": `开发方向`,
    "index.factFocusV": `Java · 鸿蒙`,
    "index.factLocK": `所在地`,
    "index.factLocV": `白俄罗斯 / 中国`,
    "index.factLangK": `语言`,
    "index.factLangV": `中文 · 英语`,
    "index.aboutTitle": `关于我`,
    "index.aboutLearningTitle": `学习与成长`,
    "index.aboutLearningText": `2022~2025 期间于华中科技大学分校武昌首义学院攻读计算机科学（华为云）专业。后经本校“3＋1”合作计划赴白俄罗斯国立工业大学攻读经济学本科，同时系统学习软件工程。已获得工业和信息化部 Java 软件开发工程师、华为鸿蒙高级开发者等认证，保持对技术前沿的持续关注。`,
    "index.aboutSkillsTitle": `技术标签`,
    "index.tagJava": `Java`,
    "index.tagHarmony": `鸿蒙 HarmonyOS`,
    "index.tagDev": `软件开发`,
    "index.tagEcon": `经济学`,
    "index.tagCet": `英语 CET-6`,
    "index.contactTitle": `联系方式`,
    "index.contactEmailLabel": `邮箱`,
    "index.contactPhoneLabel": `电话`,
    "index.contactLangLabel": `语言`,
    "index.contactLangValue": `中文 · English`,
    "index.ctaTitle": `想进一步了解我？`,
    "index.ctaText": `欢迎来到学历、项目与证书页，或直接通过邮件与我联系。`,
    "index.ctaBtn": `看看我的学历`,

    // education
    "edu.title": `学历介绍 · 田旭鹏 (Erwin)`,
    "edu.desc": `田旭鹏 (Erwin) 的学历介绍：白俄罗斯国立工业大学经济学本科在读。`,
    "edu.titleH1": `学历介绍`,
    "edu.lead": `正在攻读经济学学位，并持续投入软件开发的学习与实践。`,
    "edu.eduTitle": `教育经历`,
    "edu.item1.title": `武昌首义学院 — 计算机科学（华为云）`,
    "edu.item1.desc": `中国 · 本科。系统学习并掌握了数据结构、Java、鸿蒙等编程语言，同时掌握了数据库、黑白盒与 Javalin 测试能力。`,
    "edu.item1.tag1": `本科`,
    "edu.item1.tag2": `计算机科学`,
    "edu.item2.date": `2025~至今`,
    "edu.item2.title": `白俄罗斯国立工业大学 — 经济学本科`,
    "edu.item2.desc": `白俄罗斯 · 本科在读。系统学习经济学理论与应用，同时并行发展软件工程能力。`,
    "edu.item2.tag1": `本科`,
    "edu.item2.tag2": `经济学`,
    "edu.langTitle": `语言能力`,
    "edu.lang1": `中文 — 母语`,
    "edu.lang2": `英语 — CET-6 · 专业领域沟通与文献阅读`,
    "edu.coursesTitle": `课程与学习重点`,
    "edu.econTitle": `经济学方向`,
    "edu.econ1": `微观 / 宏观经济学`,
    "edu.econ2": `统计与计量基础`,
    "edu.econ3": `经济数学`,
    "edu.devTitle": `软件开发方向`,
    "edu.dev1": `Java 语言与工程实践`,
    "edu.dev2": `鸿蒙 HarmonyOS 应用开发`,
    "edu.dev3": `数据结构与算法基础`,
    "edu.skillTitle": `通用能力`,
    "edu.skill1": `英语读写与专业文献`,
    "edu.skill2": `跨文化 / 国际交流`,
    "edu.skill3": `自学与新工具上手`,
    "edu.ctaTitle": `从校园到作品`,
    "edu.ctaText": `看看我把这些知识应用到哪些项目里了。`,
    "edu.ctaBtn": `查看项目经验`,

    // projects
    "proj.title": `项目经验 · 田旭鹏 (Erwin)`,
    "proj.desc": `田旭鹏 (Erwin) 的项目经验：开发与学习项目汇总。`,
    "proj.titleH1": `项目经验`,
    "proj1.category": `商城系统开发`,
    "proj1.name": `仿小米商城的购物系统开发`,
    "proj1.role": `2024 · 个人角色：开发 / 负责模块`,
    "proj1.tagCourse": `课程设计`,
    "proj1.desc": `此项目最终效果为一个可以部署的传统购物网站，拥有完整前后端与数据库。此外，我们还桥接了小米商城的 API，使其能够代替数据库的作用。我在本项目中主要负责后端的编写。`,
    "proj2.category": `鸿蒙程序`,
    "proj2.name": `鸿蒙书城 App 的开发`,
    "proj2.role": `2025 · 个人角色：开发 / 负责整体`,
    "proj2.tagHarmony": `鸿蒙`,
    "proj2.desc": `本项目由我本人独立完成，封装并部署了一个完整的基于鸿蒙 API 9 的书城 App，拥有登录账户（通过数据库确认）、浏览书城、加入收藏、加入购物车、购买与付款功能（通过桥接阿里的支付端口 API）。`,
    "proj3.category": `入库资料编写`,
    "proj3.name": `帮助重庆川博工程技术有限公司完成入库资料的编写与资质证书获取`,
    "proj3.role": `2026 · 个人角色：数据分析与整理 / 负责整体`,
    "proj3.tagCompany": `企业订单`,
    "proj3.tagEcon": `经济分析`,
    "proj3.desc": `重庆川博工程技术有限公司注册资本为 1500 万元人民币。公司是集建筑工程总承包、市政公用工程总承包、装饰设计施工、智能化信息系统集成、材料销售等多元化业务于一体的综合性工程技术企业，希望注册并通过“四库一平台”中县级主管部门审核，于是委托本人帮其填写与整理了所需的 20 份资料，最后成功通过了县政府审核。`,
    "proj.ctaTitle": `想了解我的技能与认证？`,
    "proj.ctaText": `项目之外，我也考取了多项专业证书。`,
    "proj.ctaBtn": `我的证书与荣誉`,

    // honors
    "hon.title": `获得荣誉 · 田旭鹏 (Erwin)`,
    "hon.desc": `田旭鹏 (Erwin) 的荣誉与证书：Java 软件开发工程师、英语六级、华为鸿蒙高级开发者。`,
    "hon.titleH1": `获得荣誉与证书`,
    "hon.lead": `在学习和开发过程中获得的专业认证与荣誉。`,
    "hon.certTitle": `专业证书`,
    "hon.cert1.tag": `工业与信息化部`,
    "hon.cert1.name": `Java 软件开发工程师`,
    "hon.cert1.desc": `由工业和信息化部人才交流中心颁发，考核 Java 软件开发相关的专业知识与技能。证书编号：GXRCCP018202407490`,
    "hon.cert2.tag": `华为`,
    "hon.cert2.name": `鸿蒙高级开发者`,
    "hon.cert2.desc": `华为 HarmonyOS 生态开发者认证，涵盖鸿蒙应用开发的高级知识与实践能力。证书编号：TCNqjmrt5x`,
    "hon.cert3.tag": `英语`,
    "hon.cert3.name": `大学英语六级 (CET-6)`,
    "hon.cert3.desc": `全国大学英语六级考试，具备专业领域交流与专业文献阅读的英语能力。`,
    "hon.compTitle": `参加的比赛、演讲与获奖期刊`,
    "hon.comp1.title": `白俄罗斯国立工业大学国际留学生小组问答比赛第一名`,
    "hon.comp1.subtitle": `Хлеб и Мир`,
    "hon.comp2.title": `上海合作组织学术会议小组会议演讲`,
    "hon.comp2.subtitle": `对习近平主席政策解析，获入围资格`,
    "hon.comp3.title": `期刊获奖`,
    "hon.comp3.subtitle": `本科期间对中国经济结构分析的文章被选入 ESCI 四区校刊《Наука и техника》中`,
    "hon.hlTitle": `能力亮点`,
    "hon.hl1.title": `后端开发`,
    "hon.hl1.desc": `Java 语言基础与工程规范，面向对象与常用框架。`,
    "hon.hl2.title": `鸿蒙生态`,
    "hon.hl2.desc": `HarmonyOS 应用开发，了解多端协同与技术栈。`,
    "hon.hl3.title": `复合背景`,
    "hon.hl3.desc": `经济学 + 软件工程的跨学科视角，善于把业务与技术结合。`,
    "hon.ctaTitle": `一起聊聊兴趣爱好`,
    "hon.ctaText": `工作与学习之外，我也有丰富的业余生活。`,
    "hon.ctaBtn": `查看我的爱好`,

    // hobbies
    "hob.title": `个人爱好 · 田旭鹏 (Erwin)`,
    "hob.desc": `田旭鹏 (Erwin) 的个人爱好：桌游战锤 40k、军事拟真电子游戏（逃离塔科夫、战争雷霆）、编程与技术。`,
    "hob.titleH1": `个人爱好`,
    "hob.lead": `学习与开发之外，我享受这些让生活更有趣的事情。`,
    "hob.s1.title": `桌游 · 战锤 40K`,
    "hob.s1.text": `我是 <strong>战锤 40,000（Warhammer 40K）</strong> 桌游的爱好者。宏大而黑暗的宇宙设定、阵营构建、涂装与对局的策略博弈都让我着迷。这不仅是一种娱乐，也让我体会到长期投入与细节打磨的乐趣。`,
    "hob.s1.tag1": `战锤 40K`,
    "hob.s1.tag2": `桌游 / 模型`,
    "hob.s1.tag3": `策略博弈`,
    "hob.s2.title": `电子游戏 · 军事拟真`,
    "hob.s2.tarkov.title": `逃离塔科夫 (Escape from Tarkov)`,
    "hob.s2.tarkov.desc": `硬核的拟真射击生存游戏，强调物资管理、风险决策与真实枪械操作。我欣赏它对细节和真实感的极致追求。`,
    "hob.s2.tarkov.tagTact": `战术拟真`,
    "hob.s2.wt.title": `战争雷霆 (War Thunder)`,
    "hob.s2.wt.desc": `涵盖海陆空的军事载具对战游戏，历史机型与战术体系丰富，适合钻研装备与对抗思路。`,
    "hob.s2.wt.tagVeh": `载具对战`,
    "hob.s2.wt.tagMil": `军事`,
    "hob.s2.summary": `总的来说，我偏爱 <strong>军事拟真类</strong> 游戏：追求真实感、策略深度与持续的技巧成长。`,
    "hob.s3.title": `编程与技术`,
    "hob.s3.text": `对技术的热爱是我持续学习的动力。无论是研究 <strong>Java 后端、鸿蒙开发</strong>，还是动手把想法做成小工具和小站点，我都很享受「把想法变成现实」的过程。同时我十分喜欢 agent 技术，尤其对 DeepSeek harness 的 Agent = model + harness 理念十分认同：harness 可以通过不同 plugins 进行拆装，以实现我所需要的功能，十分强劲。`,
    "hob.s3.tagHarmony": `鸿蒙 HarmonyOS`,
    "hob.s3.tagBuild": `造轮子 / 个人项目`,
    "hob.ctaTitle": `喜欢这些内容？`,
    "hob.ctaText": `回到首页，看看完整介绍吧。`,
    "hob.ctaBtn": `返回首页`
  },

  // ---------- ENGLISH ----------
  en: {
    // nav
    "nav.brand": `Erwin <span class="brand-en">Xupeng Tian</span>`,
    "nav.home": `Home`,
    "nav.edu": `Education`,
    "nav.projects": `Projects`,
    "nav.honors": `Honors`,
    "nav.hobbies": `Hobbies`,
    // footer
    "footer.name": `Erwin Tian`,

    // index
    "index.title": `Erwin Tian — Personal Homepage`,
    "index.desc": `Erwin Tian's personal site: economics undergraduate, Java developer, HarmonyOS developer. Explore my education, projects, honors, and hobbies.`,
    "index.eyebrow": `Hi, hello 👋`,
    "index.heroTitle": `I'm <span class="accent">Erwin Tian</span>`,
    "index.heroSub": `Erwin · Economics undergraduate / Java developer`,
    "index.heroLede": `A learner who loves technology and creating things. I'm pursuing a degree in economics while also diving into Java software engineering and Huawei HarmonyOS development. I believe continuous learning and curiosity turn passion into capability.`,
    "index.heroBtnProjects": `View My Projects`,
    "index.heroBtnHonors": `My Certificates & Honors`,
    "index.portraitBig": `Erwin Tian`,
    "index.portraitAlt": `Photo of Erwin Tian`,
    "index.factRoleK": `Current Role`,
    "index.factRoleV": `Economics undergraduate`,
    "index.factFocusK": `Focus`,
    "index.factFocusV": `Java · HarmonyOS`,
    "index.factLocK": `Location`,
    "index.factLocV": `Belarus / China`,
    "index.factLangK": `Languages`,
    "index.factLangV": `Chinese · English`,
    "index.aboutTitle": `About Me`,
    "index.aboutLearningTitle": `Learning & Growth`,
    "index.aboutLearningText": `From 2022 to 2025, I studied Computer Science (Huawei Cloud) at Wuchang Shouyi University (a branch campus of Huazhong University of Science and Technology). Through the school's "3+1" cooperation program, I then went to the Belarusian State University to pursue a bachelor's degree in economics, while also systematically learning software engineering. I have earned certifications including the MIIT Java Software Development Engineer and the Huawei HarmonyOS Senior Developer, and I keep a close eye on technology frontiers.`,
    "index.aboutSkillsTitle": `Tech Tags`,
    "index.tagJava": `Java`,
    "index.tagHarmony": `HarmonyOS`,
    "index.tagDev": `Software Development`,
    "index.tagEcon": `Economics`,
    "index.tagCet": `English CET-6`,
    "index.contactTitle": `Contact`,
    "index.contactEmailLabel": `Email`,
    "index.contactPhoneLabel": `Phone`,
    "index.contactLangLabel": `Languages`,
    "index.contactLangValue": `Chinese · English`,
    "index.ctaTitle": `Want to know more?`,
    "index.ctaText": `Head to the education, projects, and certificates pages, or reach me directly by email.`,
    "index.ctaBtn": `See My Education`,

    // education
    "edu.title": `Education — Erwin Tian`,
    "edu.desc": `Erwin Tian's education: undergraduate in economics at the Belarusian State University.`,
    "edu.titleH1": `Education`,
    "edu.lead": `Pursuing an economics degree while continuously investing in software development learning and practice.`,
    "edu.eduTitle": `Education Experience`,
    "edu.item1.title": `Wuchang Shouyi University — Computer Science (Huawei Cloud)`,
    "edu.item1.desc": `China · Bachelor's. I systematically studied and mastered programming languages including data structures, Java, and HarmonyOS, and also gained skills in databases, black-box / white-box testing, and Javalin testing.`,
    "edu.item1.tag1": `Bachelor's`,
    "edu.item1.tag2": `Computer Science`,
    "edu.item2.date": `2025 – Present`,
    "edu.item2.title": `Belarusian State University — Economics (Bachelor's)`,
    "edu.item2.desc": `Belarus · Undergraduate (in progress). Systematically studying economic theory and its applications while developing software engineering skills in parallel.`,
    "edu.item2.tag1": `Bachelor's`,
    "edu.item2.tag2": `Economics`,
    "edu.langTitle": `Languages`,
    "edu.lang1": `Chinese — Native`,
    "edu.lang2": `English — CET-6 · professional communication & literature reading`,
    "edu.coursesTitle": `Courses & Focus Areas`,
    "edu.econTitle": `Economics`,
    "edu.econ1": `Micro / Macroeconomics`,
    "edu.econ2": `Statistics & Econometrics Basics`,
    "edu.econ3": `Mathematical Economics`,
    "edu.devTitle": `Software Development`,
    "edu.dev1": `Java language & engineering practice`,
    "edu.dev2": `HarmonyOS app development`,
    "edu.dev3": `Data structures & algorithms`,
    "edu.skillTitle": `General Skills`,
    "edu.skill1": `English reading & professional literature`,
    "edu.skill2": `Cross-cultural / international communication`,
    "edu.skill3": `Self-learning & picking up new tools`,
    "edu.ctaTitle": `From Campus to Projects`,
    "edu.ctaText": `See how I apply this knowledge across my projects.`,
    "edu.ctaBtn": `View Projects`,

    // projects
    "proj.title": `Projects — Erwin Tian`,
    "proj.desc": `Erwin Tian's project experience: a collection of development and learning projects.`,
    "proj.titleH1": `Project Experience`,
    "proj1.category": `E-commerce System`,
    "proj1.name": `Shopping System Inspired by Xiaomi Mall`,
    "proj1.role": `2024 · My role: Development / Module owner`,
    "proj1.tagCourse": `Course Project`,
    "proj1.desc": `The result is a deployable, traditional shopping website with a complete front-end, back-end, and database. We also bridged the Xiaomi Mall API so it can serve in place of a database. In this project, I was mainly responsible for the back-end.`,
    "proj2.category": `HarmonyOS App`,
    "proj2.name": `HarmonyOS Bookstore App`,
    "proj2.role": `2025 · My role: Development / Overall responsibility`,
    "proj2.tagHarmony": `HarmonyOS`,
    "proj2.desc": `Completed independently by me: a full HarmonyOS API 9 bookstore app, encapsulated and deployed. It supports account login (verified via database), browsing the bookstore, adding to favorites, adding to the cart, and purchase & payment (via a bridged Alipay API).`,
    "proj3.category": `Enterprise Registration`,
    "proj3.name": `Registration Documentation & qualification for Chongqing Chuanbo Engineering Technology Co., Ltd.`,
    "proj3.role": `2026 · My role: Data analysis & organization / Overall responsibility`,
    "proj3.tagCompany": `Enterprise Order`,
    "proj3.tagEcon": `Economic Analysis`,
    "proj3.desc": `Chongqing Chuanbo Engineering Technology Co., Ltd. has a registered capital of RMB 15 million. It is a comprehensive engineering technology enterprise integrating general contracting of construction projects, general contracting of municipal public works, decoration design and construction, intelligent information system integration, and material sales. It wished to register and pass the county-level authority review on the "Four Libraries and One Platform", so it commissioned me to fill in and organize the 20 required documents, and it ultimately passed the county government review.`,
    "proj.ctaTitle": `Want to know my skills & certifications?`,
    "proj.ctaText": `Beyond projects, I also hold several professional certificates.`,
    "proj.ctaBtn": `My Certificates & Honors`,

    // honors
    "hon.title": `Honors — Erwin Tian`,
    "hon.desc": `Erwin Tian's honors & certificates: Java Software Development Engineer, CET-6, Huawei HarmonyOS Senior Developer.`,
    "hon.titleH1": `Honors & Certificates`,
    "hon.lead": `Professional certifications and honors earned throughout my study and development work.`,
    "hon.certTitle": `Professional Certificates`,
    "hon.cert1.tag": `MIIT`,
    "hon.cert1.name": `Java Software Development Engineer`,
    "hon.cert1.desc": `Issued by the Talent Exchange Center of the Ministry of Industry and Information Technology, assessing professional knowledge and skills in Java software development. Certificate No.: GXRCCP018202407490`,
    "hon.cert2.tag": `Huawei`,
    "hon.cert2.name": `HarmonyOS Senior Developer`,
    "hon.cert2.desc": `Huawei HarmonyOS ecosystem developer certification, covering advanced knowledge and practical skills in HarmonyOS app development. Certificate No.: TCNqjmrt5x`,
    "hon.cert3.tag": `English`,
    "hon.cert3.name": `College English Test Band 6 (CET-6)`,
    "hon.cert3.desc": `CET-6, demonstrating English ability for professional communication and reading academic literature.`,
    "hon.compTitle": `Competitions, Speeches & Publications`,
    "hon.comp1.title": `1st Place, International Students' Group Quiz, Belarusian State University`,
    "hon.comp1.subtitle": `Bread and Peace`,
    "hon.comp2.title": `SCO Academic Conference — Group Presentation`,
    "hon.comp2.subtitle": `Analysis of President Xi Jinping's policies; shortlisted`,
    "hon.comp3.title": `Journal Publication`,
    "hon.comp3.subtitle": `An undergraduate analysis of China's economic structure was selected into the ESCI Q4 university journal "Nauka i tekhnika".`,
    "hon.hlTitle": `Key Strengths`,
    "hon.hl1.title": `Back-end Development`,
    "hon.hl1.desc": `Java fundamentals & engineering practices, OOP and common frameworks.`,
    "hon.hl2.title": `HarmonyOS Ecosystem`,
    "hon.hl2.desc": `HarmonyOS app development; familiar with multi-device collaboration and the tech stack.`,
    "hon.hl3.title": `Interdisciplinary Background`,
    "hon.hl3.desc": `Economics + software engineering — good at combining business and technology.`,
    "hon.ctaTitle": `Let's chat about hobbies`,
    "hon.ctaText": `Beyond work and study, I also have a rich life outside.`,
    "hon.ctaBtn": `View My Hobbies`,

    // hobbies
    "hob.title": `Hobbies — Erwin Tian`,
    "hob.desc": `Erwin Tian's hobbies: Warhammer 40K tabletop, military-simulation video games (Escape from Tarkov, War Thunder), and programming.`,
    "hob.titleH1": `Hobbies`,
    "hob.lead": `Beyond study and development, I enjoy these things that make life more interesting.`,
    "hob.s1.title": `Tabletop · Warhammer 40K`,
    "hob.s1.text": `I'm a fan of the tabletop game <strong>Warhammer 40,000</strong>. The grand, dark universe, faction building, painting, and strategic play all fascinate me. It's not just entertainment — it also taught me the joy of long-term commitment and attention to detail.`,
    "hob.s1.tag1": `Warhammer 40K`,
    "hob.s1.tag2": `Tabletop / Models`,
    "hob.s1.tag3": `Strategy`,
    "hob.s2.title": `Video Games · Military Simulation`,
    "hob.s2.tarkov.title": `Escape from Tarkov`,
    "hob.s2.tarkov.desc": `A hardcore realistic shooter-survival game emphasizing loot management, risk-based decisions, and authentic gunplay. I appreciate its extreme attention to detail and realism.`,
    "hob.s2.tarkov.tagTact": `Tactical Simulation`,
    "hob.s2.wt.title": `War Thunder`,
    "hob.s2.wt.desc": `A military vehicle combat game covering land, sea, and air, with rich historical vehicles and tactics — great for studying equipment and counterplay.`,
    "hob.s2.wt.tagVeh": `Vehicle Combat`,
    "hob.s2.wt.tagMil": `Military`,
    "hob.s2.summary": `Overall, I prefer <strong>military simulation</strong> games: pursuing realism, strategic depth, and continuous skill growth.`,
    "hob.s3.title": `Programming & Technology`,
    "hob.s3.text": `My passion for technology drives my continuous learning. Whether it's studying <strong>Java back-end or HarmonyOS development</strong>, or turning ideas into small tools and websites, I thoroughly enjoy the process of making ideas real. I'm also very fond of agent technology, and I strongly agree with the DeepSeek Harness philosophy of <em>Agent = model + harness</em>, where the harness can be assembled and disassembled through different plugins to deliver exactly the capabilities I need — it's incredibly powerful.`,
    "hob.s3.tagHarmony": `HarmonyOS`,
    "hob.s3.tagBuild": `Building things / Personal projects`,
    "hob.ctaTitle": `Enjoy this?`,
    "hob.ctaText": `Head back to the homepage for the full introduction.`,
    "hob.ctaBtn": `Back to Home`
  }
};

const LANG_KEY = "site-lang";

function getLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    return v === "en" ? "en" : "zh";
  } catch (e) {
    return "zh";
  }
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.zh;
  const isEn = lang === "en";
  document.documentElement.lang = isEn ? "en" : "zh-CN";

  // Element text / inner HTML
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // <title>
  document.querySelectorAll("title[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // <meta name="description">
  document.querySelectorAll("meta[data-i18n-desc]").forEach((el) => {
    const key = el.getAttribute("data-i18n-desc");
    if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
  });

  // alt text on images
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  // Toggle button label shows the OTHER language (the target).
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = isEn ? "🌐 中文" : "🌐 EN";

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

function toggleLang() {
  applyLang(getLang() === "zh" ? "en" : "zh");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.addEventListener("click", toggleLang);

  // Hotkey to switch language: Ctrl+Shift+L (also Cmd+Shift+L on Mac).
  document.addEventListener("keydown", (e) => {
    const k = (e.key || "").toLowerCase();
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && k === "l") {
      e.preventDefault();
      toggleLang();
    }
  });

  applyLang(getLang());
});
