import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

type PageProps = {
  params: {
    lng: string
  }
}

function internalControl({ params: { lng } }: PageProps) {
  return (
    <div className='bg-internalControlCurveLine bg-contain bg-[center_top_96rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='internal-control' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default internalControl
