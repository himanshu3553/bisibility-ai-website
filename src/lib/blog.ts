import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  readingTime: string
  featured: boolean
  image?: string
  content: string
  excerpt?: string
  seoTitle?: string
  keywords?: string[]
  geoKeywords?: string[]
  canonical?: string
  wordCount?: number
  lastModified?: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

// Simple reading time calculation
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// Simple date formatting
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const day = date.getDate().toString().padStart(2, '0')
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const wordCount = content.split(/\s+/).length
      
      return {
        slug,
        content,
        readingTime: calculateReadingTime(content),
        wordCount,
        lastModified: new Date().toISOString(),
        ...data,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      readingTime: calculateReadingTime(content),
      ...data,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.featured).slice(0, 3)
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, limit)
}

export { formatDate }

export function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content.replace(/[#*`]/g, '').replace(/\n/g, ' ')
  if (plainText.length <= maxLength) return plainText
  return plainText.substring(0, maxLength).trim() + '...'
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts()
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug)
  
  // Score posts based on category and tags similarity
  const scoredPosts = otherPosts.map(post => {
    let score = 0
    
    // Category match gets highest priority
    if (post.category === currentPost.category) {
      score += 10
    }
    
    // Tag matches
    if (currentPost.tags && post.tags) {
      const commonTags = currentPost.tags.filter(tag => post.tags.includes(tag))
      score += commonTags.length * 3
    }
    
    // Featured posts get slight boost
    if (post.featured) {
      score += 1
    }
    
    return { post, score }
  })
  
  // Sort by score (highest first) and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}
