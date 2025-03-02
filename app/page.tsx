'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Nixly.ai</title>
        <meta name="description" content="AI-powered tools to create professional video content quickly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Nixly
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Link href="/signin">
              <button className="px-4 py-2 text-gray-900 bg-white rounded-full hover:bg-gray-200 transition duration-300">
                Sign In
              </button>
            </Link>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
              Try Nixly Now
            </button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-center px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 text-white"
        >
          Create Stunning Content in Seconds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Harness the power of AI to bring your video ideas to life effortlessly.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-indigo-600 text-lg text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          Try Nixly Now
        </motion.button>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 bg-gray-900">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Our AI-Powered Tools
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">{tool}</h4>
              <p className="text-gray-400">Coming soon...</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-center text-gray-300">
        <p>© 2025 Nixly. All rights reserved.</p>
      </footer>
    </div>
  );
}