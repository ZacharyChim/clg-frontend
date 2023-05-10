import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function bud() {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_116rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='bud' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default bud
