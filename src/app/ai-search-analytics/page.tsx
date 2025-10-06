import type { Metadata } from 'next'
import { BarChart3, Search, TrendingUp, Target, Eye, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Search Analytics - Track Brand Performance Across AI Platforms',
  description: 'Comprehensive AI search analytics platform for monitoring brand visibility across ChatGPT, Perplexity, Claude, and Gemini. Get real-time insights and optimize your AI search presence.',
  keywords: ['AI search analytics', 'brand visibility', 'AI platform monitoring', 'ChatGPT analytics', 'Perplexity tracking', 'Claude monitoring', 'Gemini insights'],
}

export default function AISearchAnalyticsPage() {
  const features = [
    {
      icon: Search,
      title: 'Multi-Platform Monitoring',
      description: 'Track your brand across all major AI search platforms including ChatGPT, Perplexity, Claude, and Google Gemini.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Get instant insights into your brand performance with live dashboards and comprehensive reporting.'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Analysis',
      description: 'Understand how AI platforms perceive your brand with advanced sentiment scoring and trend analysis.'
    },
    {
      icon: Target,
      title: 'Position Tracking',
      description: 'Monitor your brand ranking in AI responses and track improvements over time.'
    },
    {
      icon: Eye,
      title: 'Visibility Scoring',
      description: 'Comprehensive visibility scores that measure your brand presence across AI platforms.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Receive actionable recommendations to improve your brand AI search visibility.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              AI Search <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Monitor and optimize your brand performance across AI search platforms. 
              Get comprehensive insights into how your brand appears in ChatGPT, Perplexity, 
              Claude, and Gemini responses.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive AI Search Analytics
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Everything you need to track and optimize your brand's presence across AI search platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Supported AI Platforms
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Monitor your brand across all major AI search platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">ChatGPT</h3>
              <p className="text-primary-700 text-sm">OpenAI's conversational AI platform</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Perplexity</h3>
              <p className="text-primary-700 text-sm">AI-powered search engine</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Claude</h3>
              <p className="text-primary-700 text-sm">Anthropic's AI assistant</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Gemini</h3>
              <p className="text-primary-700 text-sm">Google's AI search platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Tracking Your AI Search Performance
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using Bisibility AI to optimize their AI search presence.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors duration-200 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}
