'use client'

import { useEffect, useState } from 'react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    const processMarkdown = async () => {
      try {
        const processedContent = await remark()
          .use(remarkGfm)
          .use(remarkHtml, { sanitize: false })
          .process(content)
        
        setHtmlContent(processedContent.toString())
      } catch (error) {
        console.error('Error processing markdown:', error)
        // Fallback to simple processing
        setHtmlContent(content)
      }
    }

    processMarkdown()
  }, [content])

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
