import type { OfficialData } from "@/types/official-data";

export const OFFICIAL_DATA_VERSION = 1;

export const officialDataDefaults: OfficialData = {
  version: OFFICIAL_DATA_VERSION,
  lastUpdatedIso: new Date("2026-02-03").toISOString(),
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
      id: "license-edbo-registry",
      title: "Реєстрація в Єдиному державному реєстрі суб'єктів освітньої діяльності (ЄДЕБО)",
      issuedBy: "Державне підприємство «Інфоресурс»",
      licenseNumber: "Код закладу в ЄДЕБО: 48",
      details:
        "Херсонський державний університет зареєстрований в Єдиному державному реєстрі суб'єктів освітньої діяльності (ЄДЕБО). Університет має право на провадження освітньої діяльності у сфері вищої освіти. Детальна інформація про ліцензії, акредитації та освітні програми доступна в офіційному реєстрі ЄДЕБО.",
      sourceUrl: "https://registry.edbo.gov.ua/university/48/specialities/",
      priority: 1,
    },
    {
      id: "license-higher-education",
      title: "Ліцензія на провадження освітньої діяльності у сфері вищої освіти",
      issuedBy: "Міністерство освіти і науки України",
      details:
        "Херсонський державний університет має ліцензію на провадження освітньої діяльності у сфері вищої освіти. Заклад бере участь в програмі державних грантів на здобуття вищої освіти. Університет має право готувати здобувачів освіти на рівнях вищої освіти (молодший бакалавр, бакалавр, магістр, доктор філософії/доктор мистецтва). Детальна інформація про ліцензовані обсяги та освітні програми доступна в реєстрі ЄДЕБО.",
      sourceUrl: "https://registry.edbo.gov.ua/university/48/specialities/",
      priority: 2,
    },
    {
      id: "license-university-info",
      title: "Офіційна інформація про заклад освіти",
      issuedBy: "Міністерство освіти і науки України",
      details:
        "Повна назва: Херсонський державний університет. Коротка назва: ХДУ. Повна назва (англ.): Kherson State University. Форма власності: Державна. Найменування органу, до сфери управління якого належить заклад освіти: Міністерство освіти і науки України. Рік заснування: 1917. Місцезнаходження (юридична адреса): Україна, 73000, Херсонська обл., м. Херсон, вул. Університетська, 27. Телефон: +38 096 310 2636. Електронна пошта: office@ksu.ks.ua. Веб-сайт: http://www.kspu.edu",
      sourceUrl: "https://registry.edbo.gov.ua/university/48/specialities/",
      priority: 3,
    },
  ],
};

