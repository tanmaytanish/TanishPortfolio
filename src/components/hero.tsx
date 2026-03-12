import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { HERO_CONTENT } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

// Hero
export const Hero = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full h-screen mx-auto flex flex-col lg:flex-row items-center justify-between"
    >
      {/* Text Content Area */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={cn(
          styles.paddingX,
          "w-full lg:w-1/2 flex flex-row items-start gap-5 pt-[120px] lg:pt-0 z-10",
        )}
      >
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Intro Text */}
        <div>
          <motion.h1 variants={textVariant(0.1)} className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">Tanish</span>
          </motion.h1>
          <motion.p variants={textVariant(0.3)} className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            {HERO_CONTENT}
          </motion.p>
        </div>
      </motion.div>

      {/* 3D Computer Model Area */}
      <motion.div 
        variants={fadeIn("left", "tween", 0.5, 1)}
        className="w-full lg:w-1/2 h-[50vh] lg:h-full relative"
      >
        <ComputersCanvas />
      </motion.div>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </motion.section>
  );
};
