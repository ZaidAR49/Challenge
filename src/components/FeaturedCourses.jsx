import React from 'react'
import { useNavigate } from 'react-router-dom'
import CourseCard from './CourseCard'

const FeaturedCourses = () => {
  const navigate = useNavigate()
  const courses = [
    {
      id: 1,
      title: 'Advanced Python Programming for Beginners',
      category: 'Programming',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 1250,
      price: 49.99,
      level: 'Beginner',
      image: 'https://placehold.co/600x400/6366f1/ffffff?text=Python+Programming',
    },
    {
      id: 2,
      title: 'Machine Learning & Deep Learning Masterclass',
      category: 'AI',
      instructor: 'Prof. Alex Chen',
      rating: 4.9,
      students: 2840,
      price: 79.99,
      level: 'Intermediate',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Machine+Learning',
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals & Ethical Hacking',
      category: 'Cybersecurity',
      instructor: 'Mr. Michael Rodriguez',
      rating: 4.7,
      students: 1890,
      price: 89.99,
      level: 'Intermediate',
      image: 'https://placehold.co/600x400/ec4899/ffffff?text=Cybersecurity',
    },
    {
      id: 4,
      title: 'Web Development with React & Node.js',
      category: 'Programming',
      instructor: 'Emma Williams',
      rating: 4.6,
      students: 3210,
      price: 59.99,
      level: 'Beginner',
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Web+Development',
    },
    {
      id: 5,
      title: 'AI-Powered Natural Language Processing',
      category: 'AI',
      instructor: 'Dr. James Liu',
      rating: 4.9,
      students: 1540,
      price: 99.99,
      level: 'Advanced',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=NLP+%26+AI',
    },
    {
      id: 6,
      title: 'Network Security & Penetration Testing',
      category: 'Cybersecurity',
      instructor: 'David Martinez',
      rating: 4.8,
      students: 950,
      price: 109.99,
      level: 'Advanced',
      image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Network+Security',
    },
  ]

  return (
    <section id="courses" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts and master the skills you need to succeed in programming, AI, and cybersecurity.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              price={course.price}
              level={course.level}
              image={course.image}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/error')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition duration-200"
          >
            Browse All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
