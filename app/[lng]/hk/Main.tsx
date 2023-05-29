import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import Contact from '../../../components/Contact'
import Faqs from '../../../components/Faqs'
import number1 from '../../../public/01.png'
import number2 from '../../../public/02.png'
import number3 from '../../../public/03.png'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const hk = await fetchSingle('hk')
  let hkText

  lng === 'en' ? (hkText = hk) : (hkText = hk.localizations.data[0].attributes)

  const serviceTitle = hkText.service_title
  const serviceDesc = hkText.service_desc

  const service1 = hkText.service1_title
  const service2 = hkText.service2_title
  const service3 = hkText.service3_title
  const service4 = hkText.service4_title

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service1_image.data.attributes.url
  const service1ImageWidth = hk.service1_image.data.attributes.width
  const service1ImageHeight = hk.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service2_image.data.attributes.url
  const service2ImageWidth = hk.service2_image.data.attributes.width
  const service2ImageHeight = hk.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service3_image.data.attributes.url
  const service3ImageWidth = hk.service3_image.data.attributes.width
  const service3ImageHeight = hk.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service4_image.data.attributes.url
  const service4ImageWidth = hk.service4_image.data.attributes.width
  const service4ImageHeight = hk.service4_image.data.attributes.height

  const procedureTitle = hkText.procedure_title
  const procedureStep1 = richTextReducer(hkText.procedure_step1)
  const procedureStep2 = richTextReducer(hkText.procedure_step2)
  const procedureStep3 = richTextReducer(hkText.procedure_step3)

  const contactUs = hkText.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: hkText.faq1,
      content: richTextReducer(hkText.faq1_content),
    },
    {
      title: hkText.faq2,
      content: richTextReducer(hkText.faq2_content),
    },
    {
      title: hkText.faq3,
      content: richTextReducer(hkText.faq3_content),
    },
    {
      title: hkText.faq4,
      content: richTextReducer(hkText.faq4_content),
    },
    {
      title: hkText.faq5,
      content: richTextReducer(hkText.faq5_content),
    },
    {
      title: hkText.faq6,
      content: richTextReducer(hkText.faq6_content),
    },
  ]

  return (
    <>
      <section className='mx-auto mt-10 flex max-w-5xl flex-col items-center'>
        <h3 className='mb-6 mt-4 text-2xl font-bold text-darkBlue'>
          {serviceTitle}
        </h3>
        <p className='max-w-lg text-center text-darkBrown'>{serviceDesc}</p>
      </section>

      <section
        className='md:bg-bottom mx-auto mb-10 flex w-full flex-col items-center md:bg-hkWave md:bg-contain md:bg-no-repeat'
        style={{ backgroundPosition: 'bottom' }}
      >
        <div className='mx-auto max-w-5xl px-5 text-left'>
          <div className='flex flex-col gap-2 py-10 text-center md:flex-row '>
            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/4'>
              <Image
                src={service1Image}
                alt=''
                width={service1ImageWidth}
                height={service1ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-8 pt-6 text-darkBlue md:text-white'>
                {service1}
              </h5>
            </div>

            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/4'>
              <Image
                src={service2Image}
                alt=''
                width={service2ImageWidth}
                height={service2ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-8 pt-6 text-darkBlue md:text-white'>
                {service2}
              </h5>
            </div>

            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/4'>
              <Image
                src={service3Image}
                alt=''
                width={service3ImageWidth}
                height={service3ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-6 pt-6 text-darkBlue md:text-white'>
                {service3}
              </h5>
            </div>

            <div className='mt-10 flex flex-col items-center space-y-2 md:w-1/4'>
              <Image
                src={service4Image}
                alt=''
                width={service4ImageWidth}
                height={service4ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md mx-8 pt-6 text-darkBlue md:text-white'>
                {service4}
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto mt-20 mb-10 flex max-w-4xl flex-col items-center'>
        <h3 className='mb-14 mt-4 max-w-xl text-center text-4xl font-bold text-darkBlue'>
          {procedureTitle}
        </h3>
        <div className='grid grid-cols-1 gap-10 leading-10 md:grid-cols-5'>
          <div className='col-span-1 font-bold text-darkBrown'>
            <p>STEP</p>
            <Image
              src={number1}
              alt=''
              width={85}
              height={83}
              quality={100}
              className='ml-6'
            />
          </div>
          <div className='col-span-4 mt-8 pl-10'>
            <article
              dangerouslySetInnerHTML={{ __html: procedureStep1 }}
            ></article>
          </div>
          <div className='col-span-1 font-bold text-darkBrown'>
            <p>STEP</p>
            <Image
              src={number2}
              alt=''
              width={85}
              height={83}
              quality={100}
              className='ml-6'
            />
          </div>
          <div className='col-span-4 mt-8 pl-10'>
            <article
              dangerouslySetInnerHTML={{ __html: procedureStep2 }}
            ></article>
          </div>
          <div className='col-span-1 font-bold text-darkBrown'>
            <p>STEP</p>
            <Image
              src={number3}
              alt=''
              width={85}
              height={83}
              quality={100}
              className='ml-6'
            />
          </div>
          <div className='col-span-4 mt-8 pl-10'>
            <article
              dangerouslySetInnerHTML={{ __html: procedureStep3 }}
            ></article>
          </div>
        </div>
        <Contact contactUs={contactUs} lng={lng} />
        <Faqs faqs={faqs} />
      </section>
    </>
  )
}
