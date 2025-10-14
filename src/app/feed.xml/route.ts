import { getAllPosts } from '@/lib/blog'

export async function GET() {
  const posts = getAllPosts()
  const baseUrl = 'https://bisibilityai.com'

  const rssItems = posts.map((post) => {
    return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <description><![CDATA[${post.description}]]></description>
        <link>${baseUrl}/blog/${post.slug}</link>
        <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        <author><![CDATA[${post.author}]]></author>
        <category><![CDATA[${post.category}]]></category>
        ${post.tags ? post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('') : ''}
        <content:encoded><![CDATA[${post.content}]]></content:encoded>
        ${post.updatedAt ? `<lastBuildDate>${new Date(post.updatedAt).toUTCString()}</lastBuildDate>` : ''}
      </item>
    `
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>Bisibility AI Blog - AI Brand Monitoring & GEO Optimization</title>
        <description>Latest insights on AI brand monitoring, Generative Engine Optimization (GEO), and AI platform visibility strategies from Bisibility AI experts.</description>
        <link>${baseUrl}/blog</link>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
        <image>
          <url>${baseUrl}/bisibility-logo.svg</url>
          <title>Bisibility Blog</title>
          <link>${baseUrl}/blog</link>
        </image>
        ${rssItems}
      </channel>
    </rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
