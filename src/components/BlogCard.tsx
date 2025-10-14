import Link from 'next/link'
import { Calendar, User, Clock, Tag } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  tags?: string[]
  image?: string
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  tags,
  image
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 group">
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {image && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-gray-600 text-sm font-medium">Featured Image</div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <span className="text-sm text-gray-600">{author}</span>
          </div>
          <Link 
            href={`/blog/${slug}`}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
        
        {tags && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
