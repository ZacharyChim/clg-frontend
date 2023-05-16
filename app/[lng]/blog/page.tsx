import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

type PageProps = {
  params: {
    lng: string
  }
}

function Blog({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='blog' />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default Blog
