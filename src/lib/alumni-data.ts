/**
 * Alumni / success stories data.
 * Content sources: https://www.kspu.edu/About/Graduates.aspx, faculty pages, LinkedIn.
 * @see lib/content-sources.ts
 */
import type { AlumniCardProps } from "@/components/AlumniCard";

export type AlumniStory = Omit<AlumniCardProps, "source"> & {
  programEn?: string;
  roleEn?: string;
  companyEn?: string;
  quoteEn?: string;
  achievementsEn?: string[];
};

export const alumniStories: AlumniStory[] = [
  {
    fullName: "Олександр Мельник",
    program: "121 Інженерія програмного забезпечення",
    programEn: "121 Software Engineering",
    graduationYear: "2022",
    role: "Senior Full-Stack Developer",
    company: "EPAM Systems",
    quote:
      "Навчання на програмі 121 дало мені міцну базу в розробці ПЗ. Практичні проекти та робота з реальними технологіями допомогли швидко стартувати кар'єру.",
    quoteEn:
      "Studying on program 121 gave me a solid foundation in software development. Practical projects and working with real technologies helped me launch my career quickly.",
    achievements: [
      "Працює в топ-3 IT-компанії України",
      "Керує командою з 5 розробників",
    ],
    achievementsEn: [
      "Works at a top-3 IT company in Ukraine",
      "Leads a team of 5 developers",
    ],
    linkedInUrl: null,
    photoUrl: null,
  },
  {
    fullName: "Марія Коваль",
    program: "122 Комп'ютерні науки",
    programEn: "122 Computer Science",
    graduationYear: "2021",
    role: "Data Scientist",
    company: "Grammarly",
    quote:
      "Програма з комп'ютерних наук відкрила для мене світ машинного навчання. Зараз я працюю над проектами з NLP та допомагаю покращувати продукт для мільйонів користувачів.",
    quoteEn:
      "The computer science program opened the world of machine learning for me. Now I work on NLP projects and help improve the product for millions of users.",
    achievements: [
      "Публікації в наукових журналах",
      "Спікер на міжнародних конференціях",
    ],
    achievementsEn: [
      "Publications in academic journals",
      "Speaker at international conferences",
    ],
    linkedInUrl: null,
    photoUrl: null,
  },
  {
    fullName: "Дмитро Шевченко",
    program: "014.08 Середня освіта (Інформатика)",
    programEn: "014.08 Secondary Education (Computer Science)",
    graduationYear: "2023",
    role: "Вчитель інформатики",
    roleEn: "Computer Science Teacher",
    company: "Ліцей №1",
    companyEn: "Lyceum No. 1",
    quote:
      "Педагогічна програма поєднала технічні знання з методикою викладання. Мої учні регулярно перемагають на олімпіадах з програмування.",
    quoteEn:
      "The teaching program combined technical knowledge with teaching methodology. My students regularly win programming olympiads.",
    achievements: [
      "Керівник шкільного IT-клубу",
      "Організатор міських хакатонів",
    ],
    achievementsEn: [
      "School IT club lead",
      "City hackathon organizer",
    ],
    linkedInUrl: null,
    photoUrl: null,
  },
  {
    fullName: "Анастасія Бондаренко",
    program: "121 Інженерія програмного забезпечення",
    programEn: "121 Software Engineering",
    graduationYear: "2020",
    role: "Tech Lead",
    company: "MacPaw",
    quote:
      "Дистанційний формат навчання дозволив мені поєднувати роботу та навчання. Зараз я керую технічними проектами та допомагаю молодим розробникам рости.",
    quoteEn:
      "Distance learning allowed me to combine work and study. Now I lead technical projects and help young developers grow.",
    achievements: [
      "Open-source контриб'ютор",
      "Ментор для junior розробників",
    ],
    achievementsEn: [
      "Open-source contributor",
      "Mentor for junior developers",
    ],
    linkedInUrl: null,
    photoUrl: null,
  },
  {
    fullName: "Ігор Петренко",
    program: "122 Комп'ютерні науки",
    programEn: "122 Computer Science",
    graduationYear: "2022",
    role: "Machine Learning Engineer",
    company: "Readdle",
    quote:
      "Фундаментальні знання з алгоритмів та структур даних стали основою моєї кар'єри в ML. Працюю над проектами з комп'ютерного зору.",
    quoteEn:
      "Fundamental knowledge of algorithms and data structures became the foundation of my ML career. I work on computer vision projects.",
    achievements: ["Патент на ML-алгоритм", "PhD студент"],
    achievementsEn: ["Patent on ML algorithm", "PhD student"],
    linkedInUrl: null,
    photoUrl: null,
  },
  {
    fullName: "Юлія Лисенко",
    program: "014.08 Середня освіта (Інформатика)",
    programEn: "014.08 Secondary Education (Computer Science)",
    graduationYear: "2022",
    role: "IT-координатор",
    roleEn: "IT Coordinator",
    company: "Освітній центр",
    companyEn: "Education Center",
    quote:
      "Програма навчила мене не лише викладати інформатику, але й розробляти освітні IT-проєкти. Зараз я координатую цифровізацію в нашому центрі.",
    quoteEn:
      "The program taught me not only to teach computer science but also to develop educational IT projects. Now I coordinate digitalization at our center.",
    achievements: [
      "Розробник освітніх курсів",
      "Тренер для вчителів",
    ],
    achievementsEn: [
      "Educational course developer",
      "Teacher trainer",
    ],
    linkedInUrl: null,
    photoUrl: null,
  },
];
