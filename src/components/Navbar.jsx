import React from "react";
import logo from "../assets/TanishLogo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4 },
  },
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" width={50} height={33} />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {[
          {
            href: "https://www.linkedin.com/in/tanish-tanmay-sahoo/",
            icon: <FaLinkedin />,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/tanmaytanish",
            icon: <FaGithub />,
            label: "GitHub",
          },
          {
            href: "https://www.instagram.com/_.tanishhhh.__/", // update with your Instagram
            icon: <FaInstagram />,
            label: "Instagram",
          },
          {
            href: "https://twitter.com/your-username", // update with your Twitter/X
            icon: <FaSquareXTwitter />,
            label: "Twitter",
          },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={iconVariants}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
