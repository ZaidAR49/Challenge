import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

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
              <li><a href="#about" className="text-gray-400 hover:text-primary transition">About Us</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-primary transition">Blog</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programming" className="text-gray-400 hover:text-primary transition">Programming</a></li>
              <li><a href="#ai" className="text-gray-400 hover:text-primary transition">Artificial Intelligence</a></li>
              <li><a href="#cybersecurity" className="text-gray-400 hover:text-primary transition">Cybersecurity</a></li>
              <li><a href="#data" className="text-gray-400 hover:text-primary transition">Data Science</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <a href="mailto:info@learnhub.com" className="text-gray-400 hover:text-primary transition">
                  info@learnhub.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition text-2xl"
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition text-2xl"
            >
              <FiTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition text-2xl"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} LearnHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition">Terms of Service</a>
            <a href="#cookies" className="hover:text-primary transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
