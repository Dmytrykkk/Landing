/**
 * Institutional and project partners for logo grid.
 * Verified from: https://www.kspu.edu/Legislation/memorandums.aspx, https://www.kspu.edu/DInternatRelations.aspx
 * @see lib/content-sources.ts
 */
export type PartnerItem = {
  name: string;
  url: string;
  /** Path to logo image in /public or external URL. Empty = use name as fallback. */
  logoUrl?: string;
};

export const partners: PartnerItem[] = [
  {
    name: "Харківський кластер інформаційних технологій",
    url: "https://www.kspu.edu/Legislation/memorandums.aspx",
    logoUrl: "",
  },
  {
    name: "Ідея Банк",
    url: "https://www.kspu.edu/Legislation/memorandums.aspx",
    logoUrl: "",
  },
  {
    name: "Харківський національний університет імені В.Н. Каразіна",
    url: "https://www.university.karazin.ua",
    logoUrl: "",
  },
  {
    name: "Чернівецький національний університет",
    url: "https://www.chnu.edu.ua",
    logoUrl: "",
  },
  {
    name: "Прикарпатський національний університет імені В. Стефаника",
    url: "https://www.pnu.edu.ua",
    logoUrl: "",
  },
  {
    name: "Інститут цифровізації освіти НАПН України",
    url: "https://www.kspu.edu/Legislation/memorandums.aspx",
    logoUrl: "",
  },
  {
    name: "Південноукраїнський педагогічний університет імені К.Д. Ушинського",
    url: "https://www.kspu.edu/Legislation/memorandums.aspx",
    logoUrl: "",
  },
  {
    name: "Університет короля Данила",
    url: "https://www.kspu.edu/",
    logoUrl: "",
  },
];
