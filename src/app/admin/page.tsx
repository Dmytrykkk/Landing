"use client";

import { useMemo, useState } from "react";
import type { OfficialData } from "@/types/official-data";
import { officialDataDefaults, OFFICIAL_DATA_VERSION } from "@/lib/official-data-defaults";
import {
  coerceOfficialData,
  getOfficialDataClient,
  resetOfficialDataClient,
  setOfficialDataClient,
} from "@/lib/official-data-storage";

type TabKey = "programs" | "outcomes" | "events" | "licenses" | "raw";

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminPage() {
  const [tab, setTab] = useState<TabKey>("programs");
  const [data, setData] = useState<OfficialData>(() => getOfficialDataClient());
  const [message, setMessage] = useState<string>("");

  const sorted = useMemo(() => {
    return {
      programs: [...data.programs].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)),
      outcomes: [...data.outcomes].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)),
      events: [...data.events].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)),
      licenses: [...data.licenses].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)),
    };
  }, [data]);

  const save = (next: OfficialData) => {
    const finalData: OfficialData = {
      ...next,
      version: OFFICIAL_DATA_VERSION,
      lastUpdatedIso: new Date().toISOString(),
    };
    setOfficialDataClient(finalData);
    setData(finalData);
    setMessage("Збережено в браузері (localStorage). Оновіть головну сторінку, щоб побачити зміни.");
    window.setTimeout(() => setMessage(""), 5000);
  };

  const onUploadFile = async (file: File) => {
    const text = await file.text();
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      setMessage("Помилка: файл не є валідним JSON.");
      return;
    }
    const coerced = coerceOfficialData(parsed);
    if (!coerced) {
      setMessage("Помилка: структура даних не схожа на OfficialData.");
      return;
    }
    save(coerced);
  };

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Admin: Official Data</h1>
          <p className="text-gray-700 mt-2">
            Це тимчасова адмін-сторінка для завантаження даних професора та керування пріоритетами.
            Дані зберігаються <strong>локально в браузері</strong> (для демо), без бази даних.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <span className="text-sm font-semibold text-gray-800">Upload JSON</span>
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void onUploadFile(f);
                  e.currentTarget.value = "";
                }}
              />
            </label>
            <button
              type="button"
              className="px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a]"
              onClick={() => downloadJson("official-data.json", data)}
            >
              Download current JSON
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50"
              onClick={() => downloadJson("official-data.defaults.json", officialDataDefaults)}
            >
              Download defaults
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50"
              onClick={() => {
                resetOfficialDataClient();
                setData(officialDataDefaults);
                setMessage("Скинуто до дефолтних плейсхолдерів.");
              }}
            >
              Reset local overrides
            </button>
          </div>

          {message ? (
            <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-sm">
              {message}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-2">
            {(
              [
                ["programs", "Programs"],
                ["outcomes", "Outcomes"],
                ["events", "Events"],
                ["licenses", "Licenses"],
                ["raw", "Raw JSON"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                  tab === k
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setTab(k)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {tab === "programs" ? (
              <div className="space-y-3">
                {sorted.programs.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="flex-grow">
                      <div className="font-bold text-gray-900">{p.name}</div>
                      <div className="text-xs text-gray-600">
                        {p.level.toUpperCase()}
                        {p.code ? ` • ${p.code}` : ""}
                      </div>
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                      <span className="text-gray-700">Priority</span>
                      <input
                        className="w-24 px-2 py-1 border border-gray-300 rounded"
                        type="number"
                        value={p.priority ?? 0}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setData((prev) => ({
                            ...prev,
                            programs: prev.programs.map((x) => (x.id === p.id ? { ...x, priority: v } : x)),
                          }));
                        }}
                      />
                    </label>
                  </div>
                ))}
                <button
                  type="button"
                  className="px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a]"
                  onClick={() => save(data)}
                >
                  Save priorities
                </button>
              </div>
            ) : null}

            {tab === "outcomes" ? (
              <div className="space-y-3">
                {sorted.outcomes.map((o) => (
                  <div
                    key={o.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="flex-grow">
                      <div className="font-bold text-gray-900">{o.headline}</div>
                      <div className="text-xs text-gray-600">{o.name}</div>
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                      <span className="text-gray-700">Priority</span>
                      <input
                        className="w-24 px-2 py-1 border border-gray-300 rounded"
                        type="number"
                        value={o.priority ?? 0}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setData((prev) => ({
                            ...prev,
                            outcomes: prev.outcomes.map((x) => (x.id === o.id ? { ...x, priority: v } : x)),
                          }));
                        }}
                      />
                    </label>
                  </div>
                ))}
                <button
                  type="button"
                  className="px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a]"
                  onClick={() => save(data)}
                >
                  Save priorities
                </button>
              </div>
            ) : null}

            {tab === "events" ? (
              <div className="space-y-3">
                {sorted.events.map((ev) => (
                  <div
                    key={ev.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="flex-grow">
                      <div className="font-bold text-gray-900">{ev.title}</div>
                      <div className="text-xs text-gray-600">
                        {ev.startDate}
                        {ev.location ? ` • ${ev.location}` : ""}
                      </div>
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                      <span className="text-gray-700">Priority</span>
                      <input
                        className="w-24 px-2 py-1 border border-gray-300 rounded"
                        type="number"
                        value={ev.priority ?? 0}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setData((prev) => ({
                            ...prev,
                            events: prev.events.map((x) => (x.id === ev.id ? { ...x, priority: v } : x)),
                          }));
                        }}
                      />
                    </label>
                  </div>
                ))}
                <button
                  type="button"
                  className="px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a]"
                  onClick={() => save(data)}
                >
                  Save priorities
                </button>
              </div>
            ) : null}

            {tab === "licenses" ? (
              <div className="space-y-3">
                {sorted.licenses.map((lic) => (
                  <div
                    key={lic.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="flex-grow">
                      <div className="font-bold text-gray-900">{lic.title}</div>
                      <div className="text-xs text-gray-600">
                        {lic.licenseNumber ? `№ ${lic.licenseNumber}` : "Номер буде додано"}
                      </div>
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                      <span className="text-gray-700">Priority</span>
                      <input
                        className="w-24 px-2 py-1 border border-gray-300 rounded"
                        type="number"
                        value={lic.priority ?? 0}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setData((prev) => ({
                            ...prev,
                            licenses: prev.licenses.map((x) => (x.id === lic.id ? { ...x, priority: v } : x)),
                          }));
                        }}
                      />
                    </label>
                  </div>
                ))}
                <button
                  type="button"
                  className="px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a]"
                  onClick={() => save(data)}
                >
                  Save priorities
                </button>
              </div>
            ) : null}

            {tab === "raw" ? (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <textarea
                  className="w-full min-h-[420px] font-mono text-xs p-3 border border-gray-200 rounded"
                  value={JSON.stringify(data, null, 2)}
                  onChange={(e) => {
                    const parsed = coerceOfficialData(() => {
                      try {
                        return JSON.parse(e.target.value) as unknown;
                      } catch {
                        return null;
                      }
                    })();
                    if (parsed) setData(parsed);
                  }}
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a]"
                    onClick={() => save(data)}
                  >
                    Save JSON
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

