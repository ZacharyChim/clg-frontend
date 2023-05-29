import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import ImageArticle from '../../../components/ImageArticle'
import Contact from '../../../components/Contact'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Faqs from '../../../components/Faqs'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const bud = await fetchSingle('bud')
  let budText

  lng === 'en'
    ? (budText = bud)
    : (budText = bud.localizations.data[0].attributes)

  const aboutTitle = budText.about_title
  const aboutText = richTextReducer(budText.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutText,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.about_image.data.attributes.url
  const aboutImageWidth = bud.about_image.data.attributes.width
  const aboutImageHeight = bud.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutImageWidth,
    height: aboutImageHeight,
  }

  const aboutTagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.funding_audit.data.attributes.url
  const aboutTagImageWidth = bud.funding_audit.data.attributes.width
  const aboutTagImageHeight = bud.funding_audit.data.attributes.height
  const aboutTagImageObj = {
    url: aboutTagImage,
    width: aboutTagImageWidth,
    height: aboutTagImageHeight,
  }

  const data1 = budText.data1
  const data1Desc = budText.data1_desc
  const data2 = budText.data2
  const data2Desc = budText.data2_desc
  const data3 = budText.data3
  const data3Desc = budText.data3_desc
  const data4 = budText.data4
  const data4Desc = budText.data4_desc

  const article1Title = ''
  const article1Text = richTextReducer(budText.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article1_image.data.attributes.url
  const article1ImageWidth = bud.article1_image.data.attributes.width
  const article1ImageHeight = bud.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article1_number.data.attributes.url
  const article1TagImageWidth = bud.article1_number.data.attributes.width
  const article1TagImageHeight = bud.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const article2Title = ''
  const article2Text = richTextReducer(budText.article2_text)
  const article2Obj = {
    title: article2Title,
    text: article2Text,
  }

  const article2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article2_image.data.attributes.url
  const article2ImageWidth = bud.article2_image.data.attributes.width
  const article2ImageHeight = bud.article2_image.data.attributes.height
  const article2ImageObj = {
    url: article2Image,
    width: article2ImageWidth,
    height: article2ImageHeight,
  }

  const article2TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article2_number.data.attributes.url
  const article2TagImageWidth = bud.article2_number.data.attributes.width
  const article2TagImageHeight = bud.article2_number.data.attributes.height
  const article2TagImageObj = {
    url: article2TagImage,
    width: article2TagImageWidth,
    height: article2TagImageHeight,
  }

  const contactUs = budText.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: budText.faq1,
      content: richTextReducer(budText.faq1_content),
    },
    {
      title: budText.faq2,
      content: richTextReducer(budText.faq2_content),
    },
    {
      title: budText.faq3,
      content: richTextReducer(budText.faq3_content),
    },
    {
      title: budText.faq4,
      content: richTextReducer(budText.faq4_content),
    },
    {
      title: budText.faq5,
      content: richTextReducer(budText.faq5_content),
    },
    {
      title: budText.faq6,
      content: richTextReducer(budText.faq6_content),
    },
    {
      title: budText.faq7,
      content: richTextReducer(budText.faq7_content),
    },
    {
      title: budText.faq8,
      content: richTextReducer(budText.faq8_content),
    },
    {
      title: budText.faq9,
      content: richTextReducer(budText.faq9_content),
    },
    {
      title: budText.faq10,
      content: richTextReducer(budText.faq10_content),
    },
    {
      title: budText.faq11,
      content: richTextReducer(budText.faq11_content),
    },
    {
      title: budText.faq12,
      content: richTextReducer(budText.faq12_content),
    },
  ]

  return (
    <>
      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <ImageArticle
          aboutImage={aboutImageObj}
          aboutArticle={aboutObj}
          tagImage={aboutTagImageObj}
          imageLeft={false}
        />
      </section>

      <section className='my-20 w-full bg-veryLightBlue'>
        <div
          className={`mx-auto ${
            lng === 'en' ? 'max-w-5xl' : 'max-w-4xl'
          } px-5 pb-5 text-left`}
        >
          <div className='flex flex-col text-center md:flex-row'>
            <div className='mx-auto mt-10 flex flex-col space-y-2 py-8'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data1}</h5>
              <p className='text-sm'>{data1Desc}</p>
            </div>

            <div className='mx-auto mt-10 flex flex-col space-y-2 py-8'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data2}</h5>
              <p className='text-sm'>{data2Desc}</p>
            </div>

            <div className='mx-auto mt-10 flex flex-col space-y-2 py-8'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data3}</h5>
              <p className='text-sm'>{data3Desc}</p>
            </div>

            <div className=' mx-auto mt-10 flex flex-col space-y-2 py-8'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data4}</h5>
              <p className='text-sm'>{data4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <ImageArticle
          aboutImage={article1ImageObj}
          aboutArticle={article1Obj}
          tagImage={article1TagImageObj}
          imageLeft={false}
        />

        <ImageArticle
          aboutImage={article2ImageObj}
          aboutArticle={article2Obj}
          tagImage={article2TagImageObj}
          imageLeft={true}
        />
        <Contact contactUs={contactUs} lng={lng} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}
