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
  description: 'Discover all the powerful features of Bisibility AI: real-time analytics, multi-platform monitoring, sentiment analysis, position tracking, and more for AI search optimization.',
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
      <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Everything you need to track, analyze, and optimize your brand's performance 
              across AI search platforms. From real-time monitoring to advanced analytics, 
              Bisibility AI provides comprehensive tools for AI brand visibility and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Our comprehensive suite of tools designed specifically for AI brand monitoring
            </p>
          </div> */}

          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-900">
                      {feature.title}
                    </h3>
                  </div>
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
                  <div className="bg-white rounded-2xl p-6 h-80 border border-primary-100 shadow-sm">
                    {index === 0 && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary-900">Analytics Dashboard</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-primary-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-primary-900">87%</div>
                            <div className="text-xs text-primary-600">Visibility</div>
                            <div className="text-xs text-green-600">↗ +12%</div>
                          </div>
                          <div className="bg-primary-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-primary-900">#3</div>
                            <div className="text-xs text-primary-600">Position</div>
                            <div className="text-xs text-green-600">↗ +2</div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-20 rounded-lg flex items-center justify-center mb-3">
                          <div className="text-primary-600 text-sm font-medium">Live Chart</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">ChatGPT</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-1 bg-primary-200 rounded-full">
                                <div className="w-12 h-1 bg-primary-600 rounded-full"></div>
                              </div>
                              <span className="text-primary-600">75%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">Perplexity</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-1 bg-primary-200 rounded-full">
                                <div className="w-10 h-1 bg-primary-600 rounded-full"></div>
                              </div>
                              <span className="text-primary-600">62%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary-900">Platform Monitoring</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-blue-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-blue-600">ChatGPT</div>
                            <div className="text-xs text-blue-600">Active</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-purple-600">Perplexity</div>
                            <div className="text-xs text-purple-600">Active</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-orange-600">Claude</div>
                            <div className="text-xs text-orange-600">Active</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">Gemini</div>
                            <div className="text-xs text-green-600">Active</div>
                          </div>
                        </div>
                        <div className="bg-primary-50 p-3 rounded-lg mb-3">
                          <div className="text-sm font-medium text-primary-900 mb-2">Recent Mentions</div>
                          <div className="space-y-1 text-xs text-primary-700">
                            <div className="flex justify-between">
                              <span>ChatGPT: 12 mentions</span>
                              <span className="text-green-600">+3</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Perplexity: 8 mentions</span>
                              <span className="text-green-600">+1</span>
                            </div>
                          </div>
                        </div>
                        {/* <div className="text-center text-xs text-primary-600">
                          All platforms monitored
                        </div> */}
                      </div>
                    )}
                    {index === 2 && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary-900">Sentiment Analysis</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="bg-green-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">72%</div>
                            <div className="text-xs text-green-600">Positive</div>
                          </div>
                          <div className="bg-yellow-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-yellow-600">18%</div>
                            <div className="text-xs text-yellow-600">Neutral</div>
                          </div>
                          <div className="bg-red-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-red-600">10%</div>
                            <div className="text-xs text-red-600">Negative</div>
                          </div>
                        </div>
                        <div className="bg-primary-50 p-3 rounded-lg mb-3">
                          <div className="text-sm font-medium text-primary-900 mb-2">Sentiment Trend</div>
                          <div className="flex items-end space-x-1 h-12">
                            <div className="w-3 bg-green-400 rounded-t" style={{height: '60%'}}></div>
                            <div className="w-3 bg-green-500 rounded-t" style={{height: '70%'}}></div>
                            <div className="w-3 bg-green-400 rounded-t" style={{height: '65%'}}></div>
                            <div className="w-3 bg-green-500 rounded-t" style={{height: '80%'}}></div>
                            <div className="w-3 bg-green-400 rounded-t" style={{height: '75%'}}></div>
                            <div className="w-3 bg-green-500 rounded-t" style={{height: '85%'}}></div>
                          </div>
                        </div>
                        <div className="text-center text-xs text-primary-600">
                          Overall sentiment: Positive ↗
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary-900">Position Tracking</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="space-y-3 mb-4">
                          <div className="bg-primary-50 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-primary-900">ChatGPT</span>
                              <span className="text-lg font-bold text-primary-900">#2</span>
                            </div>
                            <div className="w-full h-2 bg-primary-200 rounded-full">
                              <div className="w-4/5 h-2 bg-primary-600 rounded-full"></div>
                            </div>
                            <div className="text-xs text-green-600 mt-1">↗ Improved by 3 positions</div>
                          </div>
                          <div className="bg-primary-50 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-primary-900">Perplexity</span>
                              <span className="text-lg font-bold text-primary-900">#5</span>
                            </div>
                            <div className="w-full h-2 bg-primary-200 rounded-full">
                              <div className="w-3/5 h-2 bg-primary-600 rounded-full"></div>
                            </div>
                            <div className="text-xs text-green-600 mt-1">↗ Improved by 1 position</div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-12 rounded-lg flex items-center justify-center">
                          <div className="text-primary-600 text-sm font-medium">Ranking History</div>
                        </div>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary-900">Brand Protection</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-green-800">Brand Safety Score</span>
                          </div>
                          <div className="text-2xl font-bold text-green-600">92/100</div>
                          <div className="text-xs text-green-600">Excellent</div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">Negative Alerts</span>
                            <span className="text-green-600 font-medium">0</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">Risk Level</span>
                            <span className="text-green-600 font-medium">Low</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">Last Alert</span>
                            <span className="text-primary-600">2 days ago</span>
                          </div>
                        </div>
                        <div className="bg-primary-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-primary-900 mb-1">Protection Status</div>
                          <div className="text-xs text-green-600">All systems secure</div>
                        </div>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary-900">AI Insights</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="space-y-3 mb-4">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-blue-900 mb-1">💡 Recommendation</div>
                            <div className="text-xs text-blue-700">Optimize content for ChatGPT queries</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-purple-900 mb-1">📈 Opportunity</div>
                            <div className="text-xs text-purple-700">Improve Perplexity visibility</div>
                          </div>
                        </div>
                        <div className="bg-primary-50 p-3 rounded-lg mb-3">
                          <div className="text-sm font-medium text-primary-900 mb-2">ROI Tracking</div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">Visibility Improvement</span>
                            <span className="text-green-600 font-medium">+23%</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary-700">Cost Savings</span>
                            <span className="text-green-600 font-medium">$2.4K</span>
                          </div>
                        </div>
                        {/* <div className="text-center text-xs text-primary-600">
                          AI-powered insights active
                        </div> */}
                      </div>
                    )}
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
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
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
      {/* <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Connect Bisibility AI with your existing tools and workflows
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
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see how Bisibility AI can transform your AI brand monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors duration-200 flex items-center justify-center"
              aria-label="Start your free trial of Bisibility AI brand analytics platform"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/pricing" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-200"
              aria-label="View Bisibility AI pricing plans and features"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
