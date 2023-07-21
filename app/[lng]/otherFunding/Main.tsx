import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Contact from '../../../components/Contact'
import { fetchSingleLang, richTextReducer, trimTitle } from '../../../lib/utils'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const otherFunding = await fetchSingleLang('other-funding', lng)
  let otherFundingText = otherFunding

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + otherFunding.image1.data.attributes.url
  const image1Width = otherFunding.image1.data.attributes.width
  const image1Height = otherFunding.image1.data.attributes.height

  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + otherFunding.image2.data.attributes.url
  const image2Width = otherFunding.image2.data.attributes.width
  const image2Height = otherFunding.image2.data.attributes.height

  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + otherFunding.image3.data.attributes.url
  const image3Width = otherFunding.image3.data.attributes.width
  const image3Height = otherFunding.image3.data.attributes.height

  const number1 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    otherFunding.number1.data.attributes.url
  const number1Width = otherFunding.number1.data.attributes.width
  const number1Height = otherFunding.number1.data.attributes.height
  const number2 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    otherFunding.number2.data.attributes.url
  const number2Width = otherFunding.number2.data.attributes.width
  const number2Height = otherFunding.number2.data.attributes.height
  const number3 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    otherFunding.number3.data.attributes.url
  const number3Width = otherFunding.number3.data.attributes.width
  const number3Height = otherFunding.number3.data.attributes.height

  const title1 = otherFundingText.title1
  const title2 = otherFundingText.title2
  const title3 = otherFundingText.title3

  const content1 = richTextReducer(otherFundingText.content1)
  const content2 = richTextReducer(otherFundingText.content2)
  const content3 = richTextReducer(otherFundingText.content3)

  const moreInfo = otherFundingText.more_info

  return (
    <section id='case' className='mx-auto flex max-w-5xl flex-col items-center'>
      <div className='mx-auto pt-20 text-center'>
        <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image1}
              width={image1Width}
              height={image1Height}
            />
          </div>
          <div className='text-left md:w-1/2'>
            <Image
              alt=''
              src={number1}
              width={number1Width}
              height={number1Height}
              className='object-fit h-16 w-16'
              quality='100'
            />
            <h2 className='mb-10 text-3xl font-bold text-darkBlue'>{title1}</h2>
            <article
              className='space-y-4 leading-7 text-darkBrown'
              dangerouslySetInnerHTML={{ __html: content1 }}
            ></article>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-8 px-5 pb-20 md:flex-row'>
        <div className='text-left md:w-1/2'>
          <Image
            alt=''
            src={number2}
            width={number2Width}
            height={number2Height}
            className='object-fit h-16 w-16'
            quality='100'
          />
          <h2 className='mb-10 text-3xl font-bold text-darkBlue'>{title2}</h2>
          <article
            className='space-y-4 leading-7 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: content2 }}
          ></article>
        </div>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image2}
            width={image2Width}
            height={image2Height}
          />
        </div>
      </div>

      <div className='flex flex-col gap-8 px-5 pb-20 md:flex-row'>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image3}
            width={image3Width}
            height={image3Height}
          />
        </div>
        <div className='text-left md:w-1/2'>
          <Image
            alt=''
            src={number3}
            width={number3Width}
            height={number3Height}
            className='object-fit h-16 w-16'
            quality='100'
          />
          <h2 className='mb-10 text-3xl font-bold text-darkBlue'>{title3}</h2>
          <article
            className='space-y-4 leading-7 text-darkBrown'
            dangerouslySetInnerHTML={{ __html: content3 }}
          ></article>
        </div>
      </div>

      <Contact contactUs={moreInfo} lng={lng} />
    </section>
  )
}
