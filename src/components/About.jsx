// import React from "react";
// import { motion } from "framer-motion";
// import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.2 }
//     }
//   };

//   return (
//     <section className="relative min-h-screen py-5 px-6" id="about">
//       <div className="container max-w-6xl mx-auto px-6">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="space-y-12"
//         >
//           {/* Header Section */}
//           <motion.div variants={itemVariants} className="text-center space-y-4">
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">Me</span>
//             </h1>
//             <p className="text-stone-200 text-lg md:text-xl max-w-3xl mx-auto">
//               Sophomore at Indian Institute of Information Technology and Management, Gwalior
//             </p>
//           </motion.div>

//           {/* Main Content */}
//           <div className="grid md:grid-cols-2 gap-8 items-start">
//             {/* Left Column - About Text */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <div className="relative p-6 rounded-2xl overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 via-orange-400/10 to-pink-400/10 backdrop-blur-sm border border-white/10" />
//                 <div className="relative space-y-4">
//                   <h2 className="text-2xl font-semibold text-white">My Journey</h2>
//                   <p className="text-stone-200 leading-relaxed">
//                     As a sophomore at IIITM Gwalior, I'm pursuing my passion for technology and innovation. My academic journey has been a blend of theoretical learning and practical applications, with a focus on web development and software engineering.
//                   </p>
//                   <p className="text-stone-200 leading-relaxed">
//                     I believe in the power of continuous learning and am constantly exploring new technologies and frameworks to expand my skill set. My experience at IIITM has not only shaped my technical abilities but also enhanced my problem-solving and analytical skills.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Column - Cards */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               {/* Education Card */}
//               <motion.div
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="relative p-6 rounded-2xl overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-orange-400/10 to-yellow-300/10 backdrop-blur-sm border border-white/10" />
//                 <div className="relative flex gap-4">
//                   <div className="text-yellow-300 text-2xl">
//                     <FaGraduationCap />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
//                     <p className="text-stone-200">IIITM Gwalior</p>
//                     <p className="text-stone-300 text-sm">B.Tech Computer Science</p>
//                     <p className="text-stone-300 text-sm">2023 - 2027</p>
//                   </div>
                  
//                 </div>
//               </motion.div>
//               <motion.div
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="relative p-6 rounded-2xl overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-orange-400/10 to-yellow-300/10 backdrop-blur-sm border border-white/10" />
//                 <div className="relative flex gap-4">
//                   <div className="text-yellow-300 text-2xl">
//                     <FaGraduationCap />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
//                     <p className="text-stone-200">BRS Abu Dhabi</p>
//                     <p className="text-stone-300 text-sm">High School CBSE 10+12</p>
//                     <p className="text-stone-300 text-sm">2018 - 2023</p>
//                   </div>
                  
//                 </div>
//               </motion.div>

              
//               </motion.div>
//           </div>

          
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import {educationData} from "../constants"

const About = () => {
  

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

  return (
    <section className="relative min-h-screen py-5 px-6" id="about">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">Me</span>
            </h1>
            <p className="text-stone-200 text-lg md:text-xl max-w-3xl mx-auto">
              Sophomore at Indian Institute of Information Technology and Management, Gwalior
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative p-6 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 via-orange-400/10 to-pink-400/10 backdrop-blur-sm border border-white/10" />
                <div className="relative space-y-4">
                  <h2 className="text-2xl font-semibold text-white">My Journey</h2>
                  <p className="text-stone-200 leading-relaxed">
                    As a sophomore at IIITM Gwalior, I'm pursuing my passion for technology and innovation. My academic journey has been a blend of theoretical learning and practical applications, with a focus on web development and software engineering.
                  </p>
                  <p className="text-stone-200 leading-relaxed">
                    I believe in the power of continuous learning and am constantly exploring new technologies and frameworks to expand my skill set. My experience at IIITM has not only shaped my technical abilities but also enhanced my problem-solving and analytical skills.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div variants={itemVariants}>
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-8">Education Journey</h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 via-orange-400 to-pink-400" />

                  {/* Timeline items */}
                  <div className="space-y-12">
                    {educationData.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className="relative pl-20"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-7 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-300">
                          <div className="absolute -inset-2 rounded-full bg-yellow-300/20 animate-pulse" />
                        </div>

                        {/* Icon */}
                        <div className="absolute left-12 top-0 bg-gradient-to-br from-yellow-300/20 via-orange-400/20 to-pink-400/20 p-2 rounded-lg">
                          <FaGraduationCap className="text-yellow-300 text-xl" />
                        </div>

                        {/* Content card */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative p-6 rounded-2xl overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-orange-400/10 to-yellow-300/10 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                          <div className="relative">
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {item.institution}
                              {item.current && (
                                <span className="ml-3 text-xs bg-gradient-to-r from-yellow-300 to-pink-400 text-black px-2 py-1 rounded-full">
                                  Current
                                </span>
                              )}
                            </h4>
                            <p className="text-stone-200">{item.degree}</p>
                            <p className="text-stone-300 text-sm mt-1">{item.period}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;