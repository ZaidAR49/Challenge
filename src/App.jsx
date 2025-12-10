import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import FeaturedCourses from './components/FeaturedCourses'
import SignInPage from './pages/SignInPage'
import { authService } from './services/authService'

function Home({ isLoggedIn }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Hero isLoggedIn={isLoggedIn} />
        <FeaturedCourses />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and begin your journey towards mastering the most in-demand skills.
            </p>
            <a href="/signin" className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition duration-200 hover:scale-105 inline-block">
              Get Started Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // Check if user is already logged in
  useEffect(() => {
    const token = authService.getToken()
    const storedUser = authService.getUser()

    if (token && storedUser) {
      setIsLoggedIn(true)
      setUser(storedUser)
    } else {
      // If not logged in, send user to sign-in page so sign-in is shown when opening the link
      navigate('/signin', { replace: true })
    }

    // Listen for storage changes (login from another tab)
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleStorageChange = () => {
    const token = authService.getToken()
    const storedUser = authService.getUser()

    if (token && storedUser) {
      setIsLoggedIn(true)
      setUser(storedUser)
      navigate('/', { replace: true })
    } else {
      setIsLoggedIn(false)
      setUser(null)
      navigate('/signin', { replace: true })
    }
  }

  const handleSignInSuccess = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    // After sign in, go to home and scroll to courses
    navigate('/', { replace: true })
    setTimeout(() => {
      const coursesSection = document.getElementById('courses')
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 800)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    authService.logout()
    navigate('/signin', { replace: true })
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Routes>
        <Route path="/signin" element={<SignInPage onSignInSuccess={handleSignInSuccess} isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        {/* Fallback: redirect to home */}
      </Routes>
    </>
  )
}

export default App
