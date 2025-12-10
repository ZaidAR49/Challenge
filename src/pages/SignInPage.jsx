import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'

const SignInPage = ({ onSignInSuccess, isLoggedIn, onLogout }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-light">
      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-96">
            {/* Left Side - Info */}
            <div className="hidden lg:block">
              <h2 className="text-4xl font-bold text-dark mb-6">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">LearnHub</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Unlock your potential and master the skills of tomorrow. Our comprehensive courses cover programming, artificial intelligence, and cybersecurity.
              </p>

              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl">📚</div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">1000+ Courses</h3>
                    <p className="text-gray-600">Choose from thousands of expert-led courses</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">👨‍💼</div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Expert Instructors</h3>
                    <p className="text-gray-600">Learn from industry leaders and experienced professionals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Certifications</h3>
                    <p className="text-gray-600">Earn recognized certificates upon completion</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Career Growth</h3>
                    <p className="text-gray-600">Accelerate your career with in-demand skills</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <SignInForm onSignInSuccess={onSignInSuccess} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SignInPage
