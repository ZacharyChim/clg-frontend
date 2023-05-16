'use client'
import Image from 'next/image'
import React from 'react'
import backToTop from '../../public/backToTop.png'

export default function BackToTop() {
  const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

  function scrollToTop(): void {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='mt-10 flex flex-col items-center'>
      <button className='inline-block' onClick={scrollToTop}>
        <Image src={backToTop} alt='' width='50' height='50' quality='90' />
      </button>
    </div>
  )
}
