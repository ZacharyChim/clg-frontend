import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function secretary() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='secretary' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default secretary
