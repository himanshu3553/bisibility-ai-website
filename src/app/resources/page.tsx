import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, TrendingUp, BarChart3, AlertCircle, Eye, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Platform Resources - Comprehensive Brand Monitoring Guides',
  description: 'Access comprehensive guides and resources for monitoring your brand across AI platforms including ChatGPT, Claude, Gemini, and Perplexity.',
  keywords: ['AI platform resources', 'brand monitoring guides', 'ChatGPT monitoring', 'Claude analytics', 'Gemini tracking', 'Perplexity insights'],
}

export default function ResourcesPage() {
  const platformResources = [
    {
      title: 'AI Search Analytics',
      description: 'Comprehensive analytics and insights for AI-powered search platforms',
      href: '/ai-search-analytics',
      icon: BarChart3,
      features: ['Multi-platform analytics', 'Search trend analysis', 'Performance metrics'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'ChatGPT Brand Monitoring',
      description: 'Track how your brand appears in ChatGPT responses and conversations',
      href: '/chatgpt-brand-monitoring',
      icon: MessageSquare,
      features: ['Response monitoring', 'Mention frequency', 'Sentiment tracking'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Perplexity Analytics',
      description: 'Monitor your brand in Perplexity AI responses and cited answers',
      href: '/perplexity-analytics',
      icon: TrendingUp,
      features: ['Cited answer tracking', 'Source monitoring', 'Research insights'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Claude Monitoring',
      description: 'Track your brand presence in Anthropic\'s Claude AI responses',
      href: '/claude-monitoring',
      icon: Eye,
      features: ['Conversation monitoring', 'Brand representation', 'Trust signals'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Gemini Brand Tracking',
      description: 'Monitor your brand in Google Gemini responses across Google\'s ecosystem',
      href: '/gemini-brand-tracking',
      icon: Zap,
      features: ['Google ecosystem tracking', 'Multimodal monitoring', 'Advanced AI insights'],
      color: 'from-red-500 to-red-600'
    }
  ]

  const resourceCategories = [
    {
      title: 'Getting Started',
      description: 'Essential guides for AI brand monitoring',
      resources: [
        { name: 'AI Brand Monitoring Best Practices for 2026', href: '/blog/ai-brand-monitoring-best-practices-for-2026', type: 'Article' },
        { name: 'What is Generative Engine Optimization (GEO)', href: '/blog/what-is-generative-engine-optimization', type: 'Guide' }
      ]
    },
    {
      title: 'Platform-Specific Guides',
      description: 'Detailed monitoring guides for each AI platform',
      resources: [
        { name: 'ChatGPT Brand Monitoring Guide', href: '/chatgpt-brand-monitoring', type: 'Guide' },
        { name: 'Claude Monitoring Best Practices', href: '/claude-monitoring', type: 'Guide' },
        { name: 'Gemini Brand Tracking Strategies', href: '/gemini-brand-tracking', type: 'Guide' },
        { name: 'Perplexity Analytics Overview', href: '/perplexity-analytics', type: 'Guide' }
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Tools and resources for measuring AI brand performance',
      resources: [
        { name: 'AI Search Analytics Dashboard', href: '/ai-search-analytics', type: 'Tool' },
        { name: 'Brand Visibility Metrics', href: '/features', type: 'Feature' },
        { name: 'Performance Tracking Tools', href: '/pricing', type: 'Service' }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              AI Platform <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Comprehensive guides, tools, and resources for monitoring your brand across AI platforms. 
              Everything you need to track, analyze, and optimize your AI visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Resources Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Platform-Specific Resources
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Detailed guides and tools for monitoring your brand on each major AI platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="group bg-white rounded-xl border border-primary-100 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`bg-gradient-to-r ${resource.color} rounded-lg p-3 flex-shrink-0`}>
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-primary-700 text-sm mb-3">
                      {resource.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {resource.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-primary-600">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Organized resources to help you find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-primary-700 mb-6">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <Link
                      key={resourceIndex}
                      href={resource.href}
                      className="flex items-center justify-between p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-primary-900 group-hover:text-primary-700">
                          {resource.name}
                        </div>
                        <div className="text-sm text-primary-600">
                          {resource.type}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Fast access to the most popular resources and tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/blog"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              <div className="text-2xl font-bold mb-2">Blog</div>
              <div className="text-blue-100 text-sm">Latest insights</div>
            </Link>
            <Link
              href="/features"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <div className="text-2xl font-bold mb-2">Features</div>
              <div className="text-green-100 text-sm">Platform capabilities</div>
            </Link>
            <Link
              href="/pricing"
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
            >
              <div className="text-2xl font-bold mb-2">Pricing</div>
              <div className="text-purple-100 text-sm">Plans & pricing</div>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              <div className="text-2xl font-bold mb-2">Contact</div>
              <div className="text-orange-100 text-sm">Get in touch</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Monitoring Your AI Brand Presence?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Use these resources to build a comprehensive AI brand monitoring strategy across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors duration-200 inline-block"
            >
              Get Started
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-200 inline-block"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
