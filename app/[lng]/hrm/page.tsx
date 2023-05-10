import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function hrm() {
  return (
    <div className='bg-preIpoCurveLine bg-contain bg-[center_top_140rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='hrm' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default hrm
