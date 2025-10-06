import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      content: 'Bisibility AI has revolutionized how we track our brand presence in AI search. The insights are incredibly detailed and actionable.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'InnovateLab',
      content: 'The real-time monitoring across all AI platforms is game-changing. We can now optimize our content strategy based on actual AI responses.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Brand Manager',
      company: 'GrowthCorp',
      content: 'The sentiment analysis feature helps us understand how AI platforms perceive our brand. It\'s been invaluable for our reputation management.',
      rating: 5,
      avatar: 'EW'
    },
    {
      name: 'David Kim',
      role: 'Head of Digital',
      company: 'FutureBrand',
      content: 'Bisibility AI\'s dashboard gives us complete visibility into our AI search performance. The historical tracking shows our improvement over time.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'CMO',
      company: 'NextGen Solutions',
      content: 'The multi-platform monitoring saves us hours of manual tracking. We can now focus on strategy instead of data collection.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'AI Ventures',
      content: 'As an AI-focused company, we needed a tool that understands the nuances of AI search. Bisibility AI delivers exactly what we need.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Join hundreds of companies already using Bisibility AI to optimize their AI search presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-50 rounded-xl p-6 relative">
              <Quote className="h-8 w-8 text-primary-300 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-primary-800 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-primary-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-primary-400">TechFlow</div>
            <div className="text-2xl font-bold text-primary-400">InnovateLab</div>
            <div className="text-2xl font-bold text-primary-400">GrowthCorp</div>
            <div className="text-2xl font-bold text-primary-400">FutureBrand</div>
            <div className="text-2xl font-bold text-primary-400">NextGen</div>
            <div className="text-2xl font-bold text-primary-400">AI Ventures</div>
          </div>
        </div>
      </div>
    </section>
  )
}
