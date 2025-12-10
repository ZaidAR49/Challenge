# Development Guide

## Getting Started with LearnHub

This guide will help you set up and develop the LearnHub platform.

### Prerequisites

- Node.js v14+ ([Download](https://nodejs.org/))
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. **Clone or navigate to the repository**
   ```bash
   cd c:\Users\ziedr\Desktop\sign-in-prank
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Frontend: http://localhost:5173
   - Mock API: http://localhost:3000 (if running mock-server.js)

### Running with Mock API

To test the authentication flow with a mock backend:

1. **Install mock server dependencies** (in a new terminal)
   ```bash
   npm install express cors body-parser jsonwebtoken
   ```

2. **Start the mock server** (in a new terminal)
   ```bash
   node mock-server.js
   ```

3. **Test accounts** (from mock server)
   - Email: john@example.com | Password: password123
   - Email: jane@example.com | Password: password123

### Project Structure

```
learnhub/
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── SignInForm.jsx
│   │   ├── CourseCard.jsx
│   │   └── FeaturedCourses.jsx
│   ├── pages/               # Page layouts
│   │   └── SignInPage.jsx
│   ├── services/            # API services
│   │   └── authService.js
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── mock-server.js           # Mock API for testing
├── SETUP_GUIDE.md           # Installation guide
├── DEV_GUIDE.md            # This file
└── README.md                # Project overview
```

### Key Files Explained

#### `src/services/authService.js`
Handles all API communication using Axios:
- `signin()` - User login
- `signup()` - User registration
- `logout()` - Clear session
- Request/response interceptors
- Token management

#### `src/components/SignInForm.jsx`
Sign-in form with:
- Email validation (regex pattern)
- Password validation (minimum 6 chars)
- Error/success messages
- Loading states
- Remember me functionality
- Password visibility toggle

#### `src/components/FeaturedCourses.jsx`
Displays courses with:
- 6 sample courses (3 programming, 2 AI, 1 cybersecurity)
- Real Unsplash images
- Course metadata (price, rating, students)
- Difficulty levels
- Category badges

### Development Workflow

1. **Make a change** to any component
2. **Save file** - Vite hot reload will update browser automatically
3. **Check browser** for changes
4. **Test functionality** with mock server if needed

### Common Development Tasks

#### Add a New Component

1. Create file in `src/components/YourComponent.jsx`
2. Write component code
3. Import in `App.jsx` or where needed
4. Use in JSX

Example:
```jsx
// src/components/YourComponent.jsx
const YourComponent = () => {
  return <div>Your content</div>
}
export default YourComponent
```

#### Add a New Course

Edit `src/components/FeaturedCourses.jsx`:
```javascript
const courses = [
  // ...existing courses
  {
    id: 7,
    title: 'Your Course Title',
    category: 'Programming',
    instructor: 'Instructor Name',
    rating: 4.8,
    students: 1000,
    price: 49.99,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-url',
  }
]
```

#### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    }
  }
}
```

#### Connect to Real Backend

1. Update `.env`:
   ```
   VITE_API_URL=https://your-backend.com/api
   ```

2. Ensure backend API returns correct response format

3. Test sign-in functionality

### Debugging

#### Browser Console
- Check for errors/warnings
- Verify network requests in Network tab
- Check Application tab for stored tokens

#### React DevTools
- Install React DevTools extension
- Inspect component props and state
- Track component re-renders

#### API Requests
- Use Network tab in DevTools
- Check request/response payloads
- Verify headers (especially Authorization)

### Building for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder:
- Minified code
- Optimized images
- Tree-shaking for smaller bundle
- Suitable for deployment

### Deployment

#### Vercel (Recommended for React)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Performance Tips

1. **Lazy load components** - Use React.lazy() for large components
2. **Optimize images** - Use Unsplash or compress images
3. **Code split** - Vite automatically handles this
4. **Monitor bundle size** - Run `npm run build` and check dist/ size

### Security Considerations

1. **Never commit `.env` file** - It's in .gitignore
2. **Don't store sensitive data** in localStorage - Consider sessionStorage or cookies
3. **HTTPS only** in production
4. **CORS** - Configure backend properly
5. **Input validation** - Validate on both client and server
6. **API keys** - Use environment variables

### Testing

#### Manual Testing Checklist
- [ ] Sign-in with valid credentials
- [ ] Sign-in with invalid credentials
- [ ] Sign-in with empty fields
- [ ] Try invalid email format
- [ ] Check Remember me functionality
- [ ] Verify token is stored
- [ ] Check logout functionality
- [ ] Test on mobile (DevTools)
- [ ] Test responsive design
- [ ] Verify all links work

### Troubleshooting

#### Port Already in Use
```bash
# Change port in vite.config.js
server: {
  port: 5174  // change to different port
}
```

#### CORS Errors
- Ensure backend has CORS enabled
- Check `VITE_API_URL` in `.env`
- Verify endpoints match

#### Modules Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

#### Hot Reload Not Working
- Check file is saved
- Restart dev server
- Clear browser cache

### Next Steps

1. ✅ Understand the project structure
2. ✅ Make your first component change
3. ✅ Connect to a real backend
4. ✅ Add more courses
5. ✅ Customize colors/branding
6. ✅ Deploy to production

### Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)
- [Vite Documentation](https://vitejs.dev)
- [Unsplash API](https://unsplash.com/api) for free images

### Getting Help

1. Check console for errors
2. Review code comments
3. Check documentation
4. Test in browser DevTools
5. Verify environment variables

---

**Happy coding! 🚀**
