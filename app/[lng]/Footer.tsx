import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerCurve from '../../public/footer-curve.png'
import BackToTop from './BackToTop'
import FloatingButtons from '../../components/FloatingButtons'
import { fetchSingleLang } from '../../lib/utils'

async function Footer({ lng }: { lng: string }) {
  const footer = await fetchSingleLang('footer', lng)
  const bottomMenuData = await fetchSingleLang('bottom-menu', lng)

  const bottomMenu = [
    { title: bottomMenuData.home, url: bottomMenuData.home_url },
    { title: bottomMenuData.blog, url: bottomMenuData.blog_url },
    { title: bottomMenuData.contact_us, url: bottomMenuData.contact_us_url },
    {
      title: bottomMenuData.case_studies,
      url: bottomMenuData.case_studies_url,
    },
    {
      title: bottomMenuData.audit_assurance,
      url: bottomMenuData.audit_assurance_url,
    },
    { title: bottomMenuData.advisory, url: bottomMenuData.advisory_url },
    {
      title: bottomMenuData.funding_audit,
      url: bottomMenuData.funding_audit_url,
    },
    {
      title: bottomMenuData.incorporation,
      url: bottomMenuData.incorporation_url,
    },
    {
      title: bottomMenuData.cloud_solutions,
      url: bottomMenuData.cloud_solutions_url,
    },
  ]

  const auditAssuranceMenu = await fetchSingleLang(
    'assurance-advisory-menu',
    lng
  )

  const auditMenu = [
    {
      title: auditAssuranceMenu.accounting_bookkeeping,
      url: auditAssuranceMenu.accounting_bookkeeping_url,
    },
    {
      title: auditAssuranceMenu.audit_assurance,
      url: auditAssuranceMenu.audit_assurance_url,
    },
    {
      title: auditAssuranceMenu.hong_kong_taxation,
      url: auditAssuranceMenu.hong_kong_taxation_url,
    },
  ]

  const AdvisoryMenu = [
    {
      title: auditAssuranceMenu.company_secretary,
      url: auditAssuranceMenu.company_secretary_url,
    },
    {
      title: auditAssuranceMenu.payroll_outsourcing_service,
      url: auditAssuranceMenu.payroll_outsourcing_service_url,
    },
  ]

  const fundingMenu = [
    {
      title: auditAssuranceMenu.bud,
      url: auditAssuranceMenu.bud_url,
    },
    {
      title: auditAssuranceMenu.tvp,
      url: auditAssuranceMenu.tvp_url,
    },
    {
      title: auditAssuranceMenu.others,
      url: auditAssuranceMenu.others_url,
    },
  ]

  const incorporationMenu = [
    {
      title: auditAssuranceMenu.anguilla,
      url: auditAssuranceMenu.anguilla_url,
    },
    {
      title: auditAssuranceMenu.british,
      url: auditAssuranceMenu.british_url,
    },
    {
      title: auditAssuranceMenu.bvi,
      url: auditAssuranceMenu.bvi_url,
    },
    {
      title: auditAssuranceMenu.canada,
      url: auditAssuranceMenu.canada_url,
    },
    {
      title: auditAssuranceMenu.cayman_island,
      url: auditAssuranceMenu.cayman_island_url,
    },
    {
      title: auditAssuranceMenu.hong_kong,
      url: auditAssuranceMenu.hong_kong_url,
    },
    {
      title: auditAssuranceMenu.malaysia,
      url: auditAssuranceMenu.malaysia_url,
    },
    {
      title: auditAssuranceMenu.ngo,
      url: auditAssuranceMenu.ngo_url,
    },
    {
      title: auditAssuranceMenu.seychelles,
      url: auditAssuranceMenu.seychelles_url,
    },
    {
      title: auditAssuranceMenu.singapore,
      url: auditAssuranceMenu.singapore_url,
    },
  ]

  const cloudMenuData = await fetchSingleLang('cloud-solutions-menu', lng)

  const cloudMenu = [
    {
      title: cloudMenuData.accounting_solution,
      url: cloudMenuData.accounting_solution_url,
    },
    { title: cloudMenuData.hrm_solution, url: cloudMenuData.hrm_solution_url },

    {
      title: cloudMenuData.fb_pos_solution,
      url: cloudMenuData.fb_pos_solution_url,
    },
    {
      title: cloudMenuData.receipt_filing_solution,
      url: cloudMenuData.receipt_filing_solution_url,
    },
    { title: cloudMenuData.online_shop, url: cloudMenuData.online_shop_url },
  ]

  const floatingButtons = await fetchSingleLang('floating-button', lng)
  const lang = floatingButtons

  const copyright = footer.copyright

  const logoURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + footer.LogoWhite.data.attributes.url
  const logoWidth = footer.LogoWhite.data.attributes.width
  const logoHeight = footer.LogoWhite.data.attributes.height
  const addr = footer.addr_text

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
    {
      text: footer.web_text,
      iconURL: footer.web_icon.data.attributes.url,
    },
  ]

  const IconText = (props: any) => {
    if (props.iconText === 'Email') {
      return (
        <>
          Email :<a href='mailto:info@clgcpa.com'> info@clgcpa.com</a>
        </>
      )
    } else if (
      props.iconText === 'Website' ||
      props.iconText === '網站' ||
      props.iconText === '网站'
    ) {
      return (
        <>
          {props.iconText} :{' '}
          <a href='https://clggroup.com.hk'>clggroup.com.hk</a>
        </>
      )
    } else {
      return <>{props.iconText}</>
    }
  }
  return (
    <>
      <BackToTop />
      <FloatingButtons lang={lang} lng={lng} />
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
                        <IconText iconText={icon.text} />
                      </p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

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
