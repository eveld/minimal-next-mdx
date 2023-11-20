import remarkGfm from 'remark-gfm'
import { mdxAnnotations } from 'mdx-annotations'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [mdxAnnotations.remark, remarkGfm],
    rehypePlugins: [],
  },
})
 
export default withMDX(nextConfig)