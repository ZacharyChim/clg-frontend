import Image from 'next/image'
import React from 'react'
import { fetchSingleLang, richTextReducer, trimTitle } from '../../../lib/utils'
import ImageArticle from '../../../components/ImageArticle'
import Contact from '../../../components/Contact'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Faqs from '../../../components/Faqs'
import curve from '/public/small-curve.png'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const curveWidth = 33
  const curveHeight = 10

  const payroll = await fetchSingleLang('payroll', lng)
  let payrollText = payroll

  const payrollTag = 'Payroll Outsourcing Service'
  // const payrollTag =
  //   process.env.NEXT_PUBLIC_STRAPI_URL +
  //   payroll.cloud_solutions.data.attributes.url
  // const payrollTagWidth = payroll.cloud_solutions.data.attributes.width
  // const payrollTagHeight = payroll.cloud_solutions.data.attributes.height

  const payrollTitle = payrollText.payroll_title

  const article1Title = payrollText.article1_title
  const article1Text = richTextReducer(payrollText.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article1_image.data.attributes.url
  const article1ImageWidth = payroll.article1_image.data.attributes.width
  const article1ImageHeight = payroll.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article1_number.data.attributes.url
  const article1TagImageWidth = payroll.article1_number.data.attributes.width
  const article1TagImageHeight = payroll.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const article2Title = payrollText.article2_title
  const article2Text = richTextReducer(payrollText.article2_text)
  const article2Obj = {
    title: article2Title,
    text: article2Text,
  }

  const article2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article2_image.data.attributes.url
  const article2ImageWidth = payroll.article2_image.data.attributes.width
  const article2ImageHeight = payroll.article2_image.data.attributes.height
  const article2ImageObj = {
    url: article2Image,
    width: article2ImageWidth,
    height: article2ImageHeight,
  }

  const article2TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article2_number.data.attributes.url
  const article2TagImageWidth = payroll.article2_number.data.attributes.width
  const article2TagImageHeight = payroll.article2_number.data.attributes.height
  const article2TagImageObj = {
    url: article2TagImage,
    width: article2TagImageWidth,
    height: article2TagImageHeight,
  }

  const article3Title = payrollText.article3_title
  const article3Text = richTextReducer(payrollText.article3_text)
  const article3Obj = {
    title: article3Title,
    text: article3Text,
  }

  const article3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article3_image.data.attributes.url
  const article3ImageWidth = payroll.article3_image.data.attributes.width
  const article3ImageHeight = payroll.article3_image.data.attributes.height
  const article3ImageObj = {
    url: article3Image,
    width: article3ImageWidth,
    height: article3ImageHeight,
  }

  const article3TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article3_number.data.attributes.url
  const article3TagImageWidth = payroll.article3_number.data.attributes.width
  const article3TagImageHeight = payroll.article3_number.data.attributes.height
  const article3TagImageObj = {
    url: article3TagImage,
    width: article3TagImageWidth,
    height: article3TagImageHeight,
  }

  const article4Title = payrollText.article4_title
  const article4Text = richTextReducer(payrollText.article4_text)
  const article4Obj = {
    title: article4Title,
    text: article4Text,
  }

  const article4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article4_image.data.attributes.url
  const article4ImageWidth = payroll.article4_image.data.attributes.width
  const article4ImageHeight = payroll.article4_image.data.attributes.height
  const article4ImageObj = {
    url: article4Image,
    width: article4ImageWidth,
    height: article4ImageHeight,
  }

  const article4TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article4_number.data.attributes.url
  const article4TagImageWidth = payroll.article4_number.data.attributes.width
  const article4TagImageHeight = payroll.article4_number.data.attributes.height
  const article4TagImageObj = {
    url: article4TagImage,
    width: article4TagImageWidth,
    height: article4TagImageHeight,
  }

  const article5Title = payrollText.article5_title
  const article5Text = richTextReducer(payrollText.article5_text)
  const article5Obj = {
    title: article5Title,
    text: article5Text,
  }

  const article5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article5_image.data.attributes.url
  const article5ImageWidth = payroll.article5_image.data.attributes.width
  const article5ImageHeight = payroll.article1_image.data.attributes.height
  const article5ImageObj = {
    url: article5Image,
    width: article5ImageWidth,
    height: article5ImageHeight,
  }

  const article5TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.article5_number.data.attributes.url
  const article5TagImageWidth = payroll.article5_number.data.attributes.width
  const article5TagImageHeight = payroll.article5_number.data.attributes.height
  const article5TagImageObj = {
    url: article5TagImage,
    width: article5TagImageWidth,
    height: article5TagImageHeight,
  }

  const service = payrollText.service_title
  const service1 = payrollText.service1
  const service2 = payrollText.service2
  const service3 = payrollText.service3
  const service4 = payrollText.service4

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.service1_image.data.attributes.url
  const service1ImageWidth = payroll.service1_image.data.attributes.width
  const service1ImageHeight = payroll.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.service2_image.data.attributes.url
  const service2ImageWidth = payroll.service2_image.data.attributes.width
  const service2ImageHeight = payroll.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.service3_image.data.attributes.url
  const service3ImageWidth = payroll.service3_image.data.attributes.width
  const service3ImageHeight = payroll.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    payroll.service4_image.data.attributes.url
  const service4ImageWidth = payroll.service4_image.data.attributes.width
  const service4ImageHeight = payroll.service4_image.data.attributes.height

  var tableImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + payroll.table_image.data.attributes.url
  var tableImageWidth = payroll.table_image.data.attributes.width
  var tableImageHeight = payroll.table_image.data.attributes.height

  const contactUs = payrollText.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: payrollText.faq1,
      content: richTextReducer(payrollText.faq1_content),
    },
    {
      title: payrollText.faq2,
      content: richTextReducer(payrollText.faq2_content),
    },
    {
      title: payrollText.faq3,
      content: richTextReducer(payrollText.faq3_content),
    },
    {
      title: payrollText.faq4,
      content: richTextReducer(payrollText.faq4_content),
    },
    {
      title: payrollText.faq5,
      content: richTextReducer(payrollText.faq5_content),
    },
  ]

  return (
    <>
      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <div className='mt-10 self-start'>
          {/* <Image
            alt=''
            src={payrollTag}
            width={payrollTagWidth}
            height={payrollTagHeight}
            className='items-start'
          /> */}
          <span className='half_background mx-2 text-xl font-bold text-darkBlue'>
            {payrollTag}
          </span>
          <h3 className='mt-4 text-2xl font-bold text-darkBlue'>
            {payrollTitle}
          </h3>
        </div>
        <ImageArticle
          aboutImage={article1ImageObj}
          aboutArticle={article1Obj}
          tagImage={article1TagImageObj}
          imageLeft={true}
        />

        <ImageArticle
          aboutImage={article2ImageObj}
          aboutArticle={article2Obj}
          tagImage={article2TagImageObj}
          imageLeft={false}
        />
        <ImageArticle
          aboutImage={article3ImageObj}
          aboutArticle={article3Obj}
          tagImage={article3TagImageObj}
          imageLeft={true}
        />

        <ImageArticle
          aboutImage={article4ImageObj}
          aboutArticle={article4Obj}
          tagImage={article4TagImageObj}
          imageLeft={false}
        />

        <ImageArticle
          aboutImage={article5ImageObj}
          aboutArticle={article5Obj}
          tagImage={article5TagImageObj}
          imageLeft={true}
        />
        <div className='my-20 flex flex-col items-center'>
          <Image
            src={tableImage}
            alt=''
            width={tableImageWidth}
            height={tableImageHeight}
          />
        </div>
      </section>

      <section className='mt-20 w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-5xl px-0 pb-5 text-left'>
          <h3 className='mt-20 text-center text-4xl font-bold text-darkBlue'>
            {service}
          </h3>
          <div className='flex flex-col text-center md:flex-row'>
            <div className='mt-10 flex flex-col space-y-2 p-8 md:w-1/4'>
              <div className='self-center pb-6'>
                <Image
                  src={service1Image}
                  alt=''
                  width={service1ImageWidth}
                  height={service1ImageHeight}
                  className='my-1 w-32 object-fill md:w-full'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{service1}</h5>
            </div>

            <div className='mt-10 flex flex-col space-y-2 p-8 md:w-1/4'>
              <div className='self-center pb-6'>
                <Image
                  src={service2Image}
                  alt=''
                  width={service2ImageWidth}
                  height={service2ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{service2}</h5>
            </div>

            <div className='mt-10 flex flex-col space-y-2 p-8 md:w-1/4'>
              <div className='self-center pb-6'>
                <Image
                  src={service3Image}
                  alt=''
                  width={service3ImageWidth}
                  height={service3ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{service3}</h5>
            </div>

            <div className='mt-10 flex flex-col space-y-2 p-8 md:w-1/4'>
              <div className='self-center pb-6'>
                <Image
                  src={service4Image}
                  alt=''
                  width={service4ImageWidth}
                  height={service4ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto'
              />
              <h5 className='text-md pt-6 text-darkBlue'>{service4}</h5>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <Contact contactUs={contactUs} lng={lng} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}
