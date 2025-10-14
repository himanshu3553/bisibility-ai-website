import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Use remark instead of marked
  const processor = remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
  
  const htmlContent = processor.processSync(content).toString()

  return (
    <div 
      className="markdown-content max-w-none
        [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-8 [&_h1]:mt-12 [&_h1]:tracking-tight
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-10 [&_h2]:tracking-tight
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:tracking-tight
        [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-gray-900 [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:tracking-tight
        [&_p]:text-gray-700 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6
        [&_a]:text-blue-600 [&_a]:no-underline hover:[&_a]:underline
        [&_strong]:text-gray-900 [&_strong]:font-semibold
        [&_code]:text-gray-800 [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
        [&_pre]:bg-gray-100 [&_pre]:text-gray-900 [&_pre]:rounded-lg [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-gray-200 [&_pre]:border-b-0
        [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:bg-gray-50 [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:italic
        [&_img]:rounded-lg [&_img]:shadow-lg [&_img]:my-8
        [&_ul]:my-6 [&_ol]:my-6
        [&_li]:my-2 [&_li]:text-gray-700 [&_li]:text-lg [&_li]:leading-relaxed
        [&_hr]:my-12 [&_hr]:border-gray-200
        [&_table]:my-8 [&_table]:border-collapse [&_table]:w-full
        [&_th]:bg-gray-50 [&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-900
        [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-3 [&_td]:text-gray-700
        [&_tr:hover]:bg-gray-50"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
