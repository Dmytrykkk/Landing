export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white text-gray-700 py-12 sm:py-16 border-t border-gray-200"
      role="contentinfo"
      aria-label="Підвал сайту"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <section>
            <h3 className="text-gray-900 text-xl font-bold mb-4">ФКНФМ ХДУ</h3>
            <p className="text-sm text-gray-700 mb-4">
              Факультет комп&apos;ютерних наук та фізико-математичний факультет Херсонського державного університету. Сучасна IT-освіта з гарантією працевлаштування.
            </p>
            <p className="text-xs text-gray-500">
              Херсонський державний університет
            </p>
          </section>
          <nav aria-label="Навігація по сайту">
            <h4 className="text-gray-900 font-semibold mb-4">Навігація</h4>
            <ul className="space-y-2 text-sm" role="list">
              <li role="listitem">
                <a
                  href="#why-fknfm"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  Чому ми
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#programs"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  Програми
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#learning-format"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  Формат навчання
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#consultation-form"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  Консультація
                </a>
              </li>
            </ul>
          </nav>
          <address className="not-italic">
            <h4 className="text-gray-900 font-semibold mb-4">Приймальна комісія</h4>
            <ul className="space-y-2 text-sm text-gray-700" role="list">
              <li role="listitem">
                <a
                  href="mailto:priyom@kspu.edu.ua"
                  className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  Email: priyom@kspu.edu.ua
                </a>
              </li>
              <li role="listitem">
                <a
                  href="tel:+380552423456"
                  className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                >
                  Телефон: +380 (55) 242-34-56
                </a>
              </li>
              <li role="listitem" className="mt-4">
                <strong className="text-gray-900">Адреса:</strong>
                <br />
                м. Івано-Франківськ
                <br />
                вул. Шевченка, 57
              </li>
            </ul>
          </address>
          <nav aria-label="Соціальні мережі">
            <h4 className="text-gray-900 font-semibold mb-4">Соціальні мережі</h4>
            <ul className="space-y-2 text-sm" role="list">
              <li role="listitem">
                <a
                  href="https://t.me/kipiek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                  aria-label="Telegram канал"
                >
                  Telegram
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.facebook.com/kspu.edu.ua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.instagram.com/kspu.edu.ua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.youtube.com/@kspu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                  aria-label="YouTube"
                >
                  YouTube
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.tiktok.com/@kspu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-white rounded transition-colors"
                  aria-label="TikTok"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-600">
            &copy; {currentYear} Херсонський державний університет. Всі права захищені.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <a
              href="https://www.kspu.edu.ua"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Офіційний сайт університету
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
