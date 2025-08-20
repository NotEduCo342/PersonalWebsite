"use client";
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialSignIn = (e) => {
    e.preventDefault();
    signIn('credentials', { email, password, callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-8 bg-slate-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700/50"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-slate-400 mt-2">Sign in to continue to your portfolio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="flex items-center justify-center w-full px-4 py-3 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            GitHub
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="flex items-center justify-center w-full px-4 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            <FaGoogle className="w-5 h-5 mr-2" />
            Google
          </motion.button>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div className="flex-grow h-px bg-slate-700"></div>
          <span className="text-slate-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-slate-700"></div>
        </div>

        <form onSubmit={handleCredentialSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-300 sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-slate-300 sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500"
          >
            Sign In with Credentials
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
