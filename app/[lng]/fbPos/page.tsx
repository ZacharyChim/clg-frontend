import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return await fetchMeta('fb-pos')
}

type PageProps = {
  params: {
    lng: string
  }
}

function internalControl({ params: { lng } }: PageProps) {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_130rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='fb-pos' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default internalControl
