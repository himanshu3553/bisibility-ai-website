import type { Metadata } from 'next'
import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  Target, 
  Shield, 
  Zap,
  Eye,
  MessageSquare,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features - Bisibility AI Brand Analytics Platform',
  description: 'Discover all the powerful features of Bisibility: real-time analytics, multi-platform monitoring, sentiment analysis, position tracking, and more for AI search optimization.',
  keywords: ['AI brand analytics features', 'real-time monitoring', 'sentiment analysis', 'position tracking', 'AI search optimization'],
}

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics Dashboard',
      description: 'Monitor your brand mentions across AI platforms with live updates and comprehensive dashboards.',
      details: [
        'Live tracking of brand mentions',
        'Customizable dashboard widgets',
        'Historical data visualization',
        'Export reports in multiple formats',
        'Real-time alerts and notifications'
      ]
    },
    {
      icon: Search,
      title: 'Multi-Platform Monitoring',
      description: 'Track your brand across ChatGPT, Perplexity, Claude, Gemini, and other AI search engines.',
      details: [
        'ChatGPT brand monitoring',
        'Perplexity search tracking',
        'Claude AI visibility',
        'Google Gemini analytics',
        'Custom platform integration'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Advanced Sentiment Analysis',
      description: 'Understand how AI platforms perceive your brand with advanced sentiment scoring and trend analysis.',
      details: [
        'AI-powered sentiment scoring',
        'Trend identification and analysis',
        'Competitive sentiment comparison',
        'Emotion detection and categorization',
        'Sentiment trend forecasting'
      ]
    },
    {
      icon: Target,
      title: 'Position Tracking & Ranking',
      description: 'Monitor your brand\'s ranking position in AI responses and track improvements over time.',
      details: [
        'Real-time position monitoring',
        'Ranking trend analysis',
        'Competitive position tracking',
        'Position improvement alerts',
        'Historical ranking data'
      ]
    },
    {
      icon: Shield,
      title: 'Brand Protection & Alerts',
      description: 'Get instant alerts for negative mentions and reputation risks across AI platforms.',
      details: [
        'Instant negative mention alerts',
        'Reputation risk assessment',
        'Crisis management tools',
        'Competitive monitoring',
        'Brand safety scoring'
      ]
    },
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Receive actionable recommendations to improve your brand\'s AI search visibility.',
      details: [
        'Smart optimization recommendations',
        'Content strategy suggestions',
        'ROI tracking and measurement',
        'Performance benchmarking',
        'Predictive analytics'
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: Eye,
      title: 'Visibility Scoring',
      description: 'Comprehensive visibility scores that measure your brand\'s presence across AI platforms.'
    },
    {
      icon: MessageSquare,
      title: 'Content Analysis',
      description: 'Analyze how your content performs in AI responses and optimize for better visibility.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Monitor your brand across different regions and languages in AI search platforms.'
    },
    {
      icon: Clock,
      title: 'Historical Tracking',
      description: 'Access historical data to understand long-term trends and measure improvement over time.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Everything you need to track, analyze, and optimize your brand's performance 
              across AI search platforms. From real-time monitoring to advanced analytics, 
              Bisibility provides comprehensive tools for AI brand visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Our comprehensive suite of tools designed specifically for AI brand monitoring
            </p>
          </div>

          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-primary-700 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-primary-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <feature.icon className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                      <p className="text-primary-600 font-medium">Feature Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              More tools to help you succeed in AI search optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-700 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Connect Bisibility with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold text-primary-400">Slack</div>
            <div className="text-2xl font-bold text-primary-400">Teams</div>
            <div className="text-2xl font-bold text-primary-400">Zapier</div>
            <div className="text-2xl font-bold text-primary-400">HubSpot</div>
            <div className="text-2xl font-bold text-primary-400">Salesforce</div>
            <div className="text-2xl font-bold text-primary-400">Google Analytics</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see how Bisibility can transform your AI brand monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors duration-200 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/pricing" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
