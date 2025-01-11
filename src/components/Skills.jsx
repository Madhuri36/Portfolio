import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaWindows
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiEjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFigma,
  SiCanva,
  SiNpm
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "C", icon: SiC, color: "#A8B9CC", category: "language" },
    { name: "C++", icon: SiCplusplus, color: "#00599C", category: "language" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "frontend" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "frontend" },
    { name: "Java", icon: FaJava, color: "#007396", category: "language" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "language" },
    { name: "Python", icon: FaPython, color: "#3776AB", category: "language" },
    { name: "Windows Terminal", icon: FaWindows, color: "#0078D7", category: "tool" },
    { name: "Node.js", icon: FaNode, color: "#339933", category: "backend" },
    { name: "React", icon: FaReact, color: "#61DAFB", category: "frontend" },
    { name: "EJS", icon: SiEjs, color: "#A91E50", category: "frontend" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "database" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "database" },
    { name: "Canva", icon: SiCanva, color: "#00C4CC", category: "design" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "design" },
    { name: "Git", icon: FaGitAlt, color: "#F05032", category: "tool" },
    { name: "GitHub", icon: FaGithub, color: "#181717", category: "tool" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
    { name: "NPM", icon: SiNpm, color: "#CB3837", category: "tool" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="relative py-16 px-6" id="skills">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">Skills</span>
            </h1>
            <p className="text-stone-200 text-lg max-w-2xl mx-auto">
              A collection of technologies I've worked with and passionate about
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 md:gap-8 px-12"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative flex flex-col items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="relative p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 
                           hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
                >
                  <skill.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: skill.color }} />
                  
                  {/* Hover Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 
                                transition-all duration-300 z-10">
                    <div className="bg-black/90 text-white text-xs px-2.5 py-1.5 rounded-md whitespace-nowrap 
                                  border border-white/20 backdrop-blur-sm">
                      {skill.name}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
