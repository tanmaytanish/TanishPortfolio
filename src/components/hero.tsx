import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { HERO_CONTENT } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

type HeroProps = {
  onModelLoaded?: () => void;
};

// Hero
export const Hero = ({ onModelLoaded }: HeroProps) => {
  const name = "Tanish";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isTyping) {
      if (displayText.length < name.length) {
        timeout = setTimeout(() => {
          setDisplayText(name.slice(0, displayText.length + 1));
        }, 150); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500); // Pause at end before deleting
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(name.slice(0, displayText.length - 1));
        }, 100); // Deleting speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500); // Pause before typing again
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping]);

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
          <motion.h1 
            variants={textVariant(0.1)} 
            className={cn(styles.heroHeadText, "text-white flex flex-col items-start")}
          >
            Hi, I'm
            <span className="flex font-bold items-center text-[#915eff]">
              <span>{displayText}</span>
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[4px] h-[0.9em] bg-[#915eff] ml-1 rounded-sm"
              />
            </span>
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
        <ComputersCanvas onModelLoaded={onModelLoaded} />
      </motion.div>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
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
