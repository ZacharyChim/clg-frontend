import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Contact from '../../../components/Contact'
import ImageArticle from '../../../components/ImageArticle'
import arrow from '../../../public/arrow-rounded.png'
import curve from '/public/small-curve.png'

export default async function Main() {
  const curveWidth = 33
  const curveHeight = 10
  const xero = await fetchSingle('xero')

  const cloud =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.cloud_solutions.data.attributes.url
  const cloudWidth = xero.cloud_solutions.data.attributes.width
  const cloudHeight = xero.cloud_solutions.data.attributes.height

  const video = xero.video_url

  const aboutTitle = xero.about_title

  const solution1Title = xero.solution1_title
  const solution1Content = richTextReducer(xero.solution1_content)
  const solution1Obj = {
    title: solution1Title,
    text: solution1Content,
  }
  const solution1Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution1_number.data.attributes.url
  const solution1NumberWidth = xero.solution1_number.data.attributes.width
  const solution1NumberHeight = xero.solution1_number.data.attributes.height
  const solution1NumberObj = {
    url: solution1Number,
    width: solution1NumberWidth,
    height: solution1NumberHeight,
  }
  const solution1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution1_image.data.attributes.url
  const solution1ImageWidth = xero.solution1_image.data.attributes.width
  const solution1ImageHeight = xero.solution1_image.data.attributes.height
  const solution1ImageObj = {
    url: solution1Image,
    width: solution1ImageWidth,
    height: solution1ImageHeight,
  }

  const solution2Title = xero.solution2_title
  const solution2Content = richTextReducer(xero.solution2_content)
  const solution2Obj = {
    title: solution2Title,
    text: solution2Content,
  }
  const solution2Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution2_number.data.attributes.url
  const solution2NumberWidth = xero.solution2_number.data.attributes.width
  const solution2NumberHeight = xero.solution2_number.data.attributes.height
  const solution2NumberObj = {
    url: solution2Number,
    width: solution2NumberWidth,
    height: solution2NumberHeight,
  }
  const solution2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution2_image.data.attributes.url
  const solution2ImageWidth = xero.solution2_image.data.attributes.width
  const solution2ImageHeight = xero.solution2_image.data.attributes.height
  const solution2ImageObj = {
    url: solution2Image,
    width: solution2ImageWidth,
    height: solution2ImageHeight,
  }

  const solution3Title = xero.solution3_title
  const solution3Content = richTextReducer(xero.solution3_content)
  const solution3Obj = {
    title: solution3Title,
    text: solution3Content,
  }
  const solution3Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution3_number.data.attributes.url
  const solution3NumberWidth = xero.solution3_number.data.attributes.width
  const solution3NumberHeight = xero.solution3_number.data.attributes.height
  const solution3NumberObj = {
    url: solution3Number,
    width: solution3NumberWidth,
    height: solution3NumberHeight,
  }
  const solution3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution3_image.data.attributes.url
  const solution3ImageWidth = xero.solution3_image.data.attributes.width
  const solution3ImageHeight = xero.solution3_image.data.attributes.height
  const solution3ImageObj = {
    url: solution3Image,
    width: solution3ImageWidth,
    height: solution3ImageHeight,
  }

  const solution4Title = xero.solution4_title
  const solution4Content = richTextReducer(xero.solution4_content)
  const solution4Obj = {
    title: solution4Title,
    text: solution4Content,
  }
  const solution4Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution4_number.data.attributes.url
  const solution4NumberWidth = xero.solution4_number.data.attributes.width
  const solution4NumberHeight = xero.solution4_number.data.attributes.height
  const solution4NumberObj = {
    url: solution4Number,
    width: solution4NumberWidth,
    height: solution4NumberHeight,
  }
  const solution4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution4_image.data.attributes.url
  const solution4ImageWidth = xero.solution4_image.data.attributes.width
  const solution4ImageHeight = xero.solution4_image.data.attributes.height
  const solution4ImageObj = {
    url: solution4Image,
    width: solution4ImageWidth,
    height: solution4ImageHeight,
  }

  const solution5Title = xero.solution5_title
  const solution5Content = richTextReducer(xero.solution5_content)
  const solution5Obj = {
    title: solution5Title,
    text: solution5Content,
  }
  const solution5Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution5_number.data.attributes.url
  const solution5NumberWidth = xero.solution5_number.data.attributes.width
  const solution5NumberHeight = xero.solution5_number.data.attributes.height
  const solution5NumberObj = {
    url: solution5Number,
    width: solution5NumberWidth,
    height: solution5NumberHeight,
  }
  const solution5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution5_image.data.attributes.url
  const solution5ImageWidth = xero.solution5_image.data.attributes.width
  const solution5ImageHeight = xero.solution5_image.data.attributes.height
  const solution5ImageObj = {
    url: solution5Image,
    width: solution5ImageWidth,
    height: solution5ImageHeight,
  }

  const solution6Title = xero.solution6_title
  const solution6Content = richTextReducer(xero.solution6_content)
  const solution6Obj = {
    title: solution6Title,
    text: solution6Content,
  }
  const solution6Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution6_number.data.attributes.url
  const solution6NumberWidth = xero.solution6_number.data.attributes.width
  const solution6NumberHeight = xero.solution6_number.data.attributes.height
  const solution6NumberObj = {
    url: solution6Number,
    width: solution6NumberWidth,
    height: solution6NumberHeight,
  }
  const solution6Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    xero.solution6_image.data.attributes.url
  const solution6ImageWidth = xero.solution6_image.data.attributes.width
  const solution6ImageHeight = xero.solution6_image.data.attributes.height
  const solution6ImageObj = {
    url: solution6Image,
    width: solution6ImageWidth,
    height: solution6ImageHeight,
  }

  const benefit = xero.benefit_title

  const benefit1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.benefit1_image.data.attributes.url
  const benefit1ImageWidth = xero.benefit1_image.data.attributes.width
  const benefit1ImageHeight = xero.benefit1_image.data.attributes.height
  const benefit1Title = xero.benefit1_title
  const benefit1Desc = xero.benefit1_desc

  const benefit2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.benefit2_image.data.attributes.url
  const benefit2ImageWidth = xero.benefit2_image.data.attributes.width
  const benefit2ImageHeight = xero.benefit2_image.data.attributes.height
  const benefit2Title = xero.benefit2_title
  const benefit2Desc = xero.benefit2_desc

  const benefit3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.benefit3_image.data.attributes.url
  const benefit3ImageWidth = xero.benefit3_image.data.attributes.width
  const benefit3ImageHeight = xero.benefit3_image.data.attributes.height
  const benefit3Title = xero.benefit3_title
  const benefit3Desc = xero.benefit3_desc

  const benefit4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.benefit4_image.data.attributes.url
  const benefit4ImageWidth = xero.benefit4_image.data.attributes.width
  const benefit4ImageHeight = xero.benefit4_image.data.attributes.height
  const benefit4Title = xero.benefit4_title
  const benefit4Desc = xero.benefit4_desc

  const benefit5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.benefit5_image.data.attributes.url
  const benefit5ImageWidth = xero.benefit5_image.data.attributes.width
  const benefit5ImageHeight = xero.benefit5_image.data.attributes.height
  const benefit5Title = xero.benefit5_title
  const benefit5Desc = xero.benefit5_desc

  const simple = xero.simple

  const simpleContent = xero.simple_content
  const simpleTitle =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.simple_title.data.attributes.url
  const simpleTitleWidth = xero.simple_title.data.attributes.width
  const simpleTitleHeight = xero.simple_title.data.attributes.height
  const simpleImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.simple_image.data.attributes.url
  const simpleImageWidth = xero.simple_image.data.attributes.width
  const simpleImageHeight = xero.simple_image.data.attributes.height

  const smartContent = xero.smart_content
  const smartTitle =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.smart_title.data.attributes.url
  const smartTitleWidth = xero.smart_title.data.attributes.width
  const smartTitleHeight = xero.smart_title.data.attributes.height
  const smartImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.smart_image.data.attributes.url
  const smartImageWidth = xero.smart_image.data.attributes.width
  const smartImageHeight = xero.smart_image.data.attributes.height

  const secureContent = xero.secure_content
  const secureTitle =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.secure_title.data.attributes.url
  const secureTitleWidth = xero.secure_title.data.attributes.width
  const secureTitleHeight = xero.secure_title.data.attributes.height
  const secureImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.secure_image.data.attributes.url
  const secureImageWidth = xero.secure_image.data.attributes.width
  const secureImageHeight = xero.secure_image.data.attributes.height

  const steps = xero.steps

  const step1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.step1.data.attributes.url
  const step1Width = xero.step1.data.attributes.width
  const step1Height = xero.step1.data.attributes.height
  const step2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.step2.data.attributes.url
  const step2Width = xero.step2.data.attributes.width
  const step2Height = xero.step2.data.attributes.height
  const step3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.step3.data.attributes.url
  const step3Width = xero.step3.data.attributes.width
  const step3Height = xero.step3.data.attributes.height

  const reasons = xero.reasons
  const reason1 = xero.reason1
  const reason1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.reason1_image.data.attributes.url
  const reason1ImageWidth = xero.reason1_image.data.attributes.width
  const reason1ImageHeight = xero.reason1_image.data.attributes.height

  const reason2 = xero.reason2
  const reason2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.reason2_image.data.attributes.url
  const reason2ImageWidth = xero.reason2_image.data.attributes.width
  const reason2ImageHeight = xero.reason2_image.data.attributes.height

  const reason3 = xero.reason3
  const reason3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.reason3_image.data.attributes.url
  const reason3ImageWidth = xero.reason3_image.data.attributes.width
  const reason3ImageHeight = xero.reason3_image.data.attributes.height

  const reason4 = xero.reason4
  const reason4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + xero.reason4_image.data.attributes.url
  const reason4ImageWidth = xero.reason4_image.data.attributes.width
  const reason4ImageHeight = xero.reason4_image.data.attributes.height

  const contactUs = xero.contact_us

  return (
    <>
      <section className='items-left mx-auto mb-20 mt-10 flex max-w-4xl flex-col'>
        <Image src={cloud} alt='' width={cloudWidth} height={cloudHeight} />
        <h3 className='my-4 text-left text-2xl font-bold text-darkBlue'>
          {aboutTitle}
        </h3>
        <iframe
          id='ytplayer'
          width='100%'
          height='560'
          src={`https://www.youtube.com/embed/${video}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>

        <ImageArticle
          aboutImage={solution1ImageObj}
          aboutArticle={solution1Obj}
          tagImage={solution1NumberObj}
          imageLeft={true}
        />
        <ImageArticle
          aboutImage={solution2ImageObj}
          aboutArticle={solution2Obj}
          tagImage={solution2NumberObj}
          imageLeft={false}
        />
        <ImageArticle
          aboutImage={solution3ImageObj}
          aboutArticle={solution3Obj}
          tagImage={solution3NumberObj}
          imageLeft={true}
        />
        <ImageArticle
          aboutImage={solution4ImageObj}
          aboutArticle={solution4Obj}
          tagImage={solution4NumberObj}
          imageLeft={false}
        />
        <ImageArticle
          aboutImage={solution5ImageObj}
          aboutArticle={solution5Obj}
          tagImage={solution5NumberObj}
          imageLeft={true}
        />
        <ImageArticle
          aboutImage={solution6ImageObj}
          aboutArticle={solution6Obj}
          tagImage={solution6NumberObj}
          imageLeft={false}
        />
      </section>

      <section id='numbers' className='w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-6xl px-5 pb-20 text-left'>
          <h3 className='mt-20 text-center text-4xl font-bold text-darkBlue'>
            {benefit}
          </h3>
          <div className='flex flex-col text-center md:flex-row'>
            <div className='mr-2 mt-10 flex flex-col space-y-4 md:w-1/5'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={benefit1Image}
                  alt=''
                  width={benefit1ImageWidth}
                  height={benefit1ImageHeight}
                  className='w-32 object-fill md:w-full'
                />
              </div>

              <h5 className='text-sm font-bold text-darkBlue'>
                {benefit1Title}
              </h5>
              <p className='text-sm'>{benefit1Desc}</p>
            </div>

            <div className='mx-2 mt-10 flex flex-col space-y-4 md:w-1/5'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={benefit2Image}
                  alt=''
                  width={benefit2ImageWidth}
                  height={benefit2ImageHeight}
                  className='w-32 object-fill md:w-full'
                />
              </div>

              <h5 className='text-sm font-bold text-darkBlue'>
                {benefit2Title}
              </h5>
              <p className='text-sm'>{benefit2Desc}</p>
            </div>

            <div className='mx-2 mt-10 flex flex-col space-y-4 md:w-1/5'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={benefit3Image}
                  alt=''
                  width={benefit3ImageWidth}
                  height={benefit3ImageHeight}
                  className='w-32 object-fill md:w-full'
                />
              </div>

              <h5 className='text-sm font-bold text-darkBlue'>
                {benefit3Title}
              </h5>
              <p className='text-sm'>{benefit3Desc}</p>
            </div>

            <div className='mx-2 mt-10 flex flex-col space-y-4 md:w-1/5'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={benefit4Image}
                  alt=''
                  width={benefit4ImageWidth}
                  height={benefit4ImageHeight}
                  className='w-32 object-fill md:w-full'
                />
              </div>

              <h5 className='text-sm font-bold text-darkBlue'>
                {benefit4Title}
              </h5>
              <p className='text-sm'>{benefit4Desc}</p>
            </div>

            <div className='mt-10 ml-2 flex flex-col space-y-4 md:w-1/5'>
              <div className='self-center pb-2'>
                <Image
                  src={benefit5Image}
                  alt=''
                  width={benefit5ImageWidth}
                  height={benefit5ImageHeight}
                  className='w-32 object-fill md:w-full'
                />
              </div>

              <h5 className='text-sm font-bold text-darkBlue'>
                {benefit5Title}
              </h5>
              <p className='text-sm'>{benefit5Desc}</p>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <h3 className='mt-20 max-w-xl text-center text-4xl font-bold text-darkBlue'>
          {simple}
        </h3>
        <div className='mx-auto mt-10 text-center'>
          <div className='flex flex-col items-center gap-8 py-10 md:flex-row'>
            <div className='px-10 md:w-1/3'>
              <Image
                alt=''
                src={simpleImage}
                width={simpleImageWidth}
                height={simpleImageHeight}
              />
            </div>
            <div className='text-left md:w-2/3'>
              <Image
                alt=''
                src={simpleTitle}
                width={simpleImageWidth}
                height={simpleTitleHeight}
                className='mb-2 h-10 w-32 object-contain'
                quality='100'
              />

              <article
                className='space-y-4 leading-7 text-darkBrown'
                dangerouslySetInnerHTML={{ __html: simpleContent }}
              ></article>
            </div>
          </div>

          <div className='flex flex-col items-center gap-8 py-10 md:flex-row'>
            <div className='px-10 md:w-1/3'>
              <Image
                alt=''
                src={smartImage}
                width={smartImageWidth}
                height={smartImageHeight}
              />
            </div>
            <div className='text-left md:w-2/3'>
              <Image
                alt=''
                src={smartTitle}
                width={smartImageWidth}
                height={smartTitleHeight}
                className='mb-2 h-10 w-32 object-contain'
                quality='100'
              />

              <article
                className='space-y-4 leading-7 text-darkBrown'
                dangerouslySetInnerHTML={{ __html: smartContent }}
              ></article>
            </div>
          </div>

          <div className='flex flex-col items-center gap-8 py-10 md:flex-row'>
            <div className='px-10 md:w-1/3'>
              <Image
                alt=''
                src={secureImage}
                width={secureImageWidth}
                height={secureImageHeight}
              />
            </div>
            <div className='text-left md:w-2/3'>
              <Image
                alt=''
                src={secureTitle}
                width={secureTitleWidth}
                height={secureTitleHeight}
                className='mb-2 h-10 w-32 object-contain'
                quality='100'
              />

              <article
                className='space-y-4 leading-7 text-darkBrown'
                dangerouslySetInnerHTML={{ __html: secureContent }}
              ></article>
            </div>
          </div>
        </div>
      </section>
      <section id='numbers' className='w-full items-center bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-4xl items-center px-5 pb-20 text-left'>
          <h3 className='mt-20 text-center text-4xl font-bold text-darkBlue'>
            {steps}
          </h3>
          <div className='flex flex-col text-center md:flex-row'>
            <div className='mt-10 flex flex-grow flex-col justify-center p-4 md:w-1/4'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={step1}
                  alt=''
                  width={step1Width}
                  height={step1Height}
                  quality='100'
                  className='h-full'
                />
              </div>
            </div>

            <div className='md:w-1/8 mt-10 flex flex-col justify-center p-4'>
              <div className='mt-7 pb-2'>
                <Image
                  src={arrow}
                  alt=''
                  width='70'
                  height='70'
                  className='w-16'
                />
              </div>
            </div>

            <div className='mt-10 flex flex-col space-y-2 p-4 md:w-1/4'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={step2}
                  alt=''
                  width={step2Width}
                  height={step2Height}
                  quality='100'
                  className=''
                />
              </div>
            </div>

            <div className='md:w-1/8 mt-10 flex flex-col justify-center p-4'>
              <div className='mt-7 pb-2'>
                <Image
                  src={arrow}
                  alt=''
                  width='70'
                  height='70'
                  className='w-16'
                />
              </div>
            </div>

            <div className='mt-10 flex flex-col p-4 md:w-1/4'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={step3}
                  alt=''
                  width={step3Width}
                  height={step3Height}
                  quality='100'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='mx-auto mb-20 mt-10 flex max-w-4xl flex-col'>
        <h3 className='mt-10 text-center text-4xl font-bold text-darkBlue'>
          {reasons}
        </h3>
        <div className='flex flex-col md:flex-row'>
          <div className='mt-10 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason1Image}
                alt=''
                width={reason1ImageWidth}
                height={reason1ImageHeight}
                quality='100'
                className='pb-2'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <p className='text-center text-sm text-darkBrown'>{reason1}</p>
            </div>
          </div>

          <div className='mt-10 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason2Image}
                alt=''
                width={reason2ImageWidth}
                height={reason2ImageHeight}
                quality='100'
                className=''
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <p className='text-center text-sm text-darkBrown'>{reason2}</p>
            </div>
          </div>

          <div className='mt-10 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason3Image}
                alt=''
                width={reason3ImageWidth}
                height={reason3ImageHeight}
                quality='100'
                className='pb-2'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <p className='text-center text-sm text-darkBrown'>{reason3}</p>
            </div>
          </div>

          <div className='mt-10 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason4Image}
                alt=''
                width={reason4ImageWidth}
                height={reason4ImageHeight}
                quality='100'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <p className='text-center text-sm text-darkBrown'>{reason4}</p>
            </div>
          </div>
        </div>
        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}
