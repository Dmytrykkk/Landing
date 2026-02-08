export type StudyLevel = "bachelor" | "master" | "phd";

export const KSPU_ABITURIENT_URL =
  "https://www.kspu.edu/About/Faculty/FPhysMathemInformatics/storinki_faculti/abiturient.aspx";

export interface Program {
  id: string;
  code: string;
  name: string;
  nameEn: string;
  level: StudyLevel;
  description: string;
  descriptionEn: string;
  careers: string[];
  careersEn?: string[];
  technologies: string[];
  slug: string;
  universityPageUrl: string;
}

export const programs: Program[] = [
  {
    id: "121",
    code: "121",
    name: "Інженерія програмного забезпечення",
    nameEn: "Software Engineering",
    level: "bachelor",
    description:
      "Комплексна програма підготовки фахівців з розробки, тестування та підтримки програмного забезпечення. Навчання охоплює весь цикл життєвого циклу ПЗ від аналізу вимог до впровадження та супроводу.",
    descriptionEn:
      "Comprehensive program training specialists in software development, testing and support. Studies cover the full software lifecycle from requirements analysis to deployment and maintenance.",
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
    nameEn: "Computer Science",
    level: "bachelor",
    description:
      "Фундаментальна освіта в галузі комп'ютерних наук з акцентом на алгоритми, структури даних, штучний інтелект та машинне навчання. Програма готує дослідників та розробників складних систем.",
    descriptionEn:
      "Fundamental education in computer science with emphasis on algorithms, data structures, artificial intelligence and machine learning. The program trains researchers and developers of complex systems.",
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
    nameEn: "Secondary Education (Computer Science)",
    level: "bachelor",
    description:
      "Педагогічна програма для підготовки вчителів інформатики. Поєднує глибокі знання комп'ютерних наук з методикою викладання та сучасними освітніми технологіями.",
    descriptionEn:
      "Teacher training program for computer science teachers. Combines in-depth computer science knowledge with teaching methodology and modern educational technology.",
    careers: [
      "Вчитель інформатики",
      "Методист",
      "IT-координатор",
      "Розробник освітніх програм",
      "E-learning Specialist",
    ],
    careersEn: [
      "Computer Science Teacher",
      "Methodologist",
      "IT Coordinator",
      "Educational Program Developer",
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
    nameEn: "Software Engineering",
    level: "master",
    description:
      "Поглиблена підготовка магістрів з проєктування та керування розробкою програмного забезпечення. Дослідницька складова, архітектура складних систем, управління IT-проєктами та міжнародні стандарти якості ПЗ.",
    descriptionEn:
      "Advanced master's training in software design and development management. Research component, complex systems architecture, IT project management and international software quality standards.",
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
    nameEn: "Computer Science",
    level: "master",
    description:
      "Магістерська програма з акцентом на дослідження в галузі штучного інтелекту, машинного навчання, аналітики даних та розробки складних обчислювальних систем. Підготовка до наукової кар'єри та ролей у R&D.",
    descriptionEn:
      "Master's program focused on research in artificial intelligence, machine learning, data analytics and development of complex computing systems. Preparation for research career and R&D roles.",
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
    nameEn: "Information Systems and Technologies",
    level: "master",
    description:
      "Підготовка магістрів з аналізу, проєктування та впровадження корпоративних інформаційних систем. Управління даними, бізнес-аналітика, безпека інформації та інтеграція enterprise-рішень.",
    descriptionEn:
      "Master's training in analysis, design and implementation of corporate information systems. Data management, business analytics, information security and enterprise solution integration.",
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
    nameEn: "Secondary Education (Mathematics)",
    level: "master",
    description:
      "Магістерська педагогічна програма для вчителів математики. Поглиблена методика викладання, сучасні освітні технології, STEM-освіта та підготовка до наукової та адміністративної діяльності в освіті.",
    descriptionEn:
      "Master's teacher training program for mathematics teachers. Advanced teaching methodology, modern educational technology, STEM education and preparation for research and administrative work in education.",
    careers: [
      "Вчитель математики",
      "Методист",
      "Завуч з навчальної роботи",
      "Викладач ЗВО",
      "STEM-координатор",
    ],
    careersEn: [
      "Mathematics Teacher",
      "Methodologist",
      "Deputy Principal",
      "University Lecturer",
      "STEM Coordinator",
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
    nameEn: "Secondary Education (Physics)",
    level: "master",
    description:
      "Магістерська програма підготовки вчителів фізики. Методика навчання фізики, експериментальні та цифрові лабораторії, астрономія та підготовка до наукової роботи та аспірантури.",
    descriptionEn:
      "Master's program for training physics teachers. Physics teaching methodology, experimental and digital labs, astronomy and preparation for research and postgraduate study.",
    careers: [
      "Вчитель фізики",
      "Методист",
      "Викладач фізики/астрономії",
      "STEM-педагог",
      "Науковий співробітник",
    ],
    careersEn: [
      "Physics Teacher",
      "Methodologist",
      "Physics/Astronomy Lecturer",
      "STEM Educator",
      "Research Associate",
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
    nameEn: "Software Engineering (PhD)",
    level: "phd",
    description:
      "Підготовка докторів філософії в галузі інженерії програмного забезпечення. Дослідницька робота під керівництвом професорів ХДУ та Інституту кібернетики НАН України ім. Глушкова. Наукові публікації та захист дисертації.",
    descriptionEn:
      "PhD training in software engineering. Research under the supervision of KSU professors and the Glushkov Institute of Cybernetics of the NAS of Ukraine. Academic publications and thesis defence.",
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
    nameEn: "Secondary Education (Physics) — PhD",
    level: "phd",
    description:
      "Аспірантура з педагогіки та методики викладання фізики. Дослідницька робота під керівництвом професорів кафедр ХДУ та Інституту інформаційних технологій і засобів навчання НАПН. Підготовка до захисту дисертації.",
    descriptionEn:
      "PhD in pedagogy and physics teaching methodology. Research under the supervision of KSU department professors and the Institute of Information Technologies and Learning Tools of NAES. Preparation for thesis defence.",
    careers: [
      "Кандидат педагогічних наук",
      "Доцент / професор ЗВО",
      "Науковий співробітник",
      "Методист-експерт",
    ],
    careersEn: [
      "PhD in Education",
      "Associate Professor / Professor",
      "Research Associate",
      "Lead Methodologist",
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
