const translations = {
  en: {
    navResearch: "Research", navPublications: "Publications", navExperience: "Experience", navService: "Service", navContact: "Contact",
    heroName: "Zihan Ye", heroRole: "AI Researcher at UCAS", heroTitleLead: "Trustworthy", heroTitleFocus: "Zero-Shot Learning",
    heroIntro: "I build learning systems that can recognize the unseen — and do so with evidence, efficiency, and resilience.",
    exploreResearch: "Explore my research",
    researchLabel: "Research agenda", researchHeading: "Generalization is only useful when we can trust it.",
    researchBody: "Zero-shot learning connects visual evidence with semantic knowledge to recognize classes never seen during training. My research asks a harder question: how can that transfer remain understandable, data-efficient, and dependable beyond ideal benchmarks?",
    interpretTitle: "Interpretable ZSL", interpretBody: "Make zero-shot decisions easier to understand and control through meaningful uncertainty signals and targeted machine unlearning.",
    interpretTag1: "Machine unlearning", interpretTag2: "Uncertainty awareness",
    efficientTitle: "Efficient ZSL", efficientBody: "Learn reliable visual-semantic correlations from limited seen-class data, reducing annotation and training demands while preserving transfer quality.",
    efficientTag1: "Data-efficient learning", efficientTag2: "Test-time adaptation",
    robustTitle: "Robust ZSL", robustBody: "Preserve performance under imperfect data, distribution shifts, imbalanced predictions, and test-time changes encountered in the real world.",
    robustTag1: "Adversarial robustness", robustTag2: "Class & concept vulnerabilities",
    featuredLabel: "Featured research", robustBadge: "Robust ZSL", efficientBadge: "Efficient ZSL", interpretBadge: "Interpretable ZSL",
    zeroDiffPlusBody: "Adapting generative zero-shot models at test time to meet the unknown, changing conditions in which unseen classes actually appear.",
    segmentBody: "Establishing a robust relationship between uncertainty and accuracy so zero-shot segmentation predictions are easier to interpret and assess.",
    adversarialBody: "An empirical study of adversarial vulnerabilities at both class and concept levels, clarifying where zero-shot systems fail under attack.",
    viewOnScholar: "View on Scholar", adversarialShort: "Adversarial Robustness", correspondingAuthor: "✉ Corresponding author",
    publicationsLabel: "Publications", publicationsHeading: "A complete record across zero-shot learning and trustworthy AI.", allPublications: "All publications on Scholar",
    journeyLabel: "Academic journey", journeyHeading: "From representation learning to reliable generalization.", journeyBody: "My work connects academic theory with the constraints of real-world AI systems.",
    present: "Present", ucasRole: "Assistant Researcher", ucasName: "University of Chinese Academy of Sciences (UCAS)", ucasAdvisor: "Advisor: Prof. Ling Shao",
    westlakeRole: "Visiting PhD · TGAI Lab", westlakeName: "Westlake University", westlakeAdvisor: "Supervisor: Prof. Yaochu Jin",
    boschRole: "Strategic Intern · Computer Vision", boschName: "Bosch Corporate Research, Shanghai",
    phdRole: "PhD · Computer Science & Engineering", phdName: "Xi’an Jiaotong-Liverpool University / University of Liverpool", phdAdvisor: "Advisor: Prof. Kaizhu Huang",
    serviceLabel: "Service & funding", serviceHeading: "Supporting research and serving its community.", serviceBody: "Leading funded research while contributing to peer review and community organization in machine learning and computer vision.",
    selectedFunding: "Selected funding", fundingProject: "Traceable Faithful Zero-Shot Learning", fundingAgency: "National Natural Science Foundation of China (NSFC) · Young Scientists Fund", fundingRole: "Role", principalInvestigator: "Principal Investigator", fundingBudget: "Budget", fundingAmount: "CNY 300,000", fundingPeriod: "Project period",
    reviewRecognition: "Review recognition", topReviewerAward: "Top Reviewer Award · Award rate: 8.02%", organization: "Organization", organizer: "Organizer", peerReview: "Peer review", journalReviewer: "Journal Reviewer", conferenceReviewer: "Conference Reviewer", programCommitteeReviewer: "Conference Program Committee (Reviewer)",
    contactEyebrow: "Research · Collaboration · Ideas", contactHeading: "Let’s make learning beyond known classes more trustworthy.", emailMe: "Email me", browseWork: "Browse all work ↗",
    footerNote: "Trustworthy intelligence, one unseen class at a time.", backToTop: "Back to top ↑"
  },
  zh: {
    navResearch: "研究", navPublications: "论文", navExperience: "经历", navService: "服务", navContact: "联系",
    heroName: "Zihan Ye", heroRole: "中国科学院大学人工智能研究者", heroTitleLead: "可信赖的", heroTitleFocus: "零样本学习",
    heroIntro: "我致力于构建能够识别未知类别，并兼具证据可解释性、数据效率与环境适应力的学习系统。",
    exploreResearch: "了解研究方向",
    researchLabel: "研究主线", researchHeading: "只有值得信赖，泛化才真正有用。",
    researchBody: "零样本学习通过连接视觉证据与语义知识，识别训练阶段从未出现的类别。我的研究进一步追问：在理想基准之外，如何让这种知识迁移依然可理解、数据高效且稳定可靠？",
    interpretTitle: "可解释零样本学习", interpretBody: "通过有意义的不确定性信号和有针对性的机器遗忘，让零样本决策更容易被理解和控制。",
    interpretTag1: "机器遗忘", interpretTag2: "不确定性感知",
    efficientTitle: "高效零样本学习", efficientBody: "在已见类样本有限的条件下学习可靠的视觉—语义关联，降低标注与训练成本，同时保持知识迁移质量。",
    efficientTag1: "数据高效学习", efficientTag2: "测试时适应",
    robustTitle: "鲁棒零样本学习", robustBody: "面对不完美数据、分布偏移、预测失衡和测试时变化，仍然保持稳定可靠的识别性能。",
    robustTag1: "对抗鲁棒性", robustTag2: "类别与概念脆弱性",
    featuredLabel: "代表性研究", robustBadge: "鲁棒 ZSL", efficientBadge: "高效 ZSL", interpretBadge: "可解释 ZSL",
    zeroDiffPlusBody: "在测试阶段适应生成式零样本模型，使其能够应对未知类别实际出现时不断变化的环境。",
    segmentBody: "建立稳健的不确定性—准确率关联，使零样本分割预测更容易被解释与评估。",
    adversarialBody: "从类别与概念两个层面实证研究对抗脆弱性，揭示零样本系统在攻击下的失效方式。",
    viewOnScholar: "在 Scholar 查看", adversarialShort: "对抗鲁棒性", correspondingAuthor: "✉ 通讯作者",
    publicationsLabel: "论文发表", publicationsHeading: "涵盖零样本学习与可信人工智能的完整成果列表。", allPublications: "在 Scholar 查看全部论文",
    journeyLabel: "学术经历", journeyHeading: "从表征学习到可靠泛化。", journeyBody: "我的研究将学术理论与真实人工智能系统所面对的约束联系起来。",
    present: "至今", ucasRole: "助理研究员", ucasName: "中国科学院大学（UCAS）", ucasAdvisor: "合作导师：邵岭教授",
    westlakeRole: "访问博士生 · TGAI 实验室", westlakeName: "西湖大学", westlakeAdvisor: "合作导师：靳耀初教授",
    boschRole: "战略实习生 · 计算机视觉", boschName: "博世中国研究院（上海）",
    phdRole: "博士 · 计算机科学与工程", phdName: "西交利物浦大学 / 利物浦大学", phdAdvisor: "导师：黄开竹教授",
    serviceLabel: "学术服务与基金", serviceHeading: "主持研究，也服务于研究共同体。", serviceBody: "主持基金项目，同时参与机器学习与计算机视觉领域的同行评审及学术活动组织工作。",
    selectedFunding: "科研基金", fundingProject: "可追溯的忠实零样本学习研究", fundingAgency: "国家自然科学基金委员会 · 青年科学基金项目", fundingRole: "角色", principalInvestigator: "主持人", fundingBudget: "经费", fundingAmount: "人民币 30 万元", fundingPeriod: "执行期",
    reviewRecognition: "评审荣誉", topReviewerAward: "杰出审稿人奖 · 获奖率 8.02%", organization: "组织工作", organizer: "组织者", peerReview: "同行评审", journalReviewer: "期刊审稿人", conferenceReviewer: "会议审稿人", programCommitteeReviewer: "会议程序委员会（审稿人）",
    contactEyebrow: "研究 · 合作 · 想法", contactHeading: "让超越已知类别的学习更加可信。", emailMe: "邮件联系", browseWork: "浏览全部研究 ↗",
    footerNote: "从每一个未知类别开始，构建可信智能。", backToTop: "返回顶部 ↑"
  }
};

const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const themeMeta = document.querySelector('meta[name="theme-color"]');

const storedTheme = localStorage.getItem("zy-theme");
const preferredDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (preferredDark ? "dark" : "light");
root.dataset.theme = initialTheme;
themeMeta?.setAttribute("content", initialTheme === "dark" ? "#101816" : "#f2efe7");

themeToggle.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = theme;
  localStorage.setItem("zy-theme", theme);
  themeMeta?.setAttribute("content", theme === "dark" ? "#101816" : "#f2efe7");
});

let language = localStorage.getItem("zy-language") === "zh" ? "zh" : "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  root.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  languageToggle.textContent = language === "en" ? "中文" : "EN";
  languageToggle.setAttribute("aria-label", language === "en" ? "切换为中文" : "Switch to English");
  localStorage.setItem("zy-language", language);
}

languageToggle.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
setLanguage(language);

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: "0px 0px -30px" });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("[data-current-year]").textContent = new Date().getFullYear();
