import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function hrm() {
  return (
    <div className='bg-preIpoCurveLine bg-no-repeat bg-[center_top_140rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='hrm' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default hrm
