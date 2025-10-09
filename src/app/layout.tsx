import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'Bisibility AI - AI Brand Visibility Analytics',
    template: '%s | Bisibility AI'
  },
  description: 'Track, analyze, and improve your brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini. Get insights on visibility, position, and sentiment.',
  keywords: ['AI search', 'brand visibility', 'ChatGPT analytics', 'Perplexity tracking', 'Claude monitoring', 'Gemini insights', 'brand performance', 'AI platforms'],
  authors: [{ name: 'Bisibility AI Team' }],
  creator: 'Bisibility AI',
  publisher: 'Bisibility AI',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bisibilityai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bisibilityai.com',
    title: 'Bisibility AI - AI Brand Visibility Analytics',
    description: 'Track, analyze, and improve your brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.',
    siteName: 'Bisibility AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisibility AI - AI Brand Visibility Analytics',
    description: 'Track, analyze, and improve your brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.',
    creator: '@bisibility',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <StructuredData />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}