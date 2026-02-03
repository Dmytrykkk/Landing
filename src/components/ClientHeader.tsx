"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function ClientHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid SSR/client initial-render mismatch by rendering only after mount.
  if (!mounted) return null;

  return <Header />;
}

