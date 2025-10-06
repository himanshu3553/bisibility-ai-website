'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary-900 mb-6">
        Send us a message
      </h2>
      <p className="text-primary-700 mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Thank you for your message!
          </h3>
          <p className="text-green-700">
            We'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-primary-900 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="plan" className="block text-sm font-semibold text-primary-900 mb-2">
                Plan Interest
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a plan</option>
                <option value="starter">Starter ($29/month)</option>
                <option value="professional">Professional ($99/month)</option>
                <option value="enterprise">Enterprise (Custom)</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Tell us about your needs and how we can help..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center"
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      )}
    </div>
  )
}
