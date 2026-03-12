import { motion, AnimatePresence } from "framer-motion";
import { logo_tanish as logo } from "../assets";

type LoadingScreenProps = {
  isLoading: boolean;
  progress: number;
};

export const LoadingScreen = ({ isLoading, progress }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
        >
          {/* Glow effect behind logo */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#915eff]/20 blur-[100px]" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-12"
          >
            <img
              src={logo}
              alt="Tanish"
              className="w-20 h-20 object-contain"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-white text-4xl sm:text-5xl font-bold tracking-wider mb-10"
          >
            <span className="text-[#915eff]">T</span>anish
          </motion.h1>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-48 sm:w-64"
          >
            <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #915eff, #ec008c, #915eff)",
                  backgroundSize: "200% 100%",
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${progress}%`,
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  width: { duration: 0.3, ease: "easeOut" },
                  backgroundPosition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="mt-8 text-secondary text-xs sm:text-sm tracking-[0.3em] uppercase"
          >
            Loading Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
