import { BarChart3, Users, TrendingUp, Target } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      icon: BarChart3,
      value: '1M+',
      label: 'Brand Mentions Tracked',
      description: 'Across all AI platforms'
    },
    {
      icon: Users,
      value: '100+',
      label: 'Active Brands',
      description: 'Trust us with their visibility'
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Accuracy Rate',
      description: 'In sentiment analysis'
    },
    {
      icon: Target,
      value: '24/7',
      label: 'Real-time Monitoring',
      description: 'Never miss a mention'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Join hundreds of companies already using Bisibility AI to optimize their AI search presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-200">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
