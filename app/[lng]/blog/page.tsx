import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return await fetchMeta('blog')
}

type PageProps = {
  params: {
    lng: string
  }
}

function Blog({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='blog' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default Blog
