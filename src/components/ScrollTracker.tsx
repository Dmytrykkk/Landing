"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/analytics";

export default function ScrollTracker() {
  useEffect(() => {
    const cleanup = trackScrollDepth();
    return cleanup;
  }, []);

  return null;
}
