import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bisibility",
    "description": "AI Brand Visibility Analytics Platform - Track, analyze, and improve brand performance on AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.",
    "url": "https://bisibility.com",
    "logo": "https://bisibility.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@bisibility.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/bisibility",
      "https://linkedin.com/company/bisibility"
    ]
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bisibility",
    "description": "AI Brand Visibility Analytics Platform",
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
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI platforms does Bisibility monitor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bisibility monitors ChatGPT, Perplexity, Claude, Google Gemini, and other major AI search platforms to provide comprehensive brand visibility analytics."
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
      }
    ]
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
    </>
  )
}
