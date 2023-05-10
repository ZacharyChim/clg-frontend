import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../../lib/utils'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Contact from '../../../components/Contact'
import ImageArticle from '../../../components/ImageArticle'
import Faqs from '../../../components/Faqs'
import SecretaryCard from '../../../components/SecretaryCard'

export default async function Main() {
  const secretary = await fetchSingle('secretary')

  const advisory =
    process.env.NEXT_PUBLIC_STRAPI_URL + secretary.advisory.data.attributes.url
  const advisoryWidth = secretary.advisory.data.attributes.width
  const advisoryHeight = secretary.advisory.data.attributes.height
  const advisoryObj = {
    url: advisory,
    width: advisoryWidth,
    height: advisoryHeight,
  }
  const aboutTitle = secretary.about_title
  const aboutText = richTextReducer(secretary.about_content)
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

  const service = secretary.service_title

  const secretary1 = secretary.secretary1
  const secretary1Title = secretary.secretary1_title
  const secretary1Price = secretary.secretary1_price
  const secretary1Details = richTextReducer(secretary.secretary1_details)

  const secretary2 = secretary.secretary2
  const secretary2Title = secretary.secretary2_title
  const secretary2Price = secretary.secretary2_price
  const secretary2Details = richTextReducer(secretary.secretary2_details)

  const secretary3 = secretary.secretary3
  const secretary3Title = secretary.secretary3_title
  const secretary3Price = secretary.secretary3_price
  const secretary3Details = richTextReducer(secretary.secretary3_details)

  const otherSecretary1 = secretary.otherSecretary1
  const otherSecretary1Title = secretary.otherSecretary1_title
  const otherSecretary1Price = secretary.otherSecretary1_price
  const otherSecretary1Details = richTextReducer(
    secretary.otherSecretary1_details
  )

  const otherSecretary2 = secretary.otherSecretary2
  const otherSecretary2Title = secretary.otherSecretary2_title
  const otherSecretary2Price = secretary.otherSecretary2_price
  const otherSecretary2Details = richTextReducer(
    secretary.otherSecretary2_details
  )

  const otherSecretary3 = secretary.otherSecretary3
  const otherSecretary3Title = secretary.otherSecretary3_title
  const otherSecretary3Price = secretary.otherSecretary3_price
  const otherSecretary3Details = richTextReducer(
    secretary.otherSecretary3_details
  )

  const otherSecretary4 = secretary.otherSecretary4
  const otherSecretary4Title = secretary.otherSecretary4_title
  const otherSecretary4Price = secretary.otherSecretary4_price
  const otherSecretary4Details = richTextReducer(
    secretary.otherSecretary4_details
  )

  const otherSecretary5 = secretary.otherSecretary5
  const otherSecretary5Title = secretary.otherSecretary5_title
  const otherSecretary5Price = secretary.otherSecretary5_price
  const otherSecretary5Details = richTextReducer(
    secretary.otherSecretary5_details
  )

  const otherSecretary6 = secretary.otherSecretary6
  const otherSecretary6Title = secretary.otherSecretary6_title
  const otherSecretary6Price = secretary.otherSecretary6_price
  const otherSecretary6Details = richTextReducer(
    secretary.otherSecretary6_details
  )

  const contactUs = secretary.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: secretary.faq1,
      content: richTextReducer(secretary.faq1_content),
    },
    {
      title: secretary.faq2,
      content: richTextReducer(secretary.faq2_content),
    },
    {
      title: secretary.faq3,
      content: richTextReducer(secretary.faq3_content),
    },
    {
      title: secretary.faq4,
      content: richTextReducer(secretary.faq4_content),
    },
    {
      title: secretary.faq5,
      content: richTextReducer(secretary.faq5_content),
    },
    {
      title: secretary.faq6,
      content: richTextReducer(secretary.faq6_content),
    },
    {
      title: secretary.faq7,
      content: richTextReducer(secretary.faq7_content),
    },
    {
      title: secretary.faq8,
      content: richTextReducer(secretary.faq8_content),
    },
    {
      title: secretary.faq9,
      content: richTextReducer(secretary.faq9_content),
    },
    {
      title: secretary.faq10,
      content: richTextReducer(secretary.faq10_content),
    },
    {
      title: secretary.faq11,
      content: richTextReducer(secretary.faq11_content),
    },
    {
      title: secretary.faq12,
      content: richTextReducer(secretary.faq12_content),
    },
    {
      title: secretary.faq13,
      content: richTextReducer(secretary.faq13_content),
    },
    {
      title: secretary.faq14,
      content: richTextReducer(secretary.faq14_content),
    },
    {
      title: secretary.faq15,
      content: richTextReducer(secretary.faq15_content),
    },
    {
      title: secretary.faq16,
      content: richTextReducer(secretary.faq16_content),
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
        <Contact contactUs={contactUs} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}
