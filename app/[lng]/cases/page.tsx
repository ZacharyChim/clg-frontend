import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

type PageProps = {
  params: {
    lng: string
  }
}


function caseStudies({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='case-study' />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default caseStudies
