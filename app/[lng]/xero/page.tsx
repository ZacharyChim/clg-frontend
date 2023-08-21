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
  return await fetchMeta('xero', lng)
}

type PageProps = {
  params: {
    lng: string
  }
}

function xero({ params: { lng } }: PageProps) {
  return (
    <div className='bg-preIpoCurveLine bg-contain bg-[center_top_134rem] bg-no-repeat'>
      {/* @ts-ignore */}
      {/* <Hero page='xero' lng={lng} /> */}
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default xero
