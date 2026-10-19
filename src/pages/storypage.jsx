import React from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import big_ring from '../assets/full_big_ring.webp';
import ceo from '../assets/ceo.webp';
import star from '../assets/star.png';
import plus from '../assets/plus.png';
import pipes from '../assets/pipes.png';
import blob from '../assets/blob.png';
import loop from '../assets/loop.png';
import light from '../assets/light.png';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const StoryPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
    setTimeout(updateScrollState, 350);
  };

  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center">
      {/* Dark Mode Toggle - Top Right */}
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
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
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

      {/* Hero Section */}
      <motion.section
        className="relative w-full overflow-hidden transition-colors duration-500 bg-white dark:bg-[#220239] pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 flex flex-col items-center justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Ring */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[450px] sm:h-[600px] md:h-[750px] lg:h-[900px] z-0 pointer-events-none flex justify-center items-start overflow-hidden"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={big_ring}
            alt="Bubble Background"
            className="w-[120%] max-w-none lg:w-full md:max-w-none h-auto object-contain opacity-95 select-none"
          />
          {/* Bottom Fade Gradient*/}
          <div
            className={`absolute bottom-0 left-0 w-full h-3/4 sm:h-1/4 pointer-events-none bg-gradient-to-b ${isDarkMode
              ? "from-transparent via-[#220239]/90 to-[#220239]"
              : "from-transparent via-white/90 to-white"
              }`}
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center w-full px-3 sm:px-6 mt-2 sm:mt-6 md:mt-16 lg:mt-24">
          <motion.div
            className="bg-white/40 dark:bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] max-w-[1014px] p-5 sm:p-8 md:p-12 text-center border border-white/30"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Gradient Title Block */}
            <motion.div
              className="mb-4 sm:mb-6 select-none inline-block bg-clip-text text-transparent !text-transparent"
              style={{
                backgroundImage: "linear-gradient(177.11deg, #A62AD2 2.4%, #6E1CBF 30.78%, #470974 97.6%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="font-extrabold text-[32px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-tight tracking-tight capitalize mb-0.5 sm:mb-1">
                How
              </h1>
              <h1 className="font-extrabold text-[32px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-tight tracking-tight capitalize my-0.5 sm:my-1">
                PeakTew Started
              </h1>
              <h2 className="font-semibold md:font-bold text-[20px] sm:text-2xl md:text-3xl lg:text-[34px] leading-snug tracking-tight mt-2 sm:mt-3">
                (And Why We Care So Much)
              </h2>
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div
              className="space-y-4 sm:space-y-6 text-[#1A1A1A] !text-[#1A1A1A] text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-[#1A1A1A] !text-[#1A1A1A]">
                Founded in January 2023, PeakTew is an award-winning next-generation social network that notifies and physically connects its users to people, places, and events in their immediate surroundings. A disruptive Blue Ocean start-up that reinvents the social network industry by solving Gen Z’s desire to socialize, while alleviating phone addiction and mental health issues.
              </p>
              <p className="text-[#1A1A1A] !text-[#1A1A1A]">
                Its innovative app features unique designs and technologies that have earned it prestigious recognition, attracting investors & advisors from Silicon Valley. Incubated in ventures across the USA, France, and the UK, PeakTew is on the fast track to becoming a unicorn company, according to multiple industry professionals.
              </p>
              <p className="text-[#1A1A1A] !text-[#1A1A1A]">
                PeakTew is passionate about delivering excellence and offers services that cater to all stages of life, every moment of the day. The startup is committed to social responsibility as it aligns itself with UN Sustainable Development Goals N°3-Good Health and Well-being, N°11-Sustainable Cities and Communities, and N°12-Responsible Consumption and Production.
              </p>
              <p className="font-semibold text-[#1A1A1A] !text-[#1A1A1A] pt-2">
                Embark with PeakTew for an exciting journey!
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${isDarkMode ? "from-[#220239] to-[#220239]/20" : "from-white to-transparent"}`} /> */}
      </motion.section>

      {/* CEO Section */}
      <motion.section
        className="w-full bg-white dark:bg-[#220239] px-3 xs:px-4 sm:px-6 py-2 sm:py-4 md:py-6 flex flex-col items-center relative transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-[1080px] w-full flex flex-col items-start pt-1 sm:pt-4">
          {/* Title Container */}
          <motion.div
            className="mb-2 sm:mb-4 md:mb-6 lg:mb-8 select-none inline-block bg-clip-text text-transparent !text-transparent pb-2"
            style={{
              backgroundImage: isDarkMode
                ? "linear-gradient(180deg, #FFFFFF 0%, #A62AD2 60%, #6E1CBF 100%)"
                : "linear-gradient(180deg, #A62AD2 0%, #6E1CBF 40%, #470974 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={fadeInUp}
          >
            <h2
              className="font-extrabold sm:font-bold text-[36px] min-[400px]:text-[40px] leading-[44px] min-[400px]:leading-[48px] sm:text-5xl md:text-6xl lg:text-[80px] sm:leading-tight lg:leading-[97px] tracking-[0px] sm:tracking-[-0.4px]"
              style={{ fontFamily: "'Proxima Nova', sans-serif" }}
            >
              {/* Mobile: 3 lines */}
              <span className="block min-[401px]:hidden">
                I Saw And Felt<br />
                What Was<br />
                Missing
              </span>
              {/* Larger Screens: 2 lines */}
              <span className="hidden min-[401px]:block">
                I Saw And Felt<br />
                What Was Missing
              </span>
            </h2>
          </motion.div>

          {/* Main Card Container */}
          <motion.div
            className="relative w-full border-[3px] md:border-[5px] rounded-[28px] sm:rounded-[32px] p-4 min-[400px]:p-5 sm:p-8 md:p-12 shadow-sm flex flex-col min-[401px]:flex-row items-stretch justify-between min-h-[340px] sm:min-h-[380px] md:min-h-[434px] mt-2 min-[400px]:mt-3 sm:mt-4 md:mt-6 lg:mt-8 overflow-hidden min-[401px]:overflow-visible"
            style={{
              borderColor: isDarkMode ? '#FFFFFF' : '#6D28B2',
              background: isDarkMode
                ? "linear-gradient(169.55deg, rgba(34, 2, 57, 0.95) 7.79%, rgba(95, 6, 159, 0.95) 98.56%)"
                : "linear-gradient(169.55deg, rgba(217, 217, 217, 0) 7.79%, rgba(109, 40, 178, 0.2) 98.56%)",
            }}
            variants={fadeInUp}
          >
            {/* Paragraph Text */}
            <motion.div
              className="w-full min-[401px]:w-[54%] md:w-[58%] lg:w-[60%] z-10 text-left text-[#6D28B2] dark:text-white text-[12px] min-[400px]:text-[13px] sm:text-base md:text-[20px] leading-[135%] sm:leading-[130%] font-semibold space-y-2 min-[400px]:space-y-3 min-[401px]:space-y-0"
              style={{ fontFamily: "'Proxima Nova', sans-serif" }}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Paragraph 1 */}
              <p className="w-full">
                The idea for PeakTew stemmed from the observation of society’s
                growing disconnect caused by excessive phone usage and social
                media addiction. Recognizing the detrimental effects of this
                phenomenon on mental health and social well-being, we set out to
                create a solution that would reconnect people with the real world.
              </p>

              {/* Paragraph 2 */}
              <p className="w-[50%] min-[400px]:w-[52%] min-[401px]:w-full pt-1 sm:pt-3">
                Thus, PeakTew was born with a mission to break the cycle of mobile
                phone addiction and inspire individuals to step out of their
                comfort zones. Since our inception, we have remained steadfast in
                our commitment to promoting genuine human connections and tackling
                the negative effects of isolation.
              </p>
            </motion.div>

            {/* CEO Image */}
            <motion.div
              className="absolute right-0 bottom-0 top-0 min-[401px]:top-[-80px] sm:top-[-100px] md:top-[-140px] lg:top-[-180px] w-[50%] min-[400px]:w-[48%] min-[401px]:w-[46%] md:w-[42%] max-w-[460px] pointer-events-none z-20 flex justify-end items-end"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full flex justify-end items-end overflow-hidden rounded-br-[22px] sm:rounded-br-[28px]">
                <img
                  src={ceo}
                  alt="CEO"
                  className="w-full h-auto min-[401px]:h-[115%] object-contain object-bottom select-none pointer-events-auto transform translate-y-0 min-[401px]:translate-y-1 scale-100 min-[401px]:scale-105 origin-bottom"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Milestones Section */}
      <motion.section
        className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-[90px] sm:text-4xl md:text-[72px] font-bold text-left text-purple-700 mb-12 sm:mb-16 md:mb-20 lg:mb-24"
            variants={fadeInUp}
          >
            Peaks That We Hit
          </motion.h2>

          <div className="relative">
            {/* Left fade + arrow */}
            <div className={`absolute left-0 top-0 bottom-6 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-purple-300 shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 ${canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Right fade + arrow */}
            <div className={`absolute right-0 top-0 bottom-6 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-purple-300 shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 ${canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Scroll track — hide native scrollbar */}
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="milestone-track overflow-x-auto pb-6 px-14"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.milestone-track::-webkit-scrollbar { display: none; }`}</style>
              <div className="flex space-x-10" style={{ width: "max-content" }}>

                {/* Milestone 1 */}
                <motion.div
                  className="relative w-96 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-5">
                      <div className={`text-5xl font-extrabold ${isDarkMode ? "!text-purple-700" : "text-purple-700"}`}>01</div>
                      <div className="text-base text-purple-600 mt-1">January 2023</div>
                    </div>
                    <motion.div
                      className="relative z-10 -mb-8"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={star} alt="Star Icon" className="w-24 h-24 object-contain" />
                    </motion.div>
                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-8 w-full">
                      <h3 className="!text-purple-600 font-semibold text-xl mb-4">The Spark</h3>
                      <p className="!text-black text-base leading-relaxed">
                        PeakTew started with one mission: making real-life friendships easier in a
                        world obsessed with swipes and likes. It wasn't just a start-up—it was a
                        movement to bring people together offline.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 2 */}
                <motion.div
                  className="relative w-96 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <div className="hidden md:block absolute -left-5 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300" />
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-5">
                      <div className={`text-5xl font-extrabold ${isDarkMode ? "!text-purple-700" : "text-purple-700"}`}>02</div>
                      <div className="text-base text-purple-600 mt-1">June 2023</div>
                    </div>
                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-8 w-full">
                      <h3 className="!text-purple-600 font-semibold text-xl mb-4">Defining Our Identity</h3>
                      <p className="!text-black text-base leading-relaxed">
                        The name "PeakTew" captured both the pinnacle of activity and the excitement of
                        the moment. However, the initial app design leaned too heavily into dating app
                        territory. It was clear we needed a new direction, and the redesign began.
                      </p>
                    </div>
                    <motion.img
                      src={plus}
                      alt="Plus Icon"
                      className="absolute -bottom-6 left-3 w-24 h-24 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Milestone 3 */}
                <motion.div
                  className="relative w-96 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                >
                  <div className="hidden md:block absolute -left-5 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300" />
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-5">
                      <div className={`text-5xl font-extrabold ${isDarkMode ? "!text-purple-700" : "text-purple-700"}`}>03</div>
                      <div className="text-base text-purple-600 mt-1">Sept 2023 – Feb 2024</div>
                    </div>
                    <motion.div
                      className="relative z-10 -mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={pipes} alt="Pipes Icon" className="w-24 h-24 object-contain" />
                    </motion.div>
                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-8 w-full">
                      <h3 className="!text-purple-600 font-semibold text-xl mb-4">The Transformation</h3>
                      <p className="!text-black text-base leading-relaxed">
                        This was our turning point. We underwent a complete overhaul and our brand
                        identity shifted. Guided by user feedback, we began building a product people
                        truly wanted.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 4 */}
                <motion.div
                  className="relative w-96 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
                >
                  <div className="hidden md:block absolute -left-5 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300" />
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-5">
                      <div className={`text-5xl font-extrabold ${isDarkMode ? "!text-purple-700" : "text-purple-700"}`}>04</div>
                      <div className="text-base text-purple-600 mt-1">July 2024</div>
                    </div>
                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-8 w-full">
                      <h3 className="!text-purple-600 font-semibold text-xl mb-4">Preparing for Launch</h3>
                      <p className="!text-black text-base leading-relaxed">
                        With the launch approaching, we refined our design and sharpened our brand
                        identity. PeakTew evolved beyond an app—it was ready to make an impact.
                      </p>
                    </div>
                    <motion.img
                      src={blob}
                      alt="Blob Icon"
                      className="absolute bottom-10 right-3 w-28 h-28 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Milestone 5 */}
                <motion.div
                  className="relative w-96 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.8 }}
                >
                  <div className="hidden md:block absolute -left-5 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300" />
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-5">
                      <div className={`text-5xl font-extrabold ${isDarkMode ? "!text-purple-700" : "text-purple-700"}`}>05</div>
                      <div className="text-base text-purple-600 mt-1">October 2024</div>
                    </div>
                    <motion.div
                      className="relative z-0 -mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={loop} alt="Loop Icon" className="w-24 h-24 object-contain" />
                    </motion.div>
                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-8 w-full">
                      <h3 className="!text-purple-600 font-semibold text-xl mb-4">The SEC Pitch Stage</h3>
                      <p className="!text-black text-base leading-relaxed">
                        At the SEC Pitch Competition, we unveiled PeakTew's Alpha MVP: a hybrid platform
                        designed to move people from digital notifications to real-life interactions. No
                        endless swiping—just authentic connections.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 6 */}
                <motion.div
                  className="relative w-96 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 1.0 }}
                >
                  <div className="hidden md:block absolute -left-5 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300" />
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-5">
                      <div className={`text-5xl font-extrabold ${isDarkMode ? "!text-purple-700" : "text-purple-700"}`}>06</div>
                      <div className="text-base text-purple-600 mt-1">Ongoing</div>
                    </div>
                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-8 w-full">
                      <h3 className="!text-purple-600 font-semibold text-xl mb-4">Growth & Recognition</h3>
                      <p className="!text-black text-base leading-relaxed">
                        We've joined 4 incubators, secured the USC Proving Ground Prize, and expanded to
                        a team of 21 people from 13 countries. With 1.2k+ followers and growing
                        influence, PeakTew is just getting started.
                      </p>
                    </div>
                    <motion.img
                      src={light}
                      alt="Light Icon"
                      className="absolute bottom-10 right-3 w-28 h-28 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default StoryPage;
