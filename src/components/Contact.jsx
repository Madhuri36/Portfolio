import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

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

  const sendingVariants = {
    sending: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen" id="contact">
      <div className="relative z-10 container mx-auto px-6 py-10 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12"
        >
          {/* Left Section - Content */}
          <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-12 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">Connect!</span>
              </h1>
              <p className="text-stone-200 text-lg md:text-xl mx-auto md:mx-0">
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-8 justify-center md:justify-start">
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
                  className={`text-white ${social.hoverColor} text-3xl md:text-4xl transition-colors duration-300 hover:scale-110 transform`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div variants={itemVariants} className="w-full md:w-1/2 flex justify-center md:justify-start">
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
              <div className="space-y-1">
                <label className="text-stone-200 text-sm font-medium">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-stone-200 text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-stone-200 text-sm font-medium">Message</label>
                <textarea
                  required
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-300 min-h-[120px]"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <motion.button
                  type="submit"
                  className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm text-white rounded-lg overflow-hidden"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-orange-400/20 to-pink-400/20 group-hover:opacity-70 transition-opacity duration-300" />
                  <span className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                  <span className="relative">Send Message</span>
                  <motion.span
                    className="relative"
                    animate={isSending ? "sending" : ""}
                    variants={sendingVariants}
                  >
                    <FaPaperPlane className={`relative ${isSending ? 'animate-bounce' : ''}`} />
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;