import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card with Parallax
const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  link,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the image inside the card
  const x = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div
      ref={ref}
      className="bg-tertiary p-4 sm:p-5 rounded-2xl w-[300px] sm:w-[380px] lg:w-[650px] shrink-0 flex flex-col lg:flex-row gap-4 sm:gap-5 group"
    >
      <div className="relative w-full lg:w-[45%] h-[150px] sm:h-[180px] lg:h-auto min-h-[180px] lg:min-h-[220px] overflow-hidden rounded-2xl shrink-0">
        <motion.img
          style={{ x }}
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-125"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {link && (
            <div
              onClick={() => window.open(link, "_blank", "noreferrer")}
              className="bg-black/80 backdrop-blur-sm border lg:border-2 border-[#915eff] hover:bg-[#915eff] w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 shadow-lg shadow-black/50 overflow-hidden group/btn"
            >
              <img
                src={preview}
                alt="Live Site"
                title="Live Site"
                className="w-1/2 h-1/2 object-contain filter group-hover/btn:brightness-200"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <div>
          <h3 className="text-white font-bold text-[18px] sm:text-[22px] transition-colors group-hover:text-[#915eff]">{title}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] line-clamp-3 lg:line-clamp-none leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <p
              key={`Tag-${i}`}
              className={cn(
                "bg-white/10 border border-white/20 text-white-100 text-[12px] font-medium px-3 py-1 rounded-full backdrop-blur-sm",
              )}
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Works
export const Works = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current && trackRef.current.parentElement) {
        // Measure strictly the inner track's full width
        const trackWidth = trackRef.current.scrollWidth;
        // Measure strictly the visible container's width
        const viewportWidth = trackRef.current.parentElement.clientWidth;
        
        const scrollDistance = trackWidth - viewportWidth;
        // Ensure scroll distance is never negative
        setScrollRange(scrollDistance > 0 ? scrollDistance : 0);
      }
    };
    
    // Wait for a tick to ensure all images and CSS layout constraints are fully applied
    const timeoutId = setTimeout(updateRange, 100);
    window.addEventListener("resize", updateRange);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateRange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll (0 to 1) perfectly into the calculated pixel range
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <section className={cn(styles.padding, "sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-[80px] sm:pt-[100px]")}>
        <div id="projects" className="absolute top-0" />

        {/* Title & Info */}
        <div className="max-w-7xl mx-auto w-full mb-4 sm:mb-8">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("up", "spring", 0.1, 1)}
              className="mt-2 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]"
            >
              Following projects showcases my skills and experience through
              real-world examples of my work.
            </motion.p>
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <div className="w-full flex items-center py-4 sm:py-6 overflow-visible">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 sm:gap-8 px-4 sm:px-10 w-max items-center">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={`project-${i}`} index={i} {...project} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
