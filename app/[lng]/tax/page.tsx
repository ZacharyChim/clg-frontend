import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function tax() {
  return (
    <div className='bg-curveLine bg-contain bg-[center_top_66rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='tax' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default tax
