import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/blog'
import { BlogPost } from '@/lib/blog'
import { Calendar, Clock } from 'lucide-react'

interface RelatedArticlesProps {
  currentPost: BlogPost
  relatedPosts: BlogPost[]
}

export default function RelatedArticles({ currentPost, relatedPosts }: RelatedArticlesProps) {
  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-16 mb-16 pt-8 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">READ MORE</h2>
        <div className="w-16 h-1 bg-blue-600 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {relatedPosts.map((post) => (
          <article 
            key={post.slug}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
          >
            {/* Image/Visual Header */}
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-center text-white p-6">
                  <div className="text-3xl font-bold mb-2">
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
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                maxHeight: '2.8em'
              }}>
                <Link href={`/blog/${post.slug}`} title={post.title}>
                  {post.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                maxHeight: '4.2em'
              }}>
                {post.description || post.content.substring(0, 150) + '...'}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
