import React, { useEffect } from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import person from "../assets/Landing_page/three_person.webp";
import { GlobeDemo } from "../components/globe/Globle";
import Ellipse2 from "../assets/Landing_page/Ellipse 2.webp";
import Ellipse3 from "../assets/Landing_page/Ellipse 3.webp";
import not1 from "../assets/Landing_page/not1.webp";
import not2 from "../assets/Landing_page/not2.webp";
import not3 from "../assets/Landing_page/not3.webp";
import not4 from "../assets/Landing_page/not4.webp";
import not5 from "../assets/Landing_page/not5.webp";
import welcome from "../assets/Landing_page/welcome.webp";
import gradient from "../assets/Landing_page/gradient.webp";
import anime from "../assets/Landing_page/Homepage Animation.mp4";
import mascot from "../assets/Landing_page/mascot.webp";
import gradient3 from "../assets/Landing_page/gradient-3.webp";
import lines from "../assets/Landing_page/lines.webp";
import arrow from "../assets/Landing_page/Arrow.webp";
import alert from "../assets/Landing_page/alert.webp";
import pfp from "../assets/Landing_page/pfp.webp";
import arch from "../assets/Landing_page/arch.webp";
import { useDarkMode } from '../components/DarkModeContext';

const AnimatedText = ({ text, delay = 0, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const NotificationCard = ({
  src,
  initialX,
  initialY,
  rotate,
  delay,
  top,
  left,
  right,
  className,
}) => {
  return (
    <motion.img
      src={src}
      alt="notification"
      className={`absolute w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] ${className}`}
      style={{ top, left, right }}
      initial={{ x: initialX, y: initialY, opacity: 0, rotate }}
      whileInView={{ x: 0, y: 0, opacity: 1, rotate }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay,
      }}
    />
  );
};

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const section = document.querySelector("section");
      setMaxScroll(section?.offsetHeight - window.innerHeight || 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Calculate scroll progress (0 to 1)
  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  // Left Arrow (stops at left text position)
  const leftArrowMaxY = 100;
  const leftArrowY = Math.min(scrollY * 0.5, leftArrowMaxY);
  const leftArrowScale = 0.5 + Math.min(scrollY / 1000, 0.5);
  const leftArrowOpacity =
    scrollY < leftArrowMaxY * 2 ? 1 : 1 - (scrollY - leftArrowMaxY * 2) / 500;

  // Right Arrow (stops at right text position)
  const rightArrowMaxY = 250;
  const rightArrowY = Math.min(scrollY * 0.5, rightArrowMaxY);
  const rightArrowScale = 0.5 + Math.min(scrollY / 1000, 1.75);
  const rightArrowOpacity =
    scrollY < rightArrowMaxY * 1.5
      ? 1
      : 1 - (scrollY - rightArrowMaxY * 1.5) / 500;

  // Middle Arrow (goes all the way down)
  const middleArrowMaxY = 3000;
  const middleArrowY = Math.min(scrollY * 0.5, middleArrowMaxY);
  const middleArrowScale = 0.5 + Math.min(scrollY / 800, 2.5);
  const middleArrowOpacity =
    scrollY < middleArrowMaxY * 1.2
      ? 1
      : 1 - (scrollY - middleArrowMaxY * 1.2) / 500;

  // Animation variants for dark mode transition

  return (
    <div className="relative overflow-hidden transition-colors duration-500 bg-white">
      {/* Theme Toggle */}

      {/* Globe Section */}
      <motion.div
        className="mx-auto px-4 w-full h-screen overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section style={{ position: "relative", zIndex: 1 }}>
          <GlobeDemo />
        </section>
        
        {/* Dark Mode Toggle - Top Right */}
        <div className="absolute top-4 right-4 z-20">
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
        
        {/* Hero Text */}
        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full px-4 z-10'>
          <AnimatedText 
            text="Take the fun" 
            className="text-5xl md:text-7xl lg:text-8xl xl:text-[96px] font-metro-600 text-[#220239] text-center leading-none" 
            
          />
          <AnimatedText
            text="to the real World"
            delay={0.3}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-metro-600 text-center leading-none my-2 sm:my-4 bg-gradient-to-br from-[#010101] to-[#B338DE] bg-clip-text text-transparent" 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6"
          >
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-metro-600 text-[#220239] text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#220239' }}>
              We connect you to what matters. Real people, real experiences,
            </p>
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-metro-600 text-[#220239] text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#220239' }}>
              and the world just outside your door.
            </p>
          </motion.div>
        </div>
        </motion.div>
      <motion.img
        src={mascot}
        alt="mascot"
        className="absolute top-[60vh] right-0 rotate-[40deg] w-[200px] sm:w-[300px] md:w-[400px] pointer-events-none z-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      <motion.section
        className="absolute top-[95vh] left-0 w-screen max-w-none pointer-events-none z-2 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg
          className="w-[190vw] -ml-[15vw] h-[250px] sm:h-[300px] md:h-[400px]"
          viewBox="0 0 2000 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ellipseGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={isDarkMode ? "#220239" : "#f0f0fd"} />
              <stop offset="50%" stopColor="#cca9ed" />
              <stop offset="100%" stopColor={isDarkMode ? "#220239" : "#ffffff"} />
            </linearGradient>
          </defs>
          <path
            d="M0,200
         A720,200 0 0,1 1440,200
         L1440,200
         L0,200
         Z"
            fill="url(#ellipseGradient)"
          />
        </svg>
      </motion.section>
      <div className="h-[20vh]"></div>
      {/* Lines and Arrows Section */}
      <motion.section 
        className="relative w-full h-[80vh] sm:h-[100vh] md:h-[120vh] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <img
          src={gradient3}
          alt="glow"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] pointer-events-none z-3"
        />
        <img
          src={lines}
          alt="lines"
          className="absolute -top-30 left-1/2 -translate-x-1/2 w-full object-cover pointer-events-none z-10 mask-linear-fade"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 50%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 50%, black 80%, transparent 100%)",
          }}
        />

        {/* Text - Left */}
        <motion.div 
          className="absolute top-[15%] left-[5%] sm:left-[10%] z-20 font-metro-600 text-[#220239] dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-[38px] max-w-[200px] sm:max-w-xs"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="w-[400px]">
            It's easy to feel{" "}
            <span className="text-[#6D28B2]">disconnected</span> in today's busy world
          </p>
        </motion.div>

        {/* Text - Right */}
        <motion.div 
          className="absolute bottom-[50%] right-[5%] sm:right-[10%] font-metro-600 z-20 text-[#220239] dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-[38px] max-w-[200px] sm:max-w-sm text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>
            Especially when
            <br />
            phones take priority
            <br />
            over <span className="text-[#6D28B2]">real moments</span>
          </p>
        </motion.div>

        {/* Left Arrow */}
        <motion.img 
          src={arrow} 
          alt="arrow" 
          className="absolute top-[0%] left-[20%] sm:left-[24.8%] w-[30px] sm:w-[40px] md:w-[50px] z-20" 
          style={{
            transform: `translateY(${leftArrowY}px) scale(${leftArrowScale})`,
            transition: "transform 0.2s ease-out",
            opacity: leftArrowOpacity,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        />

        {/* Right Arrow */}
        <motion.img 
          src={arrow} 
          alt="arrow" 
          className="absolute top-[0%] right-[10%] sm:right-[16%] w-[30px] sm:w-[40px] md:w-[50px] z-20" 
          style={{
            transform: `translateY(${rightArrowY}px) scale(${rightArrowScale})`,
            transition: "transform 0.2s ease-out",
            opacity: rightArrowOpacity,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Middle Arrow */}
        <motion.img 
          src={arrow} 
          alt="arrow" 
          className="absolute top-[0%] left-[50%] sm:left-[54.5%] w-[30px] sm:w-[40px] md:w-[50px] z-30" 
          style={{
            transform: `translate(-50%, ${middleArrowY}px) scale(${middleArrowScale})`,
            transition: "transform 0.2s ease-out",
            opacity: middleArrowOpacity,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      </motion.section>

      {/* What If Section */}
      <motion.div 
        className='relative py-12 sm:py-20 md:py-32 bg-white dark:bg-[#220239]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center justify-items-center">
          <motion.img
            src={alert}
            alt="alert"
            className='relative left-0 sm:left-80 w-[80px] sm:w-[118px] mx-auto sm:mx-0'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              delay: 0.2,
            }}
          />
          <AnimatedText 
            text="But what if we could" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-metro-600 leading-none bg-gradient-to-br from-[#ffffff] to-[#220239] via-[#420084] bg-clip-text text-transparent" 
          />
          <AnimatedText
            text="change this?"
            delay={0.3}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-metro-600 text-[#220239] dark:text-white leading-none mt-2 sm:mt-4" 
          />
        </div>

        <motion.div
          className="absolute top-[10%] left-0 z-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={gradient}
            alt="gradient"
            className='relative top-[15%] left-0 z-0 w-[800px] sm:w-[1000px] opacity-100'
          />
        </motion.div>

        {/* Notification Cards Section */}
        <div className="relative h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-[2000px] w-full overflow-hidden bg-white dark:bg-[#220239]">
          <NotificationCard 
            src={not1} 
            initialX={-200} 
            initialY={100} 
            rotate="4.07deg" 
            delay={0.1}
            top="5%"
            left="0"
          />
          <NotificationCard
            src={not2}
            initialX={200}
            initialY={100}
            rotate="8.51deg"
            delay={0.2}
            top="15%"
            right="0"
            className="z-10"
          />
          <NotificationCard
            src={not3}
            initialX={0}
            initialY={100}
            rotate="2.21deg"
            delay={0.3}
            top="18%"
            left="20%"
            className="z-5"
          />
          <NotificationCard
            src={not4}
            initialX={100}
            initialY={100}
            rotate="0deg"
            delay={0.4}
            top="25%"
            right="10%"
            className="z-20"
          />
          <NotificationCard
            src={not5}
            initialX={-100}
            initialY={100}
            rotate="-6deg"
            delay={0.5}
            top="35%"
            left="15%"
            className="z-10"
          />

          {/* Welcome Message */}
          <motion.img 
            src={welcome} 
            alt="WELCOME" 
            className="absolute w-[300px] sm:w-[400px] md:w-[600px] lg:w-[850px] z-5"
            style={{ top: "35%", left: "25%", transform: "translateX(-50%)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 60,
              damping: 15,
            }}
          />

          {/* Review Bubbles */}
          <motion.div 
            className="absolute left-[10%] sm:left-[15%] md:left-[20%] lg:left-[30%] bottom-[30%] sm:bottom-[40%] w-[200px] sm:w-[260px] px-3 sm:px-4 py-2 sm:py-3 z-30 rounded-2xl border border-white/30 bg-white/20 dark:bg-[#1a1a2e]/20 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex space-x-[2px] mb-1 sm:mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.64 12.27.763 8.41l6.318-.92L10 2l2.919 5.49 6.318.92-4.878 3.86 1.518 5.82z" />
                </svg>
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#220239] dark:text-white mb-1">Brilliant</div>
            <div className="text-xs text-[#220239] dark:text-white mb-2 sm:mb-4">I love this app so much!!</div>
            <div className="flex items-center space-x-2">
              <img src={pfp} alt="Aananya J" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
              <span className="text-xs text-[#220239] dark:text-white font-medium">Aananya J</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute left-[50%] sm:left-[55%] md:left-[60%] lg:left-[62%] bottom-[25%] sm:bottom-[32%] w-[200px] sm:w-[260px] px-3 sm:px-4 py-2 sm:py-3 z-30 rounded-2xl border border-white/30 bg-white/20 dark:bg-[#1a1a2e]/20 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex space-x-[2px] mb-1 sm:mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.64 12.27.763 8.41l6.318-.92L10 2l2.919 5.49 6.318.92-4.878 3.86 1.518 5.82z" />
                </svg>
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#220239] dark:text-white mb-1">Brilliant</div>
            <div className="text-xs text-[#220239] dark:text-white mb-2 sm:mb-4">I love this app so much!!</div>
            <div className="flex items-center space-x-2">
              <img src={pfp} alt="Aananya J" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
              <span className="text-xs text-[#220239] dark:text-white font-medium">Aananya J</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute left-[5%] sm:left-[10%] md:left-[15%] lg:left-[22%] bottom-[10%] sm:bottom-[15%] w-[200px] sm:w-[260px] px-3 sm:px-4 py-2 sm:py-3 z-30 rounded-2xl border border-white/30 bg-white/20 dark:bg-[#1a1a2e]/20 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex space-x-[2px] mb-1 sm:mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.64 12.27.763 8.41l6.318-.92L10 2l2.919 5.49 6.318.92-4.878 3.86 1.518 5.82z" />
                </svg>
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#220239] dark:text-white mb-1">Brilliant</div>
            <div className="text-xs text-[#220239] dark:text-white mb-2 sm:mb-4">I love this app so much!!</div>
            <div className="flex items-center space-x-2">
              <img src={pfp} alt="Aananya J" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
              <span className="text-xs text-[#220239] dark:text-white font-medium">Aananya J</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black/10 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={anime} type="video/mp4" />
          </video>
        </div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="h-1 w-32 bg-white rounded-full"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Bringing Back Section */}
      <motion.div 
        className='relative py-12 sm:py-20 md:py-32 bg-white dark:bg-[#220239]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center justify-items-center">
          <AnimatedText 
            text="Bringing Back" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-metro-600 leading-none bg-gradient-to-br from-[#ffffff] to-[#220239] via-[#420084] bg-clip-text text-transparent" 
          />
          <AnimatedText
            text="Real-Time Connection"
            delay={0.3}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-metro-600 text-[#220239] dark:text-white leading-none mt-2 sm:mt-4" 
          />
          <AnimatedText 
            text="Making Meaningful Friendships Starts Here!" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-metro-600 text-[#220239] dark:text-white leading-none mt-2 sm:mt-4" 
          />
        </div>
      </motion.div>

      {/* People Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={mascot}
          alt="mascot"
          className='absolute w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] z-10'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        <motion.img
        className="pb-30 w-full"
          src={person}
          alt="people"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* YouTube Video Section */}
      <motion.div
        className="w-full flex flex-col items-center justify-center px-4 py-8 sm:py-12 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#ffffff] dark:bg-[#220239]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full mt-10 sm:mt-20 max-w-3xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Wo9qTKM_6oI"
            title="CEO Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>


        <motion.p 
          className="text-center mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#220239] dark:text-white font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Want to know more?
          <br />
          <span className="font-metro-600">
            Watch this video to learn more about us from the CEO!
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
