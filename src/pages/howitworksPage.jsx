import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from '../components/DarkModeContext';
import htw2 from "../assets/htw2.webp";
import htw3 from "../assets/htw3.webp";
import howItWorksVideo from "../assets/Landing_page/PeaktewHIWAnimation_V1.mp4";

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

const steps = [
  {
    title: "Create Your Profile",
    description: "Create your profile (with your name, age, and profile picture).",
  },
  {
    title: "Show Who You Are",
    description: "Outline your aspirations through the language(s) you speak and your interests via the “About me” section. To fill this “About me” section, you will be given 10 questions with a selection of answers to craft your profile to show your true self!",
  },
  {
    title: "Set Your Status",
    description: "Describe your Status to showcase your current interests, activity, task, etc. (I’m looking for someone to grab a coffee with). Determine the duration of your status (ranging from 1 to 24 hours), after which the status will expire and be reset to the default.",
  },
  {
    title: "Choose How You Connect",
    description: "Decide whether you want to only meet people with a similar interest, activity, task, etc. or if you are open to meeting anyone. If so, turn on the “Status Matching” on the home page.",
  },
  {
    title: "Just Go About Your Day",
    description: "Phone in your pocket, move on with your day. (Make sure you are Online!)",
  },
  {
    title: "Get Notified In Real Time",
    description: "As you walk in the city/on campus, the app will send you real-time push notifications whenever another PeakTew user is located within 50m/150ft of your location. If the “Status Matching” is on, you will only receive notifications about people matching your status. Otherwise, you will receive up to 10 people at a time surrounding you in a 50m/150ft radius. Through future updates, you will be able to receive similar notifications about places and events around you as well.",
  },
  {
    title: "Check Who’s Around You",
    description: "Once notified, open the app, check the Peals page (a.k.a. Notification page) to view the profile of any user(s) surrounding you. (Places & events will also be featured there in the future).",
  },
  {
    title: "Discover Your Compatibility",
    description: "Click and read the person’s profile to discover a bit more about who they are. The “Compatibility Bar” on their profile is there to help and will showcase the percentage (%) of the interests/personality traits you share with the other user.",
  },
  {
    title: "Find Them In Real Life",
    description: "If you are interested in meeting this person(s): close your phone, locate them around you, and find your next best friend! (Futurely, spot places and events around you).",
  },
  {
    title: "Stay Pealed For What’s Next",
    description: "Keep your eyes Pealed for more to come with PeakTew; Together, Unique In Our Own Way.",
  },
];

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
        className="w-full overflow-hidden bg-white transition-colors duration-500"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-8 md:pb-12"
          variants={itemVariants}
        >
          <motion.h1
            className="theme-header-gradient text-[clamp(45px,10vw,128px)] font-metro-600 leading-[0.94] tracking-[-0.04em]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore.
            <br />
            <span className="whitespace-nowrap">Connect. Repeat.</span>
          </motion.h1>
          {/* <motion.p className="text-3xl text-[#6D28B2]">Your guide to getting started with PeakTew</motion.p> */}
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-7xl overflow-hidden md:aspect-auto"
          variants={itemVariants}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover object-center md:static md:h-auto md:object-contain"
            src={howItWorksVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="PeakTew app connection experience"
          />

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,2,57,0)_0%,#220239_100%)] transition-opacity duration-500 ${
              isDarkMode ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
        {/* <motion.div className="w-full max-w-[95%]" variants={itemVariants}>
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
        </motion.div> */}
      </motion.section>

      <motion.section
        className="relative w-full overflow-hidden bg-white px-4 py-48 sm:px-8 md:px-16 lg:px-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(166,42,210,0.22),transparent_72%)]"
        />

        <div className="gradient-border relative z-10 mx-auto w-full max-w-6xl rounded-[30px]">
          <div className={`absolute -top-[25px] left-6 z-30 rounded-full p-px shadow-[0_12px_30px_rgba(34,2,57,0.25)] md:left-[158px] ${
            isDarkMode
              ? "bg-[linear-gradient(135deg,#C97EFF_0%,#6E1CBF_100%)]"
              : "bg-[linear-gradient(135deg,#FFFFFF_0%,#7E3FAC_100%)]"
          }`}>
            <button
              type="button"
              className={`flex h-[50px] items-center rounded-full px-7 text-sm !text-white ${
                isDarkMode
                  ? "bg-[linear-gradient(90deg,#9C65D4_0%,#6E1CBF_55%,#470974_100%)]"
                  : "bg-[linear-gradient(90deg,#C97EFF_0%,#9C65D4_48%,#7E3FAC_100%)]"
              }`}
            >
              Let’s get started!
            </button>
          </div>

          <div className={`relative overflow-hidden rounded-[30px] px-5 pb-12 pt-16 sm:px-10 md:px-20 md:py-20 lg:px-[158px] ${
            isDarkMode ? "bg-[#371A4D]/70" : "bg-transparent"
          }`}>
            <div className="relative z-10">
              {steps.map((step, index) => (
                <motion.article 
                    key={step.title} className="py-8 first:pt-0 md:py-10" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.05,
                    }}>
                  <p className={`mb-4 text-sm font-metro-600 uppercase ${isDarkMode ? "!text-white" : "text-[#7600CC]"}`}>
                    Step {index + 1}
                  </p>
                  <h2 className={`mb-2  font-extrabold text-[clamp(24px,3.2vw,48px)] font-metro-600 leading-tight theme-header-gradient`}>
                    {step.title}
                  </h2>
                  <p className={`text-[clamp(14px,calc(0.5vw+13px),18px)] leading-relaxed ${isDarkMode ? "!text-white" : "text-[#220239]"}`}>
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,rgba(252,240,255,0),#D9C5E8_50%,rgba(109,40,178,0.17))] md:mt-10" />
                  )}
                </motion.article>
              ))}

              <div className={`mt-8 text-[clamp(14px,2vw,22px)] rounded-2xl border-2 px-6 py-5 leading-relaxed md:text-lg ${isDarkMode ? "border-white/80 !text-white" : "border-[#E2D3ED] text-[#220239]"}`}>
                No swiping, no texting, no add friend button, and no exact location displayed. In the future,
                the same notification-based system will work for places and events within a 50m/150ft radius
                of your location. A complementary map will be added to enable you to discover live events and
                places beyond this radius.
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <motion.section
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
      </motion.section> */}
    </>
  );
};

export default FeaturesPage;
