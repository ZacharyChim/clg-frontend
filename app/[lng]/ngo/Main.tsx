import Image from 'next/image'
import React from 'react'
import { fetchSingleLang, richTextReducer, trimTitle } from '../../../lib/utils'
import Contact from '../../../components/Contact'
import arrow from '../../../public/arrow-white.png'
import ImageArticle from '../../../components/ImageArticle'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import curve from '/public/small-curve.png'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const curveWidth = 33
  const curveHeight = 10
  const ngo = await fetchSingleLang('ngo', lng)
  let ngoText = ngo

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.incorporation.data.attributes.url
  const incorporationWidth = ngo.incorporation.data.attributes.width
  const incorporationHeight = ngo.incorporation.data.attributes.height
  const tagObj = {
    url: incorporation,
    width: incorporationWidth,
    height: incorporationHeight,
  }

  const aboutTitle = ngoText.about_title
  const aboutContent = richTextReducer(ngoText.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutContent,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.about_image.data.attributes.url
  const aboutImageWidth = ngo.about_image.data.attributes.width
  const aboutImageHeight = ngo.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutImageWidth,
    height: aboutImageHeight,
  }

  const purpose = ngoText.purpose
  const purpose1 = ngoText.purpose1
  const purpose2 = ngoText.purpose2
  const purpose3 = ngoText.purpose3
  const purpose1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.purpose1_image.data.attributes.url
  const purpose1ImageWidth = ngo.purpose1_image.data.attributes.width
  const purpose1ImageHeight = ngo.purpose1_image.data.attributes.height
  const purpose2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.purpose2_image.data.attributes.url
  const purpose2ImageWidth = ngo.purpose2_image.data.attributes.width
  const purpose2ImageHeight = ngo.purpose2_image.data.attributes.height
  const purpose3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.purpose3_image.data.attributes.url
  const purpose3ImageWidth = ngo.purpose3_image.data.attributes.width
  const purpose3ImageHeight = ngo.purpose3_image.data.attributes.height

  const addition = ngoText.addition
  const benefitTitle = ngoText.benefit_title
  const benefitContent = richTextReducer(ngoText.benefit_content)

  const leftSmall = ngoText.left_small
  const left = ngoText.left
  const rightSmall = ngoText.right_small
  const right = ngoText.right

  const serviceTitle = ngoText.service_title
  const service1 = ngoText.service1
  const service2 = ngoText.service2
  const service3 = ngoText.service3
  const service4 = ngoText.service4
  const service5 = ngoText.service5
  const service6 = ngoText.service6

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service1_image.data.attributes.url
  const service1ImageWidth = ngo.service1_image.data.attributes.width
  const service1ImageHeight = ngo.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service2_image.data.attributes.url
  const service2ImageWidth = ngo.service2_image.data.attributes.width
  const service2ImageHeight = ngo.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service3_image.data.attributes.url
  const service3ImageWidth = ngo.service3_image.data.attributes.width
  const service3ImageHeight = ngo.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service4_image.data.attributes.url
  const service4ImageWidth = ngo.service4_image.data.attributes.width
  const service4ImageHeight = ngo.service4_image.data.attributes.height

  const service5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service5_image.data.attributes.url
  const service5ImageWidth = ngo.service5_image.data.attributes.width
  const service5ImageHeight = ngo.service5_image.data.attributes.height

  const service6Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service6_image.data.attributes.url
  const service6ImageWidth = ngo.service6_image.data.attributes.width
  const service6ImageHeight = ngo.service6_image.data.attributes.height

  const contactUs = ngoText.contact_us

  return (
    <>
      <section className='mx-auto mt-10 flex max-w-5xl flex-col items-center'>
        <ImageArticle
          aboutImage={aboutImageObj}
          aboutArticle={aboutObj}
          tagImage={tagObj}
          imageLeft={false}
        />
      </section>

      <section
        className='md:bg-bottom mb-10 flex w-full flex-col items-center md:bg-ngoWave md:bg-contain md:bg-no-repeat'
        style={{ backgroundPosition: 'bottom' }}
      >
        <h3 className='mt-4 max-w-xl text-center text-2xl text-oceanBlue'>
          {purpose}
        </h3>
        <div className='max-w-5xl text-left'>
          <div className='flex flex-col gap-20 pt-10 pb-20 text-center md:flex-row '>
            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={purpose1Image}
                alt=''
                width={purpose1ImageWidth}
                height={purpose1ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-8 pt-6 text-darkBlue md:text-darkBlue'>
                {purpose1}
              </h5>
            </div>

            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={purpose2Image}
                alt=''
                width={purpose2ImageWidth}
                height={purpose2ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-8 pt-6 text-darkBlue md:text-darkBlue'>
                {purpose2}
              </h5>
            </div>

            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/3'>
              <Image
                src={purpose3Image}
                alt=''
                width={purpose3ImageWidth}
                height={purpose3ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-6 pt-6 text-darkBlue md:text-darkBlue'>
                {purpose3}
              </h5>
            </div>
          </div>
          <div className='relative mx-4 px-4'>
            <div className='w-full rounded-full bg-blue-400 py-3 text-center text-white md:absolute md:-bottom-5 '>
              <Image
                src={arrow}
                alt=''
                width={12}
                height={12}
                className='mr-3 inline align-baseline	'
              />
              {addition}
            </div>
          </div>
        </div>
      </section>

      <section className='items-left mx-auto mt-20 flex max-w-5xl flex-col'>
        <h3 className='mx-4 mb-4 text-left text-2xl font-bold text-darkBlue'>
          {benefitTitle}
        </h3>

        <article
          className='mx-4 leading-10'
          dangerouslySetInnerHTML={{ __html: benefitContent }}
        ></article>

        <div className='mx-4 mt-10 flex flex-col space-y-2 text-center text-white md:flex-row md:gap-2 md:space-y-0'>
          <div className='rounded-3xl bg-oceanBlue p-6 md:w-1/2'>
            <p className='mb-6 text-sm'>{leftSmall}</p>
            <p>{left}</p>
          </div>
          <div className='rounded-3xl bg-darkBlue p-6 md:w-1/2'>
            <p className='mb-6 text-sm'>{rightSmall}</p>
            <p>{right}</p>
          </div>
        </div>
      </section>
      <section className='mt-20 w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-5xl px-5 pb-5 text-left'>
          <h3 className='my-20 text-center text-4xl font-bold text-darkBlue'>
            {serviceTitle}
          </h3>
          <div className='mb-20 grid grid-cols-1 gap-8 text-center md:grid-cols-3'>
            <div className='flex flex-col space-y-2 rounded-xl border-4 border-borderBlue bg-white p-8'>
              <div className='self-center'>
                <Image
                  src={service1Image}
                  alt=''
                  width={service1ImageWidth}
                  height={service1ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-sm text-darkBlue'>{service1}</h5>
            </div>

            <div className='flex flex-col space-y-2 rounded-xl border-4 border-borderBlue bg-white p-8'>
              <div className='self-center'>
                <Image
                  src={service2Image}
                  alt=''
                  width={service2ImageWidth}
                  height={service2ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-sm text-darkBlue'>{service2}</h5>
            </div>

            <div className='flex flex-col space-y-2 rounded-xl border-4 border-borderBlue bg-white p-8'>
              <div className='self-center'>
                <Image
                  src={service3Image}
                  alt=''
                  width={service3ImageWidth}
                  height={service3ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-md text-darkBlue'>{service3}</h5>
            </div>

            <div className='flex flex-col space-y-2 rounded-xl border-4 border-borderBlue bg-white p-8'>
              <div className='self-center'>
                <Image
                  src={service4Image}
                  alt=''
                  width={service4ImageWidth}
                  height={service4ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-md text-darkBlue'>{service4}</h5>
            </div>
            <div className='flex flex-col space-y-2 rounded-xl border-4 border-borderBlue bg-white p-8'>
              <div className='self-center'>
                <Image
                  src={service5Image}
                  alt=''
                  width={service5ImageWidth}
                  height={service5ImageHeight}
                  className='ml-7 object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />

              <h5 className='text-md text-darkBlue'>{service5}</h5>
            </div>
            <div className='flex flex-col space-y-2 rounded-xl border-4 border-borderBlue bg-white p-8'>
              <div className='self-center'>
                <Image
                  src={service6Image}
                  alt=''
                  width={service6ImageWidth}
                  height={service6ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-md text-darkBlue'>{service6}</h5>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />
      <section className='mx-auto mt-10 flex max-w-5xl flex-col items-center'>
        <Contact contactUs={contactUs} lng={lng} />
      </section>
    </>
  )
}
