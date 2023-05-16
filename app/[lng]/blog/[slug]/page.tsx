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
  const posts = await fetchCollection('posts')

  posts.map((item: any) => {
    params.push({ lng: 'en', slug: item.attributes.slug as string })
  })

  posts.map((item: any) => {
    params.push({ lng: 'hk', slug: item.attributes.slug as string })
  })

  return params
}

export default function Post({ params }: PageProps) {
  const { lng, slug } = params

  return (
    <>
      {/* @ts-ignore */}
      <Hero page='blog' />
      {/* @ts-ignore */}
      <Main lng={lng} slug={slug} />
    </>
  )
}
