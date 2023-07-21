import React from 'react'
import Hero from '../../../components/Hero'
import { fetchSingleLang } from '../../../lib/utils'
import Main from './Main'

type PageProps = {
  params: {
    lng: string
  }
}

async function contact({ params: { lng } }: PageProps) {
  const contactText = await fetchSingleLang('contact', lng)

  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='contact' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} contactText={contactText} />
    </div>
  )
}

export default contact
