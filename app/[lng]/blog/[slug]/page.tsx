import React from 'react'
import Main from './Main'
import Hero from '../../../../components/Hero'

type PageProps = {
  params: {
    slug: string
  }
}

export default function Post({ params: { slug } }: PageProps) {
  console.log('in Slug: ' + slug)

  return (
    <>
      {/* @ts-ignore */}
      <Hero page='blog' />
      {/* @ts-ignore */}
      <Main slug={slug} />
    </>
  )
}
