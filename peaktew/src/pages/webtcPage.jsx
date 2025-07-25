import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const WebtcPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
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

  return (
    <>
      <motion.section 
        className="w-full min-h-screen flex flex-col gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-20 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="w-full max-w-5xl"
          variants={titleVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[128px] font-metro-600 text-[#6D28B2] mb-6 sm:mb-8 lg:mb-10 leading-tight sm:leading-snug lg:leading-none">
            Website Terms & Conditions
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
              These terms and conditions (the "Terms and Conditions") govern the use of www.peaktew.com (the "Site"). This Site is owned and operated by Mr. Lucas Sevathian (hereinafter referred to as "Mr. Sevathian"). This Site is a website that displays information for a mobile app.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.
            </motion.p>
            
            <motion.p variants={itemVariants} className="font-bold">
              THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE THAT IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE READ IT CAREFULLY.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Intellectual Property</motion.h2>
            
            <motion.p variants={itemVariants}>
              All content published and made available on our Site is the property of Mr. Sevathian and the Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Acceptable Use</motion.h2>
            
            <motion.p variants={itemVariants}>
              As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not to:
            </motion.p>
            
            <motion.ul className='list-disc ml-4 sm:ml-6 space-y-2 mt-3 mb-4' variants={containerVariants}>
              <motion.li variants={itemVariants}>Harass or mistreat other users of our Site;</motion.li>
              <motion.li variants={itemVariants}>Violate the rights of other users of our Site;</motion.li>
              <motion.li variants={itemVariants}>Violate the intellectual property rights of the Site owners or any third party to the Site;</motion.li>
              <motion.li variants={itemVariants}>Hack into the account of another user of the Site;</motion.li>
              <motion.li variants={itemVariants}>Act in any way that could be considered fraudulent; or</motion.li>
              <motion.li variants={itemVariants}>Post any material that may be deemed inappropriate or offensive.</motion.li>
            </motion.ul>
            
            <motion.p variants={itemVariants}>
              If we believe you are using our Site illegally or in a manner that violates these Terms and Conditions, we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to take any legal steps necessary to prevent you from accessing our Site.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>User Contributions</motion.h2>
            
            <motion.p variants={itemVariants}>
              Users may post the following information on our Site:
            </motion.p>
            
            <motion.ul className='list-disc ml-4 sm:ml-6 space-y-2 mt-3 mb-4' variants={containerVariants}>
              <motion.li variants={itemVariants}>Public comments</motion.li>
            </motion.ul>
            
            <motion.p variants={itemVariants}>
              By posting publicly on our Site, you agree not to act illegally or violate these Terms and Conditions.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Limitation of Liability</motion.h2>
            
            <motion.p variants={itemVariants}>
              Mr. Sevathian and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Indemnity</motion.h2>
            
            <motion.p variants={itemVariants}>
              Except where prohibited by law, by using this Site you indemnify and hold harmless Mr. Sevathian and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Applicable Law</motion.h2>
            
            <motion.p variants={itemVariants}>
              These Terms and Conditions are governed by the laws of the State of Delaware.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Dispute Resolution</motion.h2>
            
            <motion.p variants={itemVariants}>
              Subject to any exceptions specified in these Terms and Conditions, if you and Mr. Sevathian are unable to resolve any dispute through informal discussion, then you and Mr. Sevathian agree to submit the issue before a mediator. The decision of the mediator will not be binding. Any mediator must be a neutral party acceptable to both you and Mr. Sevathian. The costs of any mediation will be paid by the unsuccessful party.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Notwithstanding any other provision in these Terms and Conditions, you and Mr. Sevathian agree that you both retain the right to bring an action in small claims court and to bring an action for injunctive relief or intellectual property infringement.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Severability</motion.h2>
            
            <motion.p variants={itemVariants}>
              If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.
            </motion.p>
            
            <motion.h2 className='text-xl sm:text-2xl font-bold mt-6 mb-3' variants={itemVariants}>Changes</motion.h2>
            
            <motion.p variants={itemVariants}>
              These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.
            </motion.p>
            
            <motion.p className='leading-none' variants={itemVariants}>
              Please contact us if you have any questions or concerns. Our contact details are as follows: <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default WebtcPage;