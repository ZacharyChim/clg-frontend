import React from 'react'
import Main from './Main'
import Hero from '../../../../components/Hero'
import { fetchAllCollection } from '../../../../lib/utils'
import type { Metadata } from 'next'

type PageProps = {
  params: {
    slug: string
    lng: string
  }
}

export async function generateStaticParams() {
  let params: {}[] = []

  let language
  const posts = await fetchAllCollection('posts')

  posts.map((item: any) => {
    params.push({ lng: 'en', slug: item.attributes.slug as string })
  })

  posts.map((item: any) => {
    params.push({ lng: 'hk', slug: item.attributes.slug as string })
  })

  posts.map((item: any) => {
    params.push({ lng: 'cn', slug: item.attributes.slug as string })
  })

  return params
}

const fetchPostMeta = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts/${slug}`
  )

  const resData = await res.json()
  return {
    title: resData.data.attributes.meta_title,
    description: resData.data.attributes.meta_description,
    keywords: resData.data.attributes.meta_keywords,
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params
  return await fetchPostMeta(slug)
}

export default function Post({ params }: PageProps) {
  const { lng, slug } = params

  return (
    <>
      {/* @ts-ignore */}
      <Hero page='blog' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} slug={slug} />
    </>
  )
}
