import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ClientHeader from "@/components/ClientHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  fallback: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fknfm.kspu.edu.ua"),
  title: {
    default: "ФКНФМ ХДУ - Твій код до майбутнього в ІТ",
    template: "%s | ФКНФМ ХДУ",
  },
  description:
    "Факультет комп'ютерних наук та фізико-математичний факультет Херсонського державного університету. Онлайн та змішане навчання. Диплом державного зразка. Програми: Інженерія програмного забезпечення, Комп'ютерні науки, Середня освіта (Інформатика).",
  keywords: [
    "ФКНФМ ХДУ",
    "Херсонський державний університет",
    "комп'ютерні науки",
    "інженерія програмного забезпечення",
    "дистанційне навчання",
    "онлайн навчання",
    "IT освіта Україна",
    "програмування",
    "KSU24",
    "ksuonline",
  ],
  authors: [{ name: "Херсонський державний університет" }],
  creator: "Херсонський державний університет",
  publisher: "Херсонський державний університет",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: "ФКНФМ ХДУ",
    title: "ФКНФМ ХДУ - Твій код до майбутнього в ІТ",
    description:
      "Онлайн та змішане навчання. Диплом державного зразка. Програми: Інженерія програмного забезпечення, Комп'ютерні науки, Середня освіта (Інформатика).",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ФКНФМ ХДУ - Факультет комп'ютерних наук та фізико-математичний факультет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ФКНФМ ХДУ - Твій код до майбутнього в ІТ",
    description:
      "Онлайн та змішане навчання. Диплом державного зразка. Програми: Інженерія програмного забезпечення, Комп'ютерні науки, Середня освіта (Інформатика).",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  const themeScript = `
(function(){
  var k='theme'; var s=localStorage.getItem(k);
  var dark=s==='dark';
  document.documentElement.classList.add(dark ? 'dark' : 'light');
  document.documentElement.classList.remove(dark ? 'light' : 'dark');
})();
  `.trim();

  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          suppressHydrationWarning
        />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Перейти до основного контенту
          </a>
          <ClientHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
