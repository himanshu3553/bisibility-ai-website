import { Check, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI brand monitoring',
      features: [
        'Up to 5 brand mentions per day',
        'Basic sentiment analysis',
        'ChatGPT & Perplexity monitoring',
        'Email alerts',
        'Basic dashboard',
        '7-day data retention'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive AI brand tracking',
      features: [
        'Up to 50 brand mentions per day',
        'Advanced sentiment analysis',
        'All AI platforms (ChatGPT, Perplexity, Claude, Gemini)',
        'Real-time alerts',
        'Advanced analytics dashboard',
        'Historical data (90 days)',
        'API access',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex AI brand monitoring needs',
      features: [
        'Unlimited brand mentions',
        'AI-powered insights & recommendations',
        'All AI platforms + custom integrations',
        'Custom alert rules',
        'White-label dashboard',
        'Unlimited historical data',
        'Dedicated account manager',
        'Custom reporting',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-primary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 relative ${
                plan.popular 
                  ? 'ring-2 ring-primary-600 shadow-xl scale-105' 
                  : 'shadow-sm border border-primary-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-primary-900">
                    {plan.price}
                  </span>
                  <span className="text-primary-600 ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-primary-700">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                }`}
              >
                {plan.cta}
                <ArrowRight className="inline h-4 w-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary-600 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Link href="/contact" className="text-primary-600 hover:text-primary-800 font-semibold">
            Contact our sales team →
          </Link>
        </div>
      </div>
    </section>
  )
}
