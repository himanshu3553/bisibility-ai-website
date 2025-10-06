import Link from 'next/link'
import { ArrowRight, BarChart3, Zap } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 rounded-full p-3">
              <BarChart3 className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Boost Your AI Brand Visibility?
          </h2>
          
          <p className="text-xl text-primary-200 mb-8 leading-relaxed">
            Join hundreds of companies already using Bisibility to track, analyze, 
            and improve their brand performance across AI search platforms. 
            Start your free trial today and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors duration-200 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/features" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-200"
            >
              View Features
            </Link>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-3 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Setup in Minutes</h3>
              <p className="text-primary-200 text-sm">
                Get started with our AI brand monitoring in just a few clicks
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-3 mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Insights</h3>
              <p className="text-primary-200 text-sm">
                Monitor your brand performance across all AI platforms instantly
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-3 mb-4">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-primary-200 text-sm">
                Our customers see 40% improvement in AI brand visibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
