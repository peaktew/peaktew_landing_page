import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
          ${open ? "bg-white shadow-md" : "bg-gray-100"}
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
          className="bg-white px-5 pb-5 pt-2 text-sm text-gray-700 rounded-b-xl"
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="w-screen min-h-screen flex flex-col gap-20 px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-20 overflow-x-hidden z-10">
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
          <h1 className="text-[40px] sm:text-[64px] md:text-[96px] lg:text-[128px] font-metro-600 text-[#6D28B2] mb-10 leading-none">
            Respect, Safety, Connection
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[95%] flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="font-metro-600 text-[#220239] text-[14px] sm:text-[15px] md:text-[16px] space-y-6 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>
              Welcome to PeakTew! Our mission is to create a safe, inclusive,
              and engaging space where people can build real-life friendships.
              To ensure a positive experience for everyone, we ask all users to
              follow these community guidelines.
            </p>
          </motion.div>

          {/* --- Repeatable Rule Blocks --- */}
          {[
            ["1. Be Respectful & Kind", [
              "Treat others with respect, kindness, and empathy.",
              "No hate speech, bullying, harassment, or discrimination of any kind.",
              "Respect differing opinions and engage in healthy, constructive conversations."
            ]],
            ["2. Prioritize Safety", [
              "Meet in public places when connecting with new people.",
              "Avoid sharing personal information (e.g., home address, financial details) with strangers.",
              "Report any suspicious or inappropriate behavior immediately."
            ]],
            ["3. Authenticity Matters", [
              "Use your real name and a genuine profile picture.",
              "Do not impersonate others or create fake accounts.",
              "Be honest about your interests and intentions when connecting with others."
            ]],
            ["4. No Harmful or Inappropriate Content", [
              "Do not post or share violent, sexual, or illegal content.",
              "Keep conversations and posts appropriate for a community-driven platform.",
              "Respect others' privacy—do not share personal details or private conversations without consent."
            ]],
            ["5. Engage with Purpose", [
              "Use the platform to build real friendships and meaningful connections.",
              "Avoid spam, self-promotion, or excessive solicitation.",
              "Participate in events and discussions with a positive and open-minded attitude."
            ]],
            ["6. Follow the Law & Our Terms of Service", [
              "Do not use the platform for illegal activities, fraud, or harm to others.",
              "Respect intellectual property rights—do not share copyrighted material without permission.",
              "Adhere to all local laws and regulations while using the platform."
            ]],
          ].map(([title, bullets], index) => (
            <React.Fragment key={index}>
              <motion.p 
                className='font-metro-600 text-[#6D28B2] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[70px]'
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                {title}
              </motion.p>
              <motion.div 
                className="font-metro-600 text-[#220239] text-[14px] sm:text-[15px] md:text-[16px] space-y-6 ml-4 sm:ml-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
              >
                <ol className='list-disc'>
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ol>
              </motion.div>
            </React.Fragment>
          ))}

          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            Reporting & Enforcement
          </motion.p>

          <motion.div 
            className="font-metro-600 text-[#220239] text-[14px] sm:text-[15px] md:text-[16px] space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            <ul className='list-none'>
              <li>If you experience or witness any violations of these guidelines, please report them to our moderation team. We reserve the right to remove content, issue warnings, suspend accounts, or take further action if necessary to maintain a safe and welcoming environment.</li>
              <li>By using PeakTew, you agree to uphold these guidelines and contribute to a positive community experience.</li>
              <li>Let's build real friendships and a welcoming space—together!</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <motion.div 
        className="w-full min-h-screen flex flex-col gap-10 px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-20 overflow-x-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        {[
          ["What makes PeakTew different from other social media apps?", "PeakTew cuts through the noise of endless scrolling. We focus on real life connections, helping you meet friends, join events, and plan activities offline and in person."],
          ["How do I get started with PeakTew?", "Download PeakTew from the App Store or Google Play, create your profile, and browse nearby events. Join a meetup or host your own in seconds."],
          ["Can I use PeakTew if I'm not super social?", "Of course. PeakTew is for everyone. Start with smaller, low key meetups or dive into bigger events. You set the pace."],
          ["Is PeakTew really free to use?", "Yes, completely free. No subscriptions, no paywalls. Just real connections."],
          ["Where is PeakTew available?", "PeakTew is on iOS (App Store) and Android (Google Play). Wherever you are, new friends are nearby."]
        ].map(([q, a], i) => (
          <FaqItem key={i} question={q} answer={a} />
        ))}
      </motion.div>
    </>
  );
}

export default CommunityPage;
