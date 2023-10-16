import React from 'react'
import { fetchSingleLang, richTextReducer, trimTitle } from '../../../lib/utils'
import ImageArticle from '../../../components/ImageArticle'
import Contact from '../../../components/Contact'
import Faqs from '../../../components/Faqs'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const tax = await fetchSingleLang('tax', lng)
  let taxDataText = tax

  const audit =
    process.env.NEXT_PUBLIC_STRAPI_URL + tax.audit.data.attributes.url
  const auditWidth = tax.audit.data.attributes.width
  const auditHeight = tax.audit.data.attributes.height
  const auditObj = {
    url: audit,
    width: auditWidth,
    height: auditHeight,
  }

  const aboutTitle = taxDataText.about_title
  const aboutText = richTextReducer(taxDataText.about_text)
  const aboutArticle = {
    title: aboutTitle,
    text: aboutText,
  }

  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tax.about_image.data.attributes.url
  const aboutWidth = tax.about_image.data.attributes.width
  const aboutHeight = tax.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutWidth,
    height: aboutHeight,
  }

  const taxImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tax.tax_image.data.attributes.url
  const taxImageWidth = tax.tax_image.data.attributes.width
  const taxImageHeight = tax.tax_image.data.attributes.height
  const taxImageObj = {
    url: taxImage,
    width: taxImageWidth,
    height: taxImageHeight,
  }

  const taxTitle = taxDataText.tax_title
  const taxText = richTextReducer(taxDataText.tax_text)
  const taxArticle = {
    title: taxTitle,
    text: taxText,
  }

  const contactUs = taxDataText.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: taxDataText.faq1,
      content: richTextReducer(taxDataText.faq1_content),
    },
    {
      title: taxDataText.faq2,
      content: richTextReducer(taxDataText.faq2_content),
    },
    {
      title: taxDataText.faq3,
      content: richTextReducer(taxDataText.faq3_content),
    },
    {
      title: taxDataText.faq4,
      content: richTextReducer(taxDataText.faq4_content),
    },
    {
      title: taxDataText.faq5,
      content: richTextReducer(taxDataText.faq5_content),
    },
    {
      title: taxDataText.faq6,
      content: richTextReducer(taxDataText.faq6_content),
    },
    {
      title: taxDataText.faq7,
      content: richTextReducer(taxDataText.faq7_content),
    },
  ]

  return (
    <section className='mx-auto flex max-w-5xl flex-col items-center'>
      <ImageArticle
        aboutImage={aboutImageObj}
        aboutArticle={aboutArticle}
        // tagImage={auditObj}
        imageLeft={false}
      />

      <ImageArticle
        aboutImage={taxImageObj}
        aboutArticle={taxArticle}
        imageLeft={true}
      />

      <Contact contactUs={contactUs} lng={lng} />

      <Faqs faqs={faqs} />
    </section>
  )
}
