"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function ClientHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Header />;
}

