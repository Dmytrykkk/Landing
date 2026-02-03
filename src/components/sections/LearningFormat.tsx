export default function LearningFormat() {
  const platforms = [
    {
      name: "Zoom",
      description: "Відеоконференції для синхронних занять та консультацій",
      icon: "📹",
      feature: {
        title: "Онлайн та змішаний формат",
        description: "Гнучке поєднання синхронних онлайн-занять та асинхронного навчання, що дозволяє навчатися в зручний для вас час"
      }
    },
    {
      name: "Moodle",
      description: "Система управління навчанням для організації курсу та оцінювання",
      icon: "📚",
      feature: {
        title: "Асинхронні матеріали",
        description: "Доступ до відеолекцій, презентацій, практичних завдань та додаткових ресурсів 24/7 для самостійного вивчення"
      }
    },
    {
      name: "KSU24",
      description: "Цифрова екосистема університету з усіма необхідними інструментами",
      icon: "🎓",
      feature: {
        title: "Підтримка доступності",
        description: "Субтитри до відео, текстові версії матеріалів, адаптивний інтерфейс та технічна підтримка для студентів з особливими потребами"
      }
    },
  ];

  return (
    <section
      id="learning-format"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="learning-format-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="learning-format-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          Формат навчання
        </h2>

        <section className="mb-12 sm:mb-16" aria-labelledby="platforms-heading">
          <h3
            id="platforms-heading"
            className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            Платформи навчання
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            role="list"
          >
            {platforms.map((platform, index) => (
              <div key={index} className="flex flex-col gap-4">
                <article
                  className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg border-2 border-[#bfdbfe] dark:border-gray-600 text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-[#3b82f6] focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"
                  role="listitem"
                >
                  <div
                    className="text-4xl sm:text-5xl mb-4"
                    role="img"
                    aria-label={`Іконка ${platform.name}`}
                  >
                    {platform.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {platform.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {platform.description}
                  </p>
                </article>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg focus-within:ring-2 focus-within:ring-[#3b82f6] focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900">
                  <h5 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {platform.feature.title}
                  </h5>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {platform.feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}