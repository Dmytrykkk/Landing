export type StudyLevel = "bachelor" | "master" | "phd";

export const KSPU_ABITURIENT_URL =
  "https://www.kspu.edu/About/Faculty/FPhysMathemInformatics/storinki_faculti/abiturient.aspx";

export interface Program {
  id: string;
  code: string;
  name: string;
  level: StudyLevel;
  description: string;
  careers: string[];
  technologies: string[];
  slug: string;
  universityPageUrl: string;
}

export const programs: Program[] = [
  {
    id: "121",
    code: "121",
    name: "Інженерія програмного забезпечення",
    level: "bachelor",
    description:
      "Комплексна програма підготовки фахівців з розробки, тестування та підтримки програмного забезпечення. Навчання охоплює весь цикл життєвого циклу ПЗ від аналізу вимог до впровадження та супроводу.",
    careers: [
      "Software Developer",
      "Full-Stack Developer",
      "QA Engineer",
      "DevOps Engineer",
      "System Architect",
    ],
    technologies: [
      "JavaScript/TypeScript",
      "Python",
      "Java",
      "React/Node.js",
      "Docker/Kubernetes",
      "Git",
    ],
    slug: "software-engineering",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "122",
    code: "122",
    name: "Комп'ютерні науки",
    level: "bachelor",
    description:
      "Фундаментальна освіта в галузі комп'ютерних наук з акцентом на алгоритми, структури даних, штучний інтелект та машинне навчання. Програма готує дослідників та розробників складних систем.",
    careers: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Research Scientist",
      "Algorithm Developer",
      "AI Specialist",
    ],
    technologies: [
      "Python",
      "R",
      "TensorFlow/PyTorch",
      "SQL/NoSQL",
      "Linux",
      "Cloud Platforms",
    ],
    slug: "computer-science",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "014-08",
    code: "014.08",
    name: "Середня освіта (Інформатика)",
    level: "bachelor",
    description:
      "Педагогічна програма для підготовки вчителів інформатики. Поєднує глибокі знання комп'ютерних наук з методикою викладання та сучасними освітніми технологіями.",
    careers: [
      "Вчитель інформатики",
      "Методист",
      "IT-координатор",
      "Розробник освітніх програм",
      "E-learning Specialist",
    ],
    technologies: [
      "Scratch/Python",
      "Web Technologies",
      "LMS Platforms",
      "Office Suite",
      "Educational Software",
      "Digital Tools",
    ],
    slug: "secondary-education-informatics",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "121-m",
    code: "121 / F2",
    name: "Інженерія програмного забезпечення",
    level: "master",
    description:
      "Поглиблена підготовка магістрів з проєктування та керування розробкою програмного забезпечення. Дослідницька складова, архітектура складних систем, управління IT-проєктами та міжнародні стандарти якості ПЗ.",
    careers: [
      "Tech Lead",
      "Software Architect",
      "Project Manager",
      "DevOps/Platform Engineer",
      "R&D Engineer",
    ],
    technologies: [
      "Cloud Architecture",
      "Microservices",
      "CI/CD",
      "Agile/Scrum",
      "Software Design Patterns",
    ],
    slug: "software-engineering-master",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "122-m",
    code: "122 / F3",
    name: "Комп'ютерні науки",
    level: "master",
    description:
      "Магістерська програма з акцентом на дослідження в галузі штучного інтелекту, машинного навчання, аналітики даних та розробки складних обчислювальних систем. Підготовка до наукової кар'єри та ролей у R&D.",
    careers: [
      "Research Scientist",
      "ML/AI Engineer",
      "Data Architect",
      "Algorithm Lead",
      "R&D in IT",
    ],
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Big Data",
      "Distributed Systems",
      "Scientific Computing",
    ],
    slug: "computer-science-master",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "126-m",
    code: "126 / F6",
    name: "Інформаційні системи та технології",
    level: "master",
    description:
      "Підготовка магістрів з аналізу, проєктування та впровадження корпоративних інформаційних систем. Управління даними, бізнес-аналітика, безпека інформації та інтеграція enterprise-рішень.",
    careers: [
      "Systems Analyst",
      "Business Analyst",
      "IT Consultant",
      "Information Security Specialist",
      "ERP/CRM Architect",
    ],
    technologies: [
      "ERP/CRM",
      "Business Intelligence",
      "Data Governance",
      "API Integration",
      "Information Security",
    ],
    slug: "information-systems-master",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "014-04-m",
    code: "014.04 / А4.04",
    name: "Середня освіта (Математика)",
    level: "master",
    description:
      "Магістерська педагогічна програма для вчителів математики. Поглиблена методика викладання, сучасні освітні технології, STEM-освіта та підготовка до наукової та адміністративної діяльності в освіті.",
    careers: [
      "Вчитель математики",
      "Методист",
      "Завуч з навчальної роботи",
      "Викладач ЗВО",
      "STEM-координатор",
    ],
    technologies: [
      "GeoGebra",
      "LMS",
      "Digital Assessment",
      "STEM Tools",
      "Research Methods",
    ],
    slug: "secondary-education-mathematics-master",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "014-08-m",
    code: "014.08 / А4.08",
    name: "Середня освіта (Фізика)",
    level: "master",
    description:
      "Магістерська програма підготовки вчителів фізики. Методика навчання фізики, експериментальні та цифрові лабораторії, астрономія та підготовка до наукової роботи та аспірантури.",
    careers: [
      "Вчитель фізики",
      "Методист",
      "Викладач фізики/астрономії",
      "STEM-педагог",
      "Науковий співробітник",
    ],
    technologies: [
      "Lab Equipment",
      "Simulations",
      "Astronomy Software",
      "LMS",
      "Data Analysis",
    ],
    slug: "secondary-education-physics-master",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "121-phd",
    code: "121 / F2",
    name: "Інженерія програмного забезпечення (PhD)",
    level: "phd",
    description:
      "Підготовка докторів філософії в галузі інженерії програмного забезпечення. Дослідницька робота під керівництвом професорів ХДУ та Інституту кібернетики НАН України ім. Глушкова. Наукові публікації та захист дисертації.",
    careers: [
      "Research Scientist",
      "University Professor",
      "R&D Lead",
      "Expert in Software Engineering",
    ],
    technologies: [
      "Research Methods",
      "Formal Methods",
      "Publication & Citation",
      "Academic Writing",
    ],
    slug: "software-engineering-phd",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
  {
    id: "014-08-phd",
    code: "014.08 / А4.08",
    name: "Середня освіта (Фізика) — аспірантура",
    level: "phd",
    description:
      "Аспірантура з педагогіки та методики викладання фізики. Дослідницька робота під керівництвом професорів кафедр ХДУ та Інституту інформаційних технологій і засобів навчання НАПН. Підготовка до захисту дисертації.",
    careers: [
      "Кандидат педагогічних наук",
      "Доцент / професор ЗВО",
      "Науковий співробітник",
      "Методист-експерт",
    ],
    technologies: [
      "Research Methodology",
      "Educational Experiments",
      "Academic Publishing",
      "Statistics",
    ],
    slug: "secondary-education-physics-phd",
    universityPageUrl: KSPU_ABITURIENT_URL,
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramSlugs(): string[] {
  return programs.map((p) => p.slug);
}
