# LearnHub - Modern Course Platform

A modern, fully-featured course platform with a professional sign-in page built with React, Tailwind CSS, and Axios for API integration. LearnHub specializes in programming, AI, and cybersecurity courses.

## 🚀 Features

### ✨ Design & UI
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Styling**: Built with Tailwind CSS and custom animations
- **Professional Theme**: Gradient backgrounds, smooth transitions, and intuitive navigation
- **Dark/Light Mode Ready**: Fully customizable color scheme

### 🔐 Authentication
- **Sign-In Form**: Email and password validation with error handling
- **Axios Integration**: RESTful API integration for authentication
- **Token Management**: Secure token storage and automatic token injection
- **Session Persistence**: Remember user login state
- **Logout Functionality**: Clean session clearing

### 📚 Course Management
- **Featured Courses**: Showcase of popular courses with ratings and pricing
- **Course Categories**: Programming, AI, and Cybersecurity courses
- **Course Cards**: Detailed course information with instructor details, ratings, and student count
- **Dynamic Pricing**: Flexible pricing structure for different courses
- **Difficulty Levels**: Beginner, Intermediate, and Advanced courses

### 🎨 Components
- **Header**: Sticky navigation with user profile dropdown
- **Footer**: Comprehensive footer with links, contact info, and social media
- **Hero Section**: Eye-catching landing page with CTAs
- **Course Cards**: Beautiful course display with images and details
- **Sign-In Form**: User-friendly authentication form with validation

## 📦 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer component
│   ├── Hero.jsx            # Hero section
│   ├── SignInForm.jsx      # Sign-in form
│   ├── CourseCard.jsx      # Individual course card
│   └── FeaturedCourses.jsx # Course showcase section
├── pages/
│   └── SignInPage.jsx      # Sign-in page layout
├── services/
│   └── authService.js      # Axios API integration
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## 🔌 API Integration

The application uses Axios for API communication. Configuration in `src/services/authService.js`:

### Base URL
- Default: `http://localhost:3000/api`
- Environment variable: `VITE_API_URL`

### Endpoints

#### Sign In
```
POST /api/auth/signin
Request:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com"
  }
}
```

#### Sign Up
```
POST /api/auth/signup
Request:
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

Response:
{
  "token": "jwt_token_here",
  "user": { ... }
}
```

### Features
- ✅ Automatic token injection in headers
- ✅ Request/response interceptors
- ✅ Error handling
- ✅ 401 redirect handling
- ✅ Token refresh capability (extensible)

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize theme colors:
```javascript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#8b5cf6',  // Purple
  accent: '#ec4899',     // Pink
}
```

### Courses
Update course data in `src/components/FeaturedCourses.jsx` to add/modify courses.

### API Endpoint
Set `VITE_API_URL` environment variable:
```bash
VITE_API_URL=https://your-api.com/api npm run dev
```

## 🔐 Security Considerations

1. **Token Storage**: Currently uses localStorage. Consider using secure cookies or sessionStorage for production.
2. **HTTPS**: Always use HTTPS in production.
3. **CORS**: Configure backend CORS policies properly.
4. **Input Validation**: Email and password validated on client-side (add server-side validation).
5. **XSS Protection**: Tailwind and React provide XSS protection by default.

## 📱 Responsive Design

- **Mobile**: Full mobile experience with hamburger menu
- **Tablet**: Optimized for tablet screens
- **Desktop**: Full feature set with all elements visible

## 🚀 Performance

- ✅ Code splitting with React lazy loading
- ✅ Optimized images with Unsplash CDN
- ✅ Minimal bundle size with Vite
- ✅ Smooth animations and transitions
- ✅ Fast development server with HMR

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Support

For issues, questions, or suggestions, please open an issue in the repository.

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] Course search and filtering
- [ ] User profile page
- [ ] Course progress tracking
- [ ] Discussion forums
- [ ] Certificate generation
- [ ] Payment integration
- [ ] Email verification
- [ ] Password reset
- [ ] OAuth integration (Google, GitHub)

---

**Built with ❤️ for learners and educators**
