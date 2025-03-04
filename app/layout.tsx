'use client'; // Mark as a Client Component for Framer Motion compatibility

import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import './globals.css'; // Import manual CSS styles

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const [session, setSession] = useState<string | null>(null); // State for session

  useEffect(() => {
    setIsClient(true); // Mark as client-side
    const storedSession = localStorage.getItem('nixlySession');
    setSession(storedSession);

    if (!storedSession && window.location.pathname !== '/signin') {
      window.location.href = '/signin';
    }
  }, []);

  // Only render the session check on the client side
  if (isClient && !session && window.location.pathname === '/signin') {
    return (
      <html lang="en">
        <Head>
          <title>Nixly.ai</title>
          <meta name="description" content="AI-powered tools to create professional video content quickly" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>{children}</body>
      </html>
    );
  }

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
                onClick={() => {
                  localStorage.removeItem('nixlySession');
                  window.location.href = '/signin';
                }}
              >
                Sign Out
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