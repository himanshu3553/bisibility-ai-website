import type { Metadata } from 'next'
import { MessageSquare, TrendingUp, BarChart3, AlertCircle, Eye, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ChatGPT Brand Monitoring - Track Your Brand in ChatGPT Responses',
  description: 'Monitor how your brand appears in ChatGPT responses. Track mentions, sentiment, and visibility with Bisibility AI brand analytics platform.',
  keywords: ['ChatGPT brand monitoring', 'ChatGPT analytics', 'brand visibility ChatGPT', 'OpenAI brand tracking', 'ChatGPT mentions'],
}

export default function ChatGPTBrandMonitoringPage() {
  const features = [
    {
      icon: MessageSquare,
      title: 'ChatGPT Response Monitoring',
      description: 'Track how your brand appears in ChatGPT conversations and responses across different topics.'
    },
    {
      icon: TrendingUp,
      title: 'Mention Frequency Analysis',
      description: 'Analyze how often your brand is mentioned in ChatGPT responses and identify trending topics.'
    },
    {
      icon: BarChart3,
      title: 'Sentiment Tracking',
      description: 'Monitor the sentiment of your brand mentions in ChatGPT responses with AI-powered analysis.'
    },
    {
      icon: AlertCircle,
      title: 'Real-Time Alerts',
      description: 'Get instant notifications when your brand is mentioned in ChatGPT responses.'
    },
    {
      icon: Eye,
      title: 'Visibility Scoring',
      description: 'Comprehensive visibility scores that measure your brand presence in ChatGPT responses.'
    },
    {
      icon: Zap,
      title: 'Optimization Insights',
      description: 'Receive actionable recommendations to improve your brand visibility in ChatGPT.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              ChatGPT Brand <span className="gradient-text">Monitoring</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Track how your brand appears in ChatGPT responses and conversations. 
              Monitor mentions, sentiment, and visibility across OpenAI's conversational AI platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive ChatGPT Monitoring
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Everything you need to track and optimize your brand's presence in ChatGPT
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

      {/* Why ChatGPT Monitoring Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Why Monitor Your Brand in ChatGPT?
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              ChatGPT is one of the most popular AI platforms with millions of users worldwide
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
                    <span className="text-primary-700"> Monitor how ChatGPT represents your brand to users</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary-900">Competitive Intelligence:</strong>
                    <span className="text-primary-700"> Track how competitors appear in ChatGPT responses</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary-900">Content Optimization:</strong>
                    <span className="text-primary-700"> Optimize your content for better ChatGPT visibility</span>
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
              <h4 className="text-lg font-semibold text-primary-900 mb-4">ChatGPT Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-primary-700">Monthly Active Users</span>
                  <span className="font-semibold text-primary-900">100M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">Daily Queries</span>
                  <span className="font-semibold text-primary-900">1B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">Market Share</span>
                  <span className="font-semibold text-primary-900">60%</span>
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
            Start Monitoring Your Brand in ChatGPT
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Don't let ChatGPT conversations about your brand go unnoticed. Start tracking today.
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
