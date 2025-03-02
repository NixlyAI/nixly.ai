'use client';

import { motion } from 'framer-motion'; // Fixed import

export default function Pricing() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-3d glow-purple">Choose Your Nixly Plan</h1>
          <div className="pricing-grid">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="pricing-card-3d bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-xl shadow-3d border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-3d glow-blue">Free</h2>
              <p className="text-gray-300 text-lg mb-6 drop-shadow-md">$0/month</p>
              <ul className="text-gray-300 text-md mb-6 space-y-2">
                <li>Basic AI Tools</li>
                <li>5 Projects</li>
                <li>Email Support</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-purple-600 text-white rounded-xl shadow-md hover:shadow-3d transition duration-300"
              >
                Get Started Free
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pricing-card-3d bg-gradient-to-br from-purple-600 to-blue-800 p-6 rounded-xl shadow-3d-lg border-2 border-purple-500"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-3d glow-purple">Pro</h2>
              <p className="text-gray-300 text-lg mb-6 drop-shadow-md">$19.99/month</p>
              <ul className="text-gray-300 text-md mb-6 space-y-2">
                <li>All Free Features</li>
                <li>Unlimited Projects</li>
                <li>Priority Support</li>
                <li>Advanced AI Tools</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.15, rotate: 2, z: 10 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-xl shadow-3d-lg hover:shadow-3d-xl transition duration-300"
              >
                Upgrade to Pro Now
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="pricing-card-3d bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-xl shadow-3d border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-3d glow-blue">Enterprise</h2>
              <p className="text-gray-300 text-lg mb-6 drop-shadow-md">Custom Pricing</p>
              <ul className="text-gray-300 text-md mb-6 space-y-2">
                <li>All Pro Features</li>
                <li>Dedicated Support</li>
                <li>API Access</li>
                <li>Custom Solutions</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2, z: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-purple-600 text-white rounded-xl shadow-md hover:shadow-3d transition duration-300"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <div className="particle-effect"></div> {/* Subtle particle animation */}
      </div>
    </div>
  );
}