import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

type PageProps = {
  params: {
    lng: string
  }
}

function accounting({ params: { lng } }: PageProps) {
  return (
    <div className='bg-preIpoCurveLine bg-contain bg-[center_top_110rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='accounting' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default accounting
