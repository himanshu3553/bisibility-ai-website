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
  Clock
} from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor your brand mentions across AI platforms with live updates and comprehensive dashboards.',
      benefits: ['Live tracking', 'Custom dashboards', 'Historical data']
    },
    {
      icon: Search,
      title: 'Multi-Platform Monitoring',
      description: 'Track your brand across ChatGPT, Perplexity, Claude, Gemini, and other AI search engines.',
      benefits: ['All major AI platforms', 'Unified reporting', 'Cross-platform insights']
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Analysis',
      description: 'Understand how AI platforms perceive your brand with advanced sentiment scoring and trend analysis.',
      benefits: ['AI-powered sentiment', 'Trend identification', 'Competitive analysis']
    },
    {
      icon: Target,
      title: 'Position Tracking',
      description: 'Monitor your brand\'s ranking position in AI responses and track improvements over time.',
      benefits: ['Ranking monitoring', 'Position trends', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Get alerts for negative mentions and reputation risks across AI platforms.',
      benefits: ['Instant alerts', 'Risk assessment', 'Crisis management']
    },
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Receive actionable recommendations to improve your brand\'s AI search visibility.',
      benefits: ['Smart recommendations', 'Optimization tips', 'ROI tracking']
    },
    {
      icon: Eye,
      title: 'Visibility Scoring',
      description: 'Get comprehensive visibility scores that measure your brand\'s presence across AI platforms.',
      benefits: ['Comprehensive scoring', 'Benchmark comparisons', 'Progress tracking']
    },
    {
      icon: MessageSquare,
      title: 'Content Analysis',
      description: 'Analyze how your content performs in AI responses and optimize for better visibility.',
      benefits: ['Content performance', 'Optimization insights', 'Best practices']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Monitor your brand across different regions and languages in AI search platforms.',
      benefits: ['Multi-language support', 'Regional insights', 'Global reach']
    },
    {
      icon: Clock,
      title: 'Historical Tracking',
      description: 'Access historical data to understand long-term trends and measure improvement over time.',
      benefits: ['Long-term trends', 'Historical analysis', 'Progress measurement']
    }
  ]

  return (
    <section className="py-20 bg-primary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Powerful Features for AI Brand Visibility
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Everything you need to track, analyze, and improve your brand's performance on AI search platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-primary-100">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 rounded-lg p-3 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-700 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-primary-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
