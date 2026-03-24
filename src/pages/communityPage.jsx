import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';
import ring from '../assets/full_big_ring.png';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="w-full rounded-xl shadow-sm transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between p-5 cursor-pointer rounded-xl transition 
          ${open ? "!bg-white shadow-md" : "bg-gray-100"}
        `}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <h4 className="font-semibold text-sm md:text-base">{question}</h4>
        <span className="ml-4">
          {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </motion.div>

      {open && (
        <motion.div
          className="!bg-white px-5 pb-5 pt-2 text-sm text-gray-700 rounded-b-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}

const CommunityPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

      <section className="w-full min-h-screen flex flex-col gap-20 px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-20 overflow-hidden z-10 transition-colors duration-500 bg-white">
        <motion.img 
          src={ring} 
          alt="" 
          className='absolute top-[70%] right-[-200px] w-[300px] sm:w-[500px] md:w-[700px] opacity-100 overflow-hidden z-0' 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[40px] sm:text-[64px] md:text-[96px] lg:text-[128px] font-metro-600 bg-clip-text text-transparent bg-gradient-to-b from-[#A62AD2] via-[#6E1CBF] to-[#470974] mb-10 leading-none">
            Respect, Safety, Connection
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[95%] flex flex-col gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="font-metro-600 text-[#6D28B2] text-[14px] sm:text-[15px] md:text-[16px] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>
              At PeakTew, we believe in building a community that's as vibrant and welcoming as it is diverse. Here's how we do it:
            </p>
          </motion.div>

          {/* --- Repeatable Rule Blocks --- */}
          {[
            ["1. Respect", "We're all here to connect, so treat every interaction with kindness and respect."],
            ["2. Safety First", "Your safety is our priority. Our \"Emergency button\" and supportive community are here to assist you in case of danger. Together we create a safe and welcoming environment for everyone."],
            ["3. Authenticity", "Be yourself! PeakTew is a place where you can be genuine and authentic without fear of judgment."],
            ["4. Inclusivity", "Embrace diversity and celebrate what makes each of us unique. At PeakTew, we welcome everyone."],
            ["5. Privacy", "Your privacy matters. We're committed to protecting your data and giving you control over your personal information."],
            ["6. Contribution", "Be an active participant in our community. Share your experiences, support local businesses, get involved in social initiatives that matter to you."],
            ["7. Compliance", "Abide by standards and ensure your actions contribute positively to our environment. Report any misconduct or suspicious behavior to maintain the integrity and safety of our community. Any breach of the guidelines will lead to your account being deactivated."],
            ["8. One Account Per Person", "You will only be able to create one PeakTew account and cannot share your account. Infringing this will lead to a permanent ban from all PeakTew-related platforms."],
            ["9. Abide By The Law", "Illegal content or activities are strictly prohibited. You cannot use PeakTew to buy or sell drugs, or counterfeit goods, or seek assistance for any unlawful actions."],
          ].map(([title, description], index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                className="z-10"
              >
                <p className='font-metro-600 text-[#6D28B2] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] mb-2'>
                  {title}
                </p>
                <p className="font-metro-600 text-[#6D28B2] text-[14px] sm:text-[15px] md:text-[16px] max-w-2xl">
                  {description}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <motion.div 
        className={`w-full min-h-screen flex flex-col gap-10 px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-20 overflow-x-hidden z-10 ${isDarkMode ? "!text-black" : "text-black"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        {[
          ["What makes PeakTew different from other social media apps?", "PeakTew isn't about endless scrolling, it's about creating real-world connections. From meeting new friends to discovering events and planning activities, we focus on bringing people together in meaningful ways."],
          ["How does PeakTew work?", "PeakTew uses cutting-edge technology to connect you with people, places, and opportunities in your area. Simply set your preferences and let PeakTew do the rest. You'll receive personalized recommendations based on your interests and proximity, making it easy to discover new experiences and forge meaningful connections."],
          ["Is PeakTew safe to use?", "Absolutely! Your safety is our top priority. We've implemented robust safety features, including user verification and community reporting tools, to ensure a secure and welcoming environment for all our users."],
          ["Can I find job or volunteer opportunities on PeakTew?", "Yes! PeakTew offers features like Job Offers and Associations & non-profit organizations to help you find employment or volunteer opportunities in your community. Whether you're looking for your dream job or a chance to give back, PeakTew has you covered."],
          ["How does PeakTew protect my privacy?", "We take your privacy seriously. Your data is encrypted and securely stored, and we never share your personal information with third parties without your consent. You have full control over your profile visibility and can adjust your privacy settings at any time."],
          ["What makes PeakTew different from other social networks?", "Unlike traditional social networks that keep you glued to your screen, PeakTew encourages you to get out and explore the world around you. Our innovative features like Hotspots and Personalised Suggested Journey make it easy to discover new places, meet interesting people, and create unforgettable memories. Join PeakTew today and start living life to the fullest!"],
          ["How can I report inappropriate behavior or content on PeakTew?", "If you encounter any inappropriate behavior or content on PeakTew, please report it to our moderation team immediately. You can do this by selecting the \"Report\" option within the app or contacting our support team directly at support@peaktew.com. We take all reports seriously and will take appropriate action to address any violations of our community guidelines."],
          ["I think my account has been hacked, what should I do?", "If you suspect that your account has been hacked, please take immediate action. First, contact us right away at support@peaktew.com so we can assist you in securing your account. Additionally, consider informing people in your surroundings about the situation."],
          ["What should I do if I encounter a dangerous situation in real life while using PeakTew?", "When using PeakTew, you are provided with numerous safety features, our main one being the \"emergency button\". In the encounter with a dangerous individual and/or situation, the press of this button will alert all PeakTew users in your direct surroundings and share your location."],
          ["What happens if somebody breaches the Community Guidelines?", "As detailed in the \"Compliance\" section of our guidelines, any breach of the guidelines will lead to your account being deactivated. Each individual is entitled to one account, which cannot be shared with someone else."],
          ["How can I avoid being tracked while using PeakTew?", "The PeakTew app does not enable your current location to be tracked. A user can only detect your presence within a certain radius (50m / 150ft) but will be unable to use our app to obtain your exact location."],
        ].map(([q, a], i) => (
          <FaqItem key={i} question={q} answer={a}/>
        ))}
      </motion.div>
    </>
  );
}

export default CommunityPage;
