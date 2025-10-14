import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // AI Bot Rules - Allow access to public content
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Bard',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'PiBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'MetaBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Search Engine Rules
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
    ],
    sitemap: 'https://bisibilityai.com/sitemap.xml',
    host: 'https://bisibilityai.com',
  }
}
