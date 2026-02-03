export default function Programs() {
  const programs = [
    {
      code: "121",
      name: "Інженерія програмного забезпечення",
      description:
        "Комплексна програма підготовки фахівців з розробки, тестування та підтримки програмного забезпечення. Навчання охоплює весь цикл життєвого циклу ПЗ від аналізу вимог до впровадження та супроводу.",
      careers: [
        "Software Developer",
        "Full-Stack Developer",
        "QA Engineer",
        "DevOps Engineer",
        "System Architect",
      ],
      techStack: [
        "JavaScript/TypeScript",
        "Python",
        "Java",
        "React/Node.js",
        "Docker/Kubernetes",
        "Git",
      ],
    },
    {
      code: "122",
      name: "Комп'ютерні науки",
      description:
        "Фундаментальна освіта в галузі комп'ютерних наук з акцентом на алгоритми, структури даних, штучний інтелект та машинне навчання. Програма готує дослідників та розробників складних систем.",
      careers: [
        "Data Scientist",
        "Machine Learning Engineer",
        "Research Scientist",
        "Algorithm Developer",
        "AI Specialist",
      ],
      techStack: [
        "Python",
        "R",
        "TensorFlow/PyTorch",
        "SQL/NoSQL",
        "Linux",
        "Cloud Platforms",
      ],
    },
    {
      code: "014.08",
      name: "Середня освіта (Інформатика)",
      description:
        "Педагогічна програма для підготовки вчителів інформатики. Поєднує глибокі знання комп'ютерних наук з методикою викладання та сучасними освітніми технологіями.",
      careers: [
        "Вчитель інформатики",
        "Методист",
        "IT-координатор",
        "Розробник освітніх програм",
        "E-learning Specialist",
      ],
      techStack: [
        "Scratch/Python",
        "Web Technologies",
        "LMS Platforms",
        "Office Suite",
        "Educational Software",
        "Digital Tools",
      ],
    },
  ];

  return (
    <section
      id="programs"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="programs-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="programs-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          Навчальні програми
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
        >
          {programs.map((program, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-800"
              role="listitem"
            >
              <header className="mb-4">
                <span
                  className="inline-block px-3 py-1 bg-[#eff6ff] dark:bg-[#1e3a8a] text-[#1e40af] dark:text-[#93c5fd] rounded-full text-xs sm:text-sm font-semibold mb-3"
                  aria-label={`Код програми ${program.code}`}
                >
                  {program.code}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {program.name}
                </h3>
              </header>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                {program.description}
              </p>

              <div className="space-y-4">
                <section>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Кар&apos;єрні можливості:
                  </h4>
                  <ul className="space-y-1" role="list">
                    {program.careers.map((career, careerIndex) => (
                      <li
                        key={careerIndex}
                        className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start"
                        role="listitem"
                      >
                        <span
                          className="mr-2 text-[#1e40af] dark:text-[#3b82f6] mt-1"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        {career}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Технологічний стек:
                  </h4>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {program.techStack.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                        role="listitem"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
