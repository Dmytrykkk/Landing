"use client";

import { useMemo, useState } from "react";
import type { OfficialData } from "@/types/official-data";
import { officialDataDefaults } from "@/lib/official-data-defaults";
import { getOfficialDataClient } from "@/lib/official-data-storage";

export function useOfficialData(): OfficialData {
  const [data] = useState<OfficialData>(() => {
    if (typeof window === "undefined") return officialDataDefaults;
    return getOfficialDataClient();
  });

  return useMemo(() => data, [data]);
}

