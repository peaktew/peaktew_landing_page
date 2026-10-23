import React from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import big_ring from '../assets/big_ring.webp';
import big_ring_dark from '../assets/big_ring_dark.webp';
import ceo from '../assets/ceo.webp';
import spiral from '../assets/milestones/spiral.png';
import star from '../assets/milestones/star.png';
import bubble from '../assets/milestones/bubble.png';
import ribbon from '../assets/milestones/ribbon.png';
import tunnel from '../assets/milestones/tunnel.png';
import blob from '../assets/milestones/blob.png';
import squiggle from '../assets/milestones/squiggle.png';
import crystal from '../assets/milestones/crystal.png';
import loops from '../assets/milestones/loops.png';
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
    <div
      className="w-full overflow-x-hidden flex flex-col items-center transition-colors duration-500"
      style={{ backgroundColor: isDarkMode ? '#220239' : '#FFFFFF' }}
    >
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
          <div
            className="w-14 h-8 rounded-full peer-focus:ring-2 peer-focus:ring-purple-400 transition-colors duration-300 flex items-center px-1"
            style={{ backgroundColor: isDarkMode ? '#7c3aed' : '#e5e7eb' }}
          >
            <span
              className={`transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              style={{ backgroundColor: isDarkMode ? '#0f172a' : '#ffffff' }}
            >
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
        className="relative w-full overflow-hidden transition-colors duration-500 pt-16 sm:pt-24 md:pt-28 lg:pt-32 flex flex-col items-center justify-start pb-20 sm:pb-32 lg:pb-50"
        style={{ backgroundColor: isDarkMode ? '#220239' : '#FFFFFF' }}
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
            src={isDarkMode ? big_ring_dark : big_ring}
            alt="Bubble Background"
            className="w-[120%] max-w-none lg:w-full md:max-w-none h-auto object-contain opacity-95 select-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)"
            }}
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center w-full px-3 sm:px-6 mt-2 sm:mt-6 md:mt-16 lg:mt-24">
          <motion.div
            className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] max-w-[1014px] p-5 sm:p-8 md:p-12 text-center border border-white/30"
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
              className="space-y-4 sm:space-y-6 text-[#220239] text-[12px] min-[400]:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-semibold"
              style={{ fontFamily: "'Proxima Nova', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p>
                Founded in January 2023, PeakTew is an award-winning next-generation social network that notifies and physically connects its users to people, places, and events in their immediate surroundings. A disruptive Blue Ocean start-up that reinvents the social network industry by solving Gen Z’s desire to socialize, while alleviating phone addiction and mental health issues.
              </p>
              <p>
                Its innovative app features unique designs and technologies that have earned it prestigious recognition, attracting investors & advisors from Silicon Valley. Incubated in ventures across the USA, France, and the UK, PeakTew is on the fast track to becoming a unicorn company, according to multiple industry professionals.
              </p>
              <p>
                PeakTew is passionate about delivering excellence and offers services that cater to all stages of life, every moment of the day. The startup is committed to social responsibility as it aligns itself with UN Sustainable Development Goals N°3-Good Health and Well-being, N°11-Sustainable Cities and Communities, and N°12-Responsible Consumption and Production.
              </p>
              <p>
                Embark with PeakTew for an exciting journey!
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${isDarkMode ? "from-[#220239] to-[#220239]/20" : "from-white to-transparent"}`} /> */}
      </motion.section>

      {/* CEO Section */}
      <motion.section
        className="w-full px-3 xs:px-4 sm:px-6 flex flex-col items-center relative transition-colors duration-500 pb-20 sm:pb-32 lg:pb-50"
        style={{ backgroundColor: isDarkMode ? '#220239' : '#FFFFFF' }}
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
                ? "linear-gradient(174.32deg, #FFFFFF -42.01%, #9C65D4 120.23%, #6E1CBF 178.24%, #470974 179.09%)"
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
              className="w-full min-[401px]:w-[54%] md:w-[58%] lg:w-[60%] z-10 text-left text-[12px] min-[400]:text-sm sm:text-base md:text-lg lg:text-xl leading-[135%] sm:leading-[130%] font-semibold space-y-2 min-[400px]:space-y-3 min-[401px]:space-y-0"
              style={{
                fontFamily: "'Proxima Nova', sans-serif",
                color: isDarkMode ? '#FFFFFF' : '#6D28B2'
              }}
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
              <p className="w-[55%] min-[400px]:w-[52%] min-[401px]:w-full pt-1 sm:pt-3">
                Thus, PeakTew was born with a mission to break the cycle of mobile
                phone addiction and inspire individuals to step out of their
                comfort zones. Since our inception, we have remained steadfast in
                our commitment to promoting genuine human connections and tackling
                the negative effects of isolation.
              </p>
            </motion.div>

            {/* CEO Image */}
            <motion.div
              className="absolute -right-4 min-[401px]:right-0 bottom-0 top-0 min-[401px]:top-[-80px] sm:top-[-100px] md:top-[-140px] lg:top-[-180px] w-[50%] min-[400px]:w-[48%] min-[401px]:w-[46%] md:w-[42%] max-w-[460px] pointer-events-none z-20 flex justify-end items-end"
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
        className="w-full relative transition-colors duration-500 pb-12 sm:pb-20 flex flex-col items-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title Header */}
        <div className="max-w-[1280px] w-full px-4 xs:px-6 sm:px-8 md:px-12 flex flex-col items-start relative z-10">
          <motion.h2
            className="font-extrabold text-[clamp(2.5rem,5.3vw+1rem,5.5rem)] leading-[1.2] lg:leading-[127px] tracking-[-0.4px] text-left inline-block bg-clip-text text-transparent !text-transparent select-none"
            style={{
              fontFamily: "'Proxima Nova', sans-serif",
              backgroundImage: isDarkMode
                ? "linear-gradient(174.32deg, #FFFFFF -42.01%, #9C65D4 120.23%, #6E1CBF 178.24%, #470974 179.09%)"
                : "linear-gradient(177.11deg, #A62AD2 2.4%, #6E1CBF 30.78%, #470974 97.6%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={fadeInUp}
          >
            <span className="block min-[520px]:hidden">
              Peaks That<br />
              We Hit
            </span>
            <span className="hidden min-[520px]:inline">
              Peaks That We Hit
            </span>
          </motion.h2>
        </div>

        {/* Gradient Background Container */}
        <div
          className="w-screen relative left-1/2 -translate-x-1/2 py-4 sm:py-8 transition-all duration-500 flex justify-center"
          style={{
            background: isDarkMode
              ? "linear-gradient(180deg, #220239 0%, #6D28B2 50%, #220239 100%)"
              : "transparent"
          }}
        >
          {/* Inner Track Content Wrapper */}
          <div className="max-w-[1280px] w-full px-4 xs:px-6 sm:px-8 md:px-12 relative">
            <div className="relative w-full">

              {/* Left Floating Arrow */}
              <button
                onClick={() => scroll('left')}
                className={`absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full ${isDarkMode
                  ? "bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:bg-white/30 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  : "bg-white border border-purple-200 text-[#6D28B2] hover:bg-purple-50 active:scale-95 shadow-lg"
                  } transition-all duration-200 flex items-center justify-center ${canScrollLeft ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-90'
                  }`}
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Right Floating Arrow */}
              <button
                onClick={() => scroll('right')}
                className={`absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full ${isDarkMode
                  ? "bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:bg-white/30 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  : "bg-white border border-purple-200 text-[#6D28B2] hover:bg-purple-50 active:scale-95 shadow-lg"
                  } transition-all duration-200 flex items-center justify-center ${canScrollRight ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-90'
                  }`}
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Horizontal Scroll Track */}
              <div
                ref={scrollRef}
                onScroll={updateScrollState}
                className="milestone-track overflow-x-auto py-6 sm:py-8"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)',
                  maskImage: 'linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)'
                }}
              >
                <style>{`.milestone-track::-webkit-scrollbar { display: none; }`}</style>

                <div className="flex space-x-5 sm:space-x-12 px-3 sm:px-8" style={{ width: "max-content" }}>
                  {[
                    { num: "01", date: "January 2023", title: "The Spark", text: "PeakTew started with one mission: making real-life friendships easier in a world obsessed with swipes and likes. It wasn't just a start-up—it was a movement to bring people together offline.", icon: spiral },
                    { num: "02", date: "June 2023", title: "Defining Our Identity", text: "The name \"PeakTew\" captured both the pinnacle of activity and the excitement of the moment. However, the initial app design leaned too heavily into dating app territory. It was clear we needed a new direction, and the redesign began.", icon: star },
                    { num: "03", date: "September 2023-\nFebruary 2024", title: "The Transformation", text: "This was our turning point. The app underwent a complete UI/UX overhaul, and our brand identity took shape. Guided by user feedback, we started building a product people genuinely wanted.", icon: bubble },
                    { num: "04", date: "July 2024", title: "Preparing for Launching", text: "With the launch approaching, we refined our design and sharpened our brand identity. PeakTew evolved beyond an app—it was ready to make an impact.", icon: ribbon },
                    { num: "05", date: "October 2024", title: "The SEC Pitch Stage", text: "At the SEC Pitch Competition, we unveiled PeakTew's Alpha MVP: a hybrid platform designed to move people from digital notifications to real-life interactions. No endless swiping—just authentic connections.", icon: tunnel },
                    { num: "06", date: "January 2025", title: "Refining the Direction", text: "In early 2025, We sharpened its product vision. Moving away from initial assumptions and redefining the platform around meaningful, real-world interactions.", icon: blob },
                    { num: "07", date: "June 2025", title: "Building the Foundations", text: "As the year progressed, the team refined the brand, strengthened the product, and laid the groundwork across design, technology, and strategy for future launch and growth.", icon: squiggle },
                    { num: "08", date: "January 2026", title: "Activating the Launch", text: "In 2026, PeakTew began turning strategy into action—rolling out new features, preparing campus-based launch initiatives, and driving early user acquisition across key locations.", icon: crystal },
                    { num: "09", date: "Ongoing", title: "Growing in Motion", text: "With continuous product updates, social growth, and expanding outreach, PeakTew is steadily building traction—shaping a platform designed to connect people beyond the screen.", icon: loops }
                  ].map((item, index) => {
                    {/* Alternating Logic: Odd item (Lower position) Even item (Higher position) */ }
                    const isEven = index % 2 === 1;

                    return (
                      <motion.div
                        key={item.num}
                        className="relative w-[180px] sm:w-100 flex-shrink-0"
                        variants={fadeInUp}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                      >
                        {/* Vertical dashed line dividers */}
                        {index > 0 && (
                          <div
                            className="hidden md:block absolute -left-5 top-4 bottom-4 w-[0.5px] border-l border-dashed transition-colors duration-300"
                            style={{
                              borderColor: isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(109, 40, 178, 0.2)"
                            }}
                          />
                        )}

                        {/* Calibrated Container (420px mobile / 700px desktop) */}
                        <div className="flex flex-col items-start h-[420px] sm:h-[700px]">

                          {/* Header: Number & Date */}
                          <div className="text-left flex-shrink-0 mb-1">
                            <div className="font-['Proxima_Nova',sans-serif] font-semibold text-[53.65px] sm:text-[90px] leading-[73.32px] sm:leading-[120px] tracking-[-0.18px] uppercase transition-colors duration-300 text-[#6D28B2]">
                              {item.num}
                            </div>

                            <div className="font-['Proxima_Nova',sans-serif] font-semibold text-[13.41px] sm:text-[30px] leading-[19.67px] sm:leading-[1.2] tracking-[-0.18px] transition-colors duration-300 text-[#6D28B2] whitespace-pre-line mb-6 sm:mb-10">
                              {item.date}
                            </div>
                          </div>

                          {/* Card Wrapper */}
                          <div className={`relative w-full flex-1 flex flex-col ${isEven ? 'justify-start pt-1.5' : 'justify-end pb-1.5'}`}>

                            {/* Milestone Card with Icons */}
                            <div
                              className="rounded-lg p-3.5 sm:p-6 w-full transition-all duration-300 relative overflow-visible"
                              style={{
                                background: isDarkMode
                                  ? "radial-gradient(100% 359.18% at 0% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 225, 255, 0.8) 100%)",
                                borderColor: isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(109, 40, 178, 0.18)",
                                boxShadow: isDarkMode
                                  ? "0 12px 32px rgba(0,0,0,0.35), 0 0 25px rgba(166, 42, 210, 0.25)"
                                  : "0 8px 24px rgba(109, 40, 178, 0.08)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                              }}
                            >
                              {/* Icon for Odd Cards: overlap top border */}
                              {!isEven && item.icon && (
                                <motion.img
                                  src={item.icon}
                                  alt="Icon"
                                  className="absolute -top-1 right-4 -translate-y-5/6 w-25 h-25 sm:w-45 sm:h-45 object-contain z-20 pointer-events-none drop-shadow-md"
                                  whileHover={{ rotate: 15, scale: 1.1 }}
                                />
                              )}

                              <h3
                                className={`mb-2 sm:mb-4 font-['Proxima_Nova',sans-serif] leading-[19.67px] sm:leading-[1.3] tracking-[-0.18px] !text-[#6D28B2] transition-colors duration-300
                                  ${isDarkMode ? 'sm:text-[22px] font-extrabold text-[10px]' : 'sm:text-[25px] font-semibold text-[12px]'}
                                `}
                              >
                                {item.title}
                              </h3>

                              <p className="font-['Proxima_Nova',sans-serif] font-medium text-[9px] sm:text-[20px] leading-[20px] sm:leading-[2] tracking-[-0.18px] text-black transition-colors duration-300">
                                {item.text}
                              </p>

                              {/* Icon for Even Cards: overlap bottom border */}
                              {isEven && item.icon && (
                                <motion.img
                                  src={item.icon}
                                  alt="Icon"
                                  className="absolute -bottom-1 left-4 translate-y-6/7 w-25 h-25 sm:w-45 sm:h-45 object-contain z-20 pointer-events-none drop-shadow-md"
                                  whileHover={{ rotate: 90 }}
                                  transition={{ duration: 0.5 }}
                                />
                              )}
                            </div>

                          </div>

                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default StoryPage;
