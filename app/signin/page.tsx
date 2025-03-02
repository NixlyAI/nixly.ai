'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Head>
        <title>Nixly.ai - Sign In</title>
        <meta name="description" content="Sign in to Nixly for AI-powered content creation" />
      </Head>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-gray-800 rounded-lg shadow-lg text-white"
      >
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>
        <p className="text-gray-400">Sign-in functionality coming soon...</p>
      </motion.div>
    </div>
  );
}