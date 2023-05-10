import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 } from 'uuid'
import { fetchCollection, fetchSingle, trimTitle } from '../../lib/utils'

import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import partnershipTop from '../../../public/partnership-top.png'
import serviceTop from '../../../public/service-top.png'
import Contact from '../../components/Contact'
import Popup from '../../components/Popup'
import commaURL from '../../../public/comma.png'

import { useTranslation } from '../i18n'

// const fetchData = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-page?populate=%2A`
//   )

//   const resData = await res.json()
//   return resData
// }

// const fetchDesc = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-page?populate[0]=ImageDescLeft&populate[1]=ImageDescLeft.Image&populate[2]=ImageDescRight&populate[3]=ImageDescRight.Image&populate[4]=ImageDescLeft.ImageTitle&populate[5]=ImageDescRight.ImageTitle`
//   )

//   const resData = await res.json()
//   return resData
// }

export default async function Main(props: { lng: string }) {
  const data = await fetchSingle('home-page')

  const allCases = await fetchCollection('cases')
  const newCases = allCases.filter((item) => item.id < 4)

  const translate = (slug: string) => {
    return props.lng === 'hk'
      ? data.localizations.data[0].attributes[slug]
      : data[slug]
  }

  const introTitle = translate('intro_title')
  const introText = translate('intro_text')

  const descLeftURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.desc_left_image.data.attributes.url
  const descLeftWidth = data.desc_left_image.data.attributes.width
  const descLeftHeight = data.desc_left_image.data.attributes.height

  const descLeftTitleURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.desc_left_title.data.attributes.url
  const descLeftTitleWidth = data.desc_left_title.data.attributes.width
  const descLeftTitleHeight = data.desc_left_title.data.attributes.height

  const descLeft = translate('desc_left')
  const descRight = translate('desc_right')

  const descRightTitleURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.desc_right_title.data.attributes.url
  const descRightTitleWidth = data.desc_right_title.data.attributes.width
  const descRightTitleHeight = data.desc_right_title.data.attributes.height

  const descRightURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.desc_right_image.data.attributes.url
  const descRightWidth = data.desc_right_image.data.attributes.width
  const descRightHeight = data.desc_right_image.data.attributes.height

  const expURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.experience.data.attributes.url
  const expWidth = data.experience.data.attributes.width
  const expHeight = data.experience.data.attributes.height

  const expNumber = translate('experienceNumber')
  const expText = translate('experienceText')

  const clientURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.client.data.attributes.url
  const clientWidth = data.client.data.attributes.width
  const clientHeight = data.client.data.attributes.height

  const clientNumber = translate('clientNumber')
  const clientText = translate('clientText')

  const awardURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.award.data.attributes.url
  const awardWidth = data.award.data.attributes.width
  const awardHeight = data.award.data.attributes.height

  const awardTitle = translate('awardTitle')
  const awardText = translate('awardText')
  const awardDesc = translate('awardDesc')

  const xeroURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.xero.data.attributes.url
  const xeroWidth = data.xero.data.attributes.width
  const xeroHeight = data.xero.data.attributes.height

  const xeroSilverURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.xeroSilver.data.attributes.url
  const xeroSilverWidth = data.xeroSilver.data.attributes.width
  const xeroSilverHeight = data.xeroSilver.data.attributes.height

  const xeroTitle = translate('xeroTitle')
  const xeroText = translate('xeroText')

  const serviceTitle = translate('serviceTitle')
  const incorporation = translate('incorporation')
  const secretary = translate('secretary')
  const accounting = translate('accounting')
  const taxation = translate('taxation')
  const auditing = translate('auditing')
  const funding = translate('funding')
  const cloud = translate('cloud')
  const solution = translate('solution')

  const incorporationURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.incorporationImage.data.attributes.url
  const incorporationWidth = data.incorporationImage.data.attributes.width
  const incorporationHeight = data.incorporationImage.data.attributes.height

  const secretaryURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.secretaryImage.data.attributes.url
  const secretaryWidth = data.secretaryImage.data.attributes.width
  const secretaryHeight = data.secretaryImage.data.attributes.height

  const accountingURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.accountingImage.data.attributes.url
  const accountingWidth = data.accountingImage.data.attributes.width
  const accountingHeight = data.accountingImage.data.attributes.height

  const taxationURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.taxationImage.data.attributes.url
  const taxationWidth = data.taxationImage.data.attributes.width
  const taxationHeight = data.taxationImage.data.attributes.height

  const auditingURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.auditingImage.data.attributes.url
  const auditingWidth = data.auditingImage.data.attributes.width
  const auditingHeight = data.auditingImage.data.attributes.height

  const fundingURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.fundingImage.data.attributes.url
  const fundingWidth = data.fundingImage.data.attributes.width
  const fundingHeight = data.fundingImage.data.attributes.height

  const cloudURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.cloudImage.data.attributes.url
  const cloudWidth = data.cloudImage.data.attributes.width
  const cloudHeight = data.cloudImage.data.attributes.height

  const solutionURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.solutionImage.data.attributes.url
  const solutionWidth = data.solutionImage.data.attributes.width
  const solutionHeight = data.solutionImage.data.attributes.height

  const partnership = translate('partnership')
  const partnershipDesc = translate('partnershipDesc')

  const workstemURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.workstemLogo.data.attributes.url
  const workstemWidth = data.workstemLogo.data.attributes.width
  const workstemHeight = data.workstemLogo.data.attributes.height

  const hubdocURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.hubdocLogo.data.attributes.url
  const hubdocWidth = data.hubdocLogo.data.attributes.width
  const hubdocHeight = data.hubdocLogo.data.attributes.height

  const xeroLogoURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.xeroLogo.data.attributes.url
  const xeroLogoWidth = data.xeroLogo.data.attributes.width
  const xeroLogoHeight = data.xeroLogo.data.attributes.height

  const mshopURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.mshopLogo.data.attributes.url
  const mshopWidth = data.mshopLogo.data.attributes.width
  const mshopHeight = data.mshopLogo.data.attributes.height

  const gingersoftURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.gingersoftLogo.data.attributes.url
  const gingersoftWidth = data.gingersoftLogo.data.attributes.width
  const gingersoftHeight = data.gingersoftLogo.data.attributes.height

  const eats365URL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.eats365Logo.data.attributes.url
  const eats365Width = data.eats365Logo.data.attributes.width
  const eats365Height = data.eats365Logo.data.attributes.height

  const foodmarkethubURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.foodmarkethubLogo.data.attributes.url
  const foodmarkethubWidth = data.foodmarkethubLogo.data.attributes.width
  const foodmarkethubHeight = data.foodmarkethubLogo.data.attributes.height

  const yoovURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.yoovLogo.data.attributes.url
  const yoovWidth = data.yoovLogo.data.attributes.width
  const yoovHeight = data.yoovLogo.data.attributes.height

  const dkdooURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.dkdooLogo.data.attributes.url
  const dkdooWidth = data.dkdooLogo.data.attributes.width
  const dkdooHeight = data.dkdooLogo.data.attributes.height

  const kpayURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.kpayLogo.data.attributes.url
  const kpayWidth = data.kpayLogo.data.attributes.width
  const kpayHeight = data.kpayLogo.data.attributes.height

  const eberURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.eberLogo.data.attributes.url
  const eberWidth = data.eberLogo.data.attributes.width
  const eberHeight = data.eberLogo.data.attributes.height

  const hikeURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.hikeLogo.data.attributes.url
  const hikeWidth = data.hikeLogo.data.attributes.width
  const hikeHeight = data.hikeLogo.data.attributes.height

  const boutirURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.boutirLogo.data.attributes.url
  const boutirWidth = data.boutirLogo.data.attributes.width
  const boutirHeight = data.boutirLogo.data.attributes.height

  const postifyURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.postifyLogo.data.attributes.url
  const postifyWidth = data.postifyLogo.data.attributes.width
  const postifyHeight = data.postifyLogo.data.attributes.height

  const caseTitle = translate('caseTitle')
  const caseDesc = translate('caseDesc')

  const contactTitle = translate('contactTitle')
  const contactSubtitle = translate('contactSubtitle')
  const contactText = translate('contactText')

  const detailsLink = translate('details')

  return (
    <>
      <section
        id='desc'
        className='mx-auto mt-12 flex max-w-2xl flex-col items-center px-5 text-center'
      >
        <h3 className='mb-4 w-96 text-center text-4xl font-bold text-darkBlue'>
          {introTitle}
        </h3>
        <p className='my-6 text-justify leading-10'>{introText}</p>
        <span className='my-5 w-12'>
          <Image src={commaURL} alt='comma' width='70' height='51' />
        </span>
      </section>

      <section
        id='simple'
        className='bg-center md:bg-top mb-10 bg-curveLine bg-contain bg-no-repeat'
      >
        <div className='container mx-auto mt-10 flex max-w-5xl flex-col items-center space-y-12 px-10 md:flex-row md:space-y-0'>
          <div className='container mx-auto mt-10 flex flex-col space-y-12 px-4 md:w-1/2 md:flex-row md:space-y-0'>
            <Image
              src={descLeftURL}
              alt='Keep It Simple'
              width={descLeftWidth}
              height={descLeftHeight}
            />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={descLeftTitleURL}
              alt='Keep It Simple Title'
              width={descLeftTitleWidth}
              height={descLeftTitleHeight}
            />
            <p>{descLeft}</p>
          </div>
        </div>
        <div className='container mx-auto mt-10 flex max-w-5xl flex-col-reverse items-center space-y-12 px-10 md:flex-row md:space-y-0'>
          <div className='container mx-auto mt-10 flex flex-col space-y-8 px-4 md:w-1/2 md:space-y-0'>
            <Image
              src={descRightTitleURL}
              alt='Glow It Fast'
              width={descRightTitleWidth}
              height={descRightTitleHeight}
            />

            <p>{descRight}</p>
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={descRightURL}
              alt='Xero Silver Partner'
              width={descRightWidth}
              height={descRightHeight}
            />
          </div>
        </div>
      </section>

      <section id='numbers' className='bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-5xl px-5 text-center'>
          <div className='flex flex-col py-20 md:flex-row md:space-x-14'>
            <div className='h-30 flex flex-col items-center space-y-2 p-8 md:w-1/3'>
              <Image
                src={expURL}
                alt={expText}
                width={expWidth}
                height={expHeight}
              />
              <h5 className='pt-6 text-4xl font-bold text-veryDarkBlue'>
                {expNumber}
              </h5>
              <p className='text-xl'>{expText}</p>
            </div>

            <div className='h-30 flex flex-col items-center space-y-2 p-8 md:w-1/3'>
              <Image
                src={clientURL}
                alt={clientText}
                width={clientWidth}
                height={clientHeight}
              />
              <h5 className='pt-6 text-4xl font-bold text-veryDarkBlue'>
                {clientNumber}
              </h5>
              <p className='text-xl'>{clientText}</p>
            </div>

            <div className='h-30 flex flex-col items-center space-y-2 p-8 md:w-1/3'>
              <Image
                src={awardURL}
                alt={awardText}
                width={awardWidth}
                height={awardHeight}
              />
              <h5 className='pt-6 text-4xl font-bold text-veryDarkBlue'>
                {awardTitle}
              </h5>
              <p className='text-xl'>{awardText}</p>
              <p className='text-lg text-darkBlue'>{awardDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id='xero' className='bg-center bg-lineBg bg-cover bg-no-repeat'>
        <Image src={contactTop} alt='' />
        <div className='container mx-auto flex max-w-4xl flex-col px-4 py-40 md:flex-row'>
          <div className='mr-10 mb-10 flex flex-col items-center md:w-1/2'>
            <Image src={xeroURL} alt='' width={xeroWidth} height={xeroHeight} />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={xeroSilverURL}
              alt='Xero Silver Partner'
              width={xeroSilverWidth}
              height={xeroSilverHeight}
            />
            <h3 className='text-xl font-bold text-brightBlue'>{xeroTitle}</h3>
            <p className='text-darkBrown'>{xeroText}</p>
          </div>
        </div>
        <Image src={serviceTop} alt='' />
      </section>

      <section id='services' className='bg-deepBlue'>
        <div className='mx-auto max-w-4xl px-5 py-20 text-center'>
          <h2 className='mb-10 mt-10 text-4xl font-bold text-white '>
            {serviceTitle}
          </h2>

          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={incorporationURL}
                alt={incorporation}
                width={incorporationWidth}
                height={incorporationHeight}
              />
              <h5 className='text-md pt-6 text-white'>{incorporation}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={secretaryURL}
                alt={secretary}
                width={secretaryWidth}
                height={secretaryHeight}
              />
              <h5 className='text-md pt-6 text-white'>{secretary}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={accountingURL}
                alt={accounting}
                width={accountingWidth}
                height={accountingHeight}
              />
              <h5 className='text-md pt-6 text-white'>{accounting}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={taxationURL}
                alt={taxation}
                width={taxationWidth}
                height={taxationHeight}
              />
              <h5 className='text-md pt-6 text-white'>{taxation}</h5>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={auditingURL}
                alt={auditing}
                width={auditingWidth}
                height={auditingHeight}
              />
              <h5 className='text-md pt-6 text-white'>{auditing}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={fundingURL}
                alt={funding}
                width={fundingWidth}
                height={fundingHeight}
              />
              <h5 className='text-md pt-6 text-white'>{funding}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={cloudURL}
                alt={cloud}
                width={cloudWidth}
                height={cloudHeight}
              />
              <h5 className='text-md pt-6 text-white'>{cloud}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={solutionURL}
                alt={solution}
                width={solutionWidth}
                height={solutionHeight}
              />
              <h5 className='text-md pt-6 text-white'>{solution}</h5>
            </div>
          </div>
        </div>
      </section>

      <section id='partnership' className='bg-white'>
        <Image src={partnershipTop} alt='' />
        <div className='mx-auto max-w-4xl py-20 text-center'>
          <h2 className='mb-10 mt-10 text-4xl font-bold text-darkBlue '>
            {partnership}
          </h2>
          <p className='mb-10 text-lg text-darkBrown'>{partnershipDesc}</p>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-0'>
            <div className='flex flex-col justify-center space-y-2 md:w-1/4'>
              <Image
                src={workstemURL}
                alt=''
                width={workstemWidth}
                height={workstemHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={hubdocURL}
                alt=''
                width={hubdocWidth}
                height={hubdocHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={xeroLogoURL}
                alt=''
                width={xeroLogoWidth}
                height={xeroLogoHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={mshopURL}
                alt=''
                width={mshopWidth}
                height={mshopHeight}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/3'>
              <Image
                src={gingersoftURL}
                alt=''
                width={gingersoftWidth}
                height={gingersoftHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/3'>
              <Image
                src={eats365URL}
                alt=''
                width={eats365Width}
                height={eats365Height}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/3'>
              <Image
                src={foodmarkethubURL}
                alt=''
                width={foodmarkethubWidth}
                height={foodmarkethubHeight}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={yoovURL}
                alt=''
                width={yoovWidth}
                height={yoovHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={dkdooURL}
                alt=''
                width={dkdooWidth}
                height={dkdooHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={kpayURL}
                alt=''
                width={kpayWidth}
                height={kpayHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={eberURL}
                alt=''
                width={eberWidth}
                height={eberHeight}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={hikeURL}
                alt=''
                width={hikeWidth}
                height={hikeHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={boutirURL}
                alt=''
                width={boutirWidth}
                height={boutirHeight}
              />
            </div>

            <div className='flex flex-col justify-center space-y-2 p-6 md:w-1/4'>
              <Image
                src={postifyURL}
                alt=''
                width={postifyWidth}
                height={postifyHeight}
              />
            </div>
          </div>
        </div>
      </section>

      <section id='case' className='bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-5xl px-5 pt-32 pb-20 text-center'>
          <h2 className='mb-10 mt-10 text-4xl font-bold text-darkBlue '>
            {caseTitle}
          </h2>
          <p className='mb-10 text-lg text-darkBrown'>{caseDesc}</p>

          <div className='flex flex-col space-y-12 pb-20 md:flex-row md:space-x-14'>
            {newCases.map((item) => (
              <div
                key={v4()}
                className='mt-12 flex flex-col items-center space-y-2 md:w-1/3'
              >
                <article className='w-96 overflow-hidden border border-gray-100 bg-white shadow-sm md:w-auto'>
                  <Image
                    alt={item.attributes.title}
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      item.attributes.featuredImage.data.attributes.url
                    }
                    width={item.attributes.featuredImage.data.attributes.width}
                    height={
                      item.attributes.featuredImage.data.attributes.height
                    }
                    className='h-56 w-full object-cover'
                  />

                  <div className='p-4 text-left sm:p-6'>
                    <Link
                      href={
                        process.env.NEXT_PUBLIC_SITE_URL +
                        '/cases/' +
                        item.attributes.slug
                      }
                    >
                      <h3 className='text-md text-darkBrown'>
                        {trimTitle(item.attributes.title)}
                      </h3>
                    </Link>

                    <Link
                      href={
                        process.env.NEXT_PUBLIC_SITE_URL +
                        '/cases/' +
                        item.attributes.slug
                      }
                      className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                    >
                      {detailsLink}
                    </Link>
                  </div>
                </article>
              </div>
            ))}

            {/* <div className='flex flex-col items-center space-y-2 md:w-1/3'>
              <article className='overflow-hidden w-96 bg-white border border-gray-100 shadow-sm md:w-auto'>
                <Image
                  alt={post4.title}
                  src={post4URL}
                  width={post4.featuredImage.data.attributes.width}
                  height={post4.featuredImage.data.attributes.height}
                  className='h-56 w-full object-cover'
                />

                <div className='text-left p-4 sm:p-6'>
                  <Link href='#'>
                    <h3 className='text-md  text-darkBrown'>{post4.title}</h3>
                  </Link>

                  <Link
                    href='#'
                    className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                  >
                    DETAILS
                  </Link>
                </div>
              </article>
            </div>

            <div className='flex flex-col items-center space-y-2 md:w-1/3'>
              <article className='overflow-hidden w-96 bg-white border border-gray-100 shadow-sm md:w-auto'>
                <Image
                  alt={post5.title}
                  src={post5URL}
                  width={post5.featuredImage.data.attributes.width}
                  height={post5.featuredImage.data.attributes.height}
                  className='h-56 w-full object-cover'
                />

                <div className='text-left p-4 sm:p-6'>
                  <Link href='#'>
                    <h3 className='text-md text-darkBrown'>{post5.title}</h3>
                  </Link>

                  <Link
                    href='#'
                    className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                  >
                    DETAILS
                  </Link>
                </div>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id='contact' className='bg-white'>
        <Image src={contactTop} alt='' />
        <div className='mx-auto max-w-3xl pt-10 text-center'>
          <h2 className='mt-10 text-4xl font-bold text-darkBlue'>
            {contactTitle}
          </h2>
          <h2 className='mb-10 text-4xl font-bold text-darkBlue'>
            {contactSubtitle}
          </h2>
          {/* @ts-ignore */}
          <Contact contactUs={contactText} lng={props.lng} />
        </div>

        <Popup />
      </section>
    </>
  )
}
