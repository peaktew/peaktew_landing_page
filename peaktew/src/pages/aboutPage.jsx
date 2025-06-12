import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import gradient from '../assets/gradient 2.png'
import metal from '../assets/metal.png'
import phone from '../assets/phone.png'
import cube from '../assets/cube.png'
import hc from '../assets/hc.png'
import cg from '../assets/cg.png'
import gradient4 from '../assets/gradient4.png'
import cs from '../assets/cs.png'

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <>
      <motion.section 
        className="w-full min-h-screen flex flex-col gap-20 px-[100px] py-20 overflow-x-hidden z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.img 
          src={gradient} 
          alt="" 
          className='absolute top-[15%] right-0 z-0 w-[1000px] opacity-70' 
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <motion.div className="w-full max-w-6xl" variants={itemVariants}>
          <motion.h1 
            className="text-[128px] font-metro-600 text-[#6D28B2] mb-10 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Us
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="w-full max-w-[95%] flex flex-col gap-6"
          variants={containerVariants}
        >
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            variants={itemVariants}
          >
            What is PeakTew?
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6"
            variants={itemVariants}
          >
            <p>
              PeakTew is a social media platform with a twist—we're all about helping you make real-life connections. Whether you're new to town, looking to expand your social circle, or simply want to meet people who share your interests, our app is here to make it easy, fun, and rewarding.
            </p>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            variants={itemVariants}
          >
            What Does PeakTew Do?
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            variants={itemVariants}
          >
            <ol className='list-decimal'>
              <motion.li variants={itemVariants}>
                Find Your People: Discover like-minded individuals based on shared interests, hobbies, and location. Whether you're into hiking, cooking, gaming, or anything in between, we'll help you find your tribe.
              </motion.li>
              <motion.li variants={itemVariants}>
                Join Local Events: Explore nearby meetups, activities, and events tailored to your interests. From casual coffee meetups to group hikes, there's always something happening near you.
              </motion.li>
              <motion.li variants={itemVariants}>
                Build Real Friendships: Move beyond the screen and into real life. Connect with people, chat, and plan meetups to create meaningful, face-to-face friendships.
              </motion.li>
              <motion.li variants={itemVariants}>
                Be Part of a Community: Join groups, share experiences, and stay connected with people who inspire and uplift you. Our app is designed to foster a supportive and inclusive community where everyone belongs.
              </motion.li>
            </ol>
          </motion.div>
          
          <motion.p 
            className='font-metro-600 text-[#6D28B2] text-[70px]'
            variants={itemVariants}
          >
            Why Choose PeakTew?
          </motion.p>
          
          <motion.div 
            className="font-metro-600 text-[#220239] text-[16px] space-y-6 ml-6"
            variants={itemVariants}
          >
            <ul className='list-disc'>
              <motion.li variants={itemVariants}>
                Authentic Connections: We prioritize real-life interactions over endless scrolling.
              </motion.li>
              <motion.li variants={itemVariants}>
                Personalized Matches: Our smart algorithm suggests friends and events based on your interests and location.
              </motion.li>
              <motion.li variants={itemVariants}>
                Safe and Welcoming: We're committed to creating a space where everyone feels comfortable and valued.
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="w-full min-h-screen gap-20 px-[100px] py-20 overflow-x-hidden z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={metal} 
          alt="" 
          className='absolute top-[150%] right-60 z-0 w-[180px] opacity-100'
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div 
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[100px] font-metro-600 text-[#6D28B2] mb-10 leading-none">
            Guided by Purpose, Focused on the Future
          </h1>
        </motion.div>
        
        <motion.div 
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Mission Card */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-md text-center"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.img 
              src={phone} 
              alt="Mission Icon" 
              className="mx-auto w-16 h-16 mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <h2 className="text-2xl font-bold text-[#000] mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At PeakTew, our mission is simple yet powerful: to bring people together in real life.
              In a world where digital interactions often replace genuine human connections, we're
              here to remind everyone that the best moments happen face-to-face.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that technology should enhance, not replace, the joy of real-life friendships.
              That's why we've created a platform that helps you find like-minded individuals, join
              exciting local events, and build meaningful relationships—offline.
            </p>
            <p className="text-gray-700">
              Our goal is to foster a global community where people feel empowered to step out of their
              comfort zones, meet new friends, and create unforgettable memories. Because at the end of
              the day, life is better when shared.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-md text-center"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.img 
              src={cube} 
              alt="Vision Icon" 
              className="mx-auto w-16 h-16 mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <h2 className="text-2xl font-bold text-[#000] mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At PeakTew, we envision a world where technology brings people closer—not just online, but
              in real life. In a time when screens often replace face-to-face interactions, we believe
              in the power of genuine human connections to create meaningful relationships, foster
              belonging, and enrich lives.
            </p>
            <p className="text-gray-700">
              Our vision is to build a global community where everyone feels empowered to step out of
              their comfort zones, explore shared interests, and meet people who inspire them. We see
              PeakTew as more than just a social media app—it's a platform designed to help people forge
              real friendships, create unforgettable memories, and build a sense of community wherever
              they are.
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
        <div className='absolute left-100 w-[500px] z-0'>
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <motion.img 
                src={hc} 
                alt="Community" 
                className="mx-auto w-12 h-10 mb-4"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-xl font-metro-600 text-[#6D28B2] mb-2">Community</h3>
              <p className="text-sm font-metro-300 text-[#220239]">
                Committed to meaningful connections, nurturing belonging, collaboration, and collective support.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <motion.img 
                src={cg} 
                alt="Cosmopolitanism" 
                className="mx-auto w-10 h-10 mb-4"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-xl font-metro-600 text-[#6D28B2] mb-2">Cosmopolitanism</h3>
              <p className="text-sm font-metro-300 text-[#220239]">
                Embracing diversity and a global perspective, fostering cultural exchange, open-mindedness, and mutual understanding.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <motion.img 
                src={cs} 
                alt="Social Philanthropy" 
                className="mx-auto w-10 h-10 mb-4"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-xl font-metro-600 text-[#6D28B2] mb-2">Social Philanthropy</h3>
              <p className="text-sm font-metro-300 text-[#220239]">
                Dedicated to positive impact, advancing initiatives that empower individuals, promote equity, and drive social change.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default AboutPage