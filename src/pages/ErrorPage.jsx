import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiAlertTriangle } from 'react-icons/fi'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-primary to-secondary flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="text-center z-10 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 shadow-2xl relative">
        <div className="animate-bounce mb-6 inline-block p-4 bg-white/10 rounded-full">
          <FiAlertTriangle className="text-6xl text-yellow-300" />
        </div>
        
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-2 font-mono">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          <FiHome className="text-xl group-hover:-translate-y-1 transition-transform" />
          Return Home
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 text-white/5 font-mono text-9xl font-bold select-none rotate-90 hidden lg:block">
        ERROR
      </div>
      <div className="absolute bottom-10 right-10 text-white/5 font-mono text-9xl font-bold select-none hidden lg:block">
        404
      </div>
    </div>
  )
}

export default ErrorPage
