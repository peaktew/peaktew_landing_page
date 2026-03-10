import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useDarkMode } from "../components/DarkModeContext";
import gradient from "../assets/gradient 2.png";
import metal from "../assets/metal.png";
import phone from "../assets/phone.png";
import cube from "../assets/cube.png";
import hc from "../assets/hc.png";
import cg from "../assets/cg.png";
import gradient4 from "../assets/gradient4.png";
import cs from "../assets/cs.png";

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
          <div className="w-14 h-8 bg-gray-200 dark:bg-slate-700 rounded-full peer-focus:ring-2 peer-focus:ring-purple-400 transition-colors duration-300 peer-checked:bg-purple-600 flex items-center px-1">
            <span
              className={`transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-md transform ${
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

      <motion.section
        className="w-full min-h-screen flex flex-col gap-20 px-[100px] py-20 overflow-x-hidden z-10 transition-colors duration-500 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.img
          src={gradient}
          alt=""
          className="absolute top-[15%] right-0 z-0 w-[1000px] opacity-70"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div className="w-full max-w-6xl" variants={itemVariants}>
          <motion.h1
            className="text-[min(10vw,128px)] font-metro-600 text-[#6D28B2] mb-10 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet PeakTew
          </motion.h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[95%] flex flex-col gap-6"
          variants={containerVariants}
        >
          <motion.div
            className="font-metro-600 text-[#220239] text-[16px] space-y-6"
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

      <motion.section
        className="w-full relative px-[100px] py-20 overflow-x-hidden z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={gradient}
          alt=""
          className="absolute top-4 right-8 z-0 w-[160px] opacity-70"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[min(8vw,100px)] font-metro-600 text-[#6D28B2] mb-10 leading-none">
            Guided by Purpose, Focused on the Future
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Mission Card - top left */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md text-center"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h2 className="text-2xl font-bold text-[#000] mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to redefine social networking by prioritizing
              real-life connections over digital interactions. We aim to inspire
              individuals to break free from the confines of their screens and
              engage with the world around them. Through PeakTew, we provide
              opportunities for people to meet new friends, explore shared
              interests, and participate in community activities, ultimately
              fostering a sense of belonging and fulfillment.
            </p>
          </motion.div>

          {/* Cube decorative - top right */}
          <motion.div
            className="flex items-center justify-center"
            variants={cardVariants}
          >
            <motion.img
              src={cube}
              alt=""
              className="w-72 h-72 object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Phone decorative - bottom left */}
          <motion.div
            className="flex items-center justify-center"
            variants={cardVariants}
          >
            <motion.img
              src={phone}
              alt=""
              className="w-72 h-72 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          {/* Vision Card - bottom right */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md text-center"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h2 className="text-2xl font-bold text-[#000] mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
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

      <motion.section
        className="bg-white py-20 overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute left-100 w-[500px] z-0">
          <motion.img
            src={gradient4}
            alt=""
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-5xl font-metro-600 text-[#6D28B2] mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're Here For The <br className="hidden md:block" /> Right Reasons
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
            >
              <motion.img
                src={hc}
                alt="Community"
                className="mx-auto w-12 h-10 mb-4"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-xl font-metro-600 text-[#6D28B2] mb-2">
                Community
              </h3>
              <p className="text-sm font-metro-300 text-[#220239]">
                Committed to meaningful connections, nurturing belonging,
                collaboration, and collective support.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
            >
              <motion.img
                src={cg}
                alt="Cosmopolitanism"
                className="mx-auto w-10 h-10 mb-4"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-xl font-metro-600 text-[#6D28B2] mb-2">
                Cosmopolitanism
              </h3>
              <p className="text-sm font-metro-300 text-[#220239]">
                Embracing diversity and a global perspective, fostering cultural
                exchange, open-mindedness, and mutual understanding.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
            >
              <motion.img
                src={cs}
                alt="Social Philanthropy"
                className="mx-auto w-10 h-10 mb-4"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-xl font-metro-600 text-[#6D28B2] mb-2">
                Social Philanthropy
              </h3>
              <p className="text-sm font-metro-300 text-[#220239]">
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
