"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/lib/i18n/translations";

type EventType = "conference" | "student" | "lecture" | "celebration";

type CalendarEvent = {
  date: string; // YYYY-MM-DD
  title: string;
  titleEn?: string;
  type: EventType;
  description: string;
  descriptionEn?: string;
  location?: string;
  locationEn?: string;
  url?: string;
};

const EVENT_TYPE_STYLES: Record<
  EventType,
  { dotColor: string; labelBg: string; labelText: string }
> = {
  conference: {
    dotColor: "#60a5fa",
    labelBg: "bg-blue-900/60",
    labelText: "text-blue-200",
  },
  student: {
    dotColor: "#4ade80",
    labelBg: "bg-emerald-900/60",
    labelText: "text-emerald-200",
  },
  lecture: {
    dotColor: "#fb923c",
    labelBg: "bg-amber-900/60",
    labelText: "text-amber-200",
  },
  celebration: {
    dotColor: "#a78bfa",
    labelBg: "bg-violet-900/60",
    labelText: "text-violet-200",
  },
};

const events: CalendarEvent[] = [
  {
    date: "2026-01-07",
    title: "Подяка від медіаклубу \"Народжені перемагати\"",
    titleEn: "Thanks from the media club \"Born to Win\"",
    type: "student",
    description:
      "Факультет комп'ютерних наук, фізики та математики отримав подяку від медіаклубу «Народжені перемагати» за активну співпрацю та підтримку студентських ініціатив.",
    descriptionEn:
      "The Faculty of Computer Science, Physics and Mathematics received thanks from the media club \"Born to Win\" for active cooperation and support of student initiatives.",
  },
  {
    date: "2026-02-19",
    title: "Конференція DESSERT 2025 (Афіни, Греція)",
    titleEn: "DESSERT 2025 Conference (Athens, Greece)",
    type: "conference",
    description:
      "Представники факультету взяли участь у міжнародній конференції DESSERT 2025 в Афінах (Греція), презентувавши результати наукових досліджень у галузі ІТ та інженерії.",
    descriptionEn:
      "Faculty representatives took part in the international DESSERT 2025 conference in Athens (Greece), presenting research results in IT and engineering.",
    location: "Афіни, Греція",
    locationEn: "Athens, Greece",
  },
  {
    date: "2026-02-19",
    title: "VI Міжнародна науково-практична конференція (Тернопіль)",
    titleEn: "6th International Research and Practice Conference (Ternopil)",
    type: "conference",
    description:
      "Викладачі та аспіранти факультету долучилися до VI Міжнародної науково-практичної конференції, представивши власні дослідження та освітні проєкти.",
    descriptionEn:
      "Faculty staff and postgraduate students joined the 6th International Research and Practice Conference, presenting their research and educational projects.",
    location: "Тернопіль, Україна",
    locationEn: "Ternopil, Ukraine",
  },
  {
    date: "2026-02-18",
    title: "Атестація магістрів — захист кваліфікаційних робіт",
    titleEn: "Master's certification — thesis defence",
    type: "conference",
    description:
      "Відбувся захист кваліфікаційних робіт магістрів факультету. Студенти презентували свої проєкти у присутності екзаменаційної комісії та представників ІТ-індустрії.",
    descriptionEn:
      "The faculty held master's thesis defences. Students presented their projects before the examination board and IT industry representatives.",
  },
  {
    date: "2026-02-17",
    title: "Медіаклуб — історичний екскурс факультету",
    titleEn: "Media club — faculty history overview",
    type: "student",
    description:
      "Студентський медіаклуб провів зустріч, присвячену історії факультету, його випускникам та ключовим етапам розвитку комп'ютерних наук у ХДУ.",
    descriptionEn:
      "The student media club held a meeting on the history of the faculty, its alumni and key milestones in the development of computer science at KSU.",
  },
  {
    date: "2026-02-15",
    title: "Лекція професора Кузьмича В.І. для вчителів",
    titleEn: "Professor Kuzmych's lecture for teachers",
    type: "lecture",
    description:
      "Професор Кузьмич В.І. провів відкриту лекцію для вчителів інформатики та математики щодо сучасних підходів до викладання STEM-дисциплін.",
    descriptionEn:
      "Professor Kuzmych gave an open lecture for IT and mathematics teachers on modern approaches to teaching STEM subjects.",
  },
  {
    date: "2026-02-11",
    title: "Лекція Дмитра Кльонова про ІТ-професії",
    titleEn: "Dmytro Klionov's lecture on IT careers",
    type: "lecture",
    description:
      "Запрошений спікер Дмитро Кльонов розповів студентам про сучасні ІТ-професії, кар'єрні траєкторії та вимоги роботодавців.",
    descriptionEn:
      "Guest speaker Dmytro Klionov talked to students about modern IT professions, career paths and employer requirements.",
  },
  {
    date: "2026-02-10",
    title: "Онлайн-лекція \"Майбутня професія\" (медіаклуб NaVi)",
    titleEn: "Online lecture \"Future profession\" (NaVi media club)",
    type: "lecture",
    description:
      "Медіаклуб NaVi організував онлайн-лекцію для абітурієнтів та школярів про вибір майбутньої професії в ІТ-сфері.",
    descriptionEn:
      "The NaVi media club organised an online lecture for applicants and school students on choosing a future career in IT.",
  },
  {
    date: "2026-02-03",
    title: "Всесвітній день комп'ютерної графіки",
    titleEn: "World Computer Graphics Day",
    type: "celebration",
    description:
      "Факультет відзначив Всесвітній день комп'ютерної графіки майстер-класами та демонстрацією студентських проєктів.",
    descriptionEn:
      "The faculty celebrated World Computer Graphics Day with workshops and demonstrations of student projects.",
  },
];

function toDateOnly(iso: string): string {
  if (!iso) return "";
  return iso.length >= 10 ? iso.slice(0, 10) : iso;
}

function formatDateLocal(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthStart(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function getEventTitle(ev: CalendarEvent, locale: Locale): string {
  return locale === "en" && ev.titleEn ? ev.titleEn : ev.title;
}
function getEventDescription(ev: CalendarEvent, locale: Locale): string {
  return locale === "en" && ev.descriptionEn ? ev.descriptionEn : ev.description;
}
function getEventLocation(ev: CalendarEvent, locale: Locale): string | undefined {
  if (locale === "en" && ev.locationEn) return ev.locationEn;
  return ev.location;
}

export default function EventsCalendar() {
  const { locale, t } = useLocale();
  const [mounted, setMounted] = useState(false);
  // Use a fixed date for SSR to prevent hydration mismatch
  const [viewMonth, setViewMonth] = useState<Date>(new Date(2026, 1, 1)); // February 2026
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const dateLocale = locale === "en" ? "en-GB" : "uk-UA";
  const tc = t.eventsCalendar;

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useMemo(() => {
    return [...events].sort((a, b) => (a.date > b.date ? 1 : -1));
  }, []);

  const start = monthStart(viewMonth);

  const byDay = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const ev of items) {
      const key = toDateOnly(ev.date);
      if (!key) continue;
      const arr = map.get(key) ?? [];
      arr.push(ev);
      map.set(key, arr);
    }
    return map;
  }, [items]);

  const days = useMemo(() => {
    const out: Date[] = [];
    const first = new Date(start);
    const firstDay = (first.getDay() + 6) % 7; // Monday=0
    first.setDate(first.getDate() - firstDay);
    for (let i = 0; i < 42; i++) {
      const d = new Date(first);
      d.setDate(first.getDate() + i);
      out.push(d);
    }
    return out;
  }, [start]);

  const monthLabel = useMemo(() => {
    return viewMonth.toLocaleString(dateLocale, { month: "long", year: "numeric" });
  }, [viewMonth, dateLocale]);

  const filteredEvents = useMemo(() => {
    if (!selectedDate) return items;
    const key = toDateOnly(selectedDate);
    return items.filter((ev) => toDateOnly(ev.date) === key);
  }, [items, selectedDate]);

  const getTypeLabel = (type: EventType) => {
    switch (type) {
      case "conference": return tc.typeConference;
      case "student": return tc.typeStudent;
      case "lecture": return tc.typeLecture;
      case "celebration": return tc.typeCelebration;
    }
  };

  return (
    <section
      id="events"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      aria-labelledby="events-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="events-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {tc.heading}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {tc.placeholder}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700"
                onClick={() =>
                  setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
                }
                aria-label={tc.prevMonth}
              >
                ←
              </button>
              <div className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold capitalize">
                {monthLabel}
              </div>
              <button
                type="button"
                className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700"
                onClick={() =>
                  setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
                }
                aria-label={tc.nextMonth}
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2 text-xs text-gray-500 dark:text-gray-400">
            {tc.weekdays.map((d) => (
              <div key={d} className="text-center font-semibold">
                {d}
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2">
            {days.map((d) => {
              const inMonth = d.getMonth() === viewMonth.getMonth();
              const dateKey = formatDateLocal(d);
              const dayEvents = byDay.get(dateKey) ?? [];
              const isToday = mounted && formatDateLocal(new Date()) === dateKey;
              const isSelected = selectedDate === dateKey;

              return (
                <button
                  key={dateKey}
                  type="button"
                  onClick={() => setSelectedDate((prev) => (prev === dateKey ? null : dateKey))}
                  className={`min-h-[86px] rounded-lg border p-2 text-left ${
                    inMonth
                      ? "bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      : "bg-gray-100 dark:bg-gray-900/80 border-gray-200 dark:border-gray-800"
                  } ${isToday ? "ring-2 ring-blue-500" : ""} ${
                    isSelected ? "border-blue-500 ring-1 ring-blue-500" : ""
                  }`}
                  aria-pressed={isSelected}
                  aria-label={(() => {
                    const dateStr = d.toLocaleDateString(dateLocale, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                    return dayEvents.length > 0 ? `${dateStr}. ${tc.eventsCount}: ${dayEvents.length}` : dateStr;
                  })()}
                >
                  <div
                    className={`text-xs font-semibold ${
                      inMonth ? "text-gray-900 dark:text-white" : "text-gray-500"
                    }`}
                  >
                    {d.getDate()}
                  </div>
                  <div 
                    className="mt-1 flex flex-wrap gap-1" 
                    aria-hidden={dayEvents.length === 0}
                  >
                    {dayEvents.slice(0, 3).map((ev, idx) => {
                      const styles = EVENT_TYPE_STYLES[ev.type];
                      return (
                        <span
                          key={`${ev.date}-${idx}`}
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: styles.dotColor }}
                          title={getEventTitle(ev, locale)}
                        />
                      );
                    })}
                    {dayEvents.length > 3 ? (
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">+{dayEvents.length - 3}</span>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tc.facultyEvents}</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 text-xs rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setSelectedDate(null)}
                >
                  {tc.allEvents}
                </button>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedDate
                    ? `${tc.selectedDateLabel}: ${new Date(selectedDate).toLocaleDateString(dateLocale, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}`
                    : tc.showingAll}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
              {filteredEvents.map((ev) => {
                const styles = EVENT_TYPE_STYLES[ev.type];
                const dateLabel = new Date(ev.date).toLocaleDateString(dateLocale, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
                const loc = getEventLocation(ev, locale);
                return (
                  <article
                    key={`${ev.date}-${ev.title}`}
                    className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    role="listitem"
                    onClick={() => setSelectedDate(toDateOnly(ev.date))}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{dateLabel}</div>
                        <h4 className="mt-1 text-sm font-bold text-gray-900 dark:text-white">{getEventTitle(ev, locale)}</h4>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-[11px] font-semibold ${styles.labelBg} ${styles.labelText}`}
                      >
                        {getTypeLabel(ev.type)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{getEventDescription(ev, locale)}</p>
                    {loc ? (
                      <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{tc.location}: {loc}</p>
                    ) : null}
                    {ev.url ? (
                      <div className="mt-2">
                        <Link
                          href={ev.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
                        >
                          {tc.details}
                        </Link>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}