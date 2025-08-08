import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';

const AppppPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

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
        className="w-full min-h-screen flex flex-col gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-20 overflow-x-hidden transition-colors duration-500 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="w-full max-w-4xl"
          variants={titleVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[128px] font-metro-600 text-[#6D28B2] mb-6 sm:mb-8 lg:mb-10 leading-tight sm:leading-snug lg:leading-none">
            PeakTew App Privacy Policy
          </h1>
        </motion.div>
        
        <motion.div 
          className="w-full max-w-full lg:max-w-[95%]"
          variants={containerVariants}
        >
          <motion.div 
            className="font-metro-600 text-[#220239] text-sm sm:text-base space-y-4 sm:space-y-6"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              <strong>1. Introduction</strong><br className="hidden sm:block"/>
              This Privacy Policy ("Policy") explains how PeakTew collects, uses, shares, and protects information about App users. By using the App, you agree to this policy's collection and use of information.
            </motion.p>

            <motion.p variants={itemVariants} className="font-bold">2. Information We Collect</motion.p>
            <motion.ul variants={listVariants} className="space-y-3 sm:space-y-4">
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>Personal Information:</strong> We may collect personal information you provide, such as your name, email address, phone number, and payment information.
              </motion.li>
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>Location:</strong> Use of location services using GPS.
              </motion.li>
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>Usage Data:</strong> We may collect information about your App usage, such as your IP address, device type, operating system, browser type, and pages or features you access within the App.
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">3. How We Use Your Information</motion.p>
            <motion.ul variants={listVariants} className="space-y-3 sm:space-y-4">
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>To Provide and Improve the Service:</strong> We use your information to operate and enhance the App, including troubleshooting, data analysis, and testing.
              </motion.li>
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>To Communicate with You:</strong> We may use your information to send you updates, promotional materials, and other information related to the App.
              </motion.li>
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>Location:</strong> Used to help you find events pertaining to you in your area as well as to spot other PeakTew users.
              </motion.li>
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>User Rights:</strong> You retain the right to ask us to delete your information or content by contacting us at <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>.
              </motion.li>
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>To Process Payments:</strong> We use your payment information to process your in-app purchases and subscriptions.
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">4. Sharing Your Information</motion.p>
            <motion.ul variants={listVariants} className="space-y-3 sm:space-y-4">
              <motion.li variants={listItemVariants} className="pl-4">
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests by public authorities.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AppppPage;