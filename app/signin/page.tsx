'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SignIn() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-blue-900 rounded-xl shadow-3d max-w-md w-full border border-purple-600 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-3d glow-purple">Sign In to Nixly</h2>
          <p className="text-gray-300 text-lg mb-6 drop-shadow-md">Unlock the power of AI to create stunning content—upgrade to Pro for more!</p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2, z: 10 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-3d hover:shadow-3d-lg transition duration-300"
          >
            Sign In with Email
          </motion.button>
          <p className="text-gray-400 text-md mt-4 text-center drop-shadow-sm">Sign-in functionality coming soon...</p>
        </motion.div>
        <div className="particle-effect"></div> {/* Subtle particle animation */}
      </div>
    </div>
  );
}