import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from '../components/DarkModeContext';
import htw1 from "../assets/htw1.webp";
import htw2 from "../assets/htw2.webp";
import htw3 from "../assets/htw3.webp";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut",
    },
  },
};

const sectionVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FeaturesPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      {/* Dark Mode Toggle - Top Right (Desktop Only) */}
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <label className="relative inline-flex items-center cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
            aria-label="Toggle dark mode"
          />
          <div className="w-14 h-8 bg-gray-200 dark:bg-slate-700 rounded-full peer-focus:ring-2 peer-focus:ring-purple-400 transition-colors duration-300 peer-checked:bg-purple-600 flex items-center px-1">
            <span className={`transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
              {!isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </span>
          </div>
        </label>
      </div>

      <motion.section
        className="w-full min-h-screen flex flex-col gap-10 md:gap-20 px-[50px] md:px-[100px] py-20 overflow-x-hidden transition-colors duration-500 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="w-full max-w-6xl" variants={itemVariants}>
          <motion.h1
            className="text-[min(10vw,128px)] font-metro-600 bg-clip-text text-transparent bg-gradient-to-b from-[#A62AD2] via-[#6E1CBF] to-[#470974] mb-10 leading-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore. <br /> Connect. Repeat
          </motion.h1>
          <motion.p className="text-3xl text-[#6D28B2]">Your guide to getting started with PeakTew</motion.p>
        </motion.div>
        <motion.div className="w-full max-w-[95%]" variants={itemVariants}>
          <div className="font-metro-600 text-[#220239] text-[16px] space-y-6">
            <motion.p variants={itemVariants}>
              In today's fast-paced, screen-dominated world, genuine human connection often takes a
              backseat to endless scrolling, impersonal messages, and algorithm-driven interactions. Social
              media promises connectivity, yet many people feel lonelier than ever—surrounded by digital
              noise but lacking meaningful relationships. That's where PeakTew comes in. More than just an
              app, it’s a shift toward real-world connection. Our mission is simple: to help people break free
              from virtual isolation and build authentic interactions through shared, real-time moments.
            </motion.p>
            <motion.p variants={itemVariants}>
              PeakTew is designed for those who want more than online interaction. Whether you're new to a
              city, exploring a campus, or simply open to meeting people around you, the app makes it
              effortless. By combining real-time proximity with personal intentions, PeakTew connects you to
              people who are physically nearby and aligned with what you're looking for in the moment. No
              swiping, no chatting—just subtle signals that guide you toward genuine, spontaneous encounters.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="w-full py-20 px-8 md:px-20 overflow-x-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h2
              className="text-[64px] font-bold text-[#6D28B2] font-metro-600"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Setting Up Your Profile
            </motion.h2>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Creating your PeakTew profile is the first step toward meaningful encounters. The process is
              quick and intuitive. You start by adding your name, age, and a profile picture—because putting a
              face to a presence makes real-life interactions more natural and human.
            </motion.p>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Next, you define who you are through the “About me” section. By answering a series of
              structured questions, you build a clear and authentic representation of your personality, interests,
              and preferences. This creates your virtual persona, helping others quickly understand you when
              they come across your profile in real time.
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={htw1}
              alt="Profile setup mockup"
              className="w-full max-w-[350px] md:max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-20 px-8 md:px-20 overflow-x-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h2
              className="text-[64px] font-bold text-[#6D28B2] font-metro-600"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Setting Your Intent
            </motion.h2>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Once your profile is ready, everything revolves around your status. This is where you describe
              what you're looking for in the moment—whether it’s grabbing a coffee, studying for an exam, or
              exploring a new place. Your status is short, direct, and dynamic, reflecting your current intention.
            </motion.p>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              You can choose how long your status stays active, from 1 to 24 hours. After that, it expires
              automatically, ensuring that what you share always stays relevant. You also decide whether you
              want to meet only people with a similar status by activating Keyword mode, or remain open to
              anyone around you.
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={htw2}
              alt="Profile setup mockup"
              className="w-full max-w-[350px] md:max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-20 px-8 md:px-20 overflow-x-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h2
              className="text-[64px] font-bold text-[#6D28B2] font-metro-600"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience Real-Time Connection
            </motion.h2>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              With your phone in your pocket, you simply go on with your day. As you move through the city or
              campus, PeakTew works quietly in the background, detecting when other users are nearby within
              a 50-meter (150ft) radius.
            </motion.p>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              When someone relevant enters your proximity, you receive a peal—a real-time notification. If
              Keyword mode is active, peals only appear when someone matches your status. Otherwise, you
              may receive multiple peals reflecting the people around you. These signals are subtle, designed
              to guide rather than interrupt.
            </motion.p>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Opening the app reveals the Peals page, where you can view the profiles of nearby users. Each
              profile highlights key elements of who they are, including a compatibility indicator that helps you
              quickly understand how much you have in common.
            </motion.p>
            <motion.p
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              If someone catches your attention, the next step is simple: close your phone, look around, and 
              find them in real life. PeakTew doesn’t tell you exactly where they are—it invites you to engage 
              with your environment, approach naturally, and start a real conversation.
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={htw3}
              alt="Profile setup mockup"
              className="w-full max-w-[350px] md:max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default FeaturesPage;
