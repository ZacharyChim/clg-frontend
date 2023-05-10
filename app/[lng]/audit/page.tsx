import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function audit() {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_184rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='audit' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default audit
