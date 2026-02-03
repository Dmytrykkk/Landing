"use client";

import { useMemo, useState, useEffect } from "react";
import type { OfficialData } from "@/types/official-data";
import { officialDataDefaults } from "@/lib/official-data-defaults";
import { getOfficialDataClient } from "@/lib/official-data-storage";

export function useOfficialData(): OfficialData {
  const [data, setData] = useState<OfficialData>(officialDataDefaults);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const clientData = getOfficialDataClient();
      setData(clientData);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return useMemo(() => data, [data]);
}

