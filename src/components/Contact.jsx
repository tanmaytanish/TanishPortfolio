import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tight space-y-6">
        {/* Address */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-2 text-lg"
        >
          <HiOutlineLocationMarker className="text-xl text-blue-500" />
          <span>{CONTACT.address}</span>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-2 text-lg"
        >
          <HiOutlinePhone className="text-xl text-green-500" />
          <span>{CONTACT.phoneNo}</span>
        </motion.div>

        {/* Email */}
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:tanishtech4@gmail.com?subject=Hello%20Tanish&body=I%20would%20like%20to%20connect%20with%20you."
          className="inline-flex items-center justify-center gap-2 text-lg border-b hover:text-blue-500 transition duration-300"
        >
          <HiOutlineMail className="text-xl text-red-500" />
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
