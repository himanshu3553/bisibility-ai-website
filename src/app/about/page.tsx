import type { Metadata } from 'next'
import { BarChart3, Target, Users, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Bisibility AI - AI Brand Visibility Analytics',
  description: 'Learn about Bisibility AI\'s mission to help businesses track and optimize their brand performance across AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.',
  keywords: ['about bisibility', 'AI brand analytics', 'company mission', 'team', 'AI search monitoring'],
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We provide accurate, real-time insights into your brand\'s AI search performance with industry-leading precision.'
    },
    {
      icon: BarChart3,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of the rapidly evolving AI search landscape and provide cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as partners, understanding their unique needs and providing tailored solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Insight',
      description: 'We transform complex AI search data into actionable insights that drive real business results.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              About <span className="gradient-text">Bisibility AI</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              We're on a mission to help businesses navigate the new era of AI-powered search. 
              As AI platforms like ChatGPT, Perplexity, Claude, and Gemini become the primary 
              way people discover information, brand visibility in AI search is more important than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-primary-700 mb-6 leading-relaxed">
                Traditional SEO is evolving. With AI search platforms becoming the go-to source 
                for information, businesses need new tools to track and optimize their brand 
                presence in this emerging landscape.
              </p>
              <p className="text-lg text-primary-700 mb-6 leading-relaxed">
                Bisibility AI bridges this gap by providing comprehensive analytics and insights 
                into how your brand performs across AI search platforms. We help you understand 
                your visibility, track sentiment, and optimize your content strategy for 
                maximum impact in the AI era.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  The AI Search Revolution
                </h3>
                <p className="text-primary-700">
                  Over 100 million people use AI search platforms monthly. Your brand needs 
                  to be visible where your customers are searching.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary-900 mb-2">2023</h4>
                  <p className="text-primary-700 text-sm">Founded with a vision to democratize AI brand analytics</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary-900 mb-2">2024</h4>
                  <p className="text-primary-700 text-sm">Launched comprehensive multi-platform monitoring</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary-900 mb-2">Today</h4>
                  <p className="text-primary-700 text-sm">Serving 500+ brands with AI search insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              These core values guide everything we do at Bisibility AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              We're a team of AI researchers, data scientists, and marketing experts 
              passionate about helping businesses succeed in the AI era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">AS</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-1">Alex Smith</h3>
              <p className="text-primary-600 mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-primary-700">
                Former Google AI researcher with 10+ years in machine learning and search technology.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">MJ</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-1">Maria Johnson</h3>
              <p className="text-primary-600 mb-2">CTO & Co-Founder</p>
              <p className="text-sm text-primary-700">
                Expert in natural language processing and AI platform integrations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">DK</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-1">David Kim</h3>
              <p className="text-primary-600 mb-2">Head of Product</p>
              <p className="text-sm text-primary-700">
                Former marketing analytics leader with deep expertise in brand measurement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join the AI Search Revolution?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Let's work together to optimize your brand's presence across AI search platforms.
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
