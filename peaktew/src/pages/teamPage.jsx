import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import rocketImage from '../assets/spaceship.png'
import globeImage from '../assets/globeillu.png'
import OurTeam from '../components/our-team/OurTeam'

const TeamPage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[80vh] bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={globeImage}
          alt="Globe"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.h1 
          className="relative text-white text-4xl md:text-6xl font-bold text-center z-10 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A Team Without <br className="hidden md:block" /> Borders
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="container mx-auto px-4 py-40 max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Title */}
        <motion.h1 
          className="text-center text-5xl font-extrabold text-[#6D28B2] uppercase mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          We're Proudly
        </motion.h1>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Rocket + Text */}
          <motion.div 
            className="flex flex-col items-center md:items-start md:w-1/2 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.img 
              src={rocketImage} 
              alt="Rocket" 
              className="w-40 md:w-52"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p 
              className="text-center md:text-left text-gray-700 text-base md:text-lg max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              With members from over a dozen countries, our team combines global perspectives to design a platform that connects people everywhere—no matter where they call home.
            </motion.p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div 
            className="md:w-1/2 flex flex-col justify-center space-y-10 text-center md:text-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold" style={{ color: '#6D28B2' }}>21+</h2>
              <p className="text-xl font-semibold mt-1" style={{ color: '#6D28B2' }}>INNOVATORS</p>
              <hr className="my-4 border-t border-purple-300 mx-auto md:ml-auto md:mr-0 w-1/2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold" style={{ color: '#6D28B2' }}>13+</h2>
              <p className="text-xl font-semibold mt-1" style={{ color: '#6D28B2' }}>NATIONALITIES</p>
              <hr className="my-4 border-t border-purple-300 mx-auto md:ml-auto md:mr-0 w-1/2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold" style={{ color: '#6D28B2' }}>4</h2>
              <p className="text-xl font-semibold mt-1" style={{ color: '#6D28B2' }}>CONTINENTS</p>
              <hr className="my-4 border-t border-purple-300 mx-auto md:ml-auto md:mr-0 w-1/2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold" style={{ color: '#6D28B2' }}>10+</h2>
              <p className="text-xl font-semibold mt-1" style={{ color: '#6D28B2' }}>TIME ZONES</p>
            </motion.div>
          </motion.div>
        </div>
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
                href="https://peaktew/jobs"
                target="_blank"
                className="text-blue-500 underline text-sm hover:text-blue-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                whileHover={{ scale: 1.05 }}
              >
                peaktew/jobs/
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default TeamPage