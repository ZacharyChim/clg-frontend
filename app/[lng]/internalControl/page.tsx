import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function internalControl() {
  return (
    <div className='bg-internalControlCurveLine bg-contain bg-[center_top_96rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='internal-control' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default internalControl
