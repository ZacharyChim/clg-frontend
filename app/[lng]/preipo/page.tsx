import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function preipo() {
  return (
    <div className='bg-preIpoCurveLine bg-contain bg-[center_top_98rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='pre-ipo' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default preipo
