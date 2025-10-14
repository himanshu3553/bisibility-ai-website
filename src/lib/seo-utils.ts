import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    image,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    tags = []
  } = config

  const baseUrl = 'https://bisibilityai.com'
  const fullTitle = title.includes('Bisibility') ? title : `${title} | Bisibility AI`
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl
  const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/bisibility-logo.svg`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: 'Bisibility AI',
    publisher: 'Bisibility AI',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: 'Bisibility AI',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@bisibilityai',
      images: [imageUrl],
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
      'application/ld+json': JSON.stringify(generateStructuredData(config)),
    },
  }

  return metadata
}

function generateStructuredData(config: SEOConfig) {
  const baseUrl = 'https://bisibilityai.com'
  const { title, description, canonical, type, publishedTime, modifiedTime, author } = config

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    headline: title,
    description,
    url: canonical ? `${baseUrl}${canonical}` : baseUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Bisibility AI',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/bisibility-logo.svg`,
      },
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  }

  if (type === 'article' && author) {
    return {
      ...baseStructuredData,
      author: {
        '@type': 'Organization',
        name: author,
        url: baseUrl,
      },
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
    }
  }

  return baseStructuredData
}

// Predefined SEO configurations for common pages
export const pageSEOConfigs = {
  home: {
    title: 'Bisibility AI - AI Brand Monitoring & GEO Optimization Platform',
    description: 'Monitor your brand across AI platforms like ChatGPT, Claude, and Perplexity. Optimize your content for generative engines with Bisibility AI.',
    keywords: ['AI brand monitoring', 'GEO optimization', 'ChatGPT monitoring', 'Claude monitoring', 'Perplexity analytics', 'AI visibility'],
    canonical: '/',
  },
  blog: {
    title: 'AI Brand Monitoring & GEO Blog | Bisibility AI',
    description: 'Latest insights on AI brand monitoring, Generative Engine Optimization (GEO), and AI platform visibility strategies.',
    keywords: ['AI blog', 'GEO blog', 'AI brand monitoring blog', 'generative AI insights', 'AI marketing blog'],
    canonical: '/blog',
  },
  features: {
    title: 'AI Brand Monitoring Features | Bisibility AI',
    description: 'Comprehensive AI brand monitoring features including ChatGPT, Claude, Perplexity, and Gemini tracking with advanced analytics.',
    keywords: ['AI monitoring features', 'brand tracking features', 'AI analytics', 'multi-platform monitoring'],
    canonical: '/features',
  },
  pricing: {
    title: 'AI Brand Monitoring Pricing | Bisibility AI',
    description: 'Affordable AI brand monitoring plans for businesses of all sizes. Track your brand across ChatGPT, Claude, Perplexity, and more.',
    keywords: ['AI monitoring pricing', 'brand tracking pricing', 'AI analytics pricing', 'GEO optimization pricing'],
    canonical: '/pricing',
  },
  contact: {
    title: 'Contact Bisibility AI | AI Brand Monitoring Support',
    description: 'Get in touch with our AI brand monitoring experts. Contact us for GEO optimization, AI visibility strategies, and platform monitoring.',
    keywords: ['contact AI monitoring', 'GEO consultation', 'AI brand support', 'AI visibility help'],
    canonical: '/contact',
  },
}
