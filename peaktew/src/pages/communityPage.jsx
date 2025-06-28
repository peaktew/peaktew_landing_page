import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ring from '../assets/full_big_ring.webp'
import metal from '../assets/metal.png'
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
          animate={{ opacity: 1, height: 'auto' }}
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
      <section className="w-screen min-h-screen flex flex-col gap-20 px-[100px] py-20 overflow-x-hidden z-10">
        <motion.img 
          src={ring} 
          alt="" 
          className='absolute top-[70%] right-[-200px] w-[700px] opacity-100 overflow-hidden z-0' 
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
          <h1 className="text-[128px] font-metro-600 text-[#6D28B2] mb-10 leading-none">
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
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>
              Welcome to PeakTew! Our mission is to create a safe, inclusive, and engaging space where people can build real-life friendships. To ensure a positive experience for everyone, we ask all users to follow these community guidelines.
            </p>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            1. Be Respectful & Kind
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <ol className='list-disc'>
              <li>Treat others with respect, kindness, and empathy.</li>
              <li>No hate speech, bullying, harassment, or discrimination of any kind.</li>
              <li>Respect differing opinions and engage in healthy, constructive conversations.</li>
            </ol>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            2. Prioritize Safety
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <ol className='list-disc'>
              <li>Meet in public places when connecting with new people.</li>
              <li>Avoid sharing personal information (e.g., home address, financial details) with strangers.</li>
              <li>Report any suspicious or inappropriate behavior immediately.</li>
            </ol>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            3. Authenticity Matters
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <ol className='list-disc'>
              <li>Use your real name and a genuine profile picture.</li>
              <li>Do not impersonate others or create fake accounts.</li>
              <li>Be honest about your interests and intentions when connecting with others.</li>
            </ol>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            4. No Harmful or Inappropriate Content
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <ol className='list-disc'>
              <li>Do not post or share violent, sexual, or illegal content.</li>
              <li>Keep conversations and posts appropriate for a community-driven platform.</li>
              <li>Respect others' privacy—do not share personal details or private conversations without consent.</li>
            </ol>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            5. Engage with Purpose
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <ol className='list-disc'>
              <li>Use the platform to build real friendships and meaningful connections.</li>
              <li>Avoid spam, self-promotion, or excessive solicitation.</li>
              <li>Participate in events and discussions with a positive and open-minded attitude.</li>
            </ol>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            6. Follow the Law & Our Terms of Service
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            <ol className='list-disc'>
              <li>Do not use the platform for illegal activities, fraud, or harm to others.</li>
              <li>Respect intellectual property rights—do not share copyrighted material without permission.</li>
              <li>Adhere to all local laws and regulations while using the platform.</li>
            </ol>
          </motion.div>
          
          <br />
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.1 }}
          >
            Reporting & Enforcement
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.3 }}
          >
            <ul className='list-none'>
              <li>If you experience or witness any violations of these guidelines, please report them to our moderation team. We reserve the right to remove content, issue warnings, suspend accounts, or take further action if necessary to maintain a safe and welcoming environment.</li>
              <br />
              <li>By using PeakTew, you agree to uphold these guidelines and contribute to a positive community experience.</li>
              <br />
              <li>Let's build real friendships and a welcoming space—together!</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
      
      <motion.div 
        className="w-full min-h-screen flex flex-col gap-10 px-[100px] py-20 overflow-x-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <FaqItem
          question="What makes PeakTew different from other social media apps?"
          answer="PeakTew cuts through the noise of endless scrolling. We focus on real life connections, helping you meet friends, join events, and plan activities offline and in person."
        />
        <FaqItem
          question="How do I get started with PeakTew?"
          answer="Download PeakTew from the App Store or Google Play, create your profile, and browse nearby events. Join a meetup or host your own in seconds."
        />
        <FaqItem
          question="Can I use PeakTew if I'm not super social?"
          answer="Of course. PeakTew is for everyone. Start with smaller, low key meetups or dive into bigger events. You set the pace."
        />
        <FaqItem
          question="Is PeakTew really free to use?"
          answer="Yes, completely free. No subscriptions, no paywalls. Just real connections."
        />
        <FaqItem
          question="Where is PeakTew available?"
          answer="PeakTew is on iOS (App Store) and Android (Google Play). Wherever you are, new friends are nearby."
        />
      </motion.div>
    </>
  )
}

export default CommunityPage