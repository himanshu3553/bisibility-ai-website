import type { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Bisibility AI - Get Started with AI Brand Analytics',
  description: 'Contact Bisibility AI to start your free trial or learn more about our AI brand visibility analytics platform. Get in touch with our team today.',
  keywords: ['contact bisibility', 'AI brand analytics contact', 'get started', 'free trial', 'sales inquiry'],
}

export default function ContactPage() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@bisibilityai.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Bisibility AI Pvt. Ltd., Gurugram, India',
      description: 'Visit our headquarters'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Ready to start tracking your brand's AI visibility? Contact us today to begin your free trial 
              or learn more about how Bisibility AI can help your business succeed in the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Contact Information
              </h2>
              <p className="text-primary-700 mb-8">
                Prefer to reach out directly? Here are our contact details.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary-700 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-primary-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Quick Questions?
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Here are answers to some common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                How quickly can I get started?
              </h3>
              <p className="text-primary-700">
                You can start your free trial immediately after signing up. Setup takes less than 5 minutes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Do you offer custom solutions?
              </h3>
              <p className="text-primary-700">
                Yes! Our Enterprise plan includes custom integrations, white-label options, and dedicated support.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                What AI platforms do you monitor?
              </h3>
              <p className="text-primary-700">
                We monitor ChatGPT, Perplexity, Claude, Google Gemini, and other major AI search platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
