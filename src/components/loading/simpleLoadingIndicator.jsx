import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingIndicator({ size = 60, color = '#3498db', isLoading }) {
  return (
    isLoading && <div style={overlayStyle}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1,
        }}
        style={{
          width: size,
          height: size,
          border: `${size * 0.1}px solid ${color}`,
          borderTop: `${size * 0.1}px solid transparent`,
          borderRadius: '50%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.6)', // adjust for light/dark themes
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999, // ensure it's above all content
};



