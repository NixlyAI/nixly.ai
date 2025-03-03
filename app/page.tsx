'use client'; // Mark as a Client Component

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication

  useEffect(() => {
    setIsClient(true); // Mark as client-side
    const session = localStorage.getItem('nixlySession');
    setIsAuthenticated(!!session); // Set authentication state

    if (!session && window.location.pathname === '/') {
      window.location.href = '/signin';
    }
  }, []);

  // Only render the homepage if on the client and authenticated (or on homepage)
  if (!isClient || (!isAuthenticated && window.location.pathname === '/')) return null;

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto px-4 relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-white drop-shadow-3d glow-purple">
            Unleash Stunning AI Content
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-purple-200 drop-shadow-3d glow-blue">
            Transform your ideas into jaw-dropping videos effortlessly with Nixly’s cutting-edge AI tools—sign in to unlock Pro features!
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.15, rotate: 2, z: 10 }}
            whileTap={{ scale: 0.95 }}
            className="try-btn-3d"
            onClick={() => window.location.href = '/signin'}
          >
            Sign In to Try Nixly
          </motion.button>
        </motion.div>
        <div className="particle-effect"></div> {/* Subtle particle animation */}
      </section>

      {/* Features Preview Section */}
      <section className="features-preview-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-3d glow-purple"
        >
          Discover Nixly’s AI Magic
        </motion.h2>
        <div className="features-preview-grid">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="feature-card-3d"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-300 drop-shadow-3d glow-purple">AI Video Magic</h3>
            <p className="text-gray-300 text-lg drop-shadow-md">Craft breathtaking video previews with dazzling style filters—sign in for Pro access!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="feature-card-3d"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-300 drop-shadow-3d glow-blue">Voice Revolution</h3>
            <p className="text-gray-300 text-lg drop-shadow-md">Convert text into lifelike voices with AI brilliance—unlock Pro for unlimited languages!</p>
          </motion.div>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
          whileTap={{ scale: 0.95 }}
          className="explore-btn-3d mt-12"
          onClick={() => window.location.href = '/signin'}
        >
          Sign In to Explore Features
        </motion.button>
        <div className="particle-effect"></div> {/* Subtle particle animation */}
      </section>
    </div>
  );
}