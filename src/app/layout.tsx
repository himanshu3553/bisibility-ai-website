import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Bisibility - AI Brand Visibility Analytics',
    template: '%s | Bisibility'
  },
  description: 'Track, analyze, and improve your brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini. Get insights on visibility, position, and sentiment.',
  keywords: ['AI search', 'brand visibility', 'ChatGPT analytics', 'Perplexity tracking', 'Claude monitoring', 'Gemini insights', 'brand performance', 'AI platforms'],
  authors: [{ name: 'Bisibility Team' }],
  creator: 'Bisibility',
  publisher: 'Bisibility',
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
  metadataBase: new URL('https://bisibility.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bisibility.com',
    title: 'Bisibility - AI Brand Visibility Analytics',
    description: 'Track, analyze, and improve your brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.',
    siteName: 'Bisibility',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisibility - AI Brand Visibility Analytics',
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
      <body className={`${inter.className} antialiased`}>
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