import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi'
import { GiBookmark } from 'react-icons/gi'


const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <GiBookmark className="text-3xl text-primary" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-dark">LearnHub</span>
              <span className="text-xs text-gray-500">Master & Innovate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-dark hover:text-primary transition font-medium">
              Courses
            </a>
            <Link to="/error" className="text-dark hover:text-primary transition font-medium">
              About
            </Link>
            <Link to="/error" className="text-dark hover:text-primary transition font-medium">
              Contact
            </Link>

            {false ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-light rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-dark font-medium">{user.name}</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition flex items-center gap-2"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition font-semibold"
              >
                Sign Up
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-dark">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 space-y-3">
            <a href="#courses" className="block text-dark hover:text-primary transition font-medium">
              Courses
            </a>
            <Link to="/error" className="block text-dark hover:text-primary transition font-medium">
              About
            </Link>
            <Link to="/error" className="block text-dark hover:text-primary transition font-medium">
              Contact
            </Link>
            {isLoggedIn && user ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition flex items-center gap-2"
              >
                <FiLogOut /> Logout
              </button>
            ) : (
              <Link
                to="/signup"
                className="block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition font-semibold text-center"
              >
                Sign Up
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
