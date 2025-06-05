import React from "react";
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiExpress, SiDocker, SiKubernetes} from "react-icons/si";
import {DiRedis} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaAws} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            // ease: "easeInOut"
            ease: "linear",
        },
    },
});

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)}  className="p-4">
                    <SiExpress className="text-7xl text-gray-700" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <FaNodeJs className="text-7xl text-green-700" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <FaAws className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
                    <SiDocker className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <SiKubernetes className="text-7xl text-blue-700" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
