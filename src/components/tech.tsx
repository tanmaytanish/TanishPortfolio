import { lazy, Suspense } from "react";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

const BallCanvas = lazy(() => import("./canvas/ball"));

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Suspense fallback={<div className="w-full h-full rounded-full bg-tertiary animate-pulse" />}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
