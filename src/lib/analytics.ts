type GtagConfig = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: GtagConfig
    ) => void;
  }
}

export function trackScrollDepth() {
  if (typeof window === "undefined") return;

  const depths = [25, 50, 75, 100];
  const tracked: Record<number, boolean> = {};

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    depths.forEach((depth) => {
      if (scrollPercent >= depth && !tracked[depth]) {
        tracked[depth] = true;
        if (window.gtag) {
          window.gtag("event", "scroll", {
            event_category: "engagement",
            event_label: `scroll_depth_${depth}`,
            value: depth,
          });
        }
      }
    });
  };

  let ticking = false;
  const throttledScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", throttledScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", throttledScroll);
  };
}
