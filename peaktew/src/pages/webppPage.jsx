import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const WebppPage = () => {
  // Animation variants

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        className="w-full min-h-screen flex flex-col gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-20 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="w-full max-w-4xl"
          variants={titleVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[128px] font-metro-600 text-[#6D28B2] mb-6 sm:mb-8 lg:mb-10 leading-tight sm:leading-snug lg:leading-none">
            Website Privacy Policy
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
              <strong>PeakTew.com</strong> (the "Site") is owned and operated by Mr. Lucas Sevathian (hereinafter referred to as "Mr. Sevathian"). Mr. Sevathian is the data controller and can be contacted at: <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Purpose</strong><br className="hidden sm:block"/>
              The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
            </motion.p>

            <motion.ul variants={listVariants} className="space-y-2 sm:space-y-3 pl-4">
              <motion.li variants={listItemVariants} className="pl-2">The personal data we will collect;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Use of collected data;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Who has access to the data collected;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">The rights of Site users; and</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">The Site's cookie policy.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants}>
              This Privacy Policy applies in addition to the terms and conditions of our Site.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>GDPR</strong><br className="hidden sm:block"/>
              For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation (the "GDPR"). For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018. For users in the United States, we adhere to the American Data Privacy and Protection Act (H.R.8152), the Data Protection Act of 2021. The American Privacy Rights Act and all relevant state acts.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Consent</strong><br className="hidden sm:block"/>
              By using our Site users agree that they consent to:<br className="hidden sm:block"/>
              The conditions set out in this Privacy Policy.
            </motion.p>

            <motion.p variants={itemVariants}>
              When the legal basis for us processing your personal data is that you have provided your consent to that processing, you may withdraw your consent at any time. If you withdraw your consent, it will not make processing which we completed before you withdrew your consent unlawful.
            </motion.p>

            <motion.p variants={itemVariants}>
              You can withdraw your consent by: Declining Cookies.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Legal Basis for Processing</strong><br className="hidden sm:block"/>
              We collect and process personal data about users in the EU only when we have a legal basis for doing so under Article 6 of the GDPR.
            </motion.p>

            <motion.p variants={itemVariants}>
              We rely on the following legal basis to collect and process the personal data of users in the EU:<br className="hidden sm:block"/>
              Users have provided their consent to the processing of their data for one or more specific purposes.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Personal Data We Collect</strong><br className="hidden sm:block"/>
              We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect any additional data beyond the data listed below without notifying you first.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Data Collected in a Non-Automatic Way</strong><br className="hidden sm:block"/>
              This data may be collected using Cookies.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>How We Use Personal Data</strong><br className="hidden sm:block"/>
              Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy.
            </motion.p>

            <motion.p variants={itemVariants}>
              The data we collect when the user performs certain functions may be used for the following purposes:<br className="hidden sm:block"/>
              Marketing cookies/location etc...
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Who We Share Personal Data With</strong>
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Employees</strong><br className="hidden sm:block"/>
              We may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Other Disclosures</strong><br className="hidden sm:block"/>
              We will not sell or share your data with other third parties, except in the following cases:
            </motion.p>

            <motion.ul variants={listVariants} className="space-y-2 sm:space-y-3 pl-4">
              <motion.li variants={listItemVariants} className="pl-2">If the law requires it;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">If it is required for any legal proceeding;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">To prove or protect our legal rights; and</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">To buyers or potential buyers of this company in the event that we seek to sell the company.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants}>
              If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>How Long We Store Personal Data</strong><br className="hidden sm:block"/>
              User data will be stored until the purpose the data was collected for has been achieved.<br className="hidden sm:block"/>
              You will be notified if your data is kept for longer than this period.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>How We Protect Your Personal Data</strong><br className="hidden sm:block"/>
              While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Your Rights as a User</strong><br className="hidden sm:block"/>
              Under the GDPR, you have the following rights:
            </motion.p>

            <motion.ul variants={listVariants} className="space-y-2 sm:space-y-3 pl-4">
              <motion.li variants={listItemVariants} className="pl-2">Right to be informed;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Right of access;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Right to rectification;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Right to erasure;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Right to restrict processing;</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Right to data portability; and</motion.li>
              <motion.li variants={listItemVariants} className="pl-2">Right to object.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants}>
              <strong>Children</strong><br className="hidden sm:block"/>
              We do not knowingly collect or use personal data from children under 18 years of age. If we learn that we have collected personal data from a child under 18 years of age, the personal data will be deleted as soon as possible. If a child under 18 years of age has provided us with personal data their parent or guardian may contact our data protection officer.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>How to Access, Modify, Delete, or Challenge the Data Collected</strong><br className="hidden sm:block"/>
              If you would like to know if we have collected your personal data, how we have used your personal data, if we have disclosed your personal data and to who we disclosed your personal data, if you would like your data to be deleted or modified in any way, or if you would like to exercise any of your other rights under the GDPR, please contact our data protection officer here: <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Cookie Policy</strong><br className="hidden sm:block"/>
              A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data relating to the user's browsing habits. You can choose to be notified each time a cookie is transmitted. You can also choose to disable cookies entirely in your internet browser, but this may decrease the quality of your user experience.
            </motion.p>

            <motion.p variants={itemVariants}>
              We use the following types of cookies on our Site:
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Third-Party Cookies</strong><br className="hidden sm:block"/>
              Third-party cookies are created by a website other than ours. We may use third-party cookies to achieve the following purposes:
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Modifications</strong><br className="hidden sm:block"/>
              This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the "Effective Date" at the top of this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Complaints</strong><br className="hidden sm:block"/>
              If you have any complaints about how we process your personal data, please contact us through the contact methods listed in the Contact Information section so that we can, where possible, resolve the issue. If you feel we have not addressed your concern in a satisfactory manner you may contact a supervisory authority. You also have the right to directly make a complaint to a supervisory authority. You can lodge a complaint with a supervisory authority.
            </motion.p>

            <motion.p variants={itemVariants}>
              <strong>Contact Information</strong><br className="hidden sm:block"/>
              If you have any questions, concerns or complaints, you can contact our data protection officer, at <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default WebppPage;