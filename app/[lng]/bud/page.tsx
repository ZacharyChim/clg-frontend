import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return await fetchMeta('bud')
}

type PageProps = {
  params: {
    lng: string
  }
}

function bud({ params: { lng } }: PageProps) {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_116rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='bud' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default bud
