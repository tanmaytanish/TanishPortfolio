import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES, ABOUT_TEXT } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-all duration-300 hover:scale-[1.05]"
      >
        <div className="bg-tertiary/40 backdrop-blur-md rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-white/10">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/5 border border-white/10 shadow-inner">
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center mt-4">
            {title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {ABOUT_TEXT}
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
