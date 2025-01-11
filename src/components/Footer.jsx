import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative py-6 sm:py-8 mt-auto bg-black/40 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center space-y-3 sm:space-y-4"
        >
          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="text-stone-300 text-xs sm:text-sm md:text-base text-center"
          >
            <span className="block sm:inline">© 2025 Sai Madhuri Bodapati</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline mt-1 sm:mt-0">All rights reserved.</span>
          </motion.div>

          {/* Made with Love */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-stone-300"
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex items-center"
            >
              <FaHeart className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;