"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { EventItem } from "@/types/official-data";
import { useOfficialData } from "@/hooks/useOfficialData";

function toDateOnly(iso: string): string {
  // Accept YYYY-MM-DD or full ISO; normalize to YYYY-MM-DD for grouping.
  if (!iso) return "";
  return iso.length >= 10 ? iso.slice(0, 10) : iso;
}

function monthStart(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export default function EventsCalendar() {
  const { events } = useOfficialData();
  const [viewMonth, setViewMonth] = useState(() => new Date());

  const items = useMemo(() => {
    const sorted = [...events].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
    return sorted;
  }, [events]);

  const start = monthStart(viewMonth);

  const byDay = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    for (const ev of items) {
      const key = toDateOnly(ev.startDate);
      if (!key) continue;
      const arr = map.get(key) ?? [];
      arr.push(ev);
      map.set(key, arr);
    }
    for (const [k, arr] of map.entries()) {
      arr.sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
      map.set(k, arr);
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

              return (
                <div
                  key={dateKey}
                  className={`min-h-[86px] rounded-lg border p-2 ${
                    inMonth ? "bg-white border-gray-200" : "bg-gray-50 border-gray-100"
                  } ${isToday ? "ring-2 ring-blue-200" : ""}`}
                >
                  <div className={`text-xs font-semibold ${inMonth ? "text-gray-900" : "text-gray-400"}`}>
                    {d.getDate()}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayEvents.slice(0, 2).map((ev) => (
                      <div
                        key={ev.id}
                        className="text-[11px] leading-snug bg-blue-50 border border-blue-100 text-blue-900 rounded px-1.5 py-1"
                        title={ev.title}
                      >
                        {ev.url ? (
                          <Link
                            href={ev.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2"
                          >
                            {ev.title}
                          </Link>
                        ) : (
                          ev.title
                        )}
                      </div>
                    ))}
                    {dayEvents.length > 2 ? (
                      <div className="text-[11px] text-gray-600">+{dayEvents.length - 2} ще</div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">Найближчі події</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
              {items.slice(0, 6).map((ev) => (
                <article
                  key={ev.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                  role="listitem"
                >
                  <div className="text-sm font-bold text-gray-900">{ev.title}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {toDateOnly(ev.startDate)}
                    {ev.location ? ` • ${ev.location}` : ""}
                  </div>
                  {ev.url ? (
                    <div className="mt-2">
                      <Link
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#1e40af] hover:text-[#1e3a8a] underline underline-offset-4"
                      >
                        Деталі
                      </Link>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

