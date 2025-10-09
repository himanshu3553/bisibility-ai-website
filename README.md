# Bisibility AI - AI Brand Visibility Analytics

Bisibility AI is a comprehensive AI brand visibility analytics platform that helps businesses track, analyze, and improve their brand performance across AI search platforms like ChatGPT, Perplexity, Claude, and Gemini.

## Features

- **Real-time Analytics**: Monitor brand mentions across AI platforms with live updates
- **Multi-Platform Monitoring**: Track performance across ChatGPT, Perplexity, Claude, Gemini, and more
- **Sentiment Analysis**: AI-powered sentiment scoring and trend analysis
- **Position Tracking**: Monitor brand ranking in AI responses
- **Brand Protection**: Instant alerts for negative mentions and reputation risks
- **AI-Powered Insights**: Actionable recommendations for optimization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/bisibility.git
cd bisibility
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── features/          # Features page
│   ├── pricing/          # Pricing page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # Robots.txt
│   └── sitemap.ts        # Sitemap
├── components/           # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Homepage hero
│   ├── FeaturesSection.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── StatsSection.tsx
│   └── StructuredData.tsx # SEO structured data
└── types/                # TypeScript type definitions
```

## SEO Features

- **Metadata**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD schema markup for better search visibility
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

## Color Scheme

- **Primary**: #171717 (Black shade)
- **Secondary**: Complementary colors derived from primary
- **Accent**: Various shades for UI elements

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization

### Branding
- Update the logo in `src/components/Header.tsx`
- Modify colors in `tailwind.config.js`
- Update company information in `src/components/StructuredData.tsx`

### Content
- Edit page content in respective page files
- Update pricing in `src/app/pricing/page.tsx`
- Modify features in `src/app/features/page.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email hello@bisibilityai.com or visit our contact page.

## Roadmap

- [ ] User authentication and dashboard
- [ ] Real-time API integrations
- [ ] Advanced analytics features
- [ ] Mobile app
- [ ] Enterprise features