import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    }
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

  return (
    <section className="relative min-h-screen" id="projects">
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">Projects</span>
            </h1>
            <p className="text-stone-200 text-lg md:text-xl max-w-3xl mx-auto">
              A collection of my recent work showcasing web development, design, and creative problem-solving skills.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={projectCardVariants}
                whileHover="hover"
                className="group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
                
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                <div className="relative p-5 space-y-3">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <p className="text-stone-200 text-sm line-clamp-2">{project.description}</p>

                  <div className="flex gap-2">
                    {/* GitHub Link */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg overflow-hidden text-sm"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-orange-400/20 to-pink-400/20 group-hover:opacity-70 transition-opacity duration-300" />
                      <span className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                      <span className="relative">GitHub</span>
                      <FaGithub className="relative" />
                    </motion.a>

                    {/* Live Demo Link */}
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg overflow-hidden text-sm"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-orange-400/20 to-pink-400/20 group-hover:opacity-70 transition-opacity duration-300" />
                      <span className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                      <span className="relative">Live Demo</span>
                      <FaExternalLinkAlt className="relative" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;