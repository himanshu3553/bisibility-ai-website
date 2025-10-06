'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BarChart3, TrendingUp, Target } from 'lucide-react'

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
                Monitor and optimize your brand performance across AI search platforms 
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
            <div className="flex items-center space-x-8 pt-8">
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
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
              {/* Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary-900">Brand Performance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary-900">87%</div>
                    <div className="text-sm text-primary-600">Visibility Score</div>
                    <div className="text-xs text-green-600 mt-1">↗ +12% this month</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary-900">#3</div>
                    <div className="text-sm text-primary-600">Avg Position</div>
                    <div className="text-xs text-green-600 mt-1">↗ +2 positions</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-32 rounded-lg flex items-center justify-center">
                  <div className="text-primary-600 font-medium">Performance Trends</div>
                </div>

                {/* Platform Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-700">ChatGPT</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-primary-200 rounded-full">
                        <div className="w-16 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-primary-900">80%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-700">Perplexity</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-primary-200 rounded-full">
                        <div className="w-14 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-primary-900">70%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-700">Claude</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-primary-200 rounded-full">
                        <div className="w-18 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-primary-900">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-primary-100">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-primary-100">
              <Target className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
