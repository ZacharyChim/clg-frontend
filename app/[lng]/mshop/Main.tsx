import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Contact from '../../../components/Contact'

export default async function Main() {
  const mshop = await fetchSingle('mshop')

  const cloudSolutions =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    mshop.cloud_solutions.data.attributes.url
  const cloudSolutionsWidth = mshop.cloud_solutions.data.attributes.width
  const cloudSolutionsHeight = mshop.cloud_solutions.data.attributes.height
  const aboutTitle = mshop.about_title
  const aboutText = richTextReducer(mshop.about_text)
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + mshop.about_image.data.attributes.url
  const aboutWidth = mshop.about_image.data.attributes.width
  const aboutHeight = mshop.about_image.data.attributes.height

  const services = mshop.services

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    mshop.service1_image.data.attributes.url
  const image1Width = mshop.service1_image.data.attributes.width
  const image1Height = mshop.service1_image.data.attributes.height
  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    mshop.service2_image.data.attributes.url
  const image2Width = mshop.service2_image.data.attributes.width
  const image2Height = mshop.service2_image.data.attributes.height
  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    mshop.service3_image.data.attributes.url
  const image3Width = mshop.service3_image.data.attributes.width
  const image3Height = mshop.service3_image.data.attributes.height
  const image4 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    mshop.service4_image.data.attributes.url
  const image4Width = mshop.service4_image.data.attributes.width
  const image4Height = mshop.service4_image.data.attributes.height

  const serviceTitle1 = mshop.service1_title
  const serviceTitle2 = mshop.service2_title
  const serviceTitle3 = mshop.service3_title
  const serviceTitle4 = mshop.service4_title

  const serviceText1 = richTextReducer(mshop.service1_text)
  const serviceText2 = richTextReducer(mshop.service2_text)
  const serviceText3 = richTextReducer(mshop.service3_text)
  const serviceText4 = richTextReducer(mshop.service4_text)

  const features = mshop.features
  const featureImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + mshop.feature_image.data.attributes.url
  const featureImageWidth = mshop.feature_image.data.attributes.width
  const featureImageHeight = mshop.feature_image.data.attributes.height

  const featureText = richTextReducer(mshop.feature_text)

  const contactUs = mshop.contact_us

  return (
    <>
      <section
        id='case'
        className='mx-auto flex max-w-5xl flex-col items-center'
      >
        <div className='mx-auto text-center'>
          <div className='flex flex-col items-center gap-8 py-5 pl-10 md:flex-row'>
            <div className='text-left md:w-1/2'>
              <Image
                alt=''
                src={cloudSolutions}
                width={cloudSolutionsWidth}
                height={cloudSolutionsHeight}
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
            <div className='my-16 px-10 md:w-1/2'>
              <Image
                alt=''
                src={aboutImage}
                width={aboutWidth}
                height={aboutHeight}
              />
            </div>
          </div>
        </div>
      </section>

      <section id='numbers' className='w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-5xl px-5 text-left'>
          <h3 className='mt-20 text-center text-4xl font-bold text-darkBlue'>
            {services}
          </h3>
          <div className='flex flex-col py-20 md:flex-row md:space-x-14'>
            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image1}
                alt=''
                width={image1Width}
                height={image1Height}
                className='h-40 w-32'
              />
              <h5 className='pt-6 text-lg font-bold text-darkBlue'>
                {serviceTitle1}
              </h5>
              <article
                className='text-sm'
                dangerouslySetInnerHTML={{ __html: serviceText1 }}
              ></article>
            </div>

            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image2}
                alt=''
                width={image2Width}
                height={image2Height}
                className='h-40 w-40'
              />
              <h5 className='pt-6 text-lg font-bold text-darkBlue'>
                {serviceTitle2}
              </h5>
              <article
                className='text-sm'
                dangerouslySetInnerHTML={{ __html: serviceText2 }}
              ></article>
            </div>

            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image3}
                alt=''
                width={image3Width}
                height={image3Height}
                className='h-40 w-40'
              />
              <h5 className='pt-6 text-lg font-bold text-darkBlue'>
                {serviceTitle3}
              </h5>
              <article
                className='text-sm'
                dangerouslySetInnerHTML={{ __html: serviceText3 }}
              ></article>
            </div>

            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image4}
                alt=''
                width={image4Width}
                height={image4Height}
                className='h-40 w-36'
              />
              <h5 className='pt-6 text-lg font-bold text-darkBlue'>
                {serviceTitle4}
              </h5>
              <article
                className='items-left w-full text-sm'
                dangerouslySetInnerHTML={{ __html: serviceText4 }}
              ></article>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Image src={contactTop} alt='' />
      </section>
      <section
        id='case'
        className='mx-auto mt-28 flex max-w-5xl flex-col items-center'
      >
        <h3 className='text-center text-4xl font-bold text-darkBlue'>
          {features}
        </h3>

        <div className='mx-auto pt-10 text-center'>
          <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
            <div className='m-auto md:w-1/2'>
              <Image
                alt=''
                src={featureImage}
                width={featureImageWidth}
                height={featureImageHeight}
              />
            </div>
            <div className='m-10 text-left md:w-1/2'>
              <article
                className='mt-4 mb-4 space-y-4 text-sm leading-7 text-darkBrown'
                dangerouslySetInnerHTML={{ __html: featureText }}
              ></article>
            </div>
          </div>
        </div>

        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}
