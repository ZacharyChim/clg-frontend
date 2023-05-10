import Image from 'next/image'
import React from 'react'
import { fetchSingle } from '../../lib/utils'

export default async function Hero() {
  const data = await fetchSingle('home-page')
  const heroIcon = data.HeroIcon.data.attributes
  const heroIconURL = process.env.NEXT_PUBLIC_STRAPI_URL + heroIcon.url
  const heroIconWidth = heroIcon.width
  const heroIconHeight = heroIcon.width

  const homeHero = data.HomeHero.data.attributes
  const homeHeroURL = process.env.NEXT_PUBLIC_STRAPI_URL + homeHero.url
  const homeHeroWidth = homeHero.width
  const homeHeroHeight = homeHero.width

  const mainSlogan = data.main_slogan
  const subSlogan = data.sub_slogan

  return (
    <section id='hero' className='bg-top bg-heroBg bg-cover bg-no-repeat'>
      <div className='container mx-auto flex max-w-5xl flex-col items-center py-12 md:flex-row   md:space-x-4'>
        <div className='mx-4 flex flex-col space-y-0 md:mt-20 md:w-1/3'>
          <div>
            <h1 className='my-4 text-center text-4xl font-bold text-darkBlue md:text-left md:text-4xl'>
              {mainSlogan}
            </h1>
            <h2 className='text-center text-4xl font-bold text-veryDarkBlue md:text-left md:text-4xl'>
              {subSlogan}
            </h2>
          </div>
          <div className='px-36 py-10 md:mt-10 md:px-0 md:pr-32 md:pt-32'>
            <Image
              src={heroIconURL}
              alt=''
              width={heroIconWidth}
              height={heroIconHeight}
            />
          </div>
        </div>

        <div className='md:w-2/3'>
          <Image
            src={homeHeroURL}
            alt=''
            width={homeHeroWidth}
            height={homeHeroHeight}
            className='md:mb-40'
          />
        </div>
      </div>
    </section>
  )
}
