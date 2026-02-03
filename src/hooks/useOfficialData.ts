"use client";

import { useEffect, useMemo, useState } from "react";
import type { OfficialData } from "@/types/official-data";
import { officialDataDefaults } from "@/lib/official-data-defaults";
import { getOfficialDataClient } from "@/lib/official-data-storage";

export function useOfficialData(): OfficialData {
  const [data, setData] = useState<OfficialData>(officialDataDefaults);

  useEffect(() => {
    setData(getOfficialDataClient());
  }, []);

  return useMemo(() => data, [data]);
}

