import type { OfficialData } from "@/types/official-data";

export const OFFICIAL_DATA_VERSION = 1;

export const officialDataDefaults: OfficialData = {
  version: OFFICIAL_DATA_VERSION,
  lastUpdatedIso: new Date(0).toISOString(),
  programs: [
    {
      id: "bsc-software-engineering",
      level: "bachelor",
      code: "121",
      name: "Інженерія програмного забезпечення (Bachelor)",
      description:
        "Плейсхолдер для офіційного опису програми від університету/професора. Додайте деталі: формат, тривалість, компетентності, перелік дисциплін.",
      careers: ["Software Developer", "Full-Stack Developer", "QA Engineer"],
      techStack: ["JavaScript/TypeScript", "React/Node.js", "Git"],
      programUrl: "https://example.edu.ua/programs/121",
      catalogUrl: "https://example.edu.ua/catalog/121",
      priority: 10,
    },
    {
      id: "bsc-computer-science",
      level: "bachelor",
      code: "122",
      name: "Комп'ютерні науки (Bachelor)",
      description:
        "Плейсхолдер для офіційного опису програми. Додайте: ключові модулі, AI/ML, алгоритми, практичні проєкти.",
      careers: ["Data Scientist", "ML Engineer", "Research Engineer"],
      techStack: ["Python", "SQL", "Linux"],
      programUrl: "https://example.edu.ua/programs/122",
      catalogUrl: "https://example.edu.ua/catalog/122",
      priority: 20,
    },
    {
      id: "bsc-informatics-education",
      level: "bachelor",
      code: "014.08",
      name: "Середня освіта (Інформатика) (Bachelor)",
      description:
        "Плейсхолдер для офіційного опису програми. Додайте: методики викладання, педагогічні практики, цифрові інструменти.",
      careers: ["Вчитель інформатики", "Методист", "E-learning Specialist"],
      techStack: ["Python", "Web technologies", "LMS"],
      programUrl: "https://example.edu.ua/programs/014-08",
      catalogUrl: "https://example.edu.ua/catalog/014-08",
      priority: 30,
    },
    {
      id: "msc-computer-science",
      level: "master",
      code: "122",
      name: "Комп'ютерні науки (Master)",
      description:
        "Плейсхолдер для офіційного опису магістерської програми. Додайте: дослідницька складова, напрями, вимоги до вступу.",
      careers: ["Senior Engineer", "ML Engineer", "Researcher"],
      techStack: ["Python", "Cloud", "MLOps"],
      programUrl: "https://example.edu.ua/programs/msc-122",
      priority: 40,
    },
    {
      id: "phd-computer-science",
      level: "phd",
      name: "PhD (Computer Science)",
      description:
        "Плейсхолдер для офіційного опису PhD напряму. Додайте: наукові тематики, керівники, вимоги, публікації.",
      careers: ["Research Scientist", "University Lecturer"],
      techStack: ["Research methods", "Scientific writing"],
      programUrl: "https://example.edu.ua/programs/phd-cs",
      priority: 50,
    },
  ],
  outcomes: [
    {
      id: "outcome-wall-street",
      level: "bachelor",
      name: "Плейсхолдер: Випускник",
      programName: "Комп'ютерні науки",
      graduationYear: "20XX",
      headline: "Після випуску — робота на Wall Street (приклад пріоритизації)",
      company: "Wall Street (Company placeholder)",
      location: "New York, USA",
      quote:
        "Плейсхолдер цитати. Додайте реальну історію від професора/університету та підтверджені факти.",
      achievements: ["Приклад досягнення №1", "Приклад досягнення №2"],
      priority: 1,
      programUrl: "https://example.edu.ua/programs/122",
    },
    {
      id: "outcome-example-2",
      level: "bachelor",
      name: "Плейсхолдер: Випускниця",
      programName: "Інженерія програмного забезпечення",
      graduationYear: "20XX",
      headline: "Tech Lead у міжнародній компанії (плейсхолдер)",
      company: "International Company",
      location: "Україна / Remote",
      priority: 10,
      programUrl: "https://example.edu.ua/programs/121",
    },
  ],
  events: [
    {
      id: "event-open-day",
      title: "День відкритих дверей (плейсхолдер)",
      startDate: "2026-03-15",
      location: "Online",
      url: "https://example.edu.ua/events/open-day",
      priority: 1,
    },
    {
      id: "event-webinar",
      title: "Вебінар про вступ (плейсхолдер)",
      startDate: "2026-02-20",
      location: "Online",
      url: "https://example.edu.ua/events/webinar",
      level: "bachelor",
      priority: 5,
    },
  ],
  licenses: [
    {
      id: "license-1",
      title: "Ліцензія / акредитація (плейсхолдер)",
      issuedBy: "МОН України (плейсхолдер)",
      licenseNumber: "№XXXX-YYYY",
      validFrom: "20XX-01-01",
      validTo: "20XX-12-31",
      details:
        "Додайте офіційний текст ліцензії/акредитації, як надано університетом (номер, наказ, посилання на джерело).",
      sourceUrl: "https://example.edu.ua/licenses",
      priority: 1,
    },
  ],
};

