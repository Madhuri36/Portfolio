import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import hero from "../assets/hero-img.webp";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const downloadVariants = {
    downloading: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen" id="home">
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-full md:w-1/2 space-y-8 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-stone-200 text-lg md:text-xl mb-2 py-5">
                Hi, I am
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Sai Madhuri
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-3xl text-white"
            >
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "OS Contributor",
                  2000,
                ]}
                speed={40}
                wrapper="span"
                repeat={Infinity}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
            >
              Passionate about creating beautiful, functional, and user-friendly
              digital experiences. Specializing in modern web technologies and
              creative problem-solving.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-6 justify-center md:justify-start">
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/sai-madhuri-bodapati/",
                  hoverColor: "hover:text-yellow-300",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/Madhuri36",
                  hoverColor: "hover:text-orange-400",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/sai.madhurii?igsh=MWM1eGFpZ284N2s2Yg==",
                  hoverColor: "hover:text-pink-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-white ${social.hoverColor} text-2xl transition-colors duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="group relative px-6 py-3 text-white rounded-lg overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-orange-400/20 to-pink-400/20 group-hover:opacity-70 transition-opacity duration-300" />
                <span className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                <span className="relative">Contact Me</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                onClick={handleDownload}
                className="group relative px-6 py-3 text-white rounded-lg overflow-hidden flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-orange-400/20 to-yellow-300/20 group-hover:opacity-70 transition-opacity duration-300" />
                <span className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                <span className="relative">Download CV</span>
                <motion.span
                  className="relative"
                  animate={isDownloading ? "downloading" : ""}
                  variants={downloadVariants}
                >
                  <FaDownload
                    className={`${isDownloading ? "animate-bounce" : ""}`}
                  />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="w-full md:w-1/2 flex justify-center" variants={imageVariants}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full opacity-30 backdrop-blur-3xl" />
              <img
                src={hero}
                alt="Profile"
                className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl border border-white/10 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;