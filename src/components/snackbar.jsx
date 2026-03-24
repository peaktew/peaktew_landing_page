import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Snackbar({ message, duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            zIndex: 9999,
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
