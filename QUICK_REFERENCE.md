# LearnHub - Quick Reference Guide

## ⚡ Quick Start (5 Minutes)

### 1. Install & Run
```bash
cd c:\Users\ziedr\Desktop\sign-in-prank
npm install
npm run dev
```

### 2. Open Browser
```
http://localhost:5173
```

### 3. Test Sign-In (With Mock API)
```bash
# In another terminal
node mock-server.js

# Use these credentials:
Email: john@example.com
Password: password123
```

---

## 🗂️ File Structure Quick Reference

### Key Files
```
src/App.jsx                    - Main app, routing logic
src/components/SignInForm.jsx  - Sign-in form with validation
src/services/authService.js    - API calls with Axios
tailwind.config.js             - Theme colors
.env.example                   - API configuration template
```

### Where to Make Changes
```
Add/Edit Courses     → src/components/FeaturedCourses.jsx
Change Colors        → tailwind.config.js
Change Website Name  → src/components/Header.jsx, Footer.jsx, index.html
Update API URL       → .env file
Edit Form Validation → src/components/SignInForm.jsx
```

---

## 🎨 Common Customizations

### Change Primary Color
```javascript
// tailwind.config.js
colors: {
  primary: '#your-hex-color',  // Change here
}
```

### Add New Course
```javascript
// src/components/FeaturedCourses.jsx
const courses = [
  // ... existing
  {
    id: 7,
    title: 'New Course',
    category: 'Programming',
    instructor: 'Name',
    rating: 4.8,
    students: 1000,
    price: 49.99,
    level: 'Beginner',
    image: 'https://images.unsplash.com/...'
  }
]
```

### Connect to Real API
```bash
# 1. Update .env
VITE_API_URL=https://your-api.com/api

# 2. Ensure API returns correct format
{
  "token": "jwt_token",
  "user": { "id", "name", "email" }
}
```

---

## 🔗 API Endpoints Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/signin | User login |
| POST | /auth/signup | Create account |
| GET | /auth/me | Get current user |
| POST | /auth/logout | Logout |
| GET | /courses | List courses |
| GET | /courses/:id | Get course details |

---

## 📱 Component Props

### SignInForm
```javascript
<SignInForm onSignInSuccess={(user) => {...}} />
```

### CourseCard
```javascript
<CourseCard
  title="Course Title"
  category="Programming"
  instructor="Name"
  rating={4.8}
  students={1000}
  price={49.99}
  level="Beginner"
  image="url"
/>
```

### Header
```javascript
<Header isLoggedIn={true} onLogout={() => {...}} />
```

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
# Creates dist/ folder
```

### Preview Build
```bash
npm run preview
```

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5173 in use | Change port in vite.config.js |
| Dependencies error | Run `npm install` again |
| CORS error | Check API URL in .env |
| Sign-in not working | Ensure mock server is running on port 3000 |
| Hot reload not working | Restart dev server |

---

## 🎯 Feature Checklist

### Implemented ✅
- [x] Header with navigation
- [x] Hero section
- [x] Featured courses
- [x] Sign-in form with validation
- [x] Footer
- [x] Axios API integration
- [x] Token management
- [x] Responsive design
- [x] Error handling
- [x] Loading states

### Ready to Implement 🔜
- [ ] Sign-up page
- [ ] User dashboard
- [ ] Course progress tracking
- [ ] Payment integration
- [ ] Email verification
- [ ] Password reset
- [ ] Social login
- [ ] Dark mode
- [ ] Notifications
- [ ] Search & filters

---

## 📚 Documentation Links

| Document | Purpose |
|----------|---------|
| README.md | Project overview |
| SETUP_GUIDE.md | Installation details |
| DEV_GUIDE.md | Development workflow |
| API_DOCUMENTATION.md | API reference |
| PROJECT_SUMMARY.md | Complete summary |
| QUICK_REFERENCE.md | This file |

---

## 💡 Tips & Tricks

### 1. Use React DevTools
- Install React DevTools browser extension
- Inspect components, props, state
- Debug rendering issues

### 2. Check API Requests
- Open DevTools → Network tab
- Check request/response
- Verify headers (especially Authorization)

### 3. Clear Cache
```javascript
// In browser console
localStorage.clear()
// Reload page
```

### 4. Test Different Courses
- Update image URLs in FeaturedCourses.jsx
- Use free images from Unsplash

### 5. Customize Error Messages
- Edit error handling in SignInForm.jsx
- Add more validation rules
- User-friendly messages

---

## 🔐 Authentication Flow

```
User Input
    ↓
Form Validation
    ↓
Axios POST /auth/signin
    ↓
Receive JWT Token
    ↓
Store in localStorage
    ↓
Redirect to Home/Courses
    ↓
Token Auto-Injected in Headers
    ↓
Authenticated Requests
```

---

## 📊 Component Hierarchy

```
App
├── Header
│   └── User Dropdown
├── Hero / SignInPage
│   └── SignInForm
├── FeaturedCourses
│   └── CourseCard (x6)
└── Footer
    ├── Links
    ├── Contact
    └── Social
```

---

## 🎓 Learning Resources

- **React**: https://react.dev/learn
- **Tailwind**: https://tailwindcss.com/docs
- **Axios**: https://axios-http.com/docs/intro
- **Vite**: https://vitejs.dev/guide/
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## 🚀 Next Session Checklist

When you start working next time:

- [ ] Run `npm run dev`
- [ ] Check if port 5173 is free
- [ ] Open http://localhost:5173
- [ ] Test sign-in functionality
- [ ] Make your changes
- [ ] Save files (auto hot-reload)
- [ ] Test in browser
- [ ] Commit to git

---

## 📞 Contact Information (For Backend)

If working with a backend team, ensure they provide:

1. API Base URL
2. Authentication endpoint format
3. Response format (token, user object)
4. Error response format
5. Supported HTTP methods (GET, POST, etc.)
6. CORS configuration
7. Rate limiting details
8. Database schema for courses

---

## ✨ You're All Set!

Your LearnHub platform is ready to use and develop.

- **Frontend**: React + Tailwind CSS ✅
- **API Integration**: Axios ready ✅
- **Authentication**: Form + Service ✅
- **Styling**: Professional theme ✅
- **Responsive**: Mobile to Desktop ✅
- **Documentation**: Complete ✅

### Start Building! 🚀

```bash
npm install && npm run dev
```

---

**Happy coding!** 💻
