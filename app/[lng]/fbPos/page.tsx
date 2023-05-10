import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function internalControl() {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_130rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='fb-pos' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default internalControl
