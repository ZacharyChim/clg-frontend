import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return await fetchMeta('secretary')
}

type PageProps = {
  params: {
    lng: string
  }
}

function secretary({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='secretary' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default secretary
