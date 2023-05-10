import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Contact from '../../../components/Contact'

export default async function Main() {
  const receipt = await fetchSingle('receipt')

  const cloudSolutions =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    receipt.cloud_solutions.data.attributes.url
  const cloudSolutionsWidth = receipt.cloud_solutions.data.attributes.width
  const cloudSolutionsHeight = receipt.cloud_solutions.data.attributes.height
  const aboutTitle = receipt.about_title
  const aboutText = richTextReducer(receipt.about_text)
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + receipt.about_image.data.attributes.url
  const aboutWidth = receipt.about_image.data.attributes.width
  const aboutHeight = receipt.about_image.data.attributes.height

  const steps = receipt.steps

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + receipt.step_image1.data.attributes.url
  const image1Width = receipt.step_image1.data.attributes.width
  const image1Height = receipt.step_image1.data.attributes.height
  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + receipt.step_image2.data.attributes.url
  const image2Width = receipt.step_image2.data.attributes.width
  const image2Height = receipt.step_image2.data.attributes.height
  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + receipt.step_image3.data.attributes.url
  const image3Width = receipt.step_image3.data.attributes.width
  const image3Height = receipt.step_image3.data.attributes.height
  const arrow =
    process.env.NEXT_PUBLIC_STRAPI_URL + receipt.step_arrow.data.attributes.url
  const arrowWidth = receipt.step_arrow.data.attributes.width
  const arrowHeight = receipt.step_arrow.data.attributes.height

  const stepTitle1 = receipt.step_title1
  const stepTitle2 = receipt.step_title2
  const stepTitle3 = receipt.step_title3

  const features = receipt.title

  const featureImage1 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    receipt.feature_image1.data.attributes.url
  const featureImage1Width = receipt.feature_image1.data.attributes.width
  const featureImage1Height = receipt.feature_image1.data.attributes.height
  const featureImage2 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    receipt.feature_image2.data.attributes.url
  const featureImage2Width = receipt.feature_image2.data.attributes.width
  const featureImage2Height = receipt.feature_image2.data.attributes.height
  const featureImage3 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    receipt.feature_image3.data.attributes.url
  const featureImage3Width = receipt.feature_image3.data.attributes.width
  const featureImage3Height = receipt.feature_image3.data.attributes.height
  const featureImage4 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    receipt.feature_image4.data.attributes.url
  const featureImage4Width = receipt.feature_image4.data.attributes.width
  const featureImage4Height = receipt.feature_image4.data.attributes.height
  const featureImage5 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    receipt.feature_image5.data.attributes.url
  const featureImage5Width = receipt.feature_image5.data.attributes.width
  const featureImage5Height = receipt.feature_image5.data.attributes.height

  const featureTitle1 = receipt.feature_title1
  const featureTitle2 = receipt.feature_title2
  const featureTitle3 = receipt.feature_title3
  const featureTitle4 = receipt.feature_title4
  const featureTitle5 = receipt.feature_title5

  const featureText1 = richTextReducer(receipt.feature_text1)
  const featureText2 = richTextReducer(receipt.feature_text2)
  const featureText3 = richTextReducer(receipt.feature_text3)
  const featureText4 = richTextReducer(receipt.feature_text4)
  const featureText5 = richTextReducer(receipt.feature_text5)

  const contactUs = receipt.contact_us

  return (
    <>
      <section className='mx-auto flex max-w-5xl flex-col items-center'>
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
            {steps}
          </h3>
          <div className='flex flex-col py-20 text-center md:flex-row'>
            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image1}
                alt=''
                width={image1Width}
                height={image1Height}
                className='h-40 w-32'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{stepTitle1}</h5>
            </div>
            <div className='mx-auto my-10 md:m-auto'>
              <Image
                src={arrow}
                alt=''
                width={arrowWidth}
                height={arrowHeight}
                className='h-10 w-5'
              />
            </div>

            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image2}
                alt=''
                width={image2Width}
                height={image2Height}
                className='h-40 w-40'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{stepTitle2}</h5>
            </div>
            <div className='mx-auto my-10 md:m-auto'>
              <Image
                src={arrow}
                alt=''
                width={arrowWidth}
                height={arrowHeight}
                className='h-10 w-5'
              />
            </div>
            <div className='h-30 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={image3}
                alt=''
                width={image3Width}
                height={image3Height}
                className='h-40 w-40'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{stepTitle3}</h5>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section
        id='case'
        className='mx-auto mt-28 flex max-w-5xl flex-col items-center'
      >
        <h3 className='max-w-xl text-center text-4xl font-bold leading-10 text-darkBlue'>
          {features}
        </h3>

        <div className='mx-auto mt-10 mb-10 flex flex-row flex-wrap items-center justify-center pt-10 text-center'>
          <div className='h-30 flex flex-col items-center space-y-2 p-10 md:w-1/3'>
            <Image
              src={featureImage1}
              alt=''
              width={featureImage1Width}
              height={featureImage1Height}
              // className='h-40 w-32'
            />
            <h5 className='pt-6 text-lg font-bold text-darkBlue'>
              {featureTitle1}
            </h5>
            <article
              className='mt-4 mb-4 space-y-4 text-sm leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: featureText1 }}
            ></article>
          </div>
          <div className='h-30 flex flex-col items-center space-y-2 p-10 md:w-1/3'>
            <Image
              src={featureImage2}
              alt=''
              width={featureImage2Width}
              height={featureImage2Height}
              // className='h-40 w-32'
            />
            <h5 className='pt-6 text-lg font-bold text-darkBlue'>
              {featureTitle2}
            </h5>
            <article
              className='mt-4 mb-4 space-y-4 text-sm leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: featureText2 }}
            ></article>
          </div>
          <div className='h-30 flex flex-col items-center space-y-2 p-10 md:w-1/3'>
            <Image
              src={featureImage3}
              alt=''
              width={featureImage3Width}
              height={featureImage3Height}
              // className='h-40 w-32'
            />
            <h5 className='pt-6 text-lg font-bold text-darkBlue'>
              {featureTitle3}
            </h5>
            <article
              className='mt-4 mb-4 space-y-4 text-sm leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: featureText3 }}
            ></article>
          </div>
          <div className='h-30 flex flex-col items-center space-y-2 p-10 md:w-1/3'>
            <Image
              src={featureImage4}
              alt=''
              width={featureImage4Width}
              height={featureImage4Height}
              // className='h-40 w-32'
            />
            <h5 className='pt-6 text-lg font-bold text-darkBlue'>
              {featureTitle4}
            </h5>
            <article
              className='mt-4 mb-4 space-y-4 text-sm leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: featureText4 }}
            ></article>
          </div>
          <div className='h-30 flex flex-col items-center space-y-2 p-10 md:w-1/3'>
            <Image
              src={featureImage5}
              alt=''
              width={featureImage5Width}
              height={featureImage5Height}
              // className='h-40 w-32'
            />
            <h5 className='pt-6 text-lg font-bold text-darkBlue'>
              {featureTitle5}
            </h5>
            <article
              className='mt-4 mb-4 space-y-4 text-sm leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: featureText5 }}
            ></article>
          </div>
        </div>

        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}
