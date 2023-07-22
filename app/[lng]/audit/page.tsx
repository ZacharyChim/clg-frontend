import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return await fetchMeta('audit')
}

type PageProps = {
  params: {
    lng: string
  }
}

function audit({ params: { lng } }: PageProps) {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_184rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='audit' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default audit
