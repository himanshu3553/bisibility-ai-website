import type { Metadata } from 'next'
import { Shield, Users, Database, Eye, Lock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GDPR Compliance - Bisibility AI Brand Analytics',
  description: 'Learn about Bisibility\'s GDPR compliance and how we protect your data rights under the General Data Protection Regulation.',
  keywords: ['GDPR compliance', 'data protection', 'privacy rights', 'EU data protection', 'Bisibility GDPR'],
}

export default function GDPRPage() {
  const rights = [
    {
      icon: Eye,
      title: 'Right of Access',
      description: 'You have the right to obtain confirmation as to whether or not personal data concerning you is being processed, and access to that data.'
    },
    {
      icon: Database,
      title: 'Right to Rectification',
      description: 'You have the right to have inaccurate personal data corrected and incomplete personal data completed.'
    },
    {
      icon: Lock,
      title: 'Right to Erasure',
      description: 'You have the right to request the deletion of your personal data under certain circumstances.'
    },
    {
      icon: Shield,
      title: 'Right to Restrict Processing',
      description: 'You have the right to request the restriction of processing of your personal data in certain situations.'
    },
    {
      icon: Users,
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, commonly used format and transmit it to another controller.'
    },
    {
      icon: CheckCircle,
      title: 'Right to Object',
      description: 'You have the right to object to the processing of your personal data for direct marketing purposes.'
    }
  ]

  const complianceMeasures = [
    'Data Protection Impact Assessments (DPIA) conducted for high-risk processing',
    'Privacy by Design and by Default principles implemented',
    'Regular staff training on data protection and GDPR requirements',
    'Data Processing Agreements (DPAs) with all third-party processors',
    'Appointment of a Data Protection Officer (DPO) for oversight',
    'Regular audits and compliance monitoring procedures',
    'Breach notification procedures with 72-hour reporting requirement',
    'Consent management system for lawful basis documentation'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              GDPR <span className="gradient-text">Compliance</span>
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Bisibility is committed to full compliance with the General Data Protection Regulation (GDPR). 
              Learn about your data rights and how we protect your personal information.
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
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Our GDPR Commitment</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect 
                on May 25, 2018, in the European Union. Bisibility is fully committed to complying with GDPR requirements 
                and protecting the privacy rights of all individuals whose personal data we process.
              </p>
              <p className="text-primary-700 leading-relaxed">
                This page outlines our GDPR compliance measures, your rights as a data subject, and how you can exercise 
                those rights when using our AI brand analytics platform.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-8">Your Data Protection Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {rights.map((right, index) => (
                  <div key={index} className="bg-primary-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 rounded-lg p-3 flex-shrink-0">
                        <right.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary-900 mb-3">
                          {right.title}
                        </h3>
                        <p className="text-primary-700 text-sm">
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lawful Basis */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Lawful Basis for Processing</h2>
              <div className="bg-primary-50 rounded-xl p-8">
                <p className="text-primary-700 leading-relaxed mb-6">
                  Under GDPR, we must have a lawful basis for processing your personal data. We process your data based on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Contract Performance</h3>
                    <p className="text-primary-700 text-sm">
                      Processing necessary for the performance of our service agreement with you, including account management, 
                      service delivery, and customer support.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Legitimate Interests</h3>
                    <p className="text-primary-700 text-sm">
                      Processing necessary for our legitimate business interests, such as service improvement, security, 
                      and fraud prevention, balanced against your privacy rights.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Consent</h3>
                    <p className="text-primary-700 text-sm">
                      Where you have given clear consent for specific processing activities, such as marketing communications 
                      and optional data collection.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Legal Obligation</h3>
                    <p className="text-primary-700 text-sm">
                      Processing necessary to comply with legal obligations, such as tax reporting, regulatory compliance, 
                      and law enforcement requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Measures */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Our Compliance Measures</h2>
              <div className="bg-primary-50 rounded-xl p-8">
                <p className="text-primary-700 leading-relaxed mb-6">
                  We have implemented comprehensive measures to ensure GDPR compliance:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {complianceMeasures.map((measure, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-700 text-sm">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Processing Details */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Data Processing Details</h2>
              <div className="space-y-8">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Data Controller</h3>
                  <p className="text-primary-700 leading-relaxed">
                    Bisibility Pvt. Ltd. is the data controller responsible for determining the purposes and means of processing 
                    your personal data. Our registered address is Gurugram, India.
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Data Protection Officer</h3>
                  <p className="text-primary-700 leading-relaxed mb-4">
                    We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance:
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-primary-700">
                      <strong>Email:</strong> dpo@bisibility.com
                    </p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Data Retention</h3>
                  <p className="text-primary-700 leading-relaxed">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                    comply with legal obligations, resolve disputes, and enforce our agreements. Typical retention periods 
                    range from the duration of your subscription plus 7 years for business records.
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">International Transfers</h3>
                  <p className="text-primary-700 leading-relaxed">
                    When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, including 
                    Standard Contractual Clauses (SCCs) approved by the European Commission, adequacy decisions, or other 
                    legally recognized transfer mechanisms.
                  </p>
                </div>
              </div>
            </div>

            {/* Exercising Your Rights */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">How to Exercise Your Rights</h2>
              <div className="bg-primary-50 rounded-xl p-8">
                <p className="text-primary-700 leading-relaxed mb-6">
                  To exercise any of your GDPR rights, please contact us using the information below. We will respond to your 
                  request within one month of receipt, or within two months for complex requests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Contact Methods</h3>
                    <div className="space-y-2">
                      <p className="text-primary-700">
                        <strong>Email:</strong> privacy@bisibility.com
                      </p>
                      <p className="text-primary-700">
                        <strong>DPO Email:</strong> dpo@bisibility.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Required Information</h3>
                    <p className="text-primary-700 text-sm">
                      Please include your full name, email address, and a clear description of the right you wish to exercise. 
                      We may need to verify your identity before processing your request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Complaints */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Right to Complain</h2>
              <div className="bg-primary-50 rounded-xl p-8">
                <p className="text-primary-700 leading-relaxed mb-4">
                  If you believe we have not handled your personal data in accordance with GDPR, you have the right to 
                  lodge a complaint with your local supervisory authority. However, we encourage you to contact us first 
                  so we can try to resolve any concerns directly.
                </p>
                <p className="text-primary-700 leading-relaxed">
                  You can find your local supervisory authority at: 
                  <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-primary-600 hover:text-primary-800 underline">
                    https://edpb.europa.eu/about-edpb/board/members_en
                  </a>
                </p>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Updates to This Information</h2>
              <p className="text-primary-700 leading-relaxed">
                We may update this GDPR information from time to time to reflect changes in our practices or applicable law. 
                We will notify you of any material changes by posting the updated information on this page and updating 
                the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
