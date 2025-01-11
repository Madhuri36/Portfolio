// import { motion } from "framer-motion";
// import { section } from "framer-motion/client";
// import project1 from "../assets/projects1.webp";
// import { PROJECTS } from "../constants";

// const Projects = () => {
//   const projectVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       rotate: -40,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         type: "spring",
//         bounce: 0.4,
//       },
//     },
    
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative min-h-screen py-20 px-6" id="projects">
//       <motion.div variants={itemVariants} className="text-center space-y-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-white py-5">
//           My{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">
//             Projects
//           </span>
//         </h1>
//       </motion.div>
//       {/* <div className="h-1 w-20 mb-8 bg-white"></div> */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6 overflow-hidden">
//         {PROJECTS.map((project, index) => (
//           <motion.div
//             key={index}
//             className="relative rounded-lg overflow-hidden h-[300px] transition transform"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={projectVariants}
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
//             />
//             <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
//               <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
//               <div className="flex flex-col justify-between">
//                 <p className="mb-4 flex-grow text-2xl">
//                   {project.description}
//                 </p>
//                 <a href={project.link}
//                 target="_blank"
//                 rel="noopener norefferer"
//                 className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center">
//                     View on GitHub

//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
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
      <div className="relative z-10 container mx-auto px-6 py-10 md:py-20">
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

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg overflow-hidden text-sm"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-orange-400/20 to-pink-400/20 group-hover:opacity-70 transition-opacity duration-300" />
                    <span className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                    <span className="relative">View Project</span>
                    <FaGithub className="relative" />
                  </motion.a>
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