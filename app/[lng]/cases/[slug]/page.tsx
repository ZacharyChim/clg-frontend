import React from 'react'
import Main from './Main'
import Hero from '../../../../components/Hero'
import { fetchCollection } from '../../../../lib/utils'

type PageProps = {
  params: {
    slug: string
    lng: string
  }
}

export async function generateStaticParams() {
  let params: {}[] = []
  const cases = await fetchCollection('cases')

  cases.map((item: any) => {
    params.push({ lng: 'en', slug: item.attributes.slug as string })
  })

  cases.map((item: any) => {
    params.push({ lng: 'hk', slug: item.attributes.slug as string })
  })

  return params
}

export default function caseDetail({ params }: PageProps) {
  const { lng, slug } = params

  return (
    <>
      {/* @ts-ignore */}
      <Hero page='case-study' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} slug={slug} />
    </>
  )
}
