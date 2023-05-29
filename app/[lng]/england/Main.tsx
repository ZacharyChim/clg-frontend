import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import Contact from '../../../components/Contact'
import Countries from '../../../components/Countries'
import curve from '/public/small-curve.png'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const england = await fetchSingle('England')
  let englandText

  lng === 'en'
    ? (englandText = england)
    : (englandText = england.localizations.data[0].attributes)
  let langEngland
  lng === 'en' ? (langEngland = 'england') : (langEngland = '英國')
  const curveWidth = 33
  const curveHeight = 10
  const benefitTitle = englandText.benefit_title

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.incorporation.data.attributes.url
  const incorporationWidth = england.incorporation.data.attributes.width
  const incorporationHeight = england.incorporation.data.attributes.height

  const benefit1Title = englandText.benefit1_title
  const benefit1Content = englandText.benefit1_content
  const benefit1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit1_image.data.attributes.url
  const benefit1ImageWidth = england.benefit1_image.data.attributes.width
  const benefit1ImageHeight = england.benefit1_image.data.attributes.height

  const benefit2Title = englandText.benefit2_title
  const benefit2Content = englandText.benefit2_content
  const benefit2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit2_image.data.attributes.url
  const benefit2ImageWidth = england.benefit2_image.data.attributes.width
  const benefit2ImageHeight = england.benefit2_image.data.attributes.height

  const benefit3Title = englandText.benefit3_title
  const benefit3Content = englandText.benefit3_content
  const benefit3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit3_image.data.attributes.url
  const benefit3ImageWidth = england.benefit3_image.data.attributes.width
  const benefit3ImageHeight = england.benefit3_image.data.attributes.height

  const benefit4Title = englandText.benefit4_title
  const benefit4Content = englandText.benefit4_content
  const benefit4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit4_image.data.attributes.url
  const benefit4ImageWidth = england.benefit4_image.data.attributes.width
  const benefit4ImageHeight = england.benefit4_image.data.attributes.height

  const benefit5Title = englandText.benefit5_title
  const benefit5Content = englandText.benefit5_content
  const benefit5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit5_image.data.attributes.url
  const benefit5ImageWidth = england.benefit5_image.data.attributes.width
  const benefit5ImageHeight = england.benefit5_image.data.attributes.height

  const article1Title = englandText.article1_title
  const article1Text = richTextReducer(englandText.article1_text)

  const article2Title = englandText.article2_title
  const article2Text = richTextReducer(englandText.article2_text)

  const article3Title = englandText.article3_title
  const article3Text = richTextReducer(englandText.article3_text)

  const article4Title = englandText.article4_title
  const article4Text = richTextReducer(englandText.article4_text)

  const article5Title = englandText.article5_title
  const article5Text = richTextReducer(englandText.article5_text)

  const contactUs = englandText.contact_us

  return (
    <>
      <section className='mx-auto mt-10 mb-10 flex max-w-5xl flex-col md:flex-row'>
        {/* @ts-expect-error Server Component */}
        <Countries country={langEngland} lng={lng} />
        <div className='mx-10 md:w-4/5'>
          <Image
            alt=''
            src={incorporation}
            width={incorporationWidth}
            height={incorporationHeight}
            quality='100'
          />
          <h3 className='mb-6 mt-4 text-2xl font-bold text-darkBlue'>
            {benefitTitle}
          </h3>
          <div className='grid grid-cols-1 flex-wrap gap-8 leading-8 md:grid-cols-2 md:gap-8'>
            <div className='flex flex-col items-center rounded-md border-4 border-veryLightBlue px-6 pt-10 pb-6'>
              <Image
                alt=''
                src={benefit1Image}
                width={benefit1ImageWidth}
                height={benefit1ImageHeight}
                quality='100'
              />

              <h4 className='mb-4 mt-4 text-center text-xl font-bold text-darkBlue'>
                {benefit1Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit1Content}</p>
            </div>
            <div className='flex flex-col items-center rounded-md border-4 border-veryLightBlue px-6 pt-10 pb-6 '>
              <Image
                alt=''
                src={benefit2Image}
                width={benefit2ImageWidth}
                height={benefit2ImageHeight}
                quality='100'
              />
              <h4 className='mb-4 mt-4 text-center text-xl font-bold text-darkBlue'>
                {benefit2Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit2Content}</p>
            </div>
            <div className='flex flex-col items-center rounded-md border-4 border-veryLightBlue px-6 pt-10 pb-6 '>
              <Image
                alt=''
                src={benefit3Image}
                width={benefit3ImageWidth}
                height={benefit3ImageHeight}
                quality='100'
              />

              <h4 className='mb-4 mt-4 text-center text-xl font-bold text-darkBlue'>
                {benefit3Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit3Content}</p>
            </div>
            <div className='flex flex-col items-center rounded-md border-4 border-veryLightBlue px-6 pt-10 pb-6 '>
              <Image
                alt=''
                src={benefit4Image}
                width={benefit4ImageWidth}
                height={benefit4ImageHeight}
                quality='100'
              />

              <h4 className='mb-4 mt-4 text-center text-xl font-bold text-darkBlue'>
                {benefit4Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit4Content}</p>
            </div>
            <div className='flex flex-col items-center rounded-md border-4 border-veryLightBlue px-6 pt-10 pb-6 '>
              <Image
                alt=''
                src={benefit5Image}
                width={benefit5ImageWidth}
                height={benefit5ImageHeight}
                quality='100'
              />

              <h4 className='mb-4 mt-4 text-center text-xl font-bold text-darkBlue'>
                {benefit5Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit5Content}</p>
            </div>
          </div>
          <h3 className='mb-6 mt-14 text-2xl font-bold text-darkBlue'>
            {article1Title}
          </h3>
          <article
            className='space-y-4 leading-9 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: article1Text }}
          ></article>
          <h3 className='mb-6 mt-14 text-2xl font-bold text-darkBlue'>
            {article2Title}
          </h3>
          <article
            className='space-y-4 leading-9 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: article2Text }}
          ></article>
          <h3 className='mb-6 mt-14 text-2xl font-bold text-darkBlue'>
            {article3Title}
          </h3>
          <article
            className='space-y-4 leading-9 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: article3Text }}
          ></article>
          <h3 className='mb-6 mt-14 text-2xl font-bold text-darkBlue'>
            {article4Title}
          </h3>
          <article
            className='space-y-4 leading-9 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: article4Text }}
          ></article>
          <h3 className='mb-6 mt-14 text-2xl font-bold text-darkBlue'>
            {article5Title}
          </h3>
          <article
            className='space-y-4 leading-9 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: article5Text }}
          ></article>
        </div>
      </section>
      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <Contact contactUs={contactUs} lng={lng} />
      </section>
    </>
  )
}
