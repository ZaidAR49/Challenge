import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-dark to-gray-900 text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LearnHub</h3>
            <p className="text-gray-400 text-sm">
              Empowering learners worldwide with cutting-edge courses in programming, AI, and cybersecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="text-gray-400 hover:text-primary transition">Courses</a></li>
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">Blog</Link></li>
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">Programming</Link></li>
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">Artificial Intelligence</Link></li>
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">Cybersecurity</Link></li>
              <li><Link to="/error" className="text-gray-400 hover:text-primary transition">Data Science</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <Link to="/error" className="text-gray-400 hover:text-primary transition">
                  info@learnhub.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                <Link to="/error" className="text-gray-400 hover:text-primary transition">
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <Link to="/error" className="text-gray-400 hover:text-primary transition">
                  San Francisco, CA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center items-center gap-6">
            <Link
              to="/error"
              className="text-gray-400 hover:text-primary transition text-2xl"
            >
              <FiGithub />
            </Link>
            <Link
              to="/error"
              className="text-gray-400 hover:text-primary transition text-2xl"
            >
              <FiTwitter />
            </Link>
            <Link
              to="/error"
              className="text-gray-400 hover:text-primary transition text-2xl"
            >
              <FiLinkedin />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} LearnHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/error" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="/error" className="hover:text-primary transition">Terms of Service</Link>
            <Link to="/error" className="hover:text-primary transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
