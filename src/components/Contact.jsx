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
    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen" id="contact">
      <div className="relative z-10 container mx-auto px-6 py-10 md:py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">Touch</span>
            </h1>
            <p className="text-stone-200 text-lg md:text-xl max-w-3xl mx-auto">
              Let's collaborate on the next project or discuss opportunities together!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <motion.div
              className="backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-stone-200 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-stone-200 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-stone-200 text-sm font-medium">Message</label>
                  <textarea
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all duration-300 min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 px-6 py-2 text-sm text-white rounded-lg overflow-hidden"
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
                      <FaPaperPlane className={`${isSending ? 'animate-bounce' : ''}`} />
                    </motion.span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;