// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

// const Footer = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const socialLinks = [
//     { icon: FaLinkedin, href: "https://www.linkedin.com/in/sai-madhuri-bodapati/", hoverColor: "hover:text-yellow-300" },
//     { icon: FaGithub, href: "https://github.com/Madhuri36", hoverColor: "hover:text-orange-400" },
//     { icon: FaInstagram, href: "https://instagram.com/yourprofile", hoverColor: "hover:text-pink-400" }
//   ];

//   return (
//     <footer className="relative py-8 mt-auto">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="flex flex-col items-center space-y-4"
//         >
//           {/* Social Links */}
//           <motion.div 
//             variants={itemVariants}
//             className="flex items-center gap-6"
//           >
//             {socialLinks.map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-white ${social.hoverColor} transition-colors duration-300`}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <social.icon className="text-xl" />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Copyright */}
//           <motion.div 
//             variants={itemVariants}
//             className="text-stone-300 text-sm"
//           >
//             © Sai Madhuri 2025
//           </motion.div>

//           {/* Made with Love */}
//           <motion.div 
//             variants={itemVariants}
//             className="flex items-center gap-2 text-sm text-stone-300"
//           >
//             Made with 
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             >
//               <FaHeart className="text-pink-500" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sai-madhuri-bodapati/", hoverColor: "hover:text-yellow-300" },
    { icon: FaGithub, href: "https://github.com/Madhuri36", hoverColor: "hover:text-orange-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/sai.madhurii?igsh=MWM1eGFpZ284N2s2Yg==", hoverColor: "hover:text-pink-400" }
  ];

  return (
    <footer className="relative py-8 mt-auto bg-black/40 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center space-y-4"
        >
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white ${social.hoverColor} transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-2xl" /> {/* Increased size from text-xl to text-2xl */}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="text-stone-300 text-sm"
          >
            © 2025 Sai Madhuri Bodapati | All rights reserved.
          </motion.div>

          {/* Made with Love */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-stone-300"
          >
            Made with 
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;