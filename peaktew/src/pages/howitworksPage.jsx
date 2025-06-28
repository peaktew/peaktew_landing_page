import React from 'react';
import { motion } from 'framer-motion';
import htw1 from '../assets/htw1.webp';
import htw2 from '../assets/htw2.webp';
import htw3 from '../assets/htw3.webp';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

const sectionVariants = {
  offscreen: {
    y: 50,
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
};


const FeaturesPage = () => {
  return (
    <>
      <motion.section 
        className="w-full min-h-screen flex flex-col gap-20 px-[100px] py-20 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="w-full max-w-6xl" variants={itemVariants}>
          <motion.h1 
            className="text-[128px] font-metro-600 text-[#6D28B2] mb-10 leading-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How PeakTew Works
          </motion.h1>
        </motion.div>
        <motion.div className="w-full max-w-[95%]" variants={itemVariants}>
          <div className="font-metro-600 text-[#220239] text-[16px] space-y-6">
            <motion.p variants={itemVariants}>
              In today's fast-paced, screen-dominated world, genuine human connection often takes a backseat to endless scrolling, impersonal messages, and algorithm-driven interactions. Social media promises connectivity, yet many people feel lonelier than ever—surrounded by digital noise but lacking meaningful relationships. That's where PeakTew comes in. Why not just amounting up, we're a movement toward real-world connection. Our mission is simple: to help people break free from virtual isolation and build authentic friendships through shared experiences.
            </motion.p>
            <motion.p variants={itemVariants}>
              PeakTew is designed for those who crave more than just online chatter. Whether you're new to a city and looking to expand your social circle, searching for adventure buddies who share your passion for hiking or travel, or simply hoping to meet like-minded people in your area, our platform makes it effortless. By combining personalized matchmaking with local events and interest-based communities, we bridge the gap between digital introductions and real-life meetings. No more awkward small talk in crowded apps—just genuine connections that turn into friendships, adventures, and unforgettable memories.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="w-full py-20 px-8 md:px-20 overflow-x-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h2 
              className="text-[64px] font-bold text-[#6D28B2] font-metro-600"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Setting Up Your Profile
            </motion.h2>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Creating your PeakTew profile is the first step toward finding your people. The process is quick,
              intuitive, and tailored to ensure you meet others who truly align with your interests. You can sign up
              using your email, phone number, or social media accounts for a seamless start. Once registered,
              you'll upload a profile picture because putting a face to a name makes interactions warmer and more
              personal.
            </motion.p>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Next, you'll select your hobbies, passions, and favourite activities, whether that's cooking,
              photography, sports, or book clubs. This helps our algorithm suggest the most compatible friends
              and events for you. You'll also set your location (or allow the app to find nearby events automatically)
              and write a short bio to give potential connections a glimpse of your personality. The more details
              you provide, the better your matches will be.
            </motion.p>
          </div>

          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={htw1}
              alt="Profile setup mockup"
              className="w-full max-w-[350px] md:max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="w-full py-20 px-8 md:px-20 overflow-x-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h2 
              className="text-[64px] font-bold text-[#6D28B2] font-metro-600"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Navigating the Homepage
            </motion.h2>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Once your profile is ready, PeakTew's homepage becomes your hub for discovering opportunities to connect. The Upcoming Events section showcases local meet ups, workshops, and social gatherings tailored to your interests. Whether it's a weekend hiking trip, a casual coffee meet up, or a board game night, you'll always find something exciting happening nearby.
            </motion.p>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Your Activity Feed keeps you updated on what's new in your network friends joining events, new group discussions, or posts from people you've connected with. It's a great way to stay engaged and inspired to take the next step toward meeting in person.
            </motion.p>
          </div>

          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={htw2}
              alt="Profile setup mockup"
              className="w-full max-w-[350px] md:max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="w-full py-20 px-8 md:px-20 overflow-x-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h2 
              className="text-[64px] font-bold text-[#6D28B2] font-metro-600"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect with New People
            </motion.h2>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              The app's core functionality is helping users connect with new people and arrange real-life meetups. Here's how it works:
              Steps:
            </motion.p>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Send Friend Requests: Users can browse friend suggestions or search for people and send them a friend request. Once accepted, they can chat and plan meetups. A profile page with a "Add Friend" button and a chat icon.
            </motion.p>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Join Groups or Communities: Users can join groups based on shared interests (e.g., "Yoga 
              A group page with a description, member count, and an "Join Group" button.
              RSVP to Events: Users can browse events and RSVP to attend. They'll see who else is going, making it easier to connect with people beforehand.
            </motion.p>
            <motion.p 
              className="text-[#220239] text-[16px] font-metro-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Meet Up in Real Life: The app encourages users to take the next step and meet in person. After the meetup, users can share their experiences or post photos. A post-meetup screen with a prompt like, "How was your meetup? Share your experience!"
            </motion.p>
          </div>

          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={htw3}
              alt="Profile setup mockup"
              className="w-full max-w-[350px] md:max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default FeaturesPage;