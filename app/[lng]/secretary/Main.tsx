import Image from 'next/image'
import React from 'react'
import { fetchSingleLang, richTextReducer, trimTitle } from '../../../lib/utils'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Contact from '../../../components/Contact'
import ImageArticle from '../../../components/ImageArticle'
import Faqs from '../../../components/Faqs'
import SecretaryCard from '../../../components/SecretaryCard'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const secretary = await fetchSingleLang('secretary', lng)
  let secretaryText = secretary

  const advisory =
    process.env.NEXT_PUBLIC_STRAPI_URL + secretary.advisory.data.attributes.url
  const advisoryWidth = secretary.advisory.data.attributes.width
  const advisoryHeight = secretary.advisory.data.attributes.height
  const advisoryObj = {
    url: advisory,
    width: advisoryWidth,
    height: advisoryHeight,
  }
  const aboutTitle = secretaryText.about_title
  const aboutText = richTextReducer(secretaryText.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutText,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    secretary.about_image.data.attributes.url
  const aboutWidth = secretary.about_image.data.attributes.width
  const aboutHeight = secretary.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutWidth,
    height: aboutHeight,
  }

  const service = secretaryText.service_title

  const secretary1 = secretaryText.secretary1
  const secretary1Title = secretaryText.secretary1_title
  const secretary1Price = secretaryText.secretary1_price
  const secretary1Details = richTextReducer(secretaryText.secretary1_details)

  const secretary2 = secretaryText.secretary2
  const secretary2Title = secretaryText.secretary2_title
  const secretary2Price = secretaryText.secretary2_price
  const secretary2Details = richTextReducer(secretaryText.secretary2_details)

  const secretary3 = secretaryText.secretary3
  const secretary3Title = secretaryText.secretary3_title
  const secretary3Price = secretaryText.secretary3_price
  const secretary3Details = richTextReducer(secretaryText.secretary3_details)

  const otherSecretary1 = secretaryText.otherSecretary1
  const otherSecretary1Title = secretaryText.otherSecretary1_title
  const otherSecretary1Price = secretaryText.otherSecretary1_price
  const otherSecretary1Details = richTextReducer(
    secretaryText.otherSecretary1_details
  )

  const otherSecretary2 = secretaryText.otherSecretary2
  const otherSecretary2Title = secretaryText.otherSecretary2_title
  const otherSecretary2Price = secretaryText.otherSecretary2_price
  const otherSecretary2Details = richTextReducer(
    secretaryText.otherSecretary2_details
  )

  const otherSecretary3 = secretaryText.otherSecretary3
  const otherSecretary3Title = secretaryText.otherSecretary3_title
  const otherSecretary3Price = secretaryText.otherSecretary3_price
  const otherSecretary3Details = richTextReducer(
    secretaryText.otherSecretary3_details
  )

  const otherSecretary4 = secretaryText.otherSecretary4
  const otherSecretary4Title = secretaryText.otherSecretary4_title
  const otherSecretary4Price = secretaryText.otherSecretary4_price
  const otherSecretary4Details = richTextReducer(
    secretaryText.otherSecretary4_details
  )

  const otherSecretary5 = secretaryText.otherSecretary5
  const otherSecretary5Title = secretaryText.otherSecretary5_title
  const otherSecretary5Price = secretaryText.otherSecretary5_price
  const otherSecretary5Details = richTextReducer(
    secretaryText.otherSecretary5_details
  )

  const otherSecretary6 = secretaryText.otherSecretary6
  const otherSecretary6Title = secretaryText.otherSecretary6_title
  const otherSecretary6Price = secretaryText.otherSecretary6_price
  const otherSecretary6Details = richTextReducer(
    secretaryText.otherSecretary6_details
  )

  const contactUs = secretaryText.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: secretaryText.faq1,
      content: richTextReducer(secretaryText.faq1_content),
    },
    {
      title: secretaryText.faq2,
      content: richTextReducer(secretaryText.faq2_content),
    },
    {
      title: secretaryText.faq3,
      content: richTextReducer(secretaryText.faq3_content),
    },
    {
      title: secretaryText.faq4,
      content: richTextReducer(secretaryText.faq4_content),
    },
    {
      title: secretaryText.faq5,
      content: richTextReducer(secretaryText.faq5_content),
    },
    {
      title: secretaryText.faq6,
      content: richTextReducer(secretaryText.faq6_content),
    },
    {
      title: secretaryText.faq7,
      content: richTextReducer(secretaryText.faq7_content),
    },
    {
      title: secretaryText.faq8,
      content: richTextReducer(secretaryText.faq8_content),
    },
    {
      title: secretaryText.faq9,
      content: richTextReducer(secretaryText.faq9_content),
    },
    {
      title: secretaryText.faq10,
      content: richTextReducer(secretaryText.faq10_content),
    },
    {
      title: secretaryText.faq11,
      content: richTextReducer(secretaryText.faq11_content),
    },
    {
      title: secretaryText.faq12,
      content: richTextReducer(secretaryText.faq12_content),
    },
    {
      title: secretaryText.faq13,
      content: richTextReducer(secretaryText.faq13_content),
    },
    {
      title: secretaryText.faq14,
      content: richTextReducer(secretaryText.faq14_content),
    },
    {
      title: secretaryText.faq15,
      content: richTextReducer(secretaryText.faq15_content),
    },
  ]

  return (
    <>
      <section className='mx-auto mb-20 flex max-w-5xl flex-col items-center'>
        <ImageArticle
          aboutImage={aboutImageObj}
          aboutArticle={aboutObj}
          tagImage={advisoryObj}
          imageLeft={false}
        />
      </section>

      <section id='numbers' className='w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-7xl px-5 text-left'>
          <h3 className='my-20 text-center text-4xl font-bold text-darkBlue'>
            {service}
          </h3>
          <div className='grid h-fit gap-6 pb-20 md:grid-cols-3'>
            <SecretaryCard
              type={secretary1}
              title={secretary1Title}
              price={secretary1Price}
              details={secretary1Details}
            />
            <SecretaryCard
              type={secretary2}
              title={secretary2Title}
              price={secretary2Price}
              details={secretary2Details}
            />
            <SecretaryCard
              type={secretary3}
              title={secretary3Title}
              price={secretary3Price}
              details={secretary3Details}
            />
            <SecretaryCard
              type={otherSecretary1}
              title={otherSecretary1Title}
              price={otherSecretary1Price}
              details={otherSecretary1Details}
            />
            <SecretaryCard
              type={otherSecretary2}
              title={otherSecretary2Title}
              price={otherSecretary2Price}
              details={otherSecretary2Details}
            />
            <SecretaryCard
              type={otherSecretary3}
              title={otherSecretary3Title}
              price={otherSecretary3Price}
              details={otherSecretary3Details}
            />
            <SecretaryCard
              type={otherSecretary4}
              title={otherSecretary4Title}
              price={otherSecretary4Price}
              details={otherSecretary4Details}
            />
            <SecretaryCard
              type={otherSecretary5}
              title={otherSecretary5Title}
              price={otherSecretary5Price}
              details={otherSecretary5Details}
            />
            <SecretaryCard
              type={otherSecretary6}
              title={otherSecretary6Title}
              price={otherSecretary6Price}
              details={otherSecretary6Details}
            />
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
