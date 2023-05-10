import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function payroll() {
  return (
    <div className='bg-preIpoCurveLine bg-contain bg-[center_top_106rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='payroll' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default payroll
