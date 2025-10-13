# Blog System - Markdown Support

This blog system now supports Markdown format for easy content creation and management.

## Adding New Blog Posts

### 1. Create a Markdown File

Create a new `.md` file in the `src/content/blog/` directory with the following naming convention:
- Use kebab-case for the filename
- Example: `my-new-blog-post.md`

### 2. Add Frontmatter

Each blog post must start with frontmatter (YAML metadata) between `---` markers:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your blog post for previews and SEO"
author: "Author Name"
date: "2024-01-15"
readTime: "5 min read"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
image: "optional-image-url"
---

# Your Blog Post Content

Your markdown content goes here...
```

### 3. Write Content in Markdown

Use standard Markdown syntax for your content:

- **Headers**: `#`, `##`, `###`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Links**: `[text](url)`
- **Lists**: `- item` or `1. item`
- **Code**: `` `code` `` or ``` code blocks ```
- **Tables**: Standard markdown table syntax
- **Blockquotes**: `> quote`

### 4. Available Categories

- `GEO` - Generative Engine Optimization
- `Brand Monitoring` - AI Brand Monitoring
- `ChatGPT` - ChatGPT-specific content
- `Perplexity` - Perplexity AI content
- `Analytics` - Analytics and metrics
- `Best Practices` - Best practices and guides

### 5. File Structure

```
src/content/blog/
├── what-is-generative-engine-optimization.md
├── ai-brand-monitoring-best-practices.md
├── chatgpt-brand-visibility-guide.md
├── perplexity-ai-search-optimization.md
└── ai-search-analytics-metrics.md
```

## Features

- **Automatic Processing**: Blog posts are automatically processed and rendered
- **SEO Optimized**: Each post gets proper meta tags and structured data
- **Responsive Design**: Content is optimized for all device sizes
- **Syntax Highlighting**: Code blocks are properly highlighted
- **Table Support**: Markdown tables are rendered with proper styling
- **Link Handling**: External links open in new tabs
- **Image Support**: Images can be added via frontmatter or markdown

## Technical Details

- **Markdown Processing**: Uses `remark` and `remark-html` for processing
- **Frontmatter**: Uses `gray-matter` for metadata extraction
- **Styling**: Tailwind CSS classes are applied automatically
- **TypeScript**: Fully typed for better development experience

## Installation

Make sure to install the required dependencies:

```bash
npm install gray-matter remark remark-html remark-gfm rehype-highlight
```

## Usage

The blog system automatically:
- Reads all `.md` files from `src/content/blog/`
- Processes frontmatter and content
- Generates blog listing and individual post pages
- Updates sitemap with new posts
- Provides SEO metadata

## Example Blog Post

```markdown
---
title: "Getting Started with AI Brand Monitoring"
excerpt: "Learn the basics of monitoring your brand across AI platforms"
author: "Bisibility AI Team"
date: "2024-01-20"
readTime: "6 min read"
category: "Brand Monitoring"
tags: ["AI", "Brand Monitoring", "Getting Started"]
---

# Getting Started with AI Brand Monitoring

AI brand monitoring is essential for modern businesses...

## Why It Matters

Traditional SEO monitoring focuses on search engines...

### Key Benefits

- Real-time monitoring
- Sentiment analysis
- Competitive intelligence
```

This system makes it easy to create and manage blog content while maintaining consistency and SEO optimization.
