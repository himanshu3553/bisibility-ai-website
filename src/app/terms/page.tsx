import type { Metadata } from 'next'
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Bisibility AI Brand Analytics',
  description: 'Read Bisibility\'s Terms of Service to understand your rights and responsibilities when using our AI brand analytics platform.',
  keywords: ['terms of service', 'terms and conditions', 'Bisibility terms', 'AI analytics terms'],
}

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using Bisibility, you agree to be bound by these Terms of Service',
        'If you disagree with any part of these terms, you may not access the service',
        'These terms apply to all visitors, users, and others who access or use the service',
        'We reserve the right to update these terms at any time without prior notice'
      ]
    },
    {
      icon: Scale,
      title: 'Use License',
      content: [
        'Permission is granted to temporarily use Bisibility for personal and commercial purposes',
        'You may not modify or copy the materials for any commercial purpose',
        'You may not attempt to reverse engineer or extract source code',
        'This license shall automatically terminate if you violate any of these restrictions'
      ]
    },
    {
      icon: Shield,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information when creating an account',
        'Maintain the security of your account credentials',
        'Use the service in compliance with applicable laws and regulations',
        'Respect intellectual property rights and not infringe on others\' rights'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Uses',
      content: [
        'Using the service for any unlawful purpose or to solicit others to perform unlawful acts',
        'Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances',
        'Transmitting or procuring the sending of any advertising or promotional material',
        'Impersonating or attempting to impersonate another person or entity'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              These Terms of Service govern your use of Bisibility's AI brand analytics platform. 
              Please read these terms carefully before using our service.
            </p>
            <p className="text-sm text-primary-600 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Agreement to Terms</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Bisibility Inc. 
                ("Company," "we," "our," or "us") regarding your use of our AI brand visibility analytics platform 
                and related services (collectively, the "Service").
              </p>
              <p className="text-primary-700 leading-relaxed">
                By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, 
                you may not access or use the Service.
              </p>
            </div>

            {/* Key Sections */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="bg-primary-50 rounded-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 rounded-lg p-3 flex-shrink-0">
                      <section.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary-900 mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-primary-700 flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="mt-16 space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Service Description</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Bisibility provides AI brand visibility analytics services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                  <li>Real-time monitoring of brand mentions across AI platforms</li>
                  <li>Sentiment analysis and trend identification</li>
                  <li>Position tracking and ranking analytics</li>
                  <li>Custom reporting and data visualization</li>
                  <li>API access and integration capabilities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Account Registration</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  To access certain features of the Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Payment Terms</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Subscription fees are billed in advance on a monthly or annual basis. You agree to:
                </p>
                <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                  <li>Pay all fees associated with your subscription</li>
                  <li>Provide accurate billing information</li>
                  <li>Authorize us to charge your payment method</li>
                  <li>Understand that fees are non-refundable except as required by law</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Intellectual Property</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by Bisibility Inc. 
                  and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws. You may not:
                </p>
                <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                  <li>Copy, modify, or create derivative works of the Service</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Remove or alter any proprietary notices</li>
                  <li>Use our trademarks without written permission</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Privacy Policy</h3>
                <p className="text-primary-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                  of the Service, to understand our practices regarding the collection and use of your information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Service Availability</h3>
                <p className="text-primary-700 leading-relaxed">
                  We strive to maintain high service availability but do not guarantee uninterrupted access. 
                  We may temporarily suspend the Service for maintenance, updates, or other operational reasons. 
                  We are not liable for any downtime or service interruptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Limitation of Liability</h3>
                <p className="text-primary-700 leading-relaxed">
                  In no event shall Bisibility Inc., its directors, employees, partners, agents, suppliers, or affiliates 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use 
                  of the Service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Termination</h3>
                <p className="text-primary-700 leading-relaxed">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice 
                  or liability, for any reason whatsoever, including without limitation if you breach the Terms. 
                  Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Governing Law</h3>
                <p className="text-primary-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. 
                  Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction 
                  of the courts in Gurugram, India.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Changes to Terms</h3>
                <p className="text-primary-700 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                  we will try to provide at least 30 days notice prior to any new terms taking effect. Your continued 
                  use of the Service after any such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Contact Information</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-primary-50 rounded-lg p-6">
                  <p className="text-primary-700 mb-2">
                    <strong>Email:</strong> legal@bisibility.com
                  </p>
                  <p className="text-primary-700">
                    <strong>Address:</strong> Bisibility Pvt. Ltd., Gurugram, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
