import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerCurve from '../public/footer-curve.png'
import BackToTop from './BackToTop'
import FloatingButtons from '../components/FloatingButtons'

const fetchFooter = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/footer?populate=%2A`
  )

  const footer = await res.json()
  return footer.data.attributes
}

const fetchSocial = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/footer?populate[0]=SocialIcons&populate[1]=SocialIcons.Icon&populate[2]=seoData.Icon.media`
  )

  const social = await res.json()
  return social.data.attributes.SocialIcons
}

const fetchLinks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/navigation/render/1`
  )

  const links = await res.json()
  return links
}

async function Footer() {
  const footer = await fetchFooter()
  const copyright = footer.copyright
  const allLinks = await fetchLinks()
  const linkWithParent = allLinks.filter((item) => item.parent !== null)
  // const linkAboutUS = linkWithParent.filter((item) => item.parent.id === 4)
  const linkAudit = linkWithParent.filter((item) => item.parent.id === 8)
  const linkAdvisory = linkWithParent.filter((item) => item.parent.id === 9)
  const linkFunding = linkWithParent.filter((item) => item.parent.id === 10)
  const linkIncorporation = linkWithParent.filter(
    (item) => item.parent.id === 19
  )
  const linkCloud = linkWithParent.filter((item) => item.parent.id === 20)
  const logoURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + footer.LogoWhite.data.attributes.url
  const logoWidth = footer.LogoWhite.data.attributes.width
  const logoHeight = footer.LogoWhite.data.attributes.height
  const social = await fetchSocial()
  const icons = social.map((icon) => ({
    text: icon.Text,
    iconURL: icon.Icon.data.attributes.url,
  }))

  return (
    <>
      <BackToTop />
      <FloatingButtons />
      <footer className='bg-oceanBlue'>
        <div className='h-full w-full bg-white'>
          <Image src={footerCurve} alt='' />
        </div>
        <div className='max-w-6xl space-y-8 px-10 py-16 md:mx-auto md:space-y-16 md:px-8'>
          <div className='grid grid-cols-1 gap-4 md:mx-auto md:grid-cols-4'>
            <div className='md:mx-auto md:border-r'>
              <div className='pb-8'>
                <Image
                  src={logoURL}
                  alt='CLG Group Logo'
                  width={logoWidth}
                  height={logoHeight}
                  quality='100'
                  className='ml-6'
                />
              </div>
              <ul>
                {icons.map((icon) => (
                  <li
                    className='flex items-center pb-5 pl-4 before:content-[""]'
                    key={v4()}
                  >
                    <span className='w-1/12'>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${icon.iconURL}`}
                        alt=''
                        width={28}
                        height={28}
                        quality='100'
                      />
                    </span>
                    <span className='w-11/12'>
                      <p className='pl-2 pr-4 text-xs text-grayishWhite'>
                        {icon.text}
                      </p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-2 lg:col-span-2 lg:grid-cols-4'>
          <div>
             {links.map((item) => (
                  <Link
                    href='#'
                    key={`footer-${item.id}`}
                    className='hover:text-brightRed'
                  >
                    {item.title}
                  </Link>
              ))} 
          </div>
        </div> */}

            <div className='arrow-list ml-6 grid grid-cols-1 gap-4 text-sm md:mx-auto lg:col-span-3 lg:grid-cols-4'>
              <div className='md:ml-4'>
                <p className='pb-4 font-bold text-grayishWhite'>
                  <Link href={allLinks[0].externalPath}>
                    {allLinks[0].title}
                  </Link>
                </p>
                <p className='pb-4 font-bold text-grayishWhite'>
                  <Link href={allLinks[1].externalPath}>
                    {allLinks[1].title}
                  </Link>
                </p>
                <p className='pb-4 font-bold text-grayishWhite'>
                  <Link href={allLinks[3].externalPath}>
                    {allLinks[3].title}
                  </Link>
                </p>
                <p className='pb-1 font-bold text-grayishWhite'>
                  <Link href={allLinks[2].externalPath}>
                    {allLinks[2].title}
                  </Link>
                </p>
              </div>

              <div>
                <p className='font-bold text-grayishWhite'>
                  {allLinks[4].title}
                </p>

                <nav className='mt-2'>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {linkAudit.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.externalPath}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p className='mb-3 font-bold text-grayishWhite'>
                    {allLinks[8].title}
                  </p>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {linkAdvisory.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.externalPath}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p className='mb-3 font-bold text-grayishWhite'>
                    {allLinks[11].title}
                  </p>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {linkFunding.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.externalPath}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div>
                <p className='mb-2 font-bold text-grayishWhite'>
                  {allLinks[16].title}
                </p>

                <nav className='mt-2'>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {linkIncorporation.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.externalPath}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div>
                <p className='font-bold text-grayishWhite'>
                  {allLinks[27].title}
                </p>

                <nav className='mt-2'>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {linkCloud.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.externalPath}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b-8 border-slate-900 bg-darkBlue'>
          <div className='mx-auto max-w-5xl space-y-8 px-4 py-5  sm:px-6 lg:space-y-16 lg:px-8'>
            <p className='text-xs text-grayishWhite'>{copyright}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
