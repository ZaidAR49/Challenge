import React from 'react'
import { FiStar, FiUsers } from 'react-icons/fi'

const CourseCard = ({ image, title, category, instructor, rating, students, price, level }) => {
  const getCategoryColor = (cat) => {
    const colors = {
      programming: 'bg-blue-100 text-blue-700',
      ai: 'bg-purple-100 text-purple-700',
      cybersecurity: 'bg-red-100 text-red-700',
      default: 'bg-gray-100 text-gray-700',
    }
    return colors[cat.toLowerCase()] || colors.default
  }

  const getLevelColor = (lv) => {
    const colors = {
      beginner: 'text-green-600',
      intermediate: 'text-yellow-600',
      advanced: 'text-red-600',
    }
    return colors[lv.toLowerCase()] || 'text-gray-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary to-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">{instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`text-sm ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-dark">{rating}</span>
          <span className="text-xs text-gray-500">({students} students)</span>
        </div>

        {/* Students */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <FiUsers className="text-primary" />
          <span>{students} students enrolled</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500">Level</p>
            <p className={`font-semibold text-sm ${getLevelColor(level)}`}>{level}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
