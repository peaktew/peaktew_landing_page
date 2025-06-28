import React from 'react';
import { motion } from 'framer-motion';
import full_ring from '../assets/full_big_ring.webp';

const ContactPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const ringVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const gradientVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300 }
  };

  const tapEffect = {
    scale: 0.98
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/90 via-white/30 to-transparent z-20 pointer-events-none"></div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/90 via-white/30 to-transparent z-20 pointer-events-none"></div>

        {/* Animated Donut Rings */}
        <motion.img
          src={full_ring}
          alt="ring"
          className="absolute top-30 left-20 w-64 opacity-100 scale-[300%]"
          variants={ringVariants}
          initial="initial"
          animate="animate"
        />
        <motion.img
          src={full_ring}
          alt="ring"
          className="absolute bottom-40 right-20 w-64 opacity-100 scale-[300%]"
          variants={ringVariants}
          initial="initial"
          animate="animate"
          style={{ rotate: 180 }} // Start with different rotation
        />

        {/* Contact Card with glassmorphism */}
        <motion.div
          className="relative z-10 max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col gap-6 border border-white/30"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ 
            boxShadow: '0 20px 25px -5px rgba(109, 40, 178, 0.1), 0 10px 10px -5px rgba(109, 40, 178, 0.04)'
          }}
        >
          {/* Text */}
          <motion.div 
            className="flex-1 text-left justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-[100px] font-metro-600 text-[#6D28B2] mb-0"
              variants={itemVariants}
            >
              Contact Us
            </motion.h2>
          </motion.div>
          
          <div className='flex-1 flex flex-row'>
            <motion.div 
              className='flex-1 flex flex-col pr-6'
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-[#220239] font-metro-600 text-[15px] mb-4"
                variants={itemVariants}
              >
                Looking to expand your circle, meet amazing people, or find friends who share your passions? PeakTew is here to make connecting easier, more meaningful, and fun! Whether you're new in town, exploring new hobbies, or just want to grow your social network, PeakTew is your go-to app for building genuine connections.
              </motion.p>
              <motion.p 
                className="text-[#220239] text-[15px] font-metro-600"
                variants={itemVariants}
              >
                Got questions, ideas, or feedback? We'd love to hear from you! At PeakTew, we're all about creating a safe, welcoming space for everyone to connect, and your voice helps us make it even better.
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.form 
              className="flex-1 flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.input
                type="text"
                placeholder="Name"
                className="p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2]"
                variants={itemVariants}
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: '0 0 0 2px rgba(109, 40, 178, 0.5)'
                }}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2]"
                variants={itemVariants}
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: '0 0 0 2px rgba(109, 40, 178, 0.5)'
                }}
              />
              <motion.textarea
                placeholder="Message"
                rows="4"
                className="p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2]"
                variants={itemVariants}
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: '0 0 0 2px rgba(109, 40, 178, 0.5)'
                }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-black text-white py-2 rounded-md hover:bg-peakPurple transition-colors"
                variants={itemVariants}
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                Submit
              </motion.button>
            </motion.form>
          </div>

          {/* Animated Gradient glow underneath */}
          <motion.div 
            className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-peakPurple via-indigo-500 to-transparent blur-3xl opacity-40 rounded-full"
            variants={gradientVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;