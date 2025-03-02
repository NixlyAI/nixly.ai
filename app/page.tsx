'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const tools = [
    'AI Script Generator',
    'Text-to-Speech Synthesis',
    'Video Preview Editor',
    'Scene Suggestion Engine',
    'Auto-Caption Creator',
    'Background Music Composer',
    'Video Style Transformer',
    'Interactive Video Overlays',
    'Video Summarizer',
    'Custom Template Builder',
    'Social Media Optimizer',
    'Thumbnail Designer',
    'Text-to-Animation Tool',
    'Audio Transcription Service',
    'Video Enhancer',
    'Collaborative Editing Suite',
    'Trend Analyzer',
    'B-Roll Library',
    'Speech-to-Avatar Generator',
    'Analytics Dashboard',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          Create Stunning Content in Seconds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Harness the power of AI to bring your video ideas to life effortlessly.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="try-btn"
        >
          Try Nixly Now
        </motion.button>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Our AI-Powered Tools
        </motion.h3>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="tool-card"
            >
              <h4 className="text-xl font-semibold mb-2">{tool}</h4>
              <p>Coming soon...</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}