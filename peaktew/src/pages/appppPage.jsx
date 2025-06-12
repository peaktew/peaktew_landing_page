import React from 'react';
import { motion } from 'framer-motion';

const AppppPage = () => {
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

  return (
    <>
      <motion.section 
        className="w-full min-h-screen flex flex-col gap-20 px-[100px] py-20 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="w-full max-w-4xl"
          variants={titleVariants}
        >
          <h1 className="text-[128px] font-metro-600 text-[#6D28B2] mb-10 leading-none">
            PeakTew App Privacy Policy
          </h1>
        </motion.div>
        
        <motion.div 
          className="w-full max-w-[95%]"
          variants={containerVariants}
        >
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              <strong>1. Introduction</strong><br/>
              This Privacy Policy ("Policy") explains how PeakTew collects, uses, shares, and protects information about App users. By using the App, you agree to this policy's collection and use of information.
            </motion.p>

            <motion.p variants={itemVariants} className="font-bold">2. Information We Collect</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}>
                <strong>Personal Information:</strong> We may collect personal information you provide, such as your name, email address, phone number, and payment information.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <strong>Location:</strong> Use of location services using GPS.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <strong>Usage Data:</strong> We may collect information about your App usage, such as your IP address, device type, operating system, browser type, and pages or features you access within the App.
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">3. How We Use Your Information</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}>
                <strong>To Provide and Improve the Service:</strong> We use your information to operate and enhance the App, including troubleshooting, data analysis, and testing.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <strong>To Communicate with You:</strong> We may use your information to send you updates, promotional materials, and other information related to the App.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <strong>Location:</strong> Used to help you find events pertaining to you in your area as well as to spot other PeakTew users.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <strong>User Rights:</strong> You retain the right to ask us to delete your information or content by contacting us at <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <strong>To Process Payments:</strong> We use your payment information to process your in-app purchases and subscriptions.
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">4. Sharing Your Information</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}>
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