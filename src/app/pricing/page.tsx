import type { Metadata } from 'next'
import { Check, Star, ArrowRight, Zap, Shield, Crown } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - Bisibility AI Brand Analytics Plans',
  description: 'Choose the perfect Bisibility AI plan for your business. Transparent pricing with free trials. Starter, Professional, and Enterprise plans available.',
  keywords: ['bisibility pricing', 'AI brand analytics pricing', 'AI search monitoring plans', 'brand visibility pricing'],
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI brand monitoring',
      icon: Zap,
      features: [
        'Up to 5 brand mentions per day',
        'Basic sentiment analysis',
        'ChatGPT & Perplexity monitoring',
        'Email alerts',
        'Basic dashboard',
        '7-day data retention',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'primary'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive AI brand tracking',
      icon: Shield,
      features: [
        'Up to 50 brand mentions per day',
        'Advanced sentiment analysis',
        'All AI platforms (ChatGPT, Perplexity, Claude, Gemini)',
        'Real-time alerts',
        'Advanced analytics dashboard',
        'Historical data (90 days)',
        'API access',
        'Priority support',
        'Custom reports'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'primary'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex AI brand monitoring needs',
      icon: Crown,
      features: [
        'Unlimited brand mentions',
        'AI-powered insights & recommendations',
        'All AI platforms + custom integrations',
        'Custom alert rules',
        'White-label dashboard',
        'Unlimited historical data',
        'Dedicated account manager',
        'Custom reporting',
        'SLA guarantee',
        'On-premise deployment option'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'secondary'
    }
  ]

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What AI platforms do you monitor?',
      answer: 'We monitor ChatGPT, Perplexity, Claude, Google Gemini, and other major AI search platforms.'
    },
    {
      question: 'Do you offer custom integrations?',
      answer: 'Yes, Enterprise customers get custom integrations and API access. Contact us to discuss your needs.'
    },
    {
      question: 'How accurate is the sentiment analysis?',
      answer: 'Our AI-powered sentiment analysis achieves 95% accuracy, continuously improving with machine learning.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade security with SOC 2 compliance, encryption, and regular security audits.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Choose the plan that fits your business needs. All plans include a 14-day free trial. 
              No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
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
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                    plan.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                    }`} />
                  </div>
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
                      : plan.color === 'secondary'
                      ? 'bg-secondary-600 text-white hover:bg-secondary-700'
                      : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="inline h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              See how our plans stack up against each other
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
                  <tr>
                    <td className="px-6 py-4 text-sm text-primary-700">Brand mentions per day</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">5</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">50</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-primary-700">AI platforms</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">2</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">4+</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">All + Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-primary-700">Data retention</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">7 days</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">90 days</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-primary-700">API access</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">-</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-primary-700">Support</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">Email</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">Priority</td>
                    <td className="px-6 py-4 text-center text-sm text-primary-700">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-primary-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using Bisibility AI to optimize their AI search presence.
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
              href="/contact" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
