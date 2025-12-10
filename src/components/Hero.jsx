import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const Hero = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  return (
    <section className="min-h-screen bg-gradient-to-br from-dark via-primary to-secondary pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="text-white z-10 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Technology</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Learn programming, artificial intelligence, and cybersecurity from industry experts. Join thousands of students on their journey to success.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-2xl text-green-400 flex-shrink-0" />
                <span className="text-lg">Learn at your own pace with lifetime access</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-2xl text-green-400 flex-shrink-0" />
                <span className="text-lg">Expert instructors with real-world experience</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-2xl text-green-400 flex-shrink-0" />
                <span className="text-lg">Hands-on projects and certifications</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    navigate('/signup')
                  }
                }}
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 hover:scale-105"
              >
                {isLoggedIn ? 'Explore Courses' : 'Get Started Now'}
                <FiArrowRight />
              </button>
              <button 
                onClick={() => navigate('/error')}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition duration-200"
              >
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-400">
              <div>
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-gray-200">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-300">100+</div>
                <div className="text-gray-200">Expert Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">98%</div>
                <div className="text-gray-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-pink-300/30"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop"
                alt="Learning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-xs animate-bounce" style={{ animationDelay: '0s' }}>
              <p className="text-sm text-gray-600 font-semibold">Python Mastery</p>
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-xs text-gray-500">Course Completion</p>
            </div>
            <div className="absolute -top-10 -right-10 bg-white rounded-lg shadow-xl p-6 max-w-xs animate-bounce" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm text-gray-600 font-semibold">ML & AI</p>
              <p className="text-2xl font-bold text-secondary">4.9★</p>
              <p className="text-xs text-gray-500">Student Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
        clipPath: 'polygon(0 40%, 100% 0%, 100% 100%, 0 100%)'
      }}></div>
    </section>
  )
}

export default Hero
