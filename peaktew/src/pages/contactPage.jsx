import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../components/DarkModeContext";
import full_ring from "../assets/full_big_ring.webp";
import { useState } from "react";
import axios from "axios";
import LoadingIndicator from "../components/loading/simpleLoadingIndicator";

const ContactPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const ringVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const gradientVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 },
  };

  const tapEffect = {
    scale: 0.98,
  };

  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    subject: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const jsonData = JSON.stringify(formData);
    try{
      const result = await axios.post(
      "https://server-397744756084.us-west1.run.app/v1/notifications/support",
      jsonData,
      { headers: { "Content-Type": "application/json" } }
    );
    if (result.message == "success") {
      setIsSubmitted(true);
    }
    window.location.reload();
    }
    catch(e){

    }
    finally{
      setIsLoading(false);
    }
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
      
        <div className="">
          <LoadingIndicator isLoading={isLoading}/>
        </div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden transition-colors duration-500 bg-white mb-30">
        {/* Top Gradient */}
        <div
          className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${
            isDarkMode ? "" : "from-white/90 via-white/30 to-transparent"
          } z-20 pointer-events-none`}
        ></div>

        {/* Bottom Gradient */}
        <div
          className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t ${
            isDarkMode ? "" : "from-white/90 via-white/30 to-transparent"
          }t z-20 pointer-events-none`}
        ></div>

        {/* Animated Donut Rings */}
        <motion.img
          src={full_ring}
          alt="ring"
          className="absolute top-30 left-20 w-64 opacity-100 scale-[300%]"
          variants={ringVariants}
          initial="initial"
          animate="animate"
        />
        <motion.img
          src={full_ring}
          alt="ring"
          className="absolute bottom-40 right-20 w-64 opacity-100 scale-[300%]"
          variants={ringVariants}
          initial="initial"
          animate="animate"
          style={{ rotate: 180 }} // Start with different rotation
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isDarkMode
              ? "from-[#2202396d] to-[#220239]"
              : "from-white  to-transparent"
          }`}
        />
        {/* Contact Card with glassmorphism */}
        <motion.div
          className="relative z-10 max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col gap-6 border border-white/30"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            boxShadow:
              "0 20px 25px -5px rgba(109, 40, 178, 0.1), 0 10px 10px -5px rgba(109, 40, 178, 0.04)",
          }}
        >
          {/* Text */}
          <motion.div
            className="flex-1 text-left justify-items-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-[min(10vw,100px)] font-metro-600 text-[#6D28B2] mb-0 text-left"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
          </motion.div>

          <div className="flex-1 flex flex-col md:flex-row gap- px-5">
            <motion.div
              className="flex-1 flex flex-col pr-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-[#220239] font-metro-600 text-[15px] mb-4"
                variants={itemVariants}
              >
                Looking to expand your circle, meet amazing people, or find
                friends who share your passions? PeakTew is here to make
                connecting easier, more meaningful, and fun! Whether you're new
                in town, exploring new hobbies, or just want to grow your social
                network, PeakTew is your go-to app for building genuine
                connections.
              </motion.p>
              <motion.p
                className="text-[#220239] text-[15px] font-metro-600"
                variants={itemVariants}
              >
                Got questions, ideas, or feedback? We'd love to hear from you!
                At PeakTew, we're all about creating a safe, welcoming space for
                everyone to connect, and your voice helps us make it even
                better.
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.form
              className="flex-1 flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={submitForm}
            >
              <motion.input
                type="text"
                placeholder="Name"
                required
                onChange={handleChange}
                name="name"
                className="p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2]"
                variants={itemVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(109, 40, 178, 0.5)",
                }}
              />

              <motion.select
                placeholder="Title"
                name="subject"
                required
                onChange={(e) => {
                  handleChange(e);
                  setTitle(e);
                }}
                className={`p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2] ${
                  title === "" ? "!text-[#8b7b9c]" : "text-[#220239]"
                }`}
                variants={itemVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(109, 40, 178, 0.5)",
                }}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className=" !text-white/20"
                >
                  Title
                </option>
                <option value="feedback">Feedback</option>
                <option value="support">Customer Support</option>
                <option value="inquiry">Inquiry</option>
                <option value="report">Report</option>
                <option value="others">Others</option>
              </motion.select>
              <motion.input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
                className="p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2]"
                variants={itemVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(109, 40, 178, 0.5)",
                }}
              />
              <motion.textarea
                placeholder="Message"
                name="message"
                required
                minLength={10}
                onChange={handleChange}
                rows="4"
                className="p-3 text-[#220239] rounded-md bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#6D28B2]"
                variants={itemVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(109, 40, 178, 0.5)",
                }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-black text-white py-2 rounded-md hover:bg-peakPurple transition-colors"
                variants={itemVariants}
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                Submit
              </motion.button>
            </motion.form>
          </div>

          {/* Animated Gradient glow underneath */}
          <motion.div
            className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-peakPurple via-indigo-500 to-transparent blur-3xl opacity-40 rounded-full"
            variants={gradientVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
