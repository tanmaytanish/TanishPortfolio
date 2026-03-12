import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Flat icon fallback for mobile (avoids WebGL context exhaustion)
const TechIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="w-16 h-24 sm:w-24 sm:h-32 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-transform hover:scale-125 hover:-translate-y-2 duration-300 tech-icon cursor-pointer z-10 hover:z-50 relative group">
    <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center p-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(145,94,255,0.8)] transition-all">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>
    <span className="text-secondary text-[10px] sm:text-[14px] font-medium text-center leading-tight transition-all group-hover:text-white capitalize group-hover:font-semibold">{name}</span>
  </div>
);

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div
        className="w-full relative flex justify-center items-center h-[250px] sm:h-[300px] overflow-hidden tech-track"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <div className="relative w-full h-full z-0 pointer-events-none">
          {TECHNOLOGIES.map((technology, index) => {
            // Stagger items evenly across the 45s animation loop
            const delay = -(60 * (index / TECHNOLOGIES.length));
            return (
              <div
                key={technology.name}
                className="animate-curve-scroll flex justify-center items-center pointer-events-auto"
                style={{
                  animationDelay: `${delay}s`,
                }}
              >
                <TechIcon name={technology.name} icon={technology.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

