import { Metadata } from 'next'
import { BlogPost } from './blog'

export function generateBlogMetadata(post: BlogPost): Metadata {
  const title = post.seoTitle || post.title
  const description = post.description
  const canonical = post.canonical || `/blog/${post.slug}`
  const keywords = [...(post.keywords || []), ...(post.geoKeywords || [])].join(', ')

  return {
    title: `${title} | Bisibility`,
    description,
    keywords,
    authors: [{ name: post.author }],
    creator: 'Bisibility',
    publisher: 'Bisibility',
    metadataBase: new URL('https://bisibilityai.com'),
    alternates: {
      canonical: `https://bisibilityai.com${canonical}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://bisibilityai.com${canonical}`,
      title,
      description,
      siteName: 'Bisibility',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@bisibility',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'application/ld+json': JSON.stringify(generateStructuredData(post)),
    },
  }
}

export function generateBlogListMetadata(): Metadata {
  return {
    title: 'Blog | Bisibility',
    description: 'Stay updated with the latest insights and trends from our expert team.',
    keywords: 'blog, insights, articles, trends',
    metadataBase: new URL('https://bisibilityai.com'),
    alternates: {
      canonical: 'https://bisibility.com/blog',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://bisibility.com/blog',
      title: 'Blog | Bisibility',
      description: 'Stay updated with the latest insights and trends from our expert team.',
      siteName: 'Bisibility',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog | Bisibility',
      description: 'Stay updated with the latest insights and trends from our expert team.',
      creator: '@bisibility',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'application/ld+json': JSON.stringify(generateBlogStructuredData()),
    },
  }
}

export function generateStructuredData(post: BlogPost) {
  const baseUrl = 'https://bisibilityai.com'
  const canonical = post.canonical || `/blog/${post.slug}`
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `${baseUrl}${post.image}` : `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bisibility',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/bisibility-logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${canonical}`,
    },
    keywords: [...(post.keywords || []), ...(post.geoKeywords || [])].join(', '),
    articleSection: post.category,
    wordCount: post.wordCount || 0,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    genre: 'Technology',
    about: {
      '@type': 'Thing',
      name: post.category,
    },
  }
}

export function generateBlogStructuredData() {
  const baseUrl = 'https://bisibilityai.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Bisibility Blog',
    description: 'Latest insights and trends from our expert team.',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Bisibility',
      url: baseUrl,
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  }
}
