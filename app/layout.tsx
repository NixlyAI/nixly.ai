'use client'; // Mark as a Client Component for Framer Motion compatibility

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link'; // Added this import
import '../globals.css'; // Import Tailwind CSS styles

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Nixly.ai</title>
        <meta name="description" content="AI-powered tools to create professional video content quickly" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-gray-900 text-white font-sans">
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
              <Link href="/signup"> {/* Assuming you want a signup page; adjust if not needed */}
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
                  Try Nixly Now
                </button>
              </Link>
            </motion.div>
          </div>
        </header>

        {/* Main Content with Padding for Fixed Header */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="p-6 bg-gray-800 text-center text-gray-300">
          <p>© 2025 Nixly. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}