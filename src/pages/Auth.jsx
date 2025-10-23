// src/pages/Auth.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa'
import Squares from '../reactbits/Squares'
import logo from '/logo22.jpg'

function Auth({ register = false }) {
  const [isLogin, setIsLogin] = useState(!register)
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState('freelancer')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { ...formData, userType })
  }

  return (
    <div style={{ height: "110vh" }} className="min-h-screen bg-neutral-950 overflow-hidden relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950/20"></div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-red-800/30"
              />
              <h1 className="text-4xl font-bold text-neutral-100 mb-2 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-neutral-400 text-lg">
                {isLogin ? 'Sign in to continue' : 'Create your account'}
              </p>
            </motion.div>

            {/* Main form container with frosted glass effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Frosted glass background */}
              <div className="absolute inset-0 bg-neutral-800/30 backdrop-blur-xl rounded-2xl border border-neutral-700/50 shadow-2xl"></div>

              {/* Form content */}
              <div className="relative p-8 ">
                {/* User type selection (only for register) */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                  >
                    <p className="text-neutral-300 text-sm mb-3 font-medium">I am a:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setUserType('freelancer')}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${userType === 'freelancer'
                            ? 'bg-red-800/20 text-red-300 border border-red-700/50'
                            : 'bg-neutral-700/50 text-neutral-400 border border-neutral-600/30 hover:bg-neutral-700/70'
                          }`}
                      >
                        Freelancer
                      </button>
                      <button
                        type="button"
                        onClick={() => setUserType('client')}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${userType === 'client'
                            ? 'bg-red-800/20 text-red-300 border border-red-700/50'
                            : 'bg-neutral-700/50 text-neutral-400 border border-neutral-600/30 hover:bg-neutral-700/70'
                          }`}
                      >
                        Client
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field (register only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </motion.div>
                  )}

                  {/* Email field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: isLogin ? 0.4 : 0.6 }}
                  >
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </motion.div>

                  {/* Password field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: isLogin ? 0.5 : 0.7 }}
                  >
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-12 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </motion.div>

                  {/* Confirm password (register only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                    </motion.div>
                  )}

                  {/* Remember me / Forgot password */}
                  {isLogin && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center justify-between text-sm"
                    >
                      <label className="flex items-center text-neutral-400">
                        <input type="checkbox" className="mr-2 rounded border-neutral-600 bg-neutral-700 text-red-600 focus:ring-red-500" />
                        Remember me
                      </label>
                      <Link to="/forgot-password" className="text-red-400 hover:text-red-300 transition-colors">
                        Forgot password?
                      </Link>
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: isLogin ? 0.7 : 0.9 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-800/50 shadow-lg"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </motion.button>
                </form>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: isLogin ? 0.8 : 1.0 }}
                  className="my-6 flex items-center"
                >
                  <div className="flex-1 h-px bg-neutral-600/50"></div>
                  <span className="px-4 text-neutral-500 text-sm">or continue with</span>
                  <div className="flex-1 h-px bg-neutral-600/50"></div>
                </motion.div>

                {/* Social login buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: isLogin ? 0.9 : 1.1 }}
                  className="grid grid-cols-3 gap-3"
                >
                  <button className="flex items-center justify-center p-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg hover:bg-neutral-700/70 transition-all duration-200 group">
                    <FaGoogle className="text-red-400 group-hover:text-red-300" />
                  </button>
                  <button className="flex items-center justify-center p-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg hover:bg-neutral-700/70 transition-all duration-200 group">
                    <FaLinkedin className="text-blue-400 group-hover:text-blue-300" />
                  </button>
                  <button className="flex items-center justify-center p-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg hover:bg-neutral-700/70 transition-all duration-200 group">
                    <FaGithub className="text-neutral-400 group-hover:text-neutral-300" />
                  </button>
                </motion.div>

                {/* Toggle between login/register */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: isLogin ? 1.0 : 1.2 }}
                  className="mt-6 text-center"
                >
                  <p className="text-neutral-400">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-red-400 hover:text-red-300 font-medium transition-colors"
                    >
                      {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Back to home link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-8"
            >
              <Link
                to="/"
                className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors inline-flex items-center"
              >
                ← Back to home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      
    </div>
  )
}

export default Auth