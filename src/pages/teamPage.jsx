import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useDarkMode } from '../components/DarkModeContext'
import circleImage from '../assets/full_big_ring.webp'
import globeImage from '../assets/globeillu.png'
import OurTeam from '../components/our-team/OurTeam'

const TeamPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
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

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[80vh]  flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        
        <motion.h1
          className="relative text-4xl md:text-8xl font-bold z-10 px-4 font-metro-600 bg-clip-text text-transparent bg-gradient-to-b from-[#A62AD2] via-[#6E1CBF] to-[#470974] text-left"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A Team Without <br className="hidden md:block" /> Borders
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="container mx-auto px-4 py-20 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Title - top left */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#6D28B2] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          We're proudly...
        </motion.h1>

        {/* Ring with floating stat cards — narrow container so cards sit ON the ring */}
        <div className="relative mx-auto" style={{ width: '100%', maxWidth: '620px', minHeight: '560px' }}>
          {/* Ring image - centered and fills most of the container */}
          <motion.img
            src={circleImage}
            alt="Circle"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[500px] md:h-[500px] z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.03 }}
          />

          {/* 23+ INNOVATORS — top right, overlapping ring body */}
          <motion.div
            className="absolute bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md text-right z-20"
            style={{ top: '2%', right: '0' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#6D28B2' }}>23+</h2>
            <p className="text-xs font-semibold tracking-widest mt-1" style={{ color: '#6D28B2' }}>INNOVATORS</p>
          </motion.div>

          {/* 15+ NATIONALITIES — left middle, overlapping ring body */}
          <motion.div
            className="absolute bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md z-20"
            style={{ top: '28%', left: '0' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#6D28B2' }}>15+</h2>
            <p className="text-xs font-semibold tracking-widest mt-1" style={{ color: '#6D28B2' }}>NATIONALITIES</p>
          </motion.div>

          {/* 5 CONTINENTS — right center-lower, overlapping ring body */}
          <motion.div
            className="absolute bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md z-20"
            style={{ top: '54%', right: '0' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#6D28B2' }}>5</h2>
            <p className="text-xs font-semibold tracking-widest mt-1" style={{ color: '#6D28B2' }}>CONTINENTS</p>
          </motion.div>

          {/* 10+ TIME ZONES — bottom left, overlapping ring body */}
          <motion.div
            className="absolute bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md z-20"
            style={{ bottom: '2%', left: '2%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#6D28B2' }}>10+</h2>
            <p className="text-xs font-semibold tracking-widest mt-1" style={{ color: '#6D28B2' }}>TIME ZONES</p>
          </motion.div>
        </div>

        {/* Description text - below ring */}
        <motion.p
          className="text-center text-gray-600 text-sm md:text-base max-w-xl mx-auto mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          With members from over a dozen countries, our team combines global perspectives to design a platform that connects people everywhere—no matter where they call home.
        </motion.p>
      </motion.div>

      <div className="px-6 sm:px-12 py-28 bg-white relative">
        {/* Our Team */}
        <OurTeam/>

        {/* CTA Section */}
        <motion.div
          className="relative flex items-center justify-center min-h-screen bg-white overflow-visible"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          {/* Gradient background */}
          <motion.div
            className="absolute left-0 top-0 w-full h-full -z-10 overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="absolute top-0 left-0 w-[400px] h-[400px] overflow-visible rounded-full opacity-60 blur-[120px]" style={{
              background: 'radial-gradient(circle, #413ECE 100%, #8684FF 0%)',
            }} />
          </motion.div>

          <div className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-visible">
            {/* Radial gradient */}
            <motion.div
              className="absolute inset-0 overflow-visible z-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
            >
              <div
                className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[100px]"
                style={{
                  background: 'radial-gradient(circle at center, #413ECE 0%, #8684FF 100%)',
                }}
              />
              <motion.div className='relative w-1/2 items-start'>
              <motion.p
                className="text-sm font-light mb-6 absolute left-0 before:-translate-y-1/2 before:w-8 before:h-px before:bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.1 }}
              >
                WE LOVE WORKING HERE. <br/> WE THINK YOU WILL TOO.
              </motion.p>
            </motion.div>
            </motion.div>

            {/* Main content */}
            <motion.div
              className="relative z-10 text-center px-6 max-w-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.9 }}
            >
              <motion.p
                className="text-sm font-light mb-6 relative inline-block before:absolute before:-left-9 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.1 }}
              >
                Apply Today
              </motion.p>
              <motion.h1
                className="text-6xl font-black leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.3 }}
              >
                COME<br />JOIN<br />US
              </motion.h1>
              <motion.a
                href="https://www.linkedin.com/company/peaktew/jobs/"
                target="_blank"
                className="text-purple-500 underline text-sm hover:text-purple-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                whileHover={{ scale: 1.05 }}
              >
                Apply Now !
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default TeamPage