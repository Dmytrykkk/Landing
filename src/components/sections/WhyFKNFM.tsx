export default function WhyFKNFM() {
  const points = [
    {
      title: "Інтеграція в екосистему KSU24",
      description: "Сучасна цифрова платформа KSU24 об'єднує всі необхідні інструменти та ресурси для ефективного навчального процесу. Студенти мають доступ до єдиного освітнього простору з будь-якої точки світу",
      link: "https://ksu24.kspu.edu",
    },
    {
      title: "Партнерство з IT-кластером",
      description: "Співпраця з провідними IT-компаніями України та світу забезпечує актуальність навчальних програм, стажування та гарантоване працевлаштування випускників",
    },
    {
      title: "Академічна мобільність Erasmus+",
      description: "Можливість навчатися в університетах Європи за програмою Erasmus+, отримувати подвійні дипломи та міжнародний досвід, що відкриває нові кар'єрні можливості",
    },
    {
      title: "Сильний викладацький склад",
      description: "Практики з провідних IT-компаній, кандидати та доктори наук, які поєднують теоретичні знання з реальним досвідом індустрії. Персональний підхід до кожного студента",
    },
  ];

  return (
    <section
      id="why-fknfm"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="why-fknfm-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="why-fknfm-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          Чому ФКНФМ ХДУ?
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          role="list"
        >
          {points.map((point, index) => (
            <article
              key={index}
              className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"
              role="listitem"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                {point.description}
              </p>
              {point.link && (
                <a
                  href={point.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded font-medium"
                  aria-label={`Відкрити ${point.title} у новій вкладці`}
                >
                  Дізнатися більше
                  <span aria-hidden="true"> →</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
