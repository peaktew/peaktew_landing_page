import React from 'react';
import big_ring from '../assets/full_big_ring.png';
import ceo from '../assets/ceo.png';
import star from '../assets/star.png';
import plus from '../assets/plus.png';
import pipes from '../assets/pipes.png';
import blob from '../assets/blob.png';
import loop from '../assets/loop.png';
import light from '../assets/light.png';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

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

  const controls = useAnimation();
  const containerRef = useRef(null);
  const duration = 25; // Scroll duration in seconds (adjust as needed)

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2; // We duplicate the content
    const clientWidth = scrollContainer.clientWidth;
    const scrollDistance = scrollWidth - clientWidth;

    const sequence = async () => {
      while (true) {
        await controls.start({
          x: -scrollDistance,
          transition: { duration, ease: "linear" }
        });
        await controls.start({ x: 0, duration: 0 }); // Instant reset for seamless loop
      }
    };

    sequence();

    return () => controls.stop();
  }, [controls, duration]);

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
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
          <motion.div 
            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl max-w-5xl p-4 sm:p-6 md:p-8 lg:p-12 text-center mx-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h2 
              className="text-[90px] sm:text-4xl md:text-[72px] font-bold text-purple-700 mb-1 sm:mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              How
            </motion.h2>
            <motion.h2 
              className="text-[100px] sm:text-5xl md:text-[80px] font-bold text-purple-700 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              PeakTew Started
            </motion.h2>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              (and Why We Care So Much)
            </motion.h2>
            <motion.div 
              className="columns-1 md:columns-1 gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                Founded in January 2023, PeakTew is an award-winning next-generation social network that notifies and physically connects its users to people, places, and events in their immediate surroundings. A disruptive Blue Ocean start-up that reinvents the social network industry by solving Gen Z’s desire to socialize, while alleviating phone addiction and mental health issues.
Its innovative app features unique designs and technologies that have earned it prestigious recognition, attracting investors & advisors from Silicon Valley. Incubated in ventures across the USA, France, and the UK, PeakTew is on the fast track to becoming a unicorn company, according to multiple industry professionals. 
PeakTew is passionate about delivering excellence and offers services that cater to all stages of life, every moment of the day. The startup is committed to social responsibility as it aligns itself with UN Sustainable Development Goals N°3-Good Health and Well-being, N°11-Sustainable Cities and Communities, and N°12-Responsible Consumption and Production.
Embark with PeakTew for an exciting journey!
</p>

            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CEO Section */}
      <motion.section 
        className="w-full bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-[90px] sm:text-4xl md:text-[72px] font-bold text-purple-700 mb-8 sm:mb-12 text-left"
          variants={fadeInUp}
        >
          I Saw And Felt
What Was Missing
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
            className="flex-1 m-10 p-6 sm:p-8 md:p-10 lg:p-12 text-left text-[#6D28B2] text-sm sm:text-base leading-relaxed"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              

The idea for PeakTew stemmed from the observation of society’s growing disconnect caused by excessive phone usage and social media addiction. Recognizing the detrimental effects of this phenomenon on mental health and social well-being, we set out to create a solution that would reconnect people with the real world. Thus, PeakTew was born with a mission to break the cycle of mobile phone addiction and inspire individuals to step out of their comfort zones. Since our inception, we have remained steadfast in our commitment to promoting genuine human connections and tackling the negative effects of isolation.






            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex-shrink-0 w-full md:w-[250px] lg:w-[300px] xl:w-[350px] relative overflow-hidden"
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

          <div className="relative overflow-hidden">
            {/* Auto-scrolling container */}
            <motion.div 
              className="flex pb-10"
              ref={containerRef}
              animate={controls}
            >
              <div className="flex space-x-8 md:space-x-16 px-4">
                {/* Milestone 1 */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">01</div>
                      <div className="text-xs sm:text-sm text-purple-600">January 2023</div>
                    </div>

                    <motion.div 
                      className="relative z-10 -mb-6 sm:-mb-8"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={star} alt="Star Icon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                    </motion.div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">The Spark</h3>
                      <p className="text-black text-sm leading-relaxed">
                        PeakTew started with one mission: making real-life friendships easier in a world obsessed with swipes and likes. It wasn't just a start-up—it was a movement to bring people together offline.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 2 */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">02</div>
                      <div className="text-xs sm:text-sm text-purple-600">June 2023</div>
                    </div>

                    <div className="relative z-10 bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">Defining Our Identity</h3>
                      <p className="text-black text-sm leading-relaxed">
                        The name "PeakTew" captured both the pinnacle of activity and the excitement of the moment. However, the initial app design leaned too heavily into dating app territory. It was clear we needed a new direction, and the redesign began.
                      </p>
                    </div>

                    <motion.img
                      src={plus}
                      alt="Plus Icon"
                      className="absolute scale-125 -bottom-4 sm:-bottom-6 left-2 sm:left-3 w-16 sm:w-20 h-16 sm:h-20 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Milestone 3 */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">03</div>
                      <div className="text-xs sm:text-sm text-purple-600">Sept 2023 - Feb 2024</div>
                    </div>

                    <motion.div 
                      className="relative z-10 -mb-6 sm:-mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={pipes} alt="Pipes Icon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                    </motion.div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">The Transformation</h3>
                      <p className="text-black text-sm leading-relaxed">
                        This was our turning point. We underwent a complete overhaul and our brand identity shifted. Guided by user feedback, we began building a product people truly wanted.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 4 */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">04</div>
                      <div className="text-xs sm:text-sm text-purple-600">July 2024</div>
                    </div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">Preparing for Launch</h3>
                      <p className="text-black text-sm leading-relaxed">
                        With the launch approaching, we refined our design and sharpened our brand identity. PeakTew evolved beyond an app—it was ready to make an impact.
                      </p>
                    </div>

                    <motion.img
                      src={blob}
                      alt="Blob Icon"
                      className="absolute scale-125 bottom-8 sm:bottom-10 right-2 sm:right-3 w-20 sm:w-25 h-20 sm:h-25 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Milestone 5 */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 1.0 }}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">05</div>
                      <div className="text-xs sm:text-sm text-purple-600">October 2024</div>
                    </div>

                    <motion.div 
                      className="relative z-0 -mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={loop} alt="Loop Icon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                    </motion.div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">The SEC Pitch Stage</h3>
                      <p className="text-black text-sm leading-relaxed">
                        At the SEC Pitch Competition, we unveiled PeakTew's Alpha MVP: a hybrid platform designed to move people from digital notifications to real-life interactions. No endless swiping—just authentic connections.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 6 */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">06</div>
                      <div className="text-xs sm:text-sm text-purple-600">Ongoing</div>
                    </div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">Growth & Recognition</h3>
                      <p className="text-black text-sm leading-relaxed">
                        We've joined 4 incubators, secured the USC Proving Ground Prize, and expanded to a team of 21 people from 13 countries. With 1.2k+ followers and growing influence, PeakTew is just getting started.
                      </p>
                    </div>

                    <motion.img
                      src={light}
                      alt="Light Icon"
                      className="absolute scale-125 bottom-8 sm:bottom-10 right-2 sm:right-3 w-20 sm:w-25 h-20 sm:h-25 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Duplicate milestones for seamless looping */}
                {/* Milestone 1 (Duplicate) */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">01</div>
                      <div className="text-xs sm:text-sm text-purple-600">January 2023</div>
                    </div>

                    <motion.div 
                      className="relative z-10 -mb-6 sm:-mb-8"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={star} alt="Star Icon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                    </motion.div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">The Spark</h3>
                      <p className="text-black text-sm leading-relaxed">
                        PeakTew started with one mission: making real-life friendships easier in a world obsessed with swipes and likes. It wasn't just a start-up—it was a movement to bring people together offline.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 2 (Duplicate) */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">02</div>
                      <div className="text-xs sm:text-sm text-purple-600">June 2023</div>
                    </div>

                    <div className="relative z-10 bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">Defining Our Identity</h3>
                      <p className="text-black text-sm leading-relaxed">
                        The name "PeakTew" captured both the pinnacle of activity and the excitement of the moment. However, the initial app design leaned too heavily into dating app territory. It was clear we needed a new direction, and the redesign began.
                      </p>
                    </div>

                    <motion.img
                      src={plus}
                      alt="Plus Icon"
                      className="absolute scale-125 -bottom-4 sm:-bottom-6 left-2 sm:left-3 w-16 sm:w-20 h-16 sm:h-20 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Milestone 3 (Duplicate) */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">03</div>
                      <div className="text-xs sm:text-sm text-purple-600">Sept 2023 - Feb 2024</div>
                    </div>

                    <motion.div 
                      className="relative z-10 -mb-6 sm:-mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={pipes} alt="Pipes Icon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                    </motion.div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">The Transformation</h3>
                      <p className="text-black text-sm leading-relaxed">
                        This was our turning point. We underwent a complete overhaul and our brand identity shifted. Guided by user feedback, we began building a product people truly wanted.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 4 (Duplicate) */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">04</div>
                      <div className="text-xs sm:text-sm text-purple-600">July 2024</div>
                    </div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">Preparing for Launch</h3>
                      <p className="text-black text-sm leading-relaxed">
                        With the launch approaching, we refined our design and sharpened our brand identity. PeakTew evolved beyond an app—it was ready to make an impact.
                      </p>
                    </div>

                    <motion.img
                      src={blob}
                      alt="Blob Icon"
                      className="absolute scale-125 bottom-8 sm:bottom-10 right-2 sm:right-3 w-20 sm:w-25 h-20 sm:h-25 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Milestone 5 (Duplicate) */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">05</div>
                      <div className="text-xs sm:text-sm text-purple-600">October 2024</div>
                    </div>

                    <motion.div 
                      className="relative z-0 -mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <img src={loop} alt="Loop Icon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                    </motion.div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">The SEC Pitch Stage</h3>
                      <p className="text-black text-sm leading-relaxed">
                        At the SEC Pitch Competition, we unveiled PeakTew's Alpha MVP: a hybrid platform designed to move people from digital notifications to real-life interactions. No endless swiping—just authentic connections.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Milestone 6 (Duplicate) */}
                <motion.div 
                  className="relative w-72 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <div className="hidden md:block absolute -left-4 top-8 bottom-8 w-px border-l-2 border-dashed border-purple-300"></div>
                  
                  <div className="flex flex-col items-center h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">06</div>
                      <div className="text-xs sm:text-sm text-purple-600">Ongoing</div>
                    </div>

                    <div className="bg-[#F6F6F6] border-4 border-white rounded-2xl shadow-lg p-6 w-full">
                      <h3 className="text-purple-600 font-semibold text-lg mb-3">Growth & Recognition</h3>
                      <p className="text-black text-sm leading-relaxed">
                        We've joined 4 incubators, secured the USC Proving Ground Prize, and expanded to a team of 21 people from 13 countries. With 1.2k+ followers and growing influence, PeakTew is just getting started.
                      </p>
                    </div>

                    <motion.img
                      src={light}
                      alt="Light Icon"
                      className="absolute scale-125 bottom-8 sm:bottom-10 right-2 sm:right-3 w-20 sm:w-25 h-20 sm:h-25 object-contain"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Progress indicator */}
            <div className="px-4 mt-6">
              <div className="relative h-1.5 bg-purple-100 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
                  animate={{
                    width: ["0%", "100%"],
                    transition: { duration, repeat: Infinity, ease: "linear" }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default StoryPage;