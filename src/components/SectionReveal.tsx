"use client";

import { useInView } from "@/hooks/useInView";
import { ReactNode, useEffect, useState } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

export default function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ease-out ${
        mounted && isInView
          ? "translate-y-0"
          : "translate-y-6 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
