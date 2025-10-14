import Link from 'next/link'
import Image from 'next/image'
import { formatDate, generateExcerpt } from '@/lib/blog'
import { BlogPost } from '@/lib/blog'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image/Visual Header */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">
              {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
            </div>
            <div className="text-sm opacity-90">
              {post.category}
            </div>
          </div>
        )}
        {post.featured && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
            title={post.title}
          >
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.description || generateExcerpt(post.content)}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
          <div className="text-gray-400">
            {post.author}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
