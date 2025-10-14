'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BarChart3 } from 'lucide-react'

const platforms = ['ChatGPT', 'Perplexity', 'Claude', 'Gemini']

export default function HeroSection() {
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPlatformIndex((prevIndex) => (prevIndex + 1) % platforms.length)
        setTimeout(() => {
          setIsAnimating(false)
        }, 50) // Small delay to ensure smooth transition
      }, 300) // Half of the transition duration
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-900">
                <div className="leading-none mb-2">Track Your Brand's</div>
                <div className="leading-none mb-2">Visibility in</div>
                <div className="leading-none">
                  <span 
                    className={`inline-flex items-center transition-all duration-500 ease-in-out text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                      isAnimating ? 'opacity-0 transform translate-y-4 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
                    }`}
                  >
                    {platforms[currentPlatformIndex] === 'ChatGPT' && (
                      <div className="mr-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Image
                          src="/ChatGPT.png"
                          alt="ChatGPT Logo"
                          width={32}
                          height={32}
                          className="brightness-0 invert"
                        />
                      </div>
                    )}
                    {platforms[currentPlatformIndex] === 'Perplexity' && (
                      <div className="mr-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Image
                          src="/perplexity.webp"
                          alt="Perplexity Logo"
                          width={32}
                          height={32}
                          className="brightness-0 invert"
                        />
                      </div>
                    )}
                    {platforms[currentPlatformIndex] === 'Claude' && (
                      <div className="mr-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Image
                          src="/claude.png"
                          alt="Claude Logo"
                          width={32}
                          height={32}
                          className="brightness-0 invert"
                        />
                      </div>
                    )}
                    {platforms[currentPlatformIndex] === 'Gemini' && (
                      <div className="mr-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Image
                          src="/gemini.png"
                          alt="Gemini Logo"
                          width={32}
                          height={32}
                          className="brightness-0 invert"
                        />
                      </div>
                    )}
                    {platforms[currentPlatformIndex]}
                  </span>
                </div>
              </h1>
              <p className="text-xl text-primary-700 leading-relaxed">
                Monitor and optimize your brand visibility across AI search platforms 
                like ChatGPT, Perplexity, Claude and Gemini. Get actionable insights 
                on visibility, position, and sentiment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/features" className="btn-outline text-lg px-8 py-4">
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary-600" />
                <span className="text-sm text-primary-600 font-medium">Real-time Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary-600" />
                <span className="text-sm text-primary-600 font-medium">AI-Powered Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary-600" />
                <span className="text-sm text-primary-600 font-medium">Multi-Platform Tracking</span>
              </div>
            </div> */}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-full">
              <Image
                src="/bisibility-ai.png"
                alt="Bisibility AI Platform"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
