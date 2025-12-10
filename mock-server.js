/**
 * Mock API Server for Testing
 * Run with: node mock-server.js
 * This provides a mock backend for development and testing
 */

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()
const PORT = 3000
const SECRET_KEY = 'your-secret-key-change-in-production'

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Mock database
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In real app, this would be hashed
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
  },
]

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.userId = decoded.userId
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

// Routes

// Sign In
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  // Find user
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  // Generate token
  const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: '24h',
  })

  // Return user data (without password)
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
  }

  res.json({
    success: true,
    message: 'Sign in successful',
    token,
    user: userData,
  })
})

// Sign Up
app.post('/api/auth/signup', (req, res) => {
  const { email, password, name } = req.body

  // Validate input
  if (!email || !password || !name) {
    return res.status(400).json({ message: 'All fields required' })
  }

  // Check if user exists
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' })
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  }

  users.push(newUser)

  // Generate token
  const token = jwt.sign({ userId: newUser.id, email: newUser.email }, SECRET_KEY, {
    expiresIn: '24h',
  })

  // Return user data
  const userData = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  }

  res.status(201).json({
    success: true,
    message: 'Sign up successful',
    token,
    user: userData,
  })
})

// Get Current User (Protected Route)
app.get('/api/auth/me', verifyToken, (req, res) => {
  const user = users.find((u) => u.id === req.userId)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  })
})

// Logout (just for completeness, actually just needs frontend to delete token)
app.post('/api/auth/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Mock API Server running on http://localhost:${PORT}`)
  console.log('Test users:')
  console.log('  Email: john@example.com | Password: password123')
  console.log('  Email: jane@example.com | Password: password123')
})

module.exports = app
