"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type EventType = "conference" | "student" | "lecture" | "celebration";

type CalendarEvent = {
  date: string; // YYYY-MM-DD
  title: string;
  type: EventType;
  description: string;
  location?: string;
  url?: string;
};

const EVENT_TYPE_STYLES: Record<
  EventType,
  { dotColor: string; labelBg: string; labelText: string }
> = {
  conference: {
    dotColor: "#0066cc",
    labelBg: "bg-[#e6f0ff]",
    labelText: "text-[#004a99]",
  },
  student: {
    dotColor: "#28a745",
    labelBg: "bg-[#e6f8ec]",
    labelText: "text-[#19692c]",
  },
  lecture: {
    dotColor: "#fd7e14",
    labelBg: "bg-[#fff3e6]",
    labelText: "text-[#c75a00]",
  },
  celebration: {
    dotColor: "#6f42c1",
    labelBg: "bg-[#f1e9ff]",
    labelText: "text-[#4a2c88]",
  },
};

const events: CalendarEvent[] = [
  {
    date: "2026-01-07",
    title: "Подяка від медіаклубу \"Народжені перемагати\"",
    type: "student",
    description:
      "Факультет комп'ютерних наук, фізики та математики отримав подяку від медіаклубу «Народжені перемагати» за активну співпрацю та підтримку студентських ініціатив.",
  },
  {
    date: "2025-12-19",
    title: "Конференція DESSERT 2025 (Афіни, Греція)",
    type: "conference",
    description:
      "Представники факультету взяли участь у міжнародній конференції DESSERT 2025 в Афінах (Греція), презентувавши результати наукових досліджень у галузі ІТ та інженерії.",
    location: "Афіни, Греція",
  },
  {
    date: "2025-12-19",
    title: "VI Міжнародна науково-практична конференція (Тернопіль)",
    type: "conference",
    description:
      "Викладачі та аспіранти факультету долучилися до VI Міжнародної науково-практичної конференції, представивши власні дослідження та освітні проєкти.",
    location: "Тернопіль, Україна",
  },
  {
    date: "2025-12-18",
    title: "Атестація магістрів — захист кваліфікаційних робіт",
    type: "conference",
    description:
      "Відбувся захист кваліфікаційних робіт магістрів факультету. Студенти презентували свої проєкти у присутності екзаменаційної комісії та представників ІТ-індустрії.",
  },
  {
    date: "2025-12-17",
    title: "Медіаклуб — історичний екскурс факультету",
    type: "student",
    description:
      "Студентський медіаклуб провів зустріч, присвячену історії факультету, його випускникам та ключовим етапам розвитку комп'ютерних наук у ХДУ.",
  },
  {
    date: "2025-12-15",
    title: "Лекція професора Кузьмича В.І. для вчителів",
    type: "lecture",
    description:
      "Професор Кузьмич В.І. провів відкриту лекцію для вчителів інформатики та математики щодо сучасних підходів до викладання STEM-дисциплін.",
  },
  {
    date: "2025-12-11",
    title: "Лекція Дмитра Кльонова про ІТ-професії",
    type: "lecture",
    description:
      "Запрошений спікер Дмитро Кльонов розповів студентам про сучасні ІТ-професії, кар'єрні траєкторії та вимоги роботодавців.",
  },
  {
    date: "2025-12-10",
    title: "Онлайн-лекція \"Майбутня професія\" (медіаклуб NaVi)",
    type: "lecture",
    description:
      "Медіаклуб NaVi організував онлайн-лекцію для абітурієнтів та школярів про вибір майбутньої професії в ІТ-сфері.",
  },
  {
    date: "2025-12-03",
    title: "Всесвітній день комп'ютерної графіки",
    type: "celebration",
    description:
      "Факультет відзначив Всесвітній день комп'ютерної графіки майстер-класами та демонстрацією студентських проєктів.",
  },
];

function toDateOnly(iso: string): string {
  // Accept YYYY-MM-DD or full ISO; normalize to YYYY-MM-DD for grouping.
  if (!iso) return "";
  return iso.length >= 10 ? iso.slice(0, 10) : iso;
}

function monthStart(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export default function EventsCalendar() {
  const [viewMonth, setViewMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

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

  const monthLabel = viewMonth.toLocaleString("uk-UA", { month: "long", year: "numeric" });

  const filteredEvents = useMemo(() => {
    if (!selectedDate) return items;
    const key = toDateOnly(selectedDate);
    return items.filter((ev) => toDateOnly(ev.date) === key);
  }, [items, selectedDate]);

  return (
    <section
      id="events"
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="events-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="events-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
                Календар подій
              </h2>
              <p className="text-gray-700 mt-2">
                Плейсхолдер календаря. Дані подій будуть замінені офіційним списком від професора.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200"
                onClick={() =>
                  setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
                }
                aria-label="Попередній місяць"
              >
                ←
              </button>
              <div className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 font-semibold capitalize">
                {monthLabel}
              </div>
              <button
                type="button"
                className="px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200"
                onClick={() =>
                  setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
                }
                aria-label="Наступний місяць"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2 text-xs text-gray-600">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"].map((d) => (
              <div key={d} className="text-center font-semibold">
                {d}
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2">
            {days.map((d) => {
              const inMonth = d.getMonth() === viewMonth.getMonth();
              const dateKey = d.toISOString().slice(0, 10);
              const dayEvents = byDay.get(dateKey) ?? [];
              const isToday = toDateOnly(new Date().toISOString()) === dateKey;
               const isSelected = selectedDate === dateKey;

              return (
                <button
                  key={dateKey}
                  type="button"
                  onClick={() => setSelectedDate((prev) => (prev === dateKey ? null : dateKey))}
                  className={`min-h-[86px] rounded-lg border p-2 text-left ${
                    inMonth ? "bg-white border-gray-200" : "bg-gray-50 border-gray-100"
                  } ${isToday ? "ring-2 ring-blue-200" : ""} ${
                    isSelected ? "border-[#1e40af] ring-1 ring-[#1e40af]" : ""
                  }`}
                  aria-pressed={isSelected}
                  aria-label={
                    dayEvents.length
                      ? `${d.toLocaleDateString("uk-UA", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}. Подій: ${dayEvents.length}`
                      : d.toLocaleDateString("uk-UA", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                  }
                >
                  <div
                    className={`text-xs font-semibold ${
                      inMonth ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {d.getDate()}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1" aria-hidden={dayEvents.length === 0}>
                    {dayEvents.slice(0, 3).map((ev, idx) => {
                      const styles = EVENT_TYPE_STYLES[ev.type];
                      return (
                        <span
                          key={`${ev.date}-${idx}`}
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: styles.dotColor }}
                          title={ev.title}
                        />
                      );
                    })}
                    {dayEvents.length > 3 ? (
                      <span className="text-[11px] text-gray-600">+{dayEvents.length - 3}</span>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-900">Події факультету</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 text-xs rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50"
                  onClick={() => setSelectedDate(null)}
                >
                  Всі події
                </button>
                <span className="text-xs text-gray-500">
                  {selectedDate
                    ? `Обрана дата: ${new Date(selectedDate).toLocaleDateString("uk-UA", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}`
                    : "Показано всі доступні події"}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
              {filteredEvents.map((ev) => {
                const styles = EVENT_TYPE_STYLES[ev.type];
                const dateLabel = new Date(ev.date).toLocaleDateString("uk-UA", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
                return (
                <article
                  key={ev.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                  role="listitem"
                  onClick={() => setSelectedDate(toDateOnly(ev.date))}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-gray-600">{dateLabel}</div>
                      <h4 className="mt-1 text-sm font-bold text-gray-900">{ev.title}</h4>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-[11px] font-semibold ${styles.labelBg} ${styles.labelText}`}
                    >
                      {ev.type === "conference"
                        ? "Наукова подія"
                        : ev.type === "student"
                        ? "Студентська активність"
                        : ev.type === "lecture"
                        ? "Лекція / воркшоп"
                        : "Святкування"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-gray-700 leading-relaxed">{ev.description}</p>
                  {ev.location ? (
                    <p className="mt-1 text-[11px] text-gray-500">Локація: {ev.location}</p>
                  ) : null}
                  {ev.url ? (
                    <div className="mt-2">
                      <Link
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#1e40af] hover:text-[#1e3a8a] underline underline-offset-4"
                      >
                        Деталі
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

