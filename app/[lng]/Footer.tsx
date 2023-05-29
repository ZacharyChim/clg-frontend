import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerCurve from '../../public/footer-curve.png'
import BackToTop from './BackToTop'
import FloatingButtons from '../../components/FloatingButtons'
import { fetchSingle } from '../../lib/utils'

async function Footer(props: { lng: string }) {
  const footer = await fetchSingle('footer')
  const floatingButtons = await fetchSingle('floating-button')
  const bottomMenuData = await fetchSingle('bottom-menu')
  let langBottomMenu
  props.lng === 'en'
    ? (langBottomMenu = bottomMenuData)
    : (langBottomMenu = bottomMenuData.localizations.data[0].attributes)

  const bottomMenu = [
    { title: langBottomMenu.home, url: langBottomMenu.home_url },
    { title: langBottomMenu.blog, url: langBottomMenu.blog_url },
    { title: langBottomMenu.contact_us, url: langBottomMenu.contact_us_url },
    {
      title: langBottomMenu.case_studies,
      url: langBottomMenu.case_studies_url,
    },
    {
      title: langBottomMenu.audit_assurance,
      url: langBottomMenu.audit_assurance_url,
    },
    { title: langBottomMenu.advisory, url: langBottomMenu.advisory_url },
    {
      title: langBottomMenu.funding_audit,
      url: langBottomMenu.funding_audit_url,
    },
    {
      title: langBottomMenu.incorporation,
      url: langBottomMenu.incorporation_url,
    },
    {
      title: langBottomMenu.cloud_solutions,
      url: langBottomMenu.cloud_solutions_url,
    },
  ]

  const auditAssuranceMenu = await fetchSingle('assurance-advisory-menu')
  let langAssuranceAdvisoryMenu
  props.lng === 'en'
    ? (langAssuranceAdvisoryMenu = auditAssuranceMenu)
    : (langAssuranceAdvisoryMenu =
        auditAssuranceMenu.localizations.data[0].attributes)

  const auditMenu = [
    {
      title: langAssuranceAdvisoryMenu.accounting_bookkeeping,
      url: langAssuranceAdvisoryMenu.accounting_bookkeeping_url,
    },
    {
      title: langAssuranceAdvisoryMenu.audit_assurance,
      url: langAssuranceAdvisoryMenu.audit_assurance_url,
    },
    {
      title: langAssuranceAdvisoryMenu.hong_kong_taxation,
      url: langAssuranceAdvisoryMenu.hong_kong_taxation_url,
    },
  ]

  const AdvisoryMenu = [
    {
      title: langAssuranceAdvisoryMenu.company_secretary,
      url: langAssuranceAdvisoryMenu.company_secretary_url,
    },
    {
      title: langAssuranceAdvisoryMenu.payroll_outsourcing_service,
      url: langAssuranceAdvisoryMenu.payroll_outsourcing_service_url,
    },
  ]

  const fundingMenu = [
    {
      title: langAssuranceAdvisoryMenu.bud,
      url: langAssuranceAdvisoryMenu.bud_url,
    },
    {
      title: langAssuranceAdvisoryMenu.tvp,
      url: langAssuranceAdvisoryMenu.tvp_url,
    },
    {
      title: langAssuranceAdvisoryMenu.others,
      url: langAssuranceAdvisoryMenu.others_url,
    },
  ]

  const incorporationMenu = [
    {
      title: langAssuranceAdvisoryMenu.anguilla,
      url: langAssuranceAdvisoryMenu.anguilla_url,
    },
    {
      title: langAssuranceAdvisoryMenu.british,
      url: langAssuranceAdvisoryMenu.british_url,
    },
    {
      title: langAssuranceAdvisoryMenu.bvi,
      url: langAssuranceAdvisoryMenu.bvi_url,
    },
    {
      title: langAssuranceAdvisoryMenu.canada,
      url: langAssuranceAdvisoryMenu.canada_url,
    },
    {
      title: langAssuranceAdvisoryMenu.cayman_island,
      url: langAssuranceAdvisoryMenu.cayman_island_url,
    },
    {
      title: langAssuranceAdvisoryMenu.hong_kong,
      url: langAssuranceAdvisoryMenu.hong_kong_url,
    },
    {
      title: langAssuranceAdvisoryMenu.malaysia,
      url: langAssuranceAdvisoryMenu.malaysia_url,
    },
    {
      title: langAssuranceAdvisoryMenu.ngo,
      url: langAssuranceAdvisoryMenu.ngo_url,
    },
    {
      title: langAssuranceAdvisoryMenu.seychelles,
      url: langAssuranceAdvisoryMenu.seychelles_url,
    },
    {
      title: langAssuranceAdvisoryMenu.singapore,
      url: langAssuranceAdvisoryMenu.singapore_url,
    },
  ]

  const cloudMenuData = await fetchSingle('cloud-solutions-menu')
  let langCloudMenu
  props.lng === 'en'
    ? (langCloudMenu = cloudMenuData)
    : (langCloudMenu = cloudMenuData.localizations.data[0].attributes)

  const cloudMenu = [
    {
      title: langCloudMenu.accounting_solution,
      url: langCloudMenu.accounting_solution_url,
    },
    { title: langCloudMenu.hrm_solution, url: langCloudMenu.hrm_solution_url },

    {
      title: langCloudMenu.fb_pos_solution,
      url: langCloudMenu.fb_pos_solution_url,
    },
    {
      title: langCloudMenu.receipt_filing_solution,
      url: langCloudMenu.receipt_filing_solution_url,
    },
    { title: langCloudMenu.online_shop, url: langCloudMenu.online_shop_url },
  ]

  let lang
  props.lng === 'en'
    ? (lang = floatingButtons)
    : (lang = floatingButtons.localizations.data[0].attributes)
  const translate = (slug: string) => {
    return props.lng === 'hk'
      ? footer.localizations.data[0].attributes[slug]
      : footer[slug]
  }
  const copyright = translate('copyright')

  const logoURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + footer.LogoWhite.data.attributes.url
  const logoWidth = footer.LogoWhite.data.attributes.width
  const logoHeight = footer.LogoWhite.data.attributes.height
  const addr = translate('addr_text')
  const icons = [
    {
      text: footer.whatsapp_text,
      iconURL: footer.whatsapp_icon.data.attributes.url,
    },
    {
      text: footer.email_text,
      iconURL: footer.email_icon.data.attributes.url,
    },
    {
      text: footer.tel_text,
      iconURL: footer.tel_icon.data.attributes.url,
    },
    {
      text: footer.fax_text,
      iconURL: footer.fax_icon.data.attributes.url,
    },
    {
      text: addr,
      iconURL: footer.addr_icon.data.attributes.url,
    },
  ]

  return (
    <>
      <BackToTop />
      <FloatingButtons lang={lang} />
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

            <div className='arrow-list ml-6 grid w-full grid-cols-1 gap-4 text-sm md:mx-auto lg:col-span-3 lg:grid-cols-4'>
              <div className='md:ml-4'>
                <p className='pb-4 font-bold text-grayishWhite'>
                  <Link href={bottomMenu[0].url}>{bottomMenu[0].title}</Link>
                </p>
                <p className='pb-4 font-bold text-grayishWhite'>
                  <Link href={bottomMenu[1].url}>{bottomMenu[1].title}</Link>
                </p>
                <p className='pb-4 font-bold text-grayishWhite'>
                  <Link href={bottomMenu[3].url}>{bottomMenu[3].title}</Link>
                </p>
                <p className='pb-1 font-bold text-grayishWhite'>
                  <Link href={bottomMenu[2].url}>{bottomMenu[2].title}</Link>
                </p>
              </div>

              <div>
                <p className='font-bold text-grayishWhite'>
                  {bottomMenu[4].title}
                </p>

                <nav className='mt-2'>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {auditMenu.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.url}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p className='mb-3 font-bold text-grayishWhite'>
                    {bottomMenu[5].title}
                  </p>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {AdvisoryMenu.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.url}
                          className='text-grayishWhite transition hover:opacity-75'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p className='mb-3 font-bold text-grayishWhite'>
                    {bottomMenu[6].title}
                  </p>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {fundingMenu.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.url}
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
                  {bottomMenu[7].title}
                </p>

                <nav className='mt-2'>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {incorporationMenu.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.url}
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
                  {bottomMenu[8].title}
                </p>

                <nav className='mt-2'>
                  <ul className='mb-4 space-y-3 text-xs'>
                    {cloudMenu.map((item) => (
                      <li key={v4()}>
                        <a
                          href={item.url}
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
          <div className='mx-auto max-w-5xl space-y-8 px-2 py-5 md:px-0 lg:space-y-16'>
            <p className='text-xs text-grayishWhite'>{copyright}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
