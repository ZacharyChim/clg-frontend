import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

type PageProps = {
  params: {
    lng: string
  }
}

function england({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='england' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default england
