import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string }
}): Promise<Metadata> {
  return await fetchMeta('tax', lng)
}

type PageProps = {
  params: {
    lng: string
  }
}

function tax({ params: { lng } }: PageProps) {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_66rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='tax' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default tax
