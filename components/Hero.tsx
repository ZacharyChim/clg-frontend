import Image from 'next/image'
import React from 'react'
import { fetchSingleLang } from '../lib/utils'

type PageProps = {
  page: string
  lng: string
}

export default async function Hero(props: PageProps) {
  const data = await fetchSingleLang(props.page, props.lng)
  let lang = data

  const mainSlogan = lang.main_slogan

  const heroImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.hero_image.data.attributes.url
  const width = data.hero_image.data.attributes.width
  const height = data.hero_image.data.attributes.height

  return (
    <section id='hero' className='bg-top bg-heroBg bg-cover bg-no-repeat pb-20'>
      <div className='container mx-auto flex max-w-4xl flex-col items-center py-12 md:flex-row'>
        <div className='mx-4 flex flex-col space-y-0 md:mt-20 md:w-1/2'>
          <div>
            <h1 className='my-4 text-center text-4xl font-bold text-darkBlue md:text-center md:text-5xl'>
              {mainSlogan}
            </h1>
          </div>
        </div>

        <div className='ml-10 md:w-1/2 md:pt-32'>
          <Image
            src={heroImage}
            alt=''
            width={width}
            height={height}
            className='md:mb-32'
            quality='90'
          />
        </div>
      </div>
    </section>
  )
}
