import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import ImageArticle from '../../../components/ImageArticle'
import Contact from '../../../components/Contact'
import Faqs from '../../../components/Faqs'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const tvp = await fetchSingle('tvp')

  let tvpText

  lng === 'en'
    ? (tvpText = tvp)
    : (tvpText = tvp.localizations.data[0].attributes)

  const aboutTitle = tvpText.about_title
  const aboutText = richTextReducer(tvpText.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutText,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.about_image.data.attributes.url
  const aboutImageWidth = tvp.about_image.data.attributes.width
  const aboutImageHeight = tvp.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutImageWidth,
    height: aboutImageHeight,
  }

  const aboutTagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.funding_audit.data.attributes.url
  const aboutTagImageWidth = tvp.funding_audit.data.attributes.width
  const aboutTagImageHeight = tvp.funding_audit.data.attributes.height
  const aboutTagImageObj = {
    url: aboutTagImage,
    width: aboutTagImageWidth,
    height: aboutTagImageHeight,
  }

  const data1 = tvpText.data1
  const data1Desc = tvpText.data1_desc
  const data2 = tvpText.data2
  const data2Desc = tvpText.data2_desc
  const data3 = tvpText.data3
  const data3Desc = tvpText.data3_desc
  const data4 = tvpText.data4
  const data4Desc = tvpText.data4_desc

  const article1Title = ''
  const article1Text = richTextReducer(tvpText.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.article1_image.data.attributes.url
  const article1ImageWidth = tvp.article1_image.data.attributes.width
  const article1ImageHeight = tvp.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.article1_number.data.attributes.url
  const article1TagImageWidth = tvp.article1_number.data.attributes.width
  const article1TagImageHeight = tvp.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const diagramTitle = tvpText.diagram_title

  if (lng === 'en') {
    var diagram =
      process.env.NEXT_PUBLIC_STRAPI_URL + tvp.diagram.data.attributes.url
    var diagramWidth = tvp.diagram.data.attributes.width
    var diagramHeight = tvp.diagram.data.attributes.height
  } else {
    var diagram =
      process.env.NEXT_PUBLIC_STRAPI_URL + tvp.diagram_hk.data.attributes.url
    var diagramWidth = tvp.diagram_hk.data.attributes.width
    var diagramHeight = tvp.diagram_hk.data.attributes.height
  }
  const contactUs = tvpText.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: tvpText.faq1,
      content: richTextReducer(tvpText.faq1_content),
    },
    {
      title: tvpText.faq2,
      content: richTextReducer(tvpText.faq2_content),
    },
    {
      title: tvpText.faq3,
      content: richTextReducer(tvpText.faq3_content),
    },
    {
      title: tvpText.faq4,
      content: richTextReducer(tvpText.faq4_content),
    },
    {
      title: tvpText.faq5,
      content: richTextReducer(tvpText.faq5_content),
    },
    {
      title: tvpText.faq6,
      content: richTextReducer(tvpText.faq6_content),
    },
    {
      title: tvpText.faq7,
      content: richTextReducer(tvpText.faq7_content),
    },
    {
      title: tvpText.faq8,
      content: richTextReducer(tvpText.faq8_content),
    },
    {
      title: tvpText.faq9,
      content: richTextReducer(tvpText.faq9_content),
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

      <section className='my-10 w-full bg-veryLightBlue'>
        <div className='mx-auto max-w-5xl px-5 pb-5 text-left'>
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

            <div className='mx-auto mt-10 flex flex-col space-y-2 py-8'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data4}</h5>
              <p className='text-sm'>{data4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto flex max-w-5xl flex-col items-center'>
        <div className='my-10 flex flex-col items-center'>
          <h3 className='mb-20 text-center text-4xl font-bold text-darkBlue'>
            {diagramTitle}
          </h3>
          <Image
            src={diagram}
            alt=''
            width={diagramWidth}
            height={diagramHeight}
          />
        </div>
        <ImageArticle
          aboutImage={article1ImageObj}
          aboutArticle={article1Obj}
          tagImage={article1TagImageObj}
          imageLeft={true}
        />

        <Contact contactUs={contactUs} lng={lng} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}
