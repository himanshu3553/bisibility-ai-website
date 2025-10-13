import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getAllPosts } from '@/lib/blog-data'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog - Bisibility AI | AI Brand Analytics Insights',
  description: 'Stay updated with the latest insights on AI brand monitoring, generative engine optimization, and AI search analytics from Bisibility AI experts.',
  keywords: ['AI brand analytics blog', 'generative engine optimization', 'AI search insights', 'brand monitoring tips', 'AI marketing'],
}

export default function BlogPage() {
  const blogPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              AI Brand Analytics <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed max-w-3xl mx-auto">
              Stay ahead of the AI search revolution with expert insights on brand monitoring, 
              generative engine optimization, and AI-powered marketing strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                tags={post.tags}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Stay Updated with AI Brand Insights
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              Get the latest articles on AI brand monitoring, generative engine optimization, 
              and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
