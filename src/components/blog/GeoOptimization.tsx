'use client'

import { useEffect } from 'react'

interface GeoOptimizationProps {
  post: {
    title: string
    description: string
    keywords?: string[]
    geoKeywords?: string[]
    content: string
    category: string
    tags: string[]
  }
}

export default function GeoOptimization({ post }: GeoOptimizationProps) {
  useEffect(() => {
    // Add semantic keywords to the page for better AI understanding
    const semanticKeywords = [
      ...(post.keywords || []),
      ...(post.geoKeywords || []),
      post.category,
      ...post.tags,
      'AI automation',
      'artificial intelligence',
      'machine learning',
      'business transformation',
      'digital innovation',
    ]

    // Create a hidden div with semantic keywords for AI crawlers
    const semanticDiv = document.createElement('div')
    semanticDiv.style.display = 'none'
    semanticDiv.setAttribute('aria-hidden', 'true')
    semanticDiv.textContent = semanticKeywords.join(', ')
    semanticDiv.className = 'semantic-keywords'
    
    document.body.appendChild(semanticDiv)

    return () => {
      const existingDiv = document.querySelector('.semantic-keywords')
      if (existingDiv) {
        document.body.removeChild(existingDiv)
      }
    }
  }, [post])

  return null
}
