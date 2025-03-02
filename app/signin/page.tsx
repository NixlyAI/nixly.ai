'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', { email, password });
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Mock user database (hardcoded for simplicity)
    const mockUser = {
      email: 'user@example.com',
      password: 'password123',
    };

    if (email === mockUser.email && password === mockUser.password) {
      console.log('Sign-in successful for:', email);
      setSuccess('Sign in successful! Redirecting...');
      // Store session in localStorage
      localStorage.setItem('nixlySession', JSON.stringify({ userId: 1, email }));
      setTimeout(() => {
        window.location.href = '/features'; // Redirect to features page after sign-in
      }, 2000);
    } else {
      console.log('Invalid credentials for:', email);
      setError('Invalid credentials');
      setLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-300 text-lg mb-2 drop-shadow-md">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-purple-600 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-300 text-lg mb-2 drop-shadow-md">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-purple-600 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {error && <p className="text-red-500 text-md drop-shadow-sm">{error}</p>}
            {success && <p className="text-green-500 text-md drop-shadow-sm">{success}</p>}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center"
              >
                <div className="loader"></div>
              </motion.div>
            )}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2, z: 10 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-3d hover:shadow-3d-lg transition duration-300"
            >
              {loading ? 'Signing In...' : 'Sign In with Email'}
            </motion.button>
          </form>
        </motion.div>
        <div className="particle-effect"></div> {/* Subtle particle animation */}
      </div>
    </div>
  );
}

// Loader CSS (inline for simplicity, can be moved to globals.css)
const loaderStyle = `
  .loader {
    width: 24px;
    height: 24px;
    border: 3px solid #9333ea;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = loaderStyle;
  document.head.appendChild(style);
}