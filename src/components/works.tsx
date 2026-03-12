import { useRef } from "react";
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
      className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-[320px] shrink-0"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
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
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={preview}
                alt="Live Site"
                title="Live Site"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px] line-clamp-3">
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
  );
};

// Works
export const Works = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll (0 to 1) into horizontal translation
  // We estimate the percentage based on number of projects
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={targetRef} className="relative h-[500vh]">
      <section className={cn(styles.padding, "sticky top-0 h-screen overflow-hidden flex flex-col justify-center")}>
        <div id="projects" className="absolute top-0" />

        {/* Title & Info */}
        <div className="max-w-7xl mx-auto w-full mb-10">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("up", "spring", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
            Following projects showcases my skills and experience through
            real-world examples of my work.
            </motion.p>
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <div className="flex items-center">
          <motion.div style={{ x }} className="flex gap-10 px-10">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={`project-${i}`} index={i} {...project} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
