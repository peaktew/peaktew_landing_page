import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import person from "../assets/Landing_page/three_person.png";
// import Ellipse2 from "../assets/Landing_page/Ellipse 2.png";
// import Ellipse3 from "../assets/Landing_page/Ellipse 3.webp";
import not1Mobile from "../assets/Landing_page/not1-400.png";
import not1Desktop from "../assets/Landing_page/not1-640.png";
import not2Mobile from "../assets/Landing_page/not2-400.png";
import not2Desktop from "../assets/Landing_page/not2-640.png";
import not3Mobile from "../assets/Landing_page/not3-400.png";
import not3Desktop from "../assets/Landing_page/not3-640.png";
import not4Mobile from "../assets/Landing_page/not4-400.png";
import not4Desktop from "../assets/Landing_page/not4-640.png";
import not5Mobile from "../assets/Landing_page/not5-400.png";
import not5Desktop from "../assets/Landing_page/not5-640.png";
import welcome from "../assets/Landing_page/welcome.webp";
import gradient from "../assets/Landing_page/gradient.png";
import anime from "../assets/Landing_page/Homepage Animation.mp4";
import mascot from "../assets/Landing_page/mascot.png";
import globeImage from "../assets/Landing_page/globe_img.png";
import gradient3 from "../assets/Landing_page/gradient-3.png";
import gradient3Mobile from "../assets/Landing_page/gradient-3-mobile.webp";
import lines from "../assets/Landing_page/lines.webp";
import linesMobile from "../assets/Landing_page/lines-mobile.webp";
import arrow from "../assets/Landing_page/Arrow.webp";
import alert from "../assets/Landing_page/alert.webp";
import pfp from "../assets/Landing_page/pfp.webp";
import pfp2 from "../assets/Landing_page/pfp2.webp";
import pfp3 from "../assets/Landing_page/pfp3.webp";
// import arch from "../assets/Landing_page/arch.webp";
import { useDarkMode } from "../components/DarkModeContext";
import AnimatedText from "../components/animatedText";
import { GlobeDemo } from "../components/globe/Globle";


const NotificationCard = ({
  mobileSrc,
  desktopSrc,
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
    <motion.picture
      className={`absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] ${className}`}
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
    >
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <source media="(min-width: 768px)" srcSet={desktopSrc} />
      <img
        src={desktopSrc}
        alt="notification"
        decoding="async"
        className="block h-auto w-full"
      />
    </motion.picture>
  );
};

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [shouldLoadYouTube, setShouldLoadYouTube] = useState(false);
  const [shouldLoadLandingVideo, setShouldLoadLandingVideo] = useState(false);
  const videoSectionRef = useRef(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const videoSection = videoSectionRef.current;
    if (!videoSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadLandingVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1600px 0px" },
    );

    observer.observe(videoSection);
    return () => observer.disconnect();
  }, []);

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
  const isMobileScreen = window.innerWidth < 768;
  const showArrows = scrollY > window.innerHeight * 0.15;

  // Left Arrow (stops at left text position)
  const leftArrowMaxY = isMobileScreen ? 180 : 100;
  const leftArrowY = Math.min(scrollY * 0.5, leftArrowMaxY);
  const leftArrowScale = 0.5 + Math.min(scrollY / 1000, 0.5);
  const leftArrowOpacity =
    scrollY < leftArrowMaxY * 2 ? 1 : 1 - (scrollY - leftArrowMaxY * 2) / 500;

  // Right Arrow (stops at right text position)
  const rightArrowMaxY = isMobileScreen ? 330 : 250;
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
        className="hero-shell mx-auto w-full px-0 sm:px-4 h-[calc(77svh-4rem)] sm:h-[calc(77svh-5rem)] md:h-[calc(70svh-5rem)] lg:h-[calc(85svh-5rem)] xl:h-screen overflow-hidden relative"
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
              <span
                className={`transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-md transform ${isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
              >
                {!isDarkMode ? (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </div>
          </label>
        </div>

        {/* Hero Text */}
        <div className="hero-content absolute lg:top-[50%] top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full px-4 z-10">
          <h1 className="flex flex-col items-center text-center font-metro-600 leading-none">
            <span className="hero-title-line hero-line-enter heading-gradient heading-gradient--ink text-[45px] md:text-7xl lg:text-8xl xl:text-[96px]">
              Take The Fun
            </span>
            <span className="hero-title-line hero-line-enter hero-line-enter--second heading-gradient heading-gradient--violet whitespace-nowrap text-[clamp(32px,10vw,45px)] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] my-2 sm:my-4">
              To The Real World
            </span>
          </h1>
          <div className="hero-copy hero-copy-enter mt-6">
            <p
              className="mx-auto w-full max-w-[31em] text-center text-[11px] font-metro-600 sm:text-xs md:text-xl lg:text-2xl"
              style={{ color: isDarkMode ? "#220239" : "#220239" }}
            >
              We connect you to what matters. Real people, real experiences, and
              the world just outside your door.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.img
        src={mascot}
        alt="mascot"
        fetchPriority="high"
        className="hero-mascot absolute right-0 top-[51svh] z-[1] w-[120px] rotate-[40deg] pointer-events-none sm:top-[58svh] sm:w-[225px] md:top-[46svh] md:w-[300px] lg:top-[60vh] xl:top-[70vh]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      <motion.section
        className="hero-curve absolute top-[61svh] sm:top-[63svh] md:top-[60svh] lg:top-[75vh] xl:top-[90vh] left-0 w-screen max-w-none pointer-events-none z-2 overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg
          className="w-[190vw] -ml-[15vw] h-[250px] sm:h-[300px] md:h-[400px] overflow-visible"
          viewBox="0 0 2000 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="curveGlow"
              x="-30%"
              y="-100%"
              width="160%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="24" />
            </filter>
            <linearGradient
              id="ellipseGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={isDarkMode ? "#220239" : "#f0f0fd"} />
              <stop offset="50%" stopColor={isDarkMode ? "#220239" : "#ffffff"} />
              <stop offset="100%" stopColor={isDarkMode ? "#220239" : "#FFFFFF00"} />
            </linearGradient>
          </defs>
          <path
            d="M0,200 A720,200 0 0,1 1440,200"
            fill="none"
            stroke={isDarkMode ? "#7E3FAC" : "#C9A7EA"}
            strokeWidth="30"
            opacity={isDarkMode ? "0.55" : "0.38"}
            filter="url(#curveGlow)"
          />
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

      {/* Lines and Arrows Section */}
      <motion.section
        // className="relative -mt-[24vh] md:mt-0 w-full h-[80vh] sm:h-[100vh] md:h-[120vh] overflow-hidden"
        className="relative mt-0 w-full h-[80vh] sm:h-[100vh] md:h-[120vh] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <picture className="contents">
          <source media="(max-width: 767px)" srcSet={gradient3Mobile} />
          <img
            src={gradient3}
            alt="glow"
            className="opacity-70 absolute top-15 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[1500px] pointer-events-none z-3"
          />
        </picture>
        <picture className="contents">
          <source media="(max-width: 767px)" srcSet={linesMobile} />
          <img
            src={lines}
            alt="lines"
            className="absolute -top-30 left-1/2 -translate-x-1/2 w-full h-[1500px] object-cover pointer-events-none z-10 mask-linear-fade"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 50%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 50%, black 80%, transparent 100%)",
            }}
          />
        </picture>


        {/* Text - Left */}
        <motion.div
          className="absolute top-[8%] sm:top-[12%] md:top-[15%] left-[5%] sm:left-[10%] z-40 w-[90%] max-w-[400px] font-metro-600 text-[#220239] text-xl sm:text-2xl md:text-3xl lg:text-[38px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            It's easy to feel{" "}
            <span className="text-[#6D28B2]">disconnected</span> in today's busy
            world
          </p>
        </motion.div>

        {/* Text - Right */}
        <motion.div
          className="absolute bottom-[50%] right-[5%] sm:right-[10%] font-metro-600 z-40 text-[#220239] text-xl sm:text-2xl md:text-3xl lg:text-[38px] max-w-[200px] sm:max-w-sm text-right"
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
            transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
            opacity: showArrows ? leftArrowOpacity : 0,
          }}
        />

        {/* Right Arrow */}
        <motion.img
          src={arrow}
          alt="arrow"
          className="absolute top-[0%] right-[10%] sm:right-[16%] w-[30px] sm:w-[40px] md:w-[50px] z-20"
          style={{
            transform: `translateY(${rightArrowY}px) scale(${rightArrowScale})`,
            transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
            opacity: showArrows ? rightArrowOpacity : 0,
          }}
        />

        {/* Middle Arrow */}
        <motion.img
          src={arrow}
          alt="arrow"
          className="absolute top-[0%] left-[64%] sm:left-[54.5%] w-[30px] sm:w-[40px] md:w-[50px] z-30"
          style={{
            transform: `translate(-50%, ${middleArrowY}px) scale(${middleArrowScale})`,
            transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
            opacity: showArrows ? middleArrowOpacity : 0,
          }}
        />

        {/* Exclamation Mark */}
        <motion.img
          src={alert}
          alt="alert"
          className="absolute bottom-[5%] right-[30%] sm:right-[33%] w-[60px] sm:w-[80px] md:w-[100px] z-30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            delay: 0.4,
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? "from-[#2202396d] to-[#220239]" : "from-white  to-transparent"}`} />
      </motion.section>

      {/* What If Section */}
      <motion.div
        className="relative py-12 sm:py-20 md:py-32 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center justify-items-center">
          <AnimatedText
            text="But what if we could"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-metro-600 leading-none section-heading-gradient"
          />
          <AnimatedText
            text="change this?"
            delay={0.3}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-metro-600 leading-none mt-2 sm:mt-4 section-heading-solid"
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
            className="relative top-[15%] left-0 z-0 w-[800px] sm:w-[1000px] opacity-100"
          />
        </motion.div>

        {/* Notification Cards Section */}
        <div className="relative h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-[2000px] w-full overflow-hidden bg-white">
          <NotificationCard
            mobileSrc={not1Mobile}
            desktopSrc={not1Desktop}
            initialX={-200}
            initialY={100}
            rotate="4.07deg"
            delay={0.1}
            top="5%"
            left="15%"
          />
          <NotificationCard
            mobileSrc={not2Mobile}
            desktopSrc={not2Desktop}
            initialX={200}
            initialY={100}
            rotate="8.51deg"
            delay={0.2}
            top="12%"
            right="20%"
            className="z-10"
          />
          <NotificationCard
            mobileSrc={not3Mobile}
            desktopSrc={not3Desktop}
            initialX={0}
            initialY={100}
            rotate="2.21deg"
            delay={0.3}
            top="20%"
            left="25%"
            className="z-5"
          />
          <NotificationCard
            mobileSrc={not4Mobile}
            desktopSrc={not4Desktop}
            initialX={100}
            initialY={100}
            rotate="0deg"
            delay={0.4}
            top="28%"
            right="18%"
            className="z-20"
          />
          <NotificationCard
            mobileSrc={not5Mobile}
            desktopSrc={not5Desktop}
            initialX={-100}
            initialY={100}
            rotate="-6deg"
            delay={0.5}
            top="36%"
            left="20%"
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
            className="absolute left-[10%] bottom-[44%] w-[200px] sm:left-[15%] sm:bottom-[46%] sm:w-[260px] md:left-[20%] md:bottom-[40%] lg:left-[30%] px-3 sm:px-4 py-2 sm:py-3 z-30 rounded-2xl border border-white/30 bg-white/20 dark:bg-[#1a1a2e]/20 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex space-x-[2px] mb-1 sm:mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.64 12.27.763 8.41l6.318-.92L10 2l2.919 5.49 6.318.92-4.878 3.86 1.518 5.82z" />
                  </svg>
                ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#220239] dark:text-white mb-1">
              Brilliant
            </div>
            <div className="text-xs text-[#220239] dark:text-white mb-2 sm:mb-4">
              I love this app so much!!
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={pfp}
                alt="Aananya J"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
              />
              <span className="text-xs text-[#220239] dark:text-white font-medium">
                Aananya J
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[50%] bottom-[23%] w-[200px] sm:left-[55%] sm:bottom-[23%] sm:w-[260px] md:left-[60%] md:bottom-[32%] lg:left-[62%] px-3 sm:px-4 py-2 sm:py-3 z-30 rounded-2xl border border-white/30 bg-white/20 dark:bg-[#1a1a2e]/20 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex space-x-[2px] mb-1 sm:mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.64 12.27.763 8.41l6.318-.92L10 2l2.919 5.49 6.318.92-4.878 3.86 1.518 5.82z" />
                  </svg>
                ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#220239] dark:text-white mb-1">
              A little daily escape
            </div>
            <div className="text-xs text-[#220239] dark:text-white mb-2 sm:mb-4">
              This app is my favorite part of the day.
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={pfp2}
                alt="Sofia M"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
              />
              <span className="text-xs text-[#220239] dark:text-white font-medium">
                Sofia M
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[5%] bottom-[5%] w-[200px] sm:left-[10%] sm:bottom-[5%] sm:w-[260px] md:left-[15%] md:bottom-[15%] lg:left-[22%] px-3 sm:px-4 py-2 sm:py-3 z-30 rounded-2xl border border-white/30 bg-white/20 dark:bg-[#1a1a2e]/20 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex space-x-[2px] mb-1 sm:mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.64 12.27.763 8.41l6.318-.92L10 2l2.919 5.49 6.318.92-4.878 3.86 1.518 5.82z" />
                  </svg>
                ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#220239] dark:text-white mb-1">
              Exactly what I needed
            </div>
            <div className="text-xs text-[#220239] dark:text-white mb-2 sm:mb-4">
              Simple, thoughtful, and genuinely helpful!
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={pfp3}
                alt="Daniel R"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
              />
              <span className="text-xs text-[#220239] dark:text-white font-medium">
                Daniel R
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        ref={videoSectionRef}
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black/10 z-0 videoDiv">
          <video
            src={shouldLoadLandingVideo ? anime : undefined}
            autoPlay
            loop
            muted
            playsInline
            preload={shouldLoadLandingVideo ? "auto" : "none"}
            className="w-full h-full object-cover"
          />
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
        className="relative py-12 sm:py-20 md:py-32 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center justify-items-center">
          <AnimatedText
            text="Bringing Back"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-metro-600 leading-none section-heading-gradient"
          />
          <AnimatedText
            text="Real-Time Connection"
            delay={0.3}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-metro-600 leading-none mt-2 sm:mt-4 section-heading-solid"
          />
          <AnimatedText
            text="Making Meaningful Friendships Starts Here!"
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-metro-600 leading-none mt-2 sm:mt-4"
            style={{ color: isDarkMode ? "#ffffff" : "#220239" }}
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
          className="absolute left-2 -top-6 w-[90px] sm:left-4 sm:top-0 sm:w-[150px] md:left-0 md:top-0 md:w-[190px] lg:w-[225px] z-10"
          initial={{ x: -40, opacity: 0 }}
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
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? "from-[#220239] from-0% via-[#220239]/95 via-28% to-transparent to-60%" : "from-white  to-transparent to-40%"}`} />
      </motion.div>

      {/* YouTube Video Section */}
      <motion.div
        className="w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-metro-600 text-center mb-3 sm:mb-4 section-heading-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Want to know more?
        </motion.h2>

        <motion.p
          className="text-center text-base sm:text-lg md:text-xl font-medium mb-8 sm:mb-10 md:mb-12"
          style={{ color: isDarkMode ? "#ffffff" : "#220239" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Watch this video to learn more about us from the CEO!
        </motion.p>

        <motion.div
          className={`w-full max-w-4xl aspect-video overflow-hidden rounded-2xl ${isDarkMode ? "shadow-[-3px_-2px_26.8px_12px_#FFFFFF40]" : "shadow-[0px_-1px_23.4px_2px_#7E3FAC85]"}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {shouldLoadYouTube ? (
            <iframe
              className="h-full w-full border-0"
              src="https://www.youtube.com/embed/Wo9qTKM_6oI?autoplay=1"
              title="CEO Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <button
              type="button"
              className="group relative h-full w-full cursor-pointer bg-black"
              onClick={() => setShouldLoadYouTube(true)}
              aria-label="Play CEO video"
            >
              <img
                src="https://i.ytimg.com/vi/Wo9qTKM_6oI/hqdefault.jpg"
                alt="CEO video preview"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7E3FAC] shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                <span className="ml-1 block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white sm:border-y-[15px] sm:border-l-[24px]" />
              </span>
            </button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
