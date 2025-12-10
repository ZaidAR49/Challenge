import  { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import FeaturedCourses from './components/FeaturedCourses'
import SignUpPage from './pages/SignUpPage'
import ErrorPage from './pages/ErrorPage'


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
            <Link to="/signup" className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition duration-200 hover:scale-105 inline-block">
              Get Started Now
            </Link>
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

  useEffect(() => {
   
    
      navigate('/signup', { replace: true })
    

    // Listen for storage changes (login from another tab)
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleStorageChange = () => {
   

   
      setIsLoggedIn(false)
      setUser(null)
      navigate('/signup', { replace: true })
    
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}  />

      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
