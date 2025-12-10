import React, { useState } from 'react'
import axios from 'axios'
import { FiMail, FiLock, FiUser, FiAlertCircle } from 'react-icons/fi'

const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.password) {
      setError('Password is required')
      return false
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      let res = null;
      // Send credentials as GET request with query params to VITE_API_URL
      try {
        const apiUrl = import.meta.env.VITE_API_URL || ''
        if (apiUrl) {
          res = await axios.get(apiUrl, {
            params: {
              name: formData.fullName,
              email: formData.email,
              password: formData.password,
              token: import.meta.env.VITE_API_TOKEN,
            },
          });
          console.log('API Response:', res.data);
        }
      } catch (getErr) {
        console.warn('Error sending GET to VITE_API_URL', getErr)
      }

      // Check for success or if the backup sheet logged an error but main success is true
      if (res?.data?.success) {
        setSuccess('Sign up successful!')
        setLoading(false)
        if (onSignUp) onSignUp(formData)
      }
    console.log(res?.data);
    } catch (err) {
      setError('Sign up failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Create Your Account</h1>
          <p className="text-gray-500">Sign up to access your courses</p>
        </div>
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
          <FiUser className="inline mr-2" />
          <span>Your full name will be used on your certificate. Please enter it carefully.</span>
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <FiAlertCircle className="text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <FiAlertCircle className="text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-green-700 text-sm">{success}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-dark mb-2">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-4 top-3.5 text-gray-400 text-lg" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-4 top-3.5 text-gray-400 text-lg" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-dark mb-2">Password</label>
            <div className="relative">
              <FiLock className="absolute left-4 top-3.5 text-gray-400 text-lg" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                disabled={loading}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing up...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600 text-sm">If you have an account, you can </span>
          <button className="text-primary font-semibold px-3 py-1 rounded-lg bg-gray-100 cursor-not-allowed opacity-60" disabled>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
