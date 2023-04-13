import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerCurve from '../public/footer-curve.png'
import BackToTop from './BackToTop'

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
      <footer className='bg-oceanBlue'>
        <div className='bg-white w-full h-full'>
          <Image src={footerCurve} alt='' />
        </div>
        <div className='max-w-6xl px-10 py-16 md:mx-auto space-y-8 md:space-y-16 md:px-8 arrow-list'>
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
                    className='flex pb-5 pl-4 items-center before:content-[""]'
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
                      <p className='pl-2 pr-4 text-grayishWhite text-xs'>
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

            <div className='ml-6 md:mx-auto grid grid-cols-1 gap-4 text-sm lg:col-span-3 lg:grid-cols-4'>
              <div className='md:ml-4'>
                <p className='font-bold text-grayishWhite pb-4'>
                  <Link href={allLinks[0].externalPath}>
                    {allLinks[0].title}
                  </Link>
                </p>
                <p className='font-bold text-grayishWhite pb-4'>
                  <Link href={allLinks[1].externalPath}>
                    {allLinks[1].title}
                  </Link>
                </p>
                <p className='font-bold text-grayishWhite pb-4'>
                  <Link href={allLinks[2].externalPath}>
                    {allLinks[2].title}
                  </Link>
                </p>
                <p className='font-bold text-grayishWhite pb-1'>
                  <Link href={allLinks[3].path}>{allLinks[3].title}</Link>
                </p>
              </div>

              <div>
                <p className='font-bold text-grayishWhite'>
                  {allLinks[4].title}
                </p>

                <nav className='mt-2'>
                  <ul className='space-y-3 text-xs mb-4'>
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

                  <p className='font-bold text-grayishWhite mb-3'>
                    {allLinks[8].title}
                  </p>
                  <ul className='space-y-3 text-xs mb-4'>
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

                  <p className='font-bold text-grayishWhite mb-3'>
                    {allLinks[11].title}
                  </p>
                  <ul className='space-y-3 text-xs mb-4'>
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
                <p className='font-bold text-grayishWhite mb-2'>
                  {allLinks[16].title}
                </p>

                <nav className='mt-2'>
                  <ul className='space-y-3 text-xs mb-4'>
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
                  <ul className='space-y-3 text-xs mb-4'>
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
        <div className='bg-darkBlue border-b-8 border-slate-900'>
          <div className='max-w-5xl px-4 py-5 mx-auto space-y-8  sm:px-6 lg:space-y-16 lg:px-8'>
            <p className='text-xs text-grayishWhite'>{copyright}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
