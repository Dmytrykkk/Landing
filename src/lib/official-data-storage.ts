import type { OfficialData } from "@/types/official-data";
import { OFFICIAL_DATA_VERSION, officialDataDefaults } from "@/lib/official-data-defaults";

const STORAGE_KEY = "officialData";

function safeParse(json: string): unknown {
  try {
    return JSON.parse(json) as unknown;
  } catch {
    return null;
  }
}

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

// Minimal validation: ensure expected top-level fields exist.
export function coerceOfficialData(input: unknown): OfficialData | null {
  if (!isObject(input)) return null;
  const version = typeof input.version === "number" ? input.version : OFFICIAL_DATA_VERSION;
  const lastUpdatedIso =
    typeof input.lastUpdatedIso === "string" ? input.lastUpdatedIso : new Date().toISOString();

  const programs = Array.isArray(input.programs) ? (input.programs as OfficialData["programs"]) : [];
  const outcomes = Array.isArray(input.outcomes) ? (input.outcomes as OfficialData["outcomes"]) : [];
  const events = Array.isArray(input.events) ? (input.events as OfficialData["events"]) : [];
  const licenses = Array.isArray(input.licenses) ? (input.licenses as OfficialData["licenses"]) : [];

  return { version, lastUpdatedIso, programs, outcomes, events, licenses };
}

export function getOfficialDataClient(): OfficialData {
  if (typeof window === "undefined") return officialDataDefaults;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return officialDataDefaults;
  const parsed = safeParse(raw);
  const coerced = coerceOfficialData(parsed);
  return coerced ?? officialDataDefaults;
}

export function setOfficialDataClient(next: OfficialData) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function resetOfficialDataClient() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

