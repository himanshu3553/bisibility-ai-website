import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getAllPosts, getPostBySlug, formatDate, getRelatedPosts } from '@/lib/blog'
import { generateBlogMetadata } from '@/lib/seo'
import MarkdownRenderer from '@/components/blog/MarkdownRenderer'
import GeoOptimization from '@/components/blog/GeoOptimization'
import RelatedArticles from '@/components/blog/RelatedArticles'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generateBlogMetadata(post)
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 2)

  return (
    <div className="min-h-screen bg-white">
      <GeoOptimization post={post} />
      
      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Blog Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Short Intro/Excerpt */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.description}
        </p>

        {/* Author Name and Date */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            {post.author?.charAt(0) || 'A'}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
          </div>
        </div>

        {/* Line Separator */}
        <hr className="border-gray-200 mb-8" />

        {/* Article Image */}
        {post.image && (
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Markdown Article Content */}
        <article className="ghost-article mb-16">
          <MarkdownRenderer content={post.content} />
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        <RelatedArticles currentPost={post} relatedPosts={relatedPosts} />

      </div>
    </div>
  )
}