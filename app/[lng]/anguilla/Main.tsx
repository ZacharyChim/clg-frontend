import Image from 'next/image'
import React from 'react'
import {
  fetchSingle,
  fetchSingleLang,
  richTextReducer,
} from '../../../lib/utils'
import Contact from '../../../components/Contact'
import Countries from '../../../components/Countries'
import curve from '/public/small-curve.png'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const anguilla = await fetchSingleLang('anguilla', lng)
  let anguillaText = anguilla

  let langAnguilla
  if (lng === 'hk') {
    langAnguilla = '安圭拉'
  } else if (lng === 'cn') {
    langAnguilla = '安圭拉'
  } else {
    langAnguilla = 'Anguilla'
  }

  const curveWidth = 33
  const curveHeight = 10
  const benefitTitle = anguillaText.benefit_title

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    anguilla.incorporation.data.attributes.url
  const incorporationWidth = anguilla.incorporation.data.attributes.width
  const incorporationHeight = anguilla.incorporation.data.attributes.height

  const benefit1Title = anguillaText.benefit1_title
  const benefit1Content = anguillaText.benefit1_content
  const benefit1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    anguilla.benefit1_image.data.attributes.url
  const benefit1ImageWidth = anguilla.benefit1_image.data.attributes.width
  const benefit1ImageHeight = anguilla.benefit1_image.data.attributes.height

  const benefit2Title = anguillaText.benefit2_title
  const benefit2Content = anguillaText.benefit2_content
  const benefit2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    anguilla.benefit2_image.data.attributes.url
  const benefit2ImageWidth = anguilla.benefit2_image.data.attributes.width
  const benefit2ImageHeight = anguilla.benefit2_image.data.attributes.height

  const benefit3Title = anguillaText.benefit3_title
  const benefit3Content = anguillaText.benefit3_content
  const benefit3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    anguilla.benefit3_image.data.attributes.url
  const benefit3ImageWidth = anguilla.benefit3_image.data.attributes.width
  const benefit3ImageHeight = anguilla.benefit3_image.data.attributes.height

  const benefit4Title = anguillaText.benefit4_title
  const benefit4Content = anguillaText.benefit4_content
  const benefit4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    anguilla.benefit4_image.data.attributes.url
  const benefit4ImageWidth = anguilla.benefit4_image.data.attributes.width
  const benefit4ImageHeight = anguilla.benefit4_image.data.attributes.height

  const benefit5Title = anguillaText.benefit5_title
  const benefit5Content = anguillaText.benefit5_content
  const benefit5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    anguilla.benefit5_image.data.attributes.url
  const benefit5ImageWidth = anguilla.benefit5_image.data.attributes.width
  const benefit5ImageHeight = anguilla.benefit5_image.data.attributes.height

  const article1Title = anguillaText.article1_title
  const article1Text = richTextReducer(anguillaText.article1_text)

  const contactUs = anguillaText.contact_us

  return (
    <>
      <section className='mx-auto mt-10 mb-10 flex max-w-5xl flex-col md:flex-row'>
        {/* @ts-expect-error Server Component */}
        <Countries country={langAnguilla} lng={lng} />
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
        </div>
      </section>
      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <Contact contactUs={contactUs} lng={lng} />
      </section>
    </>
  )
}
