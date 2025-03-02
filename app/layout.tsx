'use client'; // Mark as a Client Component for Framer Motion compatibility

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion'; // Added this import
import Head from 'next/head';
import Link from 'next/link';
import './globals.css'; // Import manual CSS styles

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Nixly.ai</title>
        <meta name="description" content="AI-powered tools to create professional video content quickly" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {/* Navigation Bar (3D Gradient, No Fixed Header) */}
        <nav className="nav-bar">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold nixly-logo"
            >
              <Link href="/">Nixly</Link>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
            >
              <Link href="/signin">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-button sign-in-btn"
                >
                  Sign In
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-button pricing-btn"
                >
                  Pricing
                </motion.button>
              </Link>
              <Link href="/features">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-button features-btn"
                >
                  Features
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
                whileTap={{ scale: 0.95 }}
                className="nav-button try-btn"
              >
                Try Nixly Now
              </motion.button>
            </motion.div>
          </div>
          <div className="particle-effect"></div> {/* Subtle particle animation */}
        </nav>

        {/* Main Content (No Padding for Fixed Header, as it’s now inline) */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer>
          <div className="max-w-7xl mx-auto px-6 py-4 text-center">
            <p className="text-gray-300 text-lg font-medium drop-shadow-md">© 2025 Nixly. All rights reserved. | <Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}