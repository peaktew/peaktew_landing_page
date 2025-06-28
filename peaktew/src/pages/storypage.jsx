import React from 'react'
import big_ring from '../assets/full_big_ring.webp'
import ceo from '../assets/ceo.webp'
import star from '../assets/star.png'
import plus from '../assets/plus.png'
import pipes from '../assets/pipes.png'
import blob from '../assets/blob.png'
import loop from '../assets/loop.png'
import light from '../assets/light.png'
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const StoryPage = () => {
  const milestones = [
    {
      id: '01',
      date: 'January 2023',
      title: 'The Spark',
      icon: star,
      description: "PeakTew started with one mission: making real-life friendships easier in a world obsessed with swipes and likes. It wasn't just a start-up—it was a movement to bring people together offline.",
    },
    {
      id: '02',
      date: 'June 2023',
      title: 'Defining Our Identity',
      icon: plus,
      description: 'The name "PeakTew" captured both the pinnacle of activity and the excitement of the moment. However, the initial app design leaned too heavily into dating app territory. It was clear we needed a new direction, and the redesign began.',
    },
    {
      id: '03',
      date: 'Sept 2023 - Feb 2024',
      title: 'The Transformation',
      icon: pipes,
      description: 'This was our turning point. We underwent a complete overhaul and our brand identity shifted. Guided by user feedback, we began building a product people truly wanted.',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full min-h-screen overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={big_ring}
            alt="Bubble Background"
            className="w-full h-full object-cover object-center scale-110 blur-sm opacity-95"
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white" />
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-white" />
        </motion.div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <motion.div 
            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl max-w-5xl p-6 md:p-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-purple-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our Story
            </motion.h2>
            <motion.div 
              className="columns-1 md:columns-2 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="mb-6 text-gray-700 leading-relaxed">
                Fusce metus nisi, auctor vitae molestie e, dappbus at erat. Modri nec consequat augue. Aliquam mattis fringilla ante non cursus. Aenean ac turpis lacus. Curabitur efficitur justo a tristique mollis. Maecenas bibendum purus et eros utlamcorper vestibulum ac oofio. Proin a tristique dolor. Aliquam erat volutpat. Maecenas at mattis porta, sedentenue velit ut, efficitur magna. In cursus enim ac plecerat lacinia.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Eliam nisi felis, faucibus et scelerisque in, mollis vel metus. Proin tortor lorem, vestibulum sit amet viverra ac, porta nec enim. Sed tristique, ligula vitae interdum malesuada, erat ipsum pretium erat, ac viverra risus felius a eros. Proin dignissim libero at felis vestibulum porttitor vel viverra purus. Fusce metus nisi, auctor vitae molestie e, dappbus at erat. Modri nec consequat augue. Aliquam mattis fringilla ante non cursus.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CEO Section */}
      <motion.section 
        className="w-full bg-white px-4 py-20 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-purple-700 mb-12 text-center"
          variants={fadeInUp}
        >
          Hear from our Founder & CEO
        </motion.h2>

        <motion.div 
          className="max-w-6xl w-full bg-gradient-to-br from-white via-purple-50 to-white border-2 border-purple-500 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
          variants={fadeInUp}
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Left Text */}
          <motion.div 
            className="flex-1 p-8 md:p-12 text-left text-gray-700 text-sm md:text-base leading-relaxed"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Fusce metus nisi, auctor vitae molestie a, dapibus at erat. Morbi nec consequat augue.
              Aliquam mattis fringilla ante non cursus. Aenean ac turpis lacus. Curabitur efficitur justo
              a tristique mollis. Maecenas bibendum purus et eros ullamcorper vestibulum ac a odio.
              Proin a tristique dolor. Aliquam erat volutpat. Maecenas at mauris porta, scelerisque
              velit ut, efficitur magna. In cursus enim ac placerat lacinia. Etiam nisi felis, faucibus
              et scelerisque in, mollis vel metus. Proin tortor lorem, vestibulum sit amet viverra ac,
              porta nec enim. Sed tristique, ligula vitae interdum malesuada, erat ipsum pretium erat,
              ac viverra risus tellus a eros. Proin dignissim libero at felis vestibulum porttitor vel
              viverra purus.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex-shrink-0 w-full md:w-[300px] lg:w-[350px] relative overflow-hidden"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={ceo} 
              alt="CEO" 
              className="w-full h-full object-cover object-top"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute inset-0 bg-purple-500/10 mix-blend-multiply"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Milestones Section */}
      <motion.section 
        className="bg-white py-20 px-4 relative"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-24"
            variants={fadeInUp}
          >
            The PeakTew Milestones
          </motion.h2>

          <motion.div 
  className="relative py-12"
  variants={staggerContainer}
>
  {/* Container for all milestones with horizontal scroll */}
  <motion.div 
    className="flex overflow-x-auto pb-8 snap-x snap-mandatory w-full hide-scrollbar"
    style={{ scrollbarWidth: 'none' }}
  >
    {/* First set of milestones (1-3) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full snap-center px-4 md:px-8">
      {/* Vertical column lines */}
      <motion.div 
        className="absolute top-0 left-1/3 h-full w-px border-l-2 border-dashed border-purple-300"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute top-0 left-2/3 h-full w-px border-l-2 border-dashed border-purple-300"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Milestone 1 */}
      <motion.div 
        className="relative flex flex-col items-center"
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Label */}
        <motion.div 
          className="text-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-extrabold text-purple-700">01</div>
          <div className="text-sm text-purple-600">January 2023</div>
        </motion.div>

        {/* Icon top center */}
        <motion.div 
          className="relative z-10 -mb-8"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring" }}
        >
          <img src={star} alt="Star Icon" className="w-20 h-20 object-contain" />
        </motion.div>

        {/* Card */}
        <motion.div 
          className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full max-w-[280px] text-left"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
        >
          <h3 className="text-purple-600 font-semibold text-base mb-3">The Spark</h3>
          <p className="text-black text-sm leading-relaxed">
            PeakTew started with one mission: making real-life friendships easier in a world obsessed with swipes and likes. It wasn't just a start-up—it was a movement to bring people together offline.
          </p>
        </motion.div>
      </motion.div>

      {/* Milestone 2 */}
      <motion.div 
        className="relative flex flex-col items-center"
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
      >
        {/* Label */}
        <motion.div 
          className="text-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-extrabold text-purple-700">02</div>
          <div className="text-sm text-purple-600">June 2023</div>
        </motion.div>

        {/* Card (with icon behind) */}
        <motion.div 
          className="relative z-10 bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full max-w-[280px] text-left"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
        >
          <h3 className="text-purple-600 font-semibold text-base mb-3">Defining Our Identity</h3>
          <p className="text-black text-sm leading-relaxed">
            The name "PeakTew" captured both the pinnacle of activity and the excitement of the moment. However, the initial app design leaned too heavily into dating app territory. It was clear we needed a new direction, and the redesign began.
          </p>
        </motion.div>

        {/* Icon behind and bottom-left */}
        <motion.img
          src={plus}
          alt="Plus Icon"
          className="absolute scale-125 -bottom-6 left-3 w-20 h-20 object-contain"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Milestone 3 */}
      <motion.div 
        className="relative flex flex-col items-center"
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
      >
        {/* Label */}
        <motion.div 
          className="text-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-extrabold text-purple-700">03</div>
          <div className="text-sm text-purple-600">Sept 2023 - Feb 2024</div>
        </motion.div>

        {/* Icon top center like first */}
        <motion.div 
          className="relative z-10 -mb-8"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring" }}
        >
          <img src={pipes} alt="Pipes Icon" className="w-20 h-20 object-contain" />
        </motion.div>

        {/* Card */}
        <motion.div 
          className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full max-w-[280px] text-left"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
        >
          <h3 className="text-purple-600 font-semibold text-base mb-3">The Transformation</h3>
          <p className="text-black text-sm leading-relaxed">
            This was our turning point. We underwent a complete overhaul and our brand identity shifted. Guided by user feedback, we began building a product people truly wanted.
          </p>
        </motion.div>
      </motion.div>
    </div>

    {/* Second set of milestones (4-6) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full snap-center px-4 md:px-8">
      {/* Vertical column lines for second set */}
      <motion.div 
        className="absolute top-0 left-[calc(100%+16.66%)] h-full w-px border-l-2 border-dashed border-purple-300"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute top-0 left-[calc(100%+50%)] h-full w-px border-l-2 border-dashed border-purple-300"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Milestone 4 */}
      <motion.div 
        className="relative flex flex-col items-center"
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
      >
        {/* Label */}
        <motion.div 
          className="text-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-extrabold text-purple-700">04</div>
          <div className="text-sm text-purple-600">July 2024</div>
        </motion.div>

        {/* Icon top center */}
          <motion.img
          src={blob}
          alt="Plus Icon"
          className="absolute scale-125 bottom-10 right-3 w-25 h-25 object-contain"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.5 }}
        />

        {/* Card */}
        <motion.div 
          className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full max-w-[280px] text-left"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
        >
          <h3 className="text-purple-600 font-semibold text-base mb-3">Preparing for Launching</h3>
          <p className="text-black text-sm leading-relaxed">
           With the launch approaching, we refined our design and sharpened our brand identity. PeakTew evolved beyond an app—it was ready to make an impact.</p>
        </motion.div>
      </motion.div>

      {/* Milestone 5 */}
      <motion.div 
        className="relative flex flex-col items-center"
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, delay: 1.0 }}
      >
        {/* Label */}
        <motion.div 
          className="text-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-extrabold text-purple-700">05</div>
          <div className="text-sm text-purple-600">October 2024</div>
        </motion.div>

        {/* Icon top center */}
        <motion.div 
          className="relative z-0 -mb-2"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring" }}
        >
          <img src={loop} alt="Pipes Icon" className="w-20 h-20 object-contain" />
        </motion.div>

        {/* Card */}
        <motion.div 
          className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full max-w-[280px] text-left"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
        >
          <h3 className="text-purple-600 font-semibold text-base mb-3">The SEC Pitch Stage</h3>
          <p className="text-black text-sm leading-relaxed">
            At the SEC Pitch Competition, we unveiled PeakTew’s Alpha MVP: a hybrid platform designed to move people from digital notifications to real-life interactions. No endless swiping—just authentic connections.</p>
        </motion.div>
        </motion.div>

      {/* Milestone 6 */}
      <motion.div 
        className="relative flex flex-col items-center"
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
      >
        {/* Label */}
        <motion.div 
          className="text-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-extrabold text-purple-700">06</div>
          <div className="text-sm text-purple-600">Ongoing</div>
        </motion.div>

        {/* Icon top center */}
          <motion.img
          src={light}
          alt="Plus Icon"
          className="absolute scale-125 bottom-10 right-3 w-25 h-25 object-contain"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.5 }}
        />

        {/* Card */}
        <motion.div 
          className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full max-w-[280px] text-left"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
        >
          <h3 className="text-purple-600 font-semibold text-base mb-3">Growth & Recognition</h3>
          <p className="text-black text-sm leading-relaxed">
           We’ve joined 4 incubators, secured the USC Proving Ground Prize, and expanded to a team of 21 people from 13 countries. With 1.2k+ followers and growing influence, PeakTew is just getting started.</p>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>

  {/* Scroll indicator */}
  <motion.div 
    className="flex justify-center mt-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
  >
    <div className="text-purple-500 text-sm flex items-center animate-pulse">
      <span>Swipe for more milestones</span>
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </div>
  </motion.div>
</motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default StoryPage