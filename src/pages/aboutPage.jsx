import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../components/DarkModeContext";
import gradient from "../assets/gradient2.webp";
import metal from "../assets/metal.webp";
import phone from "../assets/phone.webp";
import cube from "../assets/cubes.webp";
import hc from "../assets/hc.webp";
import cg from "../assets/cg.webp";
import gradient4 from "../assets/gradient4.webp";
import cs from "../assets/cs.webp";

const AboutPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

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
          <div className="w-14 h-8 bg-gray-200 rounded-full peer-focus:ring-2 peer-focus:ring-purple-400 transition-colors duration-300 peer-checked:bg-purple-600 flex items-center px-1">
            <span
              className={`transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-md transform ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
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

      {/* Section 1 */}
      <motion.section
        className="w-full flex flex-col gap-12 md:gap-10 lg:gap-12 px-4 md:px-[60px] lg:px-[100px] xl:px-[130px] py-16 md:py-20 z-10 transition-colors duration-500 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Desktop Gradient 2*/}
        <motion.img
          src={gradient}
          alt=""
          className="hidden md:block absolute -top-[5%] right-0 z-0 w-[800px] pointer-events-none"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Title */}
        <motion.div className="w-full max-w-6xl relative z-10" variants={itemVariants}>
          <motion.h1
            className="text-[40px] md:text-[clamp(48px,8vw,128px)] font-extrabold leading-[48px] md:leading-[165px] tracking-[0px] md:tracking-[-0.4px]"
            style={{
              backgroundImage: isDarkMode
                ? "linear-gradient(174.32deg, #FFFFFF -42.01%, #9C65D4 120.23%, #6E1CBF 178.24%, #470974 179.09%)"
                : "linear-gradient(177.11deg, #A62AD2 2.4%, #6E1CBF 30.78%, #470974 97.6%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet PeakTew
          </motion.h1>
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          className="w-full flex flex-col gap-6 relative z-10"
          style={{ fontWeight: isDarkMode ? '400' : '500' }}
          variants={containerVariants}
        >
          <motion.div
            className="text-[15px] sm:text-[18px] md:text-[24px] leading-[140%] md:leading-[130%] space-y-6 text-[#220239]"
            variants={itemVariants}
          >
            <p>
              We are PeakTew, a diverse team of 20 passionate individuals from
              13 countries, spanning 4 continents. Our members hail from France,
              the UK, the USA, Korea, Nepal, Cambodia, Tanzania, and beyond. Our
              expertise is shaped by our education at world-renowned
              universities such as ESSEC, the University of South Carolina, and
              City University London.{" "}
            </p>
            <p>
              Our team is organized into four key departments: business,
              finance, design, and tech. Each member brings valuable work
              experience in their respective fields, ensuring that we deliver
              excellence in every aspect of our work. Our team comprises
              individuals aged 15 to 30, reflecting a dynamic blend of youthful
              innovation and professional expertise.
            </p>
            <p>
              Together, we work to make PeakTew a pioneering platform that
              addresses the social needs of Gen Z while combating phone
              addiction and mental health issues. Our collective passion and
              commitment drive us to innovate and excel in creating meaningful
              connections worldwide.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="w-full relative px-4 md:px-[60px] lg:px-[100px] xl:px-[130px] py-12 md:py-20 overflow-hidden z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Mobile Gradient 2*/}
        <motion.img
          src={gradient}
          alt=""
          className="block md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-0 w-[500px] pointer-events-none opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Metal star icon */}
        <motion.img
          src={metal}
          alt=""
          className="absolute top-2 right-4 sm:top-0 sm:right-12 lg:-top-10 md:right-10 xl:right-60 z-0 w-[120px] sm:w-[130px] md:w-[150px] lg:w-[200px] object-contain pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="w-full max-w-6xl mb-10 md:mb-16 pt-6 sm:pt-4 md:pt-0 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1
            className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[84px] xl:text-[100px] font-extrabold pr-5 min-[430px]:pr-20 leading-[40px] sm:leading-[56px] md:leading-[76px] lg:leading-[100px]"
            style={{
              backgroundImage: isDarkMode
                ? "linear-gradient(174.32deg, #FFFFFF -42.01%, #9C65D4 120.23%, #6E1CBF 178.24%, #470974 179.09%)"
                : "linear-gradient(177.11deg, #A62AD2 2.4%, #6E1CBF 30.78%, #470974 97.6%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Guided by Purpose, Focused on the Future
          </h1>
        </motion.div>

        {/* MOBILE LAYOUT */}
        <motion.div
          className="flex flex-col gap-6 md:hidden relative z-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center py-2" variants={cardVariants}>
            <img src={phone} alt="" className="w-44 h-44 sm:w-56 sm:h-56 object-contain" />
          </motion.div>

          <motion.div
            className="p-6 rounded-3xl flex flex-col justify-center items-center text-center transition-colors duration-300 relative z-10"
            style={{
              background: isDarkMode
                ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                : "#FFFFFF",
              boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
            }}
            variants={cardVariants}
          >
            <h2
              className="text-[32px] sm:text-[40px] font-extrabold leading-[38px] sm:leading-[48px] tracking-[-0.4px] text-center mb-4"
              style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
            >
              Our Mission
            </h2>
            <p
              className="text-[14px] sm:text-[16px] font-light leading-[140%] tracking-[0px] text-center"
              style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
            >
              Our mission is to redefine social networking by prioritizing
              real-life connections over digital interactions. We aim to inspire
              individuals to break free from the confines of their screens and
              engage with the world around them. Through PeakTew, we provide
              opportunities for people to meet new friends, explore shared
              interests, and participate in community activities, ultimately
              fostering a sense of belonging and fulfillment.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-3xl flex flex-col justify-center items-center text-center transition-colors duration-300 relative z-10"
            style={{
              background: isDarkMode
                ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                : "#FFFFFF",
              boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
            }}
            variants={cardVariants}
          >
            <h2
              className="text-[32px] sm:text-[40px] font-extrabold leading-[38px] sm:leading-[48px] tracking-[-0.4px] text-center mb-4"
              style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
            >
              Our Vision
            </h2>
            <p
              className="text-[14px] sm:text-[16px] font-light leading-[140%] tracking-[0px] text-center"
              style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
            >
              In our quest to redefine social networking, we uphold core values
              that drive our mission forward. We believe in authenticity,
              fostering genuine connections based on shared interests and
              experiences. We prioritize building strong communities where
              individuals can support and uplift each other, embracing
              diversity, and creating an inclusive environment where everyone
              feels welcome. Through empowerment, we encourage individuals to
              take control of their social lives and discover new growth
              opportunities. Our commitment to responsibility guides us in
              promoting healthy technology usage and mitigating the negative
              impacts of social media addiction.
            </p>
          </motion.div>

          <motion.div className="flex items-center justify-center py-2" variants={cardVariants}>
            <img src={cube} alt="" className="w-44 h-44 sm:w-56 sm:h-56 object-contain" />
          </motion.div>
        </motion.div>

        {/* DESKTOP/TABLET LAYOUT */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 items-stretch relative z-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Mission Card */}
          <motion.div
            className="min-h-[520px] xl:min-h-[600px] p-4 lg:p-8 rounded-3xl flex flex-col justify-center items-center text-center transition-colors duration-300 relative z-10"
            style={{
              background: isDarkMode
                ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                : "#FFFFFF",
              boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
            }}
            variants={cardVariants}
          >
            <h2
              className="text-[36px] lg:text-[46px] xl:text-[50px] font-extrabold leading-[44px] lg:leading-[60px] xl:leading-[80px] tracking-[-0.4px] text-center mb-4"
              style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
            >
              Our Mission
            </h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-light leading-[140%] md:leading-[135%] tracking-[0px] text-center"
              style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
            >
              Our mission is to redefine social networking by prioritizing
              real-life connections over digital interactions. We aim to inspire
              individuals to break free from the confines of their screens and
              engage with the world around them. Through PeakTew, we provide
              opportunities for people to meet new friends, explore shared
              interests, and participate in community activities, ultimately
              fostering a sense of belonging and fulfillment.
            </p>
          </motion.div>

          {/* Cube Icon */}
          <motion.div className="flex justify-center pb-8" variants={cardVariants}>
            <img src={cube} alt="" className="w-56 h-56 lg:w-70 lg:h-70 object-contain" />
          </motion.div>

          {/* Phone Icon */}
          <motion.div className="flex items-center justify-center pt-8" variants={cardVariants}>
            <img src={phone} alt="" className="w-56 h-56 lg:w-70 lg:h-70 object-contain" />
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="min-h-[520px] xl:min-h-[600px] p-4 lg:p-8 rounded-3xl flex flex-col justify-center items-center text-center -mt-32 md:-mt-70 xl:-mt-85 transition-colors duration-300 relative z-20"
            style={{
              background: isDarkMode
                ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                : "#FFFFFF",
              boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
            }}
            variants={cardVariants}
          >
            <h2
              className="text-[36px] lg:text-[46px] xl:text-[50px] font-extrabold leading-[44px] lg:leading-[60px] xl:leading-[80px] tracking-[-0.4px] text-center mb-4"
              style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
            >
              Our Vision
            </h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-light leading-[140%] md:leading-[135%] tracking-[0px] text-center"
              style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
            >
              In our quest to redefine social networking, we uphold core values
              that drive our mission forward. We believe in authenticity,
              fostering genuine connections based on shared interests and
              experiences. We prioritize building strong communities where
              individuals can support and uplift each other, embracing
              diversity, and creating an inclusive environment where everyone
              feels welcome. Through empowerment, we encourage individuals to
              take control of their social lives and discover new growth
              opportunities. Our commitment to responsibility guides us in
              promoting healthy technology usage and mitigating the negative
              impacts of social media addiction.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="w-full relative px-4 md:px-[60px] lg:px-[100px] xl:px-[130px] overflow-hidden z-10 pt-20 pb-20 md:pb-70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient 4 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] sm:w-[800px] md:w-[900px] z-0 pointer-events-none">
          <motion.img
            src={gradient4}
            alt=""
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="w-full relative z-10">
          <motion.h2
            className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[84px] font-extrabold leading-[40px] sm:leading-[56px] md:leading-[76px] lg:leading-[100px] tracking-[0%] mb-10 md:mb-16"
            style={{
              backgroundImage: isDarkMode
                ? "linear-gradient(174.32deg, #FFFFFF -42.01%, #9C65D4 120.23%, #6E1CBF 178.24%, #470974 179.09%)"
                : "linear-gradient(177.11deg, #A62AD2 2.4%, #6E1CBF 30.78%, #470974 97.6%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're Here For The <br className="hidden xl:block" /> Right Reasons
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 z-10 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.div
              className="py-10 px-2 lg:py-12 lg:px-4 rounded-3xl flex flex-col justify-center items-center text-center transition-colors duration-300 relative z-10"
              style={{
                background: isDarkMode
                  ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                  : "#FFFFFF",
                boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
                backdropFilter: isDarkMode ? "blur(20px)" : "none",
                border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
              }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={hc}
                alt="Community"
                className={`mx-auto w-16 lg:w-22 h-14 lg:h-19 mb-4 lg:mb-6 object-contain transition-all duration-300 ${isDarkMode ? "brightness-0 invert" : ""}`}
                whileHover={{ rotate: 5 }}
              />
              <h3
                className="text-[24px] lg:text-[30px] font-semibold tracking-[-0.4px] text-center mb-3 lg:mb-4"
                style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
              >
                Community
              </h3>
              <p
                className="text-[15px] lg:text-[16px] font-light leading-[140%] tracking-[0%] text-center"
                style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
              >
                Committed to meaningful connections, nurturing belonging,
                collaboration, and collective support.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="py-10 px-2 lg:py-12 lg:px-4 rounded-3xl flex flex-col justify-center items-center text-center transition-colors duration-300 relative z-10"
              style={{
                background: isDarkMode
                  ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                  : "#FFFFFF",
                boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
                backdropFilter: isDarkMode ? "blur(20px)" : "none",
                border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
              }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={cg}
                alt="Cosmopolitanism"
                className={`mx-auto w-16 lg:w-19 h-14 lg:h-19 mb-4 lg:mb-6 object-contain transition-all duration-300 ${isDarkMode ? "brightness-0 invert" : ""}`}
                whileHover={{ rotate: 5 }}
              />
              <h3
                className="text-[22px] lg:text-[30px] font-semibold tracking-[-0.4px] text-center mb-3 lg:mb-4"
                style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
              >
                Cosmopolitanism
              </h3>
              <p
                className="text-[15px] lg:text-[16px] font-light leading-[140%] tracking-[0%] text-center"
                style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
              >
                Embracing diversity and a global perspective, fostering cultural
                exchange, open-mindedness, and mutual understanding.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="py-10 px-2 lg:py-12 lg:px-4 rounded-3xl flex flex-col justify-center items-center text-center transition-colors duration-300 relative z-10"
              style={{
                background: isDarkMode
                  ? "radial-gradient(100% 359.18% at 243.73% -206.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
                  : "#FFFFFF",
                boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 30px rgba(0,0,0,0.3)",
                backdropFilter: isDarkMode ? "blur(20px)" : "none",
                border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
              }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={cs}
                alt="Social Philanthropy"
                className={`mx-auto w-16 lg:w-19 h-14 lg:h-19 mb-4 lg:mb-6 object-contain transition-all duration-300 ${isDarkMode ? "brightness-0 invert" : ""}`}
                whileHover={{ rotate: 5 }}
              />
              <h3
                className="text-[24px] lg:text-[30px] font-semibold tracking-[-0.4px] text-center mb-3 lg:mb-4"
                style={{ color: isDarkMode ? "#FFFFFF" : "#8140C3" }}
              >
                Social Philanthropy
              </h3>
              <p
                className="text-[15px] lg:text-[16px] font-light leading-[140%] tracking-[0%] text-center"
                style={{ color: isDarkMode ? "#E2E8F0" : "#111827" }}
              >
                Dedicated to positive impact, advancing initiatives that empower
                individuals, promote equity, and drive social change.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutPage;
