export type StudyLevel = "bachelor" | "master" | "phd";

export type Program = {
  id: string;
  level: StudyLevel;
  code?: string;
  name: string;
  description: string;
  careers: string[];
  techStack: string[];
  programUrl?: string;
  catalogUrl?: string;
  priority: number;
};

export type Outcome = {
  id: string;
  level?: StudyLevel;
  name: string;
  programName?: string;
  graduationYear?: string;
  headline: string;
  company?: string;
  location?: string;
  quote?: string;
  achievements?: string[];
  priority: number;
  programUrl?: string;
};

export type EventItem = {
  id: string;
  title: string;
  startDate: string; // ISO date (YYYY-MM-DD) or datetime
  endDate?: string;  // ISO date (YYYY-MM-DD) or datetime
  location?: string;
  url?: string;
  level?: StudyLevel;
  priority: number;
};

export type LicenseInfo = {
  id: string;
  title: string;
  issuedBy?: string;
  licenseNumber?: string;
  validFrom?: string; // ISO date
  validTo?: string;   // ISO date
  details?: string;
  sourceUrl?: string;
  priority: number;
};

export type OfficialData = {
  version: number;
  lastUpdatedIso: string;
  programs: Program[];
  outcomes: Outcome[];
  events: EventItem[];
  licenses: LicenseInfo[];
};

