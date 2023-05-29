import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Contact from '../../../components/Contact'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const internalControl = await fetchSingle('internal-control')

  let internalControlText

  lng === 'en'
    ? (internalControlText = internalControl)
    : (internalControlText = internalControl.localizations.data[0].attributes)

  const advisory =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    internalControl.advisory.data.attributes.url
  const advisoryWidth = internalControl.advisory.data.attributes.width
  const advisoryHeight = internalControl.advisory.data.attributes.height

  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    internalControl.about_image.data.attributes.url
  const aboutWidth = internalControl.about_image.data.attributes.width
  const aboutHeight = internalControl.about_image.data.attributes.height

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    internalControl.image1.data.attributes.url
  const image1Width = internalControl.image1.data.attributes.width
  const image1Height = internalControl.image1.data.attributes.height
  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    internalControl.image2.data.attributes.url
  const image2Width = internalControl.image2.data.attributes.width
  const image2Height = internalControl.image2.data.attributes.height
  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    internalControl.image3.data.attributes.url
  const image3Width = internalControl.image3.data.attributes.width
  const image3Height = internalControl.image3.data.attributes.height
  const image4 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    internalControl.image4.data.attributes.url
  const image4Width = internalControl.image4.data.attributes.width
  const image4Height = internalControl.image4.data.attributes.height

  if (lng === 'en') {
    var number1 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number1.data.attributes.url
    var number1Width = internalControl.number1.data.attributes.width
    var number1Height = internalControl.number1.data.attributes.height
    var number2 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number2.data.attributes.url
    var number2Width = internalControl.number2.data.attributes.width
    var number2Height = internalControl.number2.data.attributes.height
    var number3 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number3.data.attributes.url
    var number3Width = internalControl.number3.data.attributes.width
    var number3Height = internalControl.number3.data.attributes.height
    var number4 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number4.data.attributes.url
    var number4Width = internalControl.number4.data.attributes.width
    var number4Height = internalControl.number4.data.attributes.height
  } else {
    var number1 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number1_hk.data.attributes.url
    var number1Width = internalControl.number1_hk.data.attributes.width
    var number1Height = internalControl.number1_hk.data.attributes.height
    var number2 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number2_hk.data.attributes.url
    var number2Width = internalControl.number2_hk.data.attributes.width
    var number2Height = internalControl.number2_hk.data.attributes.height
    var number3 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number3_hk.data.attributes.url
    var number3Width = internalControl.number3_hk.data.attributes.width
    var number3Height = internalControl.number3_hk.data.attributes.height
    var number4 =
      process.env.NEXT_PUBLIC_STRAPI_URL +
      internalControl.number4_hk.data.attributes.url
    var number4Width = internalControl.number4_hk.data.attributes.width
    var number4Height = internalControl.number4_hk.data.attributes.height
  }
  const aboutTitle = internalControlText.about_title
  const aboutText = richTextReducer(internalControlText.about_text)
  const contactUs = internalControlText.contact_us

  const title = internalControlText.title

  return (
    <section id='case' className='mx-auto flex max-w-5xl flex-col items-center'>
      <div className='mx-auto pt-20 text-center'>
        <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
          <div className='text-left md:w-1/2'>
            <Image
              alt=''
              src={advisory}
              width={advisoryWidth}
              height={advisoryHeight}
              className='object-fit'
              quality='100'
            />
            <h2 className='mb-6 mt-4 text-3xl font-bold text-darkBlue'>
              {aboutTitle}
            </h2>
            <article
              className='space-y-4 leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: aboutText }}
            ></article>
          </div>
          <div className='m-16 md:w-1/2'>
            <Image
              alt=''
              src={aboutImage}
              width={aboutWidth}
              height={aboutHeight}
            />
          </div>
        </div>
      </div>

      <h3 className='mb-4 text-center text-4xl font-bold text-darkBlue'>
        {title}
      </h3>

      <div className='mx-auto pt-20 text-center'>
        <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image1}
              width={image1Width}
              height={image1Height}
            />
          </div>
          <div className='m-16 text-left md:w-1/2'>
            <Image
              alt=''
              src={number1}
              width={number1Width}
              height={number1Height}
              className='object-fit'
              quality='100'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-8 px-5 pb-20 md:flex-row'>
        <div className='m-16 text-left md:w-1/2'>
          <Image
            alt=''
            src={number2}
            width={number2Width}
            height={number2Height}
            className='object-fit'
            quality='100'
          />
        </div>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image2}
            width={image2Width}
            height={image2Height}
          />
        </div>
      </div>

      <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image3}
            width={image3Width}
            height={image3Height}
          />
        </div>
        <div className='m-16 text-left md:w-1/2'>
          <Image
            alt=''
            src={number3}
            width={number3Width}
            height={number3Height}
            className='object-fit'
            quality='100'
          />
        </div>
      </div>

      <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
        <div className='m-16 text-left md:w-1/2'>
          <Image
            alt=''
            src={number4}
            width={number4Width}
            height={number4Height}
            className='object-fit'
            quality='100'
          />
        </div>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image4}
            width={image4Width}
            height={image4Height}
          />
        </div>
      </div>

      <Contact contactUs={contactUs} lng={lng} />
    </section>
  )
}
