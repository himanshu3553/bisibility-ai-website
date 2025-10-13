import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '@/lib/blog-data'
import MarkdownRenderer from '@/components/MarkdownRenderer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Bisibility AI Blog',
    }
  }

  return {
    title: `${post.title} - Bisibility AI Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || [],
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Post Not Found</h1>
          <p className="text-primary-700 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-primary-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-primary-600 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <button className="flex items-center hover:text-primary-700 transition-colors duration-200">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-100">
                <MarkdownRenderer content={post.content} />
              </div>
            </article>
            
            {/* Tags */}
            {post.tags && (
              <div className="mt-12 pt-8 border-t border-primary-100">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-semibold text-primary-900">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors duration-200 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{post.author}</h3>
                  <p className="text-primary-700 mb-4">
                    AI Brand Analytics Expert with 5+ years of experience in generative engine optimization 
                    and AI search monitoring. Passionate about helping businesses navigate the AI search revolution.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                      Contact Author
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllPosts()
                .filter(p => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-primary-100">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-primary-600 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{relatedPost.date}</span>
                        <Clock className="h-4 w-4 ml-4" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-primary-900 mb-3 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary-600 transition-colors duration-200">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-primary-700 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
