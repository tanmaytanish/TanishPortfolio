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
        className="w-full rounded-[20px] shadow-card transition-all duration-300 hover:scale-[1.05]"
      >
        <div className="bg-[#1a1a2e] rounded-[20px] py-10 px-12 min-h-[280px] flex justify-center items-center flex-col border border-[#2a2a4a]">
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-6" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <div className="w-10 h-[3px] bg-[#4a90d9] rounded-full mt-5" />
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
