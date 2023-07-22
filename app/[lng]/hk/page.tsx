import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

type PageProps = {
  params: {
    lng: string
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return await fetchMeta('hk')
}

function hk({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='hk' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default hk
