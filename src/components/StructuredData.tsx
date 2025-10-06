import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bisibility AI Pvt. Ltd.",
    "alternateName": "Bisibility AI",
    "description": "AI Brand Visibility Analytics Platform - Track, analyze, and improve brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.",
    "url": "https://bisibility.ai",
    "logo": "https://bisibility.ai/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@bisibility.ai"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/bisibility",
      "https://linkedin.com/company/bisibility"
    ],
    "foundingDate": "2023",
    "industry": "Artificial Intelligence",
    "keywords": ["AI search analytics", "brand visibility", "ChatGPT monitoring", "Perplexity tracking", "Claude analytics", "Gemini insights"]
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bisibility AI Brand Analytics",
    "description": "AI Brand Visibility Analytics Platform for tracking brand performance across AI search platforms",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "29",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "featureList": [
      "Real-time AI search monitoring",
      "Multi-platform analytics (ChatGPT, Perplexity, Claude, Gemini)",
      "Sentiment analysis",
      "Position tracking",
      "Brand protection alerts",
      "AI-powered insights"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI platforms does Bisibility AI monitor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bisibility AI monitors ChatGPT, Perplexity, Claude, Google Gemini, and other major AI search platforms to provide comprehensive brand visibility analytics."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the sentiment analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI-powered sentiment analysis achieves 95% accuracy, continuously improving with machine learning algorithms."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All plans include a 14-day free trial with full access to features. No credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "What is AI brand visibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI brand visibility refers to how often and how prominently your brand appears in AI search results across platforms like ChatGPT, Perplexity, Claude, and Gemini."
        }
      },
      {
        "@type": "Question",
        "name": "How does Bisibility AI track brand mentions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bisibility AI uses advanced AI algorithms to monitor and analyze brand mentions across AI search platforms, providing real-time insights on visibility, sentiment, and position."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bisibility.ai"
      }
    ]
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bisibility AI",
    "url": "https://bisibility.ai",
    "description": "AI Brand Visibility Analytics Platform",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bisibility.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  )
}
