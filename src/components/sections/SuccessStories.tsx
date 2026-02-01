export default function SuccessStories() {
  const graduates = [
    {
      name: "Олександр Мельник",
      program: "121 Інженерія програмного забезпечення",
      graduationYear: "2022",
      position: "Senior Full-Stack Developer",
      company: "EPAM Systems",
      location: "Київ, Україна",
      quote:
        "Навчання на програмі 121 дало мені міцну базу в розробці ПЗ. Практичні проекти та робота з реальними технологіями допомогли швидко стартувати кар'єру.",
      achievements: ["Працює в топ-3 IT-компанії України", "Керує командою з 5 розробників"],
    },
    {
      name: "Марія Коваль",
      program: "122 Комп'ютерні науки",
      graduationYear: "2021",
      position: "Data Scientist",
      company: "Grammarly",
      location: "Київ, Україна",
      quote:
        "Програма з комп'ютерних наук відкрила для мене світ машинного навчання. Зараз я працюю над проектами з NLP та допомагаю покращувати продукт для мільйонів користувачів.",
      achievements: ["Публікації в наукових журналах", "Спікер на міжнародних конференціях"],
    },
    {
      name: "Дмитро Шевченко",
      program: "014.08 Середня освіта (Інформатика)",
      graduationYear: "2023",
      position: "Вчитель інформатики",
      company: "Ліцей №1",
      location: "Херсон, Україна",
      quote:
        "Педагогічна програма поєднала технічні знання з методикою викладання. Мої учні регулярно перемагають на олімпіадах з програмування.",
      achievements: ["Керівник шкільного IT-клубу", "Організатор міських хакатонів"],
    },
    {
      name: "Анастасія Бондаренко",
      program: "121 Інженерія програмного забезпечення",
      graduationYear: "2020",
      position: "Tech Lead",
      company: "MacPaw",
      location: "Київ, Україна",
      quote:
        "Дистанційний формат навчання дозволив мені поєднувати роботу та навчання. Зараз я керую технічними проектами та допомагаю молодим розробникам рости.",
      achievements: ["Open-source контриб'ютор", "Ментор для junior розробників"],
    },
    {
      name: "Ігор Петренко",
      program: "122 Комп'ютерні науки",
      graduationYear: "2022",
      position: "Machine Learning Engineer",
      company: "Readdle",
      location: "Київ, Україна",
      quote:
        "Фундаментальні знання з алгоритмів та структур даних стали основою моєї кар'єри в ML. Працюю над проектами з комп'ютерного зору.",
      achievements: ["Патент на ML-алгоритм", "PhD студент"],
    },
    {
      name: "Юлія Лисенко",
      program: "014.08 Середня освіта (Інформатика)",
      graduationYear: "2022",
      position: "IT-координатор",
      company: "Освітній центр",
      location: "Одеса, Україна",
      quote:
        "Програма навчила мене не лише викладати інформатику, але й розробляти освітні IT-проєкти. Зараз я координатую цифровізацію в нашому центрі.",
      achievements: ["Розробник освітніх курсів", "Тренер для вчителів"],
    },
  ];

  const companies = [
    { name: "EPAM Systems", logo: "EPAM" },
    { name: "Grammarly", logo: "Grammarly" },
    { name: "MacPaw", logo: "MacPaw" },
    { name: "Readdle", logo: "Readdle" },
    { name: "Luxoft", logo: "Luxoft" },
    { name: "GlobalLogic", logo: "GlobalLogic" },
  ];

  return (
    <section
      id="success-stories"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="success-stories-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="success-stories-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          Історії успіху випускників
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16"
          role="list"
        >
          {graduates.map((graduate, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-800"
              role="listitem"
            >
              <header className="mb-4">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                  role="img"
                  aria-label={`Аватар ${graduate.name}`}
                >
                  {graduate.name.charAt(0)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {graduate.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {graduate.program}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Випуск {graduate.graduationYear}
                </p>
                <p className="text-sm font-semibold text-[#1e40af] dark:text-[#3b82f6]">
                  {graduate.position}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {graduate.company} • {graduate.location}
                </p>
              </header>
              <blockquote
                className="text-sm sm:text-base text-gray-800 dark:text-gray-200 italic mb-4 flex-grow"
                cite={`#graduate-${index}`}
              >
                <p>&ldquo;{graduate.quote}&rdquo;</p>
                <footer className="sr-only">
                  <cite>{graduate.name}, {graduate.position} в {graduate.company}</cite>
                </footer>
              </blockquote>
              <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
                  Досягнення:
                </h4>
                <ul className="space-y-1" role="list">
                  {graduate.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="text-xs text-gray-700 dark:text-gray-300 flex items-start"
                      role="listitem"
                    >
                      <span
                        className="mr-2 text-[#1e40af] dark:text-[#3b82f6] mt-1"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </div>

        <section aria-labelledby="partners-heading" className="mt-12 sm:mt-16">
          <h3
            id="partners-heading"
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
          >
            Наші партнери
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
            role="list"
            aria-label="IT-компанії партнери"
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                role="listitem"
              >
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm sm:text-base text-center">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
