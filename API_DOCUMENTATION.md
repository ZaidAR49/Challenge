# LearnHub API Documentation

## Overview

LearnHub uses REST API with JWT authentication. This document describes all available endpoints and integration details.

## Base URL

Development: `http://localhost:3000/api`
Production: `https://your-api-domain.com/api`

Configure in `.env`:
```
VITE_API_URL=http://localhost:3000/api
```

## Authentication

### Bearer Token

Include JWT token in Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Token Storage

Tokens are automatically stored in `localStorage`:
- Key: `authToken`
- Duration: 24 hours (configurable)
- Automatically attached to all requests via interceptor

## Response Format

All responses follow this format:

### Success Response (2xx)
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Error Response (4xx, 5xx)
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ ... ],
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Endpoints

### Authentication Endpoints

#### 1. Sign In

Signs in a user and returns JWT token.

**Request**
```
POST /auth/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200)**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "avatar": "https://..."
  }
}
```

**Error Responses**
- `400` - Missing email or password
- `401` - Invalid credentials
- `429` - Too many login attempts

**Client Implementation**
```javascript
import { authService } from './services/authService'

try {
  const response = await authService.signin(email, password)
  console.log('Logged in:', response.user)
} catch (error) {
  console.error('Sign in failed:', error)
}
```

---

#### 2. Sign Up

Creates a new user account.

**Request**
```
POST /auth/signup
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "John Doe",
  "confirmPassword": "password123"
}
```

**Response (201)**
```json
{
  "success": true,
  "message": "Account created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 2,
    "name": "John Doe",
    "email": "newuser@example.com"
  }
}
```

**Error Responses**
- `400` - Invalid input or user exists
- `422` - Validation failed

**Validation Rules**
- Email: Valid email format, unique
- Password: Minimum 8 characters, must contain uppercase, lowercase, number, special char
- Name: 2-50 characters

**Client Implementation**
```javascript
try {
  const response = await authService.signup({
    email,
    password,
    name,
    confirmPassword
  })
  console.log('Account created:', response.user)
} catch (error) {
  console.error('Sign up failed:', error)
}
```

---

#### 3. Get Current User

Retrieves authenticated user information.

**Request**
```
GET /auth/me
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "avatar": "https://...",
    "enrolledCourses": 5,
    "createdAt": "2024-01-01T12:00:00Z"
  }
}
```

**Error Responses**
- `401` - Invalid or missing token
- `404` - User not found

---

#### 4. Logout

Invalidates current session.

**Request**
```
POST /auth/logout
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Client Implementation**
```javascript
authService.logout()  // Clears token and user data
```

---

#### 5. Refresh Token

Generates a new token (for token expiration handling).

**Request**
```
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "refresh_token_value"
}
```

**Response (200)**
```json
{
  "success": true,
  "token": "new_jwt_token",
  "expiresIn": 3600
}
```

**Error Responses**
- `401` - Invalid refresh token

---

#### 6. Forgot Password

Initiates password reset process.

**Request**
```
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response (200)**
```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

---

#### 7. Reset Password

Resets password using reset token.

**Request**
```
POST /auth/reset-password
Content-Type: application/json

{
  "token": "reset_token",
  "password": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

**Response (200)**
```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

---

### Courses Endpoints

#### 8. Get All Courses

Retrieves list of courses with filtering and pagination.

**Request**
```
GET /courses?page=1&limit=10&category=programming&search=python
Authorization: Bearer <token> (optional)
```

**Query Parameters**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `category` - Filter by category (programming, ai, cybersecurity)
- `search` - Search by title or description
- `sortBy` - Sort by (rating, students, price)
- `level` - Filter by level (beginner, intermediate, advanced)

**Response (200)**
```json
{
  "success": true,
  "courses": [
    {
      "id": 1,
      "title": "Python Masterclass",
      "description": "Learn Python from scratch...",
      "category": "Programming",
      "instructor": "John Doe",
      "rating": 4.8,
      "students": 1250,
      "price": 49.99,
      "level": "Beginner",
      "image": "https://...",
      "duration": 30,
      "lessons": 120
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15
  }
}
```

---

#### 9. Get Course Details

Retrieves detailed information about a specific course.

**Request**
```
GET /courses/:courseId
Authorization: Bearer <token> (optional)
```

**Response (200)**
```json
{
  "success": true,
  "course": {
    "id": 1,
    "title": "Python Masterclass",
    "description": "Learn Python from scratch...",
    "fullDescription": "...",
    "category": "Programming",
    "instructor": {
      "id": 1,
      "name": "John Doe",
      "bio": "...",
      "avatar": "https://..."
    },
    "rating": 4.8,
    "reviews": 250,
    "students": 1250,
    "price": 49.99,
    "level": "Beginner",
    "image": "https://...",
    "duration": 30,
    "lessons": 120,
    "modules": [ ... ],
    "skills": ["Python", "OOP", "Web Dev"],
    "requirements": ["Computer", "Internet"],
    "createdAt": "2024-01-01T12:00:00Z"
  }
}
```

---

#### 10. Enroll in Course

Enrolls user in a course.

**Request**
```
POST /courses/:courseId/enroll
Authorization: Bearer <token>
Content-Type: application/json

{}
```

**Response (201)**
```json
{
  "success": true,
  "message": "Enrolled successfully",
  "enrollment": {
    "id": 1,
    "userId": 1,
    "courseId": 1,
    "progress": 0,
    "enrolledAt": "2024-01-01T12:00:00Z"
  }
}
```

**Error Responses**
- `401` - Not authenticated
- `400` - Already enrolled
- `402` - Payment required (if paid course)

---

### User Endpoints

#### 11. Get User Profile

Retrieves user profile information.

**Request**
```
GET /users/profile
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://...",
    "bio": "Learning enthusiast",
    "enrolledCourses": 5,
    "completedCourses": 2,
    "createdAt": "2024-01-01T12:00:00Z"
  }
}
```

---

#### 12. Update User Profile

Updates user profile information.

**Request**
```
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Jane Doe",
  "bio": "New bio",
  "avatar": "https://..."
}
```

**Response (200)**
```json
{
  "success": true,
  "user": { ... }
}
```

---

## Error Handling

### Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request (invalid input)
- `401` - Unauthorized (invalid token)
- `403` - Forbidden (no permission)
- `404` - Not Found
- `422` - Unprocessable Entity (validation error)
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

### Error Messages

```json
{
  "success": false,
  "message": "Invalid credentials",
  "errors": [
    {
      "field": "email",
      "message": "Email format is invalid"
    }
  ]
}
```

## Rate Limiting

- Unauthenticated: 10 requests/minute
- Authenticated: 100 requests/minute
- Sign in attempts: 5 attempts/15 minutes

Headers in response:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```

## Pagination

List endpoints support pagination:

```javascript
GET /courses?page=1&limit=10

Response:
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15
  }
}
```

## Filtering & Sorting

```javascript
// Search
GET /courses?search=python

// Filter
GET /courses?category=programming&level=beginner

// Sort
GET /courses?sortBy=rating&sortOrder=desc

// Combine
GET /courses?category=programming&level=beginner&sortBy=rating&page=1&limit=10
```

## Implementation Examples

### Complete Sign-In Flow

```javascript
import { authService } from './services/authService'

// 1. Sign in
const response = await authService.signin(email, password)

// 2. Token automatically stored in localStorage
// 3. Token automatically added to all requests

// 4. Get current user
const user = authService.getUser()

// 5. Logout
authService.logout()
```

### Error Handling

```javascript
try {
  const response = await authService.signin(email, password)
} catch (error) {
  if (error.response?.status === 401) {
    // Invalid credentials
    console.error('Wrong email or password')
  } else if (error.response?.status === 429) {
    // Rate limited
    console.error('Too many login attempts. Try again later.')
  } else {
    console.error('Sign in failed:', error.message)
  }
}
```

### Fetch All Courses

```javascript
const response = await api.get('/courses', {
  params: {
    page: 1,
    limit: 10,
    category: 'programming',
    sortBy: 'rating'
  }
})

console.log(response.data.courses)
```

---

## CORS Configuration

Frontend URL should be allowed in backend CORS:

```
Allowed Origins:
- http://localhost:5173
- http://localhost:3000
- https://yourdomain.com
```

## HTTPS Requirement

- Development: HTTP allowed
- Production: HTTPS only required

## Support

For API issues or questions, please contact the development team.
