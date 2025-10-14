import type { Metadata } from 'next'
import { MessageSquare, TrendingUp, BarChart3, AlertCircle, Eye, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Perplexity Analytics - Monitor Your Brand in Perplexity AI',
  description: 'Track how your brand appears in Perplexity AI responses. Monitor mentions, sentiment, and visibility with Bisibility AI brand analytics platform.',
  keywords: ['Perplexity analytics', 'Perplexity brand monitoring', 'brand visibility Perplexity', 'Perplexity AI tracking', 'Perplexity mentions'],
}

export default function PerplexityAnalyticsPage() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Perplexity Response Analytics',
      description: 'Track how your brand appears in Perplexity AI conversations and responses across different topics.'
    },
    {
      icon: TrendingUp,
      title: 'Mention Frequency Analysis',
      description: 'Analyze how often your brand is mentioned in Perplexity responses and identify trending topics.'
    },
    {
      icon: BarChart3,
      title: 'Sentiment Tracking',
      description: 'Monitor the sentiment of your brand mentions in Perplexity responses with AI-powered analysis.'
    },
    {
      icon: AlertCircle,
      title: 'Real-Time Alerts',
      description: 'Get instant notifications when your brand is mentioned in Perplexity responses.'
    },
    {
      icon: Eye,
      title: 'Visibility Scoring',
      description: 'Comprehensive visibility scores that measure your brand presence in Perplexity responses.'
    },
    {
      icon: Zap,
      title: 'Optimization Insights',
      description: 'Receive actionable recommendations to improve your brand visibility in Perplexity.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Perplexity <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Track how your brand appears in Perplexity AI responses and conversations. 
              Monitor mentions, sentiment, and visibility across Perplexity's AI-powered search platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive Perplexity Analytics
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Everything you need to track and optimize your brand's presence in Perplexity AI
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

      {/* Why Perplexity Analytics Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Why Monitor Your Brand in Perplexity?
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Perplexity AI combines search and AI to provide comprehensive, cited answers to user queries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary-900">Brand Reputation Management:</strong>
                    <span className="text-primary-700"> Monitor how Perplexity represents your brand to users</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary-900">Competitive Intelligence:</strong>
                    <span className="text-primary-700"> Track how competitors appear in Perplexity responses</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary-900">Content Optimization:</strong>
                    <span className="text-primary-700"> Optimize your content for better Perplexity visibility</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary-900">Crisis Management:</strong>
                    <span className="text-primary-700"> Get alerts for negative mentions or misinformation</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h4 className="text-lg font-semibold text-primary-900 mb-4">Perplexity Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-primary-700">Monthly Active Users</span>
                  <span className="font-semibold text-primary-900">25M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">Daily Queries</span>
                  <span className="font-semibold text-primary-900">200M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">Market Share</span>
                  <span className="font-semibold text-primary-900">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Analyzing Your Brand in Perplexity
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Don't let Perplexity conversations about your brand go unnoticed. Start analyzing today.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors duration-200 inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
