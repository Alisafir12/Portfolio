export type Locale = "ar" | "en";

export type ProjectCopy = {
  name: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  architecture: string;
  features: string[];
  challenges: { challenge: string; approach: string }[];
  results: string;
  responsibilities: string[];
};

export type Project = {
  id: string;
  url: string;
  github?: string;
  image: string;
  imageKind?: "desktop" | "mobile";
  stack: string[];
  ar: ProjectCopy;
  en: ProjectCopy;
};

export const SITE_URL = "https://alisafir.vercel.app";

export const profile = {
  nameAr: "علي سفير",
  nameEn: "Ali Safir",
  locationAr: "المملكة العربية السعودية",
  locationEn: "Saudi Arabia",
};

export const social = {
  github: "https://github.com/Alisafir12",
  email: "alisafirabdulghafor@gmail.com",
  whatsapp: "https://wa.me/967717562448",
  /** Add your public LinkedIn URL here to show LinkedIn CTAs. */
  linkedin: "",
  cvPath: "/cv/Ali-Safir-CV.pdf",
};

export const githubRepos = [
  {
    name: "Portfolio",
    url: "https://github.com/Alisafir12/Portfolio",
    language: "TypeScript",
    noteEn: "This personal site — Next.js, TypeScript, bilingual UI.",
    noteAr: "هذا الموقع الشخصي — Next.js وTypeScript وواجهة ثنائية اللغة.",
  },
  {
    name: "AliChat",
    url: "https://github.com/Alisafir12/AliChat",
    language: "TypeScript",
    noteEn: "TypeScript project on GitHub.",
    noteAr: "مشروع TypeScript على GitHub.",
  },
  {
    name: "ecommerce",
    url: "https://github.com/Alisafir12/ecommerce",
    language: "Web",
    noteEn: "E-commerce codebase.",
    noteAr: "مستودع تجارة إلكترونية.",
  },
  {
    name: "laravel_sas",
    url: "https://github.com/Alisafir12/laravel_sas",
    language: "Blade",
    noteEn: "Laravel / Blade project.",
    noteAr: "مشروع Laravel / Blade.",
  },
  {
    name: "ali_hw_crud",
    url: "https://github.com/Alisafir12/ali_hw_crud",
    language: "Dart",
    noteEn: "Dart/Flutter CRUD work.",
    noteAr: "عمل CRUD بـ Dart / Flutter.",
  },
  {
    name: "lcut_10",
    url: "https://github.com/Alisafir12/lcut_10",
    language: "Dart",
    noteEn: "Dart project.",
    noteAr: "مشروع Dart.",
  },
];

export const skillGroups = [
  {
    id: "frontend",
    en: "Frontend",
    ar: "الواجهة",
    items: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    id: "backend",
    en: "Backend",
    ar: "الخادم",
    items: ["Node.js", "REST APIs"],
  },
  {
    id: "mobile",
    en: "Mobile",
    ar: "الجوال",
    items: ["Flutter", "Dart"],
  },
  {
    id: "databases",
    en: "Databases",
    ar: "قواعد البيانات",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
  },
  {
    id: "tools",
    en: "Tools & Platforms",
    ar: "أدوات ومنصات",
    items: ["Git", "GitHub", "Vercel"],
  },
] as const;

export const projects: Project[] = [
  {
    id: "umq",
    url: "https://umqtech.com",
    image: "/projects/umq.jpg",
    stack: ["Next.js", "React", "Supabase"],
    ar: {
      name: "عُمْق",
      tagline: "موقع شركة تقنية معلومات",
      overview:
        "موقع مؤسسي لشركة عُمْق لتقنية المعلومات: الهوية، الخدمات، المشاريع، والمدونة بتجربة عربية حديثة.",
      problem:
        "الشركة تحتاج حضورًا رقميًا واضحًا يعرض خدماتها ومشاريعها للعملاء دون موقع تسويقي عام غير قابل للإدارة.",
      solution:
        "بناء موقع مؤسسي بـ Next.js وReact مع Supabase لإدارة المحتوى والبيانات، مع دعم اللغة العربية وتجربة استخدام مرتبة.",
      role: "تطوير الواجهة الأمامية، ربط البيانات، وهيكلة الموقع كمنتج ويب جاهز للنشر.",
      architecture:
        "تطبيق Next.js (React) مع Supabase كطبقة بيانات/خلفية، ونشر على الويب كنطاق عام umqtech.com.",
      features: [
        "صفحات مؤسسية: من نحن، الخدمات، المشاريع، المدونة، تواصل",
        "واجهة عربية RTL",
        "عرض أعمال مميزة مع التقنيات المستخدمة",
        "تكامل Supabase لإدارة المحتوى",
      ],
      challenges: [
        {
          challenge: "تجربة عربية واضحة مع هيكل صفحات متعدد.",
          approach: "تخطيط RTL متسق ومحتوى منظم حسب رحلة الزائر (خدمات → مشاريع → تواصل).",
        },
      ],
      results:
        "موقع حي يمكن معاينته على umqtech.com ويعكس هوية شركة تقنية وليس صفحة هبوط مؤقتة.",
      responsibilities: [
        "بناء واجهات الصفحات المؤسسية",
        "ربط الواجهة مع Supabase",
        "ضبط تجربة التصفح واللغة العربية",
      ],
    },
    en: {
      name: "UMQ",
      tagline: "Corporate technology website",
      overview:
        "Corporate site for UMQ Information Technology: brand, services, projects, and blog with a modern Arabic experience.",
      problem:
        "The company needed a durable digital presence to present services and work — not a generic landing page that cannot be maintained.",
      solution:
        "A Next.js / React corporate site with Supabase for data and content, structured navigation, and RTL Arabic UX.",
      role: "Front-end implementation, data wiring, and shipping a production website.",
      architecture:
        "Next.js (React) application with Supabase as the data/backend layer, deployed as a public site at umqtech.com.",
      features: [
        "Corporate pages: about, services, projects, blog, contact",
        "Arabic RTL interface",
        "Featured work with technology tags",
        "Supabase-backed content/data",
      ],
      challenges: [
        {
          challenge: "Clear Arabic UX across a multi-page corporate IA.",
          approach:
            "Consistent RTL layout and visitor flow from services to projects to contact.",
        },
      ],
      results:
        "A live site at umqtech.com that reads as a technology company presence, not a throwaway landing page.",
      responsibilities: [
        "Built the corporate page UI",
        "Connected the UI to Supabase",
        "Shipped Arabic browsing experience",
      ],
    },
  },
  {
    id: "nexus",
    url: "https://nexus-umss.github.io/",
    image: "/projects/nexus.png",
    imageKind: "mobile",
    stack: ["Flutter", "Dart", "Firebase"],
    ar: {
      name: "Nexus",
      tagline: "منصة مدرسية / تعليمية",
      overview:
        "تطبيق جوال لمنصة مدرسية تسهّل الوصول للطلاب والإدارة حول العملية الدراسية والخدمات المرتبطة بالمدرسة.",
      problem:
        "العمليات المدرسية تحتاج قناة رقمية للجوال: دخول آمن ومسارات واضحة للطلاب والإدارة بدل الاعتماد على قنوات متفرقة.",
      solution:
        "تطبيق Flutter مع Firebase للمصادقة والبيانات، وواجهة عربية تشمل تسجيل الدخول والدخول كزائر ومسارات استخدام يومية.",
      role: "تطوير تطبيق الجوال وربطه بـ Firebase وتصميم تدفقات الدخول والاستخدام.",
      architecture:
        "عميل Flutter/Dart مع Firebase للمصادقة وتخزين/مزامنة البيانات، ونشر نسخة ويب للمعاينة عبر GitHub Pages.",
      features: [
        "تسجيل دخول وإدارة كلمة المرور",
        "دخول كزائر",
        "واجهة عربية موجهة للجوال",
        "تكامل Firebase للمصادقة والبيانات",
      ],
      challenges: [
        {
          challenge: "شاشة دخول مكتملة على مقاس الجوال دون قص المحتوى.",
          approach: "تخطيط عمودي للهواتف مع تدفق مصادقة واضح (حقول، تذكّر، زائر).",
        },
      ],
      results:
        "معاينة حية للمنصة على GitHub Pages تظهر منتجًا جوالًا وليس موقعًا تعريفيًا فقط.",
      responsibilities: [
        "بناء واجهات Flutter",
        "ربط Firebase",
        "تنفيذ تدفق المصادقة والاستخدام",
      ],
    },
    en: {
      name: "Nexus",
      tagline: "School / education platform",
      overview:
        "A mobile school platform that helps students and administration access academic workflows and school services.",
      problem:
        "School operations needed a mobile channel: secure sign-in and clear paths for students and staff instead of scattered tools.",
      solution:
        "A Flutter app with Firebase for auth and data, including Arabic login, guest access, and day-to-day usage flows.",
      role: "Mobile app development, Firebase integration, and auth/usage flows.",
      architecture:
        "Flutter/Dart client with Firebase for authentication and data, with a web preview hosted on GitHub Pages.",
      features: [
        "Sign-in and password recovery",
        "Guest access",
        "Arabic mobile-first UI",
        "Firebase auth and data",
      ],
      challenges: [
        {
          challenge: "Complete login UI on phone viewports without clipping.",
          approach: "Vertical mobile layout and an explicit auth flow (fields, remember, guest).",
        },
      ],
      results:
        "A live preview on GitHub Pages that presents a mobile product, not a brochure site.",
      responsibilities: [
        "Built Flutter screens",
        "Integrated Firebase",
        "Implemented authentication and usage flow",
      ],
    },
  },
  {
    id: "rkiza",
    url: "https://rkiza-pro.vercel.app/",
    image: "/projects/rkiza.jpg",
    stack: ["Next.js", "React", "PDF / Excel reports"],
    ar: {
      name: "ركاز",
      tagline: "نظام محاسبي للقطاع غير الربحي",
      overview:
        "منصة محاسبية للجمعيات: سندات قبض وصرف، قيود، تقارير PDF وExcel، ومؤشرات سلامة مالية.",
      problem:
        "الجمعيات تحتاج نظامًا عربيًا لإدارة القبض والصرف والقيود والتقارير بدل جداول متناثرة يصعب تدقيقها.",
      solution:
        "لوحة ويب بـ Next.js/React تغطي العمليات المحاسبية اليومية والتصدير إلى PDF وExcel وإدارة المستخدمين/الجمعيات.",
      role: "بناء واجهات النظام المحاسبي، تدفق تسجيل الدخول، ومنطق العرض والتقارير في الواجهة.",
      architecture:
        "تطبيق Next.js (React) كنظام ويب مع وحدة تقارير (PDF/Excel) ولوحة تحكم محمية بتسجيل دخول.",
      features: [
        "سندات قبض وصرف وقيود",
        "تصدير تقارير PDF وExcel",
        "إدارة متعددة للجمعيات والمستخدمين",
        "مؤشرات سلامة مالية في الواجهة",
        "تسجيل دخول للوحة التحكم",
      ],
      challenges: [
        {
          challenge: "عرض بيانات مالية كثيفة بواجهة عربية قابلة للاستخدام يوميًا.",
          approach: "هيكل لوحة تحكم واضح وفصل التقارير عن إدخال السندات.",
        },
      ],
      results:
        "نظام حي على Vercel يمكن لـ recruiter معاينة شاشة الدخول وهيكل المنتج المحاسبي.",
      responsibilities: [
        "تصميم وتنفيذ واجهات المحاسبة",
        "مسارات التقارير والتصدير في الواجهة",
        "تجربة تسجيل الدخول للوحة التحكم",
      ],
    },
    en: {
      name: "Rkiza",
      tagline: "Nonprofit accounting system",
      overview:
        "Accounting platform for associations: receipts and payments, journal entries, PDF/Excel reports, and financial-health indicators.",
      problem:
        "Nonprofits needed an Arabic system for receipts, payments, entries, and reports instead of scattered spreadsheets that are hard to audit.",
      solution:
        "A Next.js/React web console covering daily accounting, PDF/Excel export, and multi-association / user management.",
      role: "Built the accounting UI, login flow, and front-end reporting surfaces.",
      architecture:
        "Next.js (React) web app with a reporting layer (PDF/Excel) and an authenticated dashboard.",
      features: [
        "Receipts, payments, and journal entries",
        "PDF and Excel report export",
        "Multi-association and user management",
        "Financial-health indicators in the UI",
        "Authenticated dashboard access",
      ],
      challenges: [
        {
          challenge: "Dense financial data in an Arabic UI usable every day.",
          approach: "Clear dashboard structure and separation of data entry from reports.",
        },
      ],
      results:
        "A live Vercel deployment where a recruiter can inspect the login screen and product structure.",
      responsibilities: [
        "Implemented accounting screens",
        "Front-end report and export flows",
        "Dashboard authentication UX",
      ],
    },
  },
  {
    id: "tahil",
    url: "https://tahil-web.vercel.app/login",
    image: "/projects/tahil.jpg",
    stack: ["Next.js", "React", "Node.js"],
    ar: {
      name: "تأهيل الاعمار",
      tagline: "منصة إدارة المقاولات",
      overview:
        "نظام ويب لإدارة أعمال المقاولات مع تسجيل دخول ولوحة تحكم للفرق الميدانية والإدارية.",
      problem:
        "عمليات المقاولات تحتاج لوحة مركزية لمتابعة العمل اليومي بدل التنسيق عبر قنوات غير منظمة.",
      solution:
        "منصة Next.js/React مع طبقة Node.js وتسجيل دخول للوصول إلى لوحة التحكم التشغيلية.",
      role: "تنفيذ واجهة النظام، تدفق المصادقة، وربط الواجهة بمنطق الخادم.",
      architecture:
        "واجهة Next.js/React مع خلفية Node.js، ومسار تسجيل دخول محمي للوحة التحكم.",
      features: [
        "تسجيل دخول للوصول إلى النظام",
        "لوحة تحكم تشغيلية",
        "واجهة عربية لإدارة العمليات",
        "تكامل واجهة/خادم (React + Node.js)",
      ],
      challenges: [
        {
          challenge: "فصل منطقة عامة (دخول) عن منطقة عمل محمية.",
          approach: "شاشة مصادقة واضحة ثم توجيه إلى لوحة التحكم بعد الدخول.",
        },
      ],
      results:
        "منصة حية على Vercel تعرض منتج إدارة عمليات وليس موقعًا تعريفيًا.",
      responsibilities: [
        "بناء واجهة لوحة المقاولات",
        "تنفيذ تجربة تسجيل الدخول",
        "الربط مع Node.js على مستوى التطبيق",
      ],
    },
    en: {
      name: "Tahil Alemaar",
      tagline: "Construction management platform",
      overview:
        "A web system for construction operations with sign-in and an admin dashboard for field and office teams.",
      problem:
        "Construction workflows needed a central console for daily work instead of unstructured coordination channels.",
      solution:
        "A Next.js/React platform with a Node.js layer and authenticated access to an operations dashboard.",
      role: "Implemented the product UI, authentication flow, and client–server wiring.",
      architecture:
        "Next.js/React front end with a Node.js backend and a protected login path into the dashboard.",
      features: [
        "Authenticated system access",
        "Operations dashboard",
        "Arabic operations UI",
        "React + Node.js application stack",
      ],
      challenges: [
        {
          challenge: "Separating a public login surface from a protected workspace.",
          approach: "Explicit auth screen, then route into the dashboard after sign-in.",
        },
      ],
      results:
        "A live Vercel app that presents an operations product, not a marketing page.",
      responsibilities: [
        "Built the construction dashboard UI",
        "Implemented sign-in UX",
        "Wired the UI to the Node.js application layer",
      ],
    },
  },
];

export const ui = {
  ar: {
    navHome: "الرئيسية",
    navAbout: "نبذة",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navExperience: "الخبرة",
    navEducation: "التعليم",
    navContact: "تواصل",
    navGithub: "GitHub",
    downloadCv: "تحميل السيرة",
    langOther: "EN",
    langLabel: "English",
    open: "القائمة",
    close: "إغلاق",
    badge: "متاح لفرص هندسة البرمجيات",
    title: "مهندس برمجيات | مطوّر Full-Stack وFlutter",
    bio: "أبني تطبيقات ويب وتطبيقات جوال وأنظمة إدارة أعمال — واجهات، واجهات برمجة REST، وقواعد بيانات، مع نشر على السحابة.",
    ctaProjects: "عرض المشاريع",
    ctaCv: "تحميل السيرة",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaContact: "تواصل",
    roles: ["Software Engineer", "Full-Stack Developer", "Flutter Developer"],
    aboutTitle: "نبذة",
    aboutLead:
      "مهندس برمجيات أركّز على تطوير Full-Stack وتطبيقات الجوال. أعمل على تطبيقات ويب، تطبيقات Flutter، وأنظمة إدارة تشغيلية يستخدمها فرق حقيقية.",
    aboutBody: [
      "بنيت أنظمة لإدارة المقاولات، ومحاسبة الجمعيات، ومنصات مدرسية، ومواقع شركات تقنية — من الواجهة إلى طبقة البيانات والنشر.",
      "أهتم بحل المشكلات بهيكل واضح: مصادقة، واجهات REST، قواعد بيانات علائقية وسحابية، وتجربة استخدام عربية/إنجليزية قابلة للصيانة.",
    ],
    basedIn: "الموقع",
    available: "الحالة",
    skillsTitle: "المهارات التقنية",
    skillsIntro: "مجموعة تقنيات أستخدمها لبناء أنظمة ويب وجوال كاملة، وليست قائمة أدوات للعرض فقط.",
    projectsTitle: "مشاريع مختارة",
    projectsIntro:
      "أنظمة حقيقية يمكن فتحها الآن. كل مشروع يوضح المشكلة، الحل، دوري، والمكدس التقني.",
    problem: "المشكلة",
    solution: "الحل",
    myRole: "دوري",
    techStack: "المكدس التقني",
    keyFeatures: "خصائص رئيسية",
    liveDemo: "معاينة حية",
    caseStudy: "دراسة حالة",
    github: "GitHub",
    experienceTitle: "خبرة عملية",
    experienceIntro:
      "لا أعرض مسميات شركات غير موثّقة. هذا سجل مشاريع هندسة برمجيات مستقلة نفّذتها بنفسي.",
    experienceKind: "مشاريع هندسة برمجيات مستقلة",
    githubTitle: "GitHub",
    githubIntro: "مستودعات عامة حقيقية. لا توجد إحصاءات أو نجوم مختلقة.",
    viewGithub: "عرض ملف GitHub",
    contactTitle: "مهتم بالعمل معًا؟",
    contactText:
      "متاح لفرص هندسة البرمجيات (Full-Stack وFlutter وتطوير الويب) في السعودية وخارجها.",
    contactEmail: "البريد",
    contactWhatsapp: "واتساب",
    locationLabel: "الموقع",
    footerRights: "جميع الحقوق محفوظة",
    back: "العودة للمشاريع",
    overview: "نظرة عامة",
    architecture: "الهيكل",
    responsibilities: "مسؤولياتي",
    technologies: "التقنيات",
    challenges: "تحديات وكيف تعاملت معها",
    results: "النتيجة",
    screenshots: "لقطات",
    cvTitle: "السيرة الذاتية",
    cvMissing:
      "ضع ملف PDF باسم Ali-Safir-CV.pdf داخل مجلد public/cv ثم سيُفعَّل زر التحميل مباشرة. يمكنك أيضًا طباعة هذه الصفحة كـ PDF.",
    cvPrint: "طباعة / حفظ PDF",
    menu: "القائمة",
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",
    navGithub: "GitHub",
    downloadCv: "Download CV",
    langOther: "عر",
    langLabel: "العربية",
    open: "Open menu",
    close: "Close",
    badge: "Open to Software Engineering Opportunities",
    title: "Software Engineer | Full-Stack & Flutter Developer",
    bio: "I build web applications, mobile applications, and business management systems — UI, REST APIs, databases, and cloud deployment.",
    ctaProjects: "View My Projects",
    ctaCv: "Download CV",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaContact: "Contact Me",
    roles: ["Software Engineer", "Full-Stack Developer", "Flutter Developer"],
    aboutTitle: "About",
    aboutLead:
      "Software engineer focused on full-stack and Flutter development. I work on web apps, Flutter apps, and operational systems used by real teams.",
    aboutBody: [
      "I have built systems for construction operations, nonprofit accounting, school platforms, and corporate technology websites — from the UI through data and deployment.",
      "I care about structured problem-solving: authentication, REST APIs, relational and cloud databases, and maintainable Arabic/English UX.",
    ],
    basedIn: "Based in",
    available: "Status",
    skillsTitle: "Technical skills",
    skillsIntro:
      "The stack I use to ship complete web and mobile systems — not a decorative tool list.",
    projectsTitle: "Featured projects",
    projectsIntro:
      "Live systems you can open now. Each one states the problem, the solution, my role, and the tech stack.",
    problem: "Problem",
    solution: "Solution",
    myRole: "My role",
    techStack: "Tech stack",
    keyFeatures: "Key features",
    liveDemo: "Live demo",
    caseStudy: "Case study",
    github: "GitHub",
    experienceTitle: "Experience",
    experienceIntro:
      "I do not list unverifiable company titles. This is a record of independent software engineering projects I built.",
    experienceKind: "Independent software engineering projects",
    githubTitle: "GitHub",
    githubIntro: "Real public repositories. No invented stars or stats.",
    viewGithub: "View GitHub profile",
    contactTitle: "Interested in working together?",
    contactText:
      "I’m open to software engineering opportunities (full-stack, Flutter, and web) in Saudi Arabia and internationally.",
    contactEmail: "Email",
    contactWhatsapp: "WhatsApp",
    locationLabel: "Location",
    footerRights: "All rights reserved",
    back: "Back to projects",
    overview: "Overview",
    architecture: "Architecture",
    responsibilities: "My responsibilities",
    technologies: "Technologies",
    challenges: "Challenges and how I approached them",
    results: "Results",
    screenshots: "Screenshots",
    cvTitle: "Curriculum vitae",
    cvMissing:
      "Place a PDF named Ali-Safir-CV.pdf in public/cv to enable a direct file download. You can also print this page to PDF.",
    cvPrint: "Print / Save PDF",
    menu: "Menu",
  },
} as const;

export function getEmailMailtoUrl(locale: Locale) {
  const subject =
    locale === "ar"
      ? "فرصة هندسة برمجيات"
      : "Software engineering opportunity";
  const body =
    locale === "ar"
      ? "مرحبا علي،\n\nتواصلت بخصوص فرصة هندسة برمجيات.\n"
      : "Hello Ali,\n\nI’m reaching out about a software engineering opportunity.\n";
  return `mailto:${social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
