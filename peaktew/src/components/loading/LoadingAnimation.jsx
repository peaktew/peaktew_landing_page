// components/BlackHoleTransition.jsx
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const BlackHoleTransition = ({ isLoading, isExiting }) => {
  return (
    <>
      {/* ENTER ANIMATION (Purple to White) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#6D28B2]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ 
                clipPath: 'circle(0% at 50% 50%)',
                opacity: 0
              }}
              animate={{
                clipPath: 'circle(150% at 50% 50%)',
                opacity: 1,
                transition: {
                  duration: 1.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-[#6D28B2]"
              initial={{ 
                clipPath: 'circle(100% at 50% 50%)' 
              }}
              animate={{
                clipPath: 'circle(0% at 50% 50%)',
                transition: {
                  duration: 1.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* EXIT ANIMATION (White to Purple - Reverse) */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="absolute inset-0 bg-[#6D28B2]"
              initial={{ 
                clipPath: 'circle(0% at 50% 50%)',
                opacity: 0
              }}
              animate={{
                clipPath: 'circle(150% at 50% 50%)',
                opacity: 1,
                transition: {
                  duration: 1.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ 
                clipPath: 'circle(100% at 50% 50%)' 
              }}
              animate={{
                clipPath: 'circle(0% at 50% 50%)',
                transition: {
                  duration: 1.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlackHoleTransition;