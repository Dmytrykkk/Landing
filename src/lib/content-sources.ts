/**
 * Content validation sources for the landing page.
 * Use this structure to verify and update content; all copy and data should be traceable to these sources.
 *
 * @see https://www.kspu.edu/
 * @see https://ksu24.kspu.edu/
 * @see https://ksuonline.kspu.edu/
 * @see https://www.kspu.edu/About/Faculty/FPhysMathemInformatics.aspx
 * @see https://www.kspu.edu/Education/EduPrograms.aspx
 * @see https://www.kspu.edu/About/Graduates.aspx
 * @see https://www.kspu.edu/Legislation/memorandums.aspx
 */

export const CONTENT_SOURCES = {
  /** Main university website (structure, links, news) */
  officialSite: "https://www.kspu.edu/",
  /** Digital ecosystem / LMS */
  ksu24: "https://ksu24.kspu.edu/",
  /** Distance learning platform (Moodle-based) */
  ksuOnline: "https://ksuonline.kspu.edu/",
  /** Faculty of Computer Science, Physics and Mathematics */
  facultyPage: "https://www.kspu.edu/About/Faculty/FPhysMathemInformatics.aspx",
  /** Educational programs list */
  eduPrograms: "https://www.kspu.edu/Education/EduPrograms.aspx",
  /** Alumni stories and graduates */
  graduates: "https://www.kspu.edu/About/Graduates.aspx",
  /** Memorandums and cooperation agreements */
  memorandums: "https://www.kspu.edu/Legislation/memorandums.aspx",
  /** International relations and projects */
  internationalRelations: "https://www.kspu.edu/DInternatRelations.aspx",
  /** Social / professional profiles (for alumni verification) */
  linkedIn: "https://www.linkedin.com/school/kherson-state-university",
} as const;

export type ContentSourceKey = keyof typeof CONTENT_SOURCES;
