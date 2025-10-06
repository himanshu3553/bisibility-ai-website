import type { Metadata } from 'next'
import { Shield, Eye, Lock, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Bisibility AI Brand Analytics',
  description: 'Learn how Bisibility protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, and protection.',
  keywords: ['privacy policy', 'data protection', 'Bisibility privacy', 'AI analytics privacy'],
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, company details)',
        'Brand monitoring data and analytics',
        'Usage patterns and interaction data',
        'Technical information (IP address, browser type)',
        'Communication records and support interactions'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'Provide AI brand monitoring and analytics services',
        'Improve our platform and develop new features',
        'Send important service updates and notifications',
        'Provide customer support and technical assistance',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Enterprise-grade encryption for data in transit and at rest',
        'SOC 2 Type II compliance and regular security audits',
        'Access controls and authentication mechanisms',
        'Regular security training for our team',
        'Incident response and breach notification procedures'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Access and download your personal data',
        'Correct inaccurate or incomplete information',
        'Request deletion of your personal data',
        'Opt-out of marketing communications',
        'Data portability and transfer rights'
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your information when you use Bisibility's AI brand analytics platform.
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
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Introduction</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                Bisibility ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                use our AI brand visibility analytics platform.
              </p>
              <p className="text-primary-700 leading-relaxed">
                By using our service, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our service.
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
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Data Sharing</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                  <li>With service providers who assist us in operating our platform</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Cookies and Tracking</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                  and improve our services. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Data Retention</h3>
                <p className="text-primary-700 leading-relaxed">
                  We retain your personal information only as long as necessary to provide our services and comply 
                  with legal obligations. Account data is typically retained for the duration of your subscription 
                  plus a reasonable period for business purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">International Transfers</h3>
                <p className="text-primary-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Children's Privacy</h3>
                <p className="text-primary-700 leading-relaxed">
                  Our service is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe your 
                  child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Changes to This Policy</h3>
                <p className="text-primary-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Contact Us</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-primary-50 rounded-lg p-6">
                  <p className="text-primary-700 mb-2">
                    <strong>Email:</strong> privacy@bisibility.com
                  </p>
                  <p className="text-primary-700">
                    <strong>Address:</strong> Bisibility AI Pvt. Ltd., Gurugram, India
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
