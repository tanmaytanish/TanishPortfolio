import { lazy, Suspense, useEffect, useState } from "react";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

const BallCanvas = lazy(() => import("./canvas/ball"));

// Flat icon fallback for mobile (avoids WebGL context exhaustion)
const TechIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="w-28 h-28 flex flex-col items-center justify-center gap-2">
    <div className="w-16 h-16 rounded-full bg-tertiary flex items-center justify-center p-3 border border-white/10 shadow-lg">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>
    <span className="text-secondary text-[11px] text-center leading-tight">{name}</span>
  </div>
);

// Technologies
export const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {isMobile ? (
              <TechIcon name={technology.name} icon={technology.icon} />
            ) : (
              <Suspense fallback={<div className="w-full h-full rounded-full bg-tertiary animate-pulse" />}>
                <BallCanvas icon={technology.icon} />
              </Suspense>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

