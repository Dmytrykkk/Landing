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
      className={`transition-all duration-700 ease-out ${
        mounted && isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
