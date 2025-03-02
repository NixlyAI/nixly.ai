'use client'; // Mark as a Client Component for Framer Motion compatibility

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
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
        {/* Header */}
        <header>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
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
                <button className="sign-in-btn">
                  Sign In
                </button>
              </Link>
              <button className="try-btn">
                Try Nixly Now
              </button>
            </motion.div>
          </div>
        </header>

        {/* Main Content with Padding for Fixed Header */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer>
          <p>© 2025 Nixly. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}