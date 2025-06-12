import React from 'react';
import { motion } from 'framer-motion';

const ApptcPage = () => {
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

  const nestedListItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
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
          className="w-full max-w-[1200px]"
          variants={titleVariants}
        >
          <h1 className="text-[128px] font-metro-600 text-[#6D28B2] mb-10 leading-none">
            PeakTew App Terms & Conditions
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
            <motion.p variants={itemVariants} className="font-bold">1. Introduction</motion.p>
            <motion.p variants={itemVariants}>These Terms and Conditions ("Terms") govern your use of the PeakTew Mobile Application ("App") and any related services provided by PeakTew. By using the App, you agree to comply with these terms.</motion.p>

            <motion.p variants={itemVariants} className="font-bold">2. Definitions</motion.p>
            <motion.p variants={itemVariants}>"User" refers to the individual who uses the App.</motion.p>

            <motion.p variants={itemVariants} className="font-bold">3. User Accounts</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>Eligibility:</strong> You must be at least 18 years old to create an account and use the App.</motion.li>
              <motion.li variants={listItemVariants}><strong>Account Creation:</strong> To create an account, you must provide accurate information on: your name, email address, password, etc.</motion.li>
              <motion.li variants={listItemVariants}><strong>Account Security:</strong> You are responsible for the confidentiality of your account information and all activities under your account.</motion.li>
              <motion.li variants={listItemVariants}><strong>Account Termination:</strong> We reserve the right to terminate your account at any time if you violate these Terms.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">4. User Conduct</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}>
                <strong>Prohibited Activities:</strong> You agree not to engage in any of the following:
                <motion.ul variants={listVariants} className="ml-6 mt-2 space-y-2">
                  <motion.li variants={nestedListItemVariants}>Harassment or bullying of other users.</motion.li>
                  <motion.li variants={nestedListItemVariants}>Spamming or sending unsolicited messages.</motion.li>
                  <motion.li variants={nestedListItemVariants}>Posting content that is illegal or violates the rights of others.</motion.li>
                </motion.ul>
              </motion.li>
              <motion.li variants={listItemVariants}><strong>Content Guidelines:</strong> You must ensure that any content you post complies with our community standards, prohibiting hate speech, violence, and explicit content.</motion.li>
              <motion.li variants={listItemVariants}><strong>Reporting and Enforcement:</strong> If you encounter content that violates these terms, please report it using the "!" icon on the user profile or via the "Help" section in the app. We will take appropriate action.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">5. Content Ownership and Rights</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>User Content:</strong> You retain ownership of any content you post on the App.</motion.li>
              <motion.li variants={listItemVariants}><strong>License to Use Content:</strong> By posting content, you grant us a non-exclusive, royalty-free license to use or modify it for advertising purposes.</motion.li>
              <motion.li variants={listItemVariants}><strong>Third-Party Content:</strong> We neither endorse nor are we responsible for content posted and opinions expressed by third parties or users.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">6. Privacy and Data Security</motion.p>
            <motion.p variants={itemVariants}>Refer to our Privacy Policy for our guidelines on Privacy and Data Security.</motion.p>

            <motion.p variants={itemVariants} className="font-bold">7. Intellectual Property</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>App Ownership:</strong> PeakTew owns all intellectual property rights to the App and its content, excluding user-generated content.</motion.li>
              <motion.li variants={listItemVariants}><strong>User License:</strong> We grant you a limited, non-transferable license to use the App for personal and business purposes.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">8. Disclaimers and Limitation of Liability</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>Limitation of Liability:</strong> Our liability to you for any damages arising from your use of the App is limited to the amount you have paid us in the past twelve months, provided you have not violated the terms.</motion.li>
              <motion.li variants={listItemVariants}><strong>Service Availability:</strong> The app is not guaranteed always to be available or error-free.</motion.li>
              <motion.li variants={listItemVariants}><strong>No Warranties:</strong> The App is provided without any warranties, express or implied.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">9. In-app Payments and Subscriptions</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>Payment Methods:</strong> All payments for in-app purchases and subscriptions must be made through the payment methods provided within the App.</motion.li>
              <motion.li variants={listItemVariants}><strong>Billing:</strong> We are not responsible for charges or fees applied by your bank or payment provider.</motion.li>
              <motion.li variants={listItemVariants}><strong>Price Changes:</strong> We may change subscription fees and will notify you in advance. You may cancel your subscription before the new price takes effect.</motion.li>
              <motion.li variants={listItemVariants}><strong>Refunds:</strong> All fees are non-refundable unless required by law. Contact <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a> for any issues.</motion.li>
              <motion.li variants={listItemVariants}><strong>Cancellation:</strong> You can cancel at any time via account settings; access continues until the end of your billing period.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">10. Governing Law and Dispute Resolution</motion.p>
            <motion.p variants={itemVariants}>These Terms are governed by the laws of the state of Delaware.</motion.p>

            <motion.p variants={itemVariants} className="font-bold">11. Indemnification</motion.p>
            <motion.p variants={itemVariants}>You agree to indemnify and hold PeakTew harmless from any claims, damages, or expenses arising from using the App or violating these Terms.</motion.p>

            <motion.p variants={itemVariants} className="font-bold">12. Additional Provisions</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>Severability:</strong> If any provision is found to be invalid, the remaining provisions will remain in full effect.</motion.li>
              <motion.li variants={listItemVariants}><strong>Contact Information:</strong> For any questions, contact us at <a href="mailto:support@peaktew.com" className="text-[#6D28B2] hover:underline">support@peaktew.com</a>.</motion.li>
              <motion.li variants={listItemVariants}><strong>Advertisements:</strong> The App may display advertisements. We are not responsible for their content or the products/services they offer.</motion.li>
              <motion.li variants={listItemVariants}><strong>External Links:</strong> We are not responsible for external sites linked within the App. You agree we are not liable for damages resulting from your use of such sites.</motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="font-bold">13. Consent to Electronic Communications</motion.p>
            <motion.p variants={itemVariants}>By using the App, you consent to receive electronic communications from us. These may include account notices and information. Such communications satisfy legal communication requirements.</motion.p>

            <motion.p variants={itemVariants} className="font-bold">14. Amendment of Terms</motion.p>
            <motion.ul variants={listVariants} className="space-y-4">
              <motion.li variants={listItemVariants}><strong>Right to Amend:</strong> PeakTew may amend these Terms at any time. Changes become effective immediately upon posting in the App.</motion.li>
              <motion.li variants={listItemVariants}><strong>Notification of Changes:</strong> Significant changes will be communicated via updated 'Last Updated' date and electronic communications.</motion.li>
              <motion.li variants={listItemVariants}><strong>Continued Use:</strong> Using the App after changes are posted means you accept the updated terms. If you disagree, you must stop using the App.</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ApptcPage;