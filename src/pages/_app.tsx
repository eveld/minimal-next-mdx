import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'

import '@/styles/tailwind.css'

import * as mdxComponents from '@/components/mdx'

const components: MDXComponents = {
  h1: ({children}) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
  ...mdxComponents,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}