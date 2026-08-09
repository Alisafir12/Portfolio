export type Locale = "ar" | "en";

export type ProjectCopy = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
};

export type Project = {
  id: string;
  url: string;
  image: string;
  imageKind?: "desktop" | "mobile";
  stack: string[];
  accent: string;
  ar: ProjectCopy;
  en: ProjectCopy;
};

export const projects: Project[] = [
  {
    id: "umq",
    url: "https://umqtech.com",
    image: "/projects/umq.jpg",
    stack: ["Next.js", "React", "Supabase"],
    accent: "#C4A574",
    ar: {
      name: "عُمْق",
      tagline: "موقع شركة تقنية معلومات",
      description:
        "موقع مؤسسي لشركة عُمْق لتقنية المعلومات يعرض الهوية، الخدمات، المشاريع، والمدونة — بتجربة حديثة واضحة.",
      tags: ["موقع مؤسسي", "هوية رقمية", "خدمات", "مشاريع"],
    },
    en: {
      name: "UMQ",
      tagline: "IT Company Website",
      description:
        "A corporate website for UMQ Information Technology showcasing brand identity, services, projects, and blog — with a modern, clear experience.",
      tags: ["Corporate", "Brand", "Services", "Projects"],
    },
  },
  {
    id: "nexus",
    url: "https://nexus-umss.github.io/",
    image: "/projects/nexus.png",
    imageKind: "mobile",
    stack: ["Flutter", "Firebase", "Mobile"],
    accent: "#7B8CDE",
    ar: {
      name: "Nexus",
      tagline: "منصة مدرسية",
      description:
        "منصة تعليمية مدرسية لإدارة العملية الدراسية والخدمات المرتبطة بالمدرسة — بواجهة حديثة تسهّل الوصول للطلاب والإدارة.",
      tags: ["تعليم", "منصة مدرسية", "طلاب", "إدارة"],
    },
    en: {
      name: "Nexus",
      tagline: "School Platform",
      description:
        "A school education platform for academic workflows and school services — with a modern interface for students and administration.",
      tags: ["Education", "School Platform", "Students", "Admin"],
    },
  },
  {
    id: "rkiza",
    url: "https://rkiza-pro.vercel.app/",
    image: "/projects/rkiza.jpg",
    stack: ["Next.js", "React", "Reports"],
    accent: "#4F7CAC",
    ar: {
      name: "ركاز",
      tagline: "محاسبة القطاع غير الربحي",
      description:
        "نظام محاسبي للجمعيات والمؤسسات غير الربحية: سندات قبض وصرف، قيود، تقارير PDF وExcel، ومؤشرات سلامة مالية.",
      tags: ["جمعيات", "تقارير مالية", "لوحة تحكم", "PDF / Excel"],
    },
    en: {
      name: "Rkiza",
      tagline: "Nonprofit Accounting System",
      description:
        "An accounting system for nonprofit organizations: receipts and payments, journal entries, PDF/Excel reports, and financial health indicators.",
      tags: ["Nonprofits", "Financial Reports", "Dashboard", "PDF / Excel"],
    },
  },
  {
    id: "tahil",
    url: "https://tahil-web.vercel.app/login",
    image: "/projects/tahil.jpg",
    stack: ["Next.js", "React", "Node.js"],
    accent: "#1A9B8E",
    ar: {
      name: "تأهيل الاعمار",
      tagline: "نظام إدارة المقاولات",
      description:
        "منصة متكاملة لإدارة أعمال المقاولات ولوحة التحكم التشغيلية، بواجهة واضحة تدعم سير العمل اليومي للفرق الميدانية والإدارية.",
      tags: ["مقاولات", "لوحة تحكم", "إدارة عمليات", "ويب"],
    },
    en: {
      name: "Tahil Alemaar",
      tagline: "Construction Management System",
      description:
        "An integrated platform for construction operations and admin dashboards, with a clear interface that supports daily workflows for field and office teams.",
      tags: ["Construction", "Dashboard", "Operations", "Web"],
    },
  },
];

export const skillGroups = {
  languages: [
    "Flutter",
    "Dart",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "HTML / CSS",
  ],
  databases: [
    "SQL Server",
    "MySQL",
    "Firebase",
    "Supabase",
    "MongoDB",
    "PostgreSQL",
  ],
  tools: ["REST APIs", "Git", "Vercel", "Tailwind CSS", "RTL / i18n"],
};

export const ui = {
  ar: {
    navAbout: "نبذة",
    navProjects: "المشاريع",
    navContact: "تواصل",
    available: "متاح لمشاريع جديدة",
    title: "مهندس برمجيات ومطوّر تطبيقات",
    bio: "أصمّم وأنفّذ أنظمة وتطبيقات تخدم شغلك اليومي: مواقع، لوحات تحكم، ومنصات إدارة — بتسليم مرتب ودعم بعد الإطلاق.",
    ctaProjects: "استعرض أعمالي",
    ctaContact: "تواصل معي",
    aboutEyebrow: "من أنا",
    aboutTitle: "نبذة عني",
    about: [
      "أبني أنظمة وتطبيقات جاهزة للاستخدام اليومي: إدارة مقاولات، محاسبة للقطاع غير الربحي، منصات مدرسية، ومواقع شركات تقنية.",
      "إذا عندك فكرة تطبيق أو نظام إداري وتحتاج تنفيذ واضح وسريع — أقدر أساعدك من التخطيط حتى التسليم، مع واجهة سهلة وفريقك يشتغل عليها مباشرة.",
      "هدفي بسيط: منتج يختصر وقتك، ينظّم عملك، ويفتح لك فرص أكثر مع عملائك — مو مجرد تصميم شكلي.",
    ],
    skillsLanguages: "لغات وتقنيات البرمجة",
    skillsDatabases: "قواعد البيانات",
    skillsTools: "أدوات وخبرات",
    projectsEyebrow: "أعمالي",
    projectsTitle: "مشاريع مختارة",
    projectsIntro:
      "أعمال حقيقية يمكنك معاينتها الآن — أنظمة مقاولات، مواقع تقنية، محاسبة جمعيات، ومنصات مدرسية.",
    preview: "معاينة",
    contactEyebrow: "تواصل",
    contactTitle: "جاهز نبدأ مشروعك؟",
    contactText:
      "تواصل معي عبر واتساب أو البريد، واشرح فكرتك باختصار لأرجع لك بخطة تنفيذ واضحة.",
    contactWhatsapp: "واتساب",
    contactEmail: "البريد الإلكتروني",
    contactInstagram: "إنستغرام",
    contactFacebook: "فيسبوك",
    contactBack: "العودة للمشاريع",
    footerRights: "جميع الحقوق محفوظة",
    langSwitch: "EN",
    langLabel: "English",
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    available: "Open for new projects",
    title: "Software Engineer & App Developer",
    bio: "I design and build systems and apps for real daily work: websites, dashboards, and management platforms — with clean delivery and support after launch.",
    ctaProjects: "View my work",
    ctaContact: "Get in touch",
    aboutEyebrow: "About",
    aboutTitle: "Who I am",
    about: [
      "I build production-ready systems and apps: construction management, nonprofit accounting, school platforms, and IT company websites.",
      "If you have an app idea or need a business system delivered clearly and quickly — I can help from planning to handoff, with an interface your team can use right away.",
      "My goal is simple: a product that saves time, organizes your work, and helps you serve more clients — not just a pretty design.",
    ],
    skillsLanguages: "Languages & Technologies",
    skillsDatabases: "Databases",
    skillsTools: "Tools & Expertise",
    projectsEyebrow: "Work",
    projectsTitle: "Selected projects",
    projectsIntro:
      "Real work you can preview now — construction systems, IT websites, nonprofit accounting, and school platforms.",
    preview: "Preview",
    contactEyebrow: "Contact",
    contactTitle: "Ready to start your project?",
    contactText:
      "Reach me on WhatsApp or email with a short brief, and I'll reply with a clear plan.",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    contactInstagram: "Instagram",
    contactFacebook: "Facebook",
    contactBack: "Back to projects",
    footerRights: "All rights reserved",
    langSwitch: "ع",
    langLabel: "العربية",
  },
} as const;

export const profile = {
  nameAr: "م/ علي سفير",
  nameEn: "Eng/Ali Safir",
};

export const contactLinks = {
  whatsapp: "https://wa.me/967717562448",
  emailAddress: "alisafirabdulghafor@gmail.com",
  emailLabel: "alisafirabdulghafor@gmail.com",
  instagram: "https://www.instagram.com/a00._s/",
  facebook: "https://www.facebook.com/share/1DDFGyf42u/",
};

export function getEmailComposeUrl(locale: Locale) {
  const to = contactLinks.emailAddress;
  const subject =
    locale === "ar" ? "طلب مشروع جديد" : "New project inquiry";
  const body =
    locale === "ar"
      ? "مرحبا م/ علي سفير،\n\nأريد التحدث معك بخصوص مشروع:\n"
      : "Hello Eng/Ali Safir,\n\nI'd like to discuss a project:\n";

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getEmailMailtoUrl(locale: Locale) {
  const to = contactLinks.emailAddress;
  const subject =
    locale === "ar" ? "طلب مشروع جديد" : "New project inquiry";
  const body =
    locale === "ar"
      ? "مرحبا م/ علي سفير،\n\nأريد التحدث معك بخصوص مشروع:\n"
      : "Hello Eng/Ali Safir,\n\nI'd like to discuss a project:\n";

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
