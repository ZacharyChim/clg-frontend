import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import logo from '../../public/logo.png'
import { fetchSingleLang } from '../../lib/utils'

async function Header({ lng }: { lng: string }) {
  const topMenu = await fetchSingleLang('top-menu', lng)
  const cloudSolutionsMenu = await fetchSingleLang('cloud-solutions-menu', lng)

  const cloudMenu = [
    {
      title: cloudSolutionsMenu.accounting_solution,
      url: cloudSolutionsMenu.accounting_solution_url,
    },
    {
      title: cloudSolutionsMenu.hrm_solution,
      url: cloudSolutionsMenu.hrm_solution_url,
    },
    {
      title: cloudSolutionsMenu.fb_pos_solution,
      url: cloudSolutionsMenu.fb_pos_solution_url,
    },
    {
      title: cloudSolutionsMenu.receipt_filing_solution,
      url: cloudSolutionsMenu.receipt_filing_solution_url,
    },
    {
      title: cloudSolutionsMenu.online_shop,
      url: cloudSolutionsMenu.online_shop_url,
    },
  ]

  const parentMenu = [
    { title: topMenu.home, url: topMenu.home_url },
    {
      title: topMenu.assurance_advisory,
      url: '',
    },
    { title: topMenu.cloud_solutions, url: '' },
    { title: topMenu.case_studies, url: topMenu.case_studies_url },
    { title: topMenu.blog, url: topMenu.blog_url },
    { title: topMenu.contact_us, url: topMenu.contact_us_url },
  ]

  const assuranceAdvisoryMenu = await fetchSingleLang(
    'assurance-advisory-menu',
    lng
  )

  let titleMenu
  titleMenu = [
    assuranceAdvisoryMenu.audit_assurance_title,
    assuranceAdvisoryMenu.advisory_title,
    assuranceAdvisoryMenu.funding_audit_title,
    assuranceAdvisoryMenu.incorporation_title,
    cloudSolutionsMenu.cloud_solutions_title,
  ]

  const auditMenu = [
    {
      title: assuranceAdvisoryMenu.audit_assurance,
      url: assuranceAdvisoryMenu.audit_assurance_url,
    },
    {
      title: assuranceAdvisoryMenu.hong_kong_taxation,
      url: assuranceAdvisoryMenu.hong_kong_taxation_url,
    },
  ]
  const advisoryMenu = [
    {
      title: assuranceAdvisoryMenu.company_secretary,
      url: assuranceAdvisoryMenu.company_secretary_url,
    },
    {
      title: assuranceAdvisoryMenu.payroll_outsourcing_service,
      url: assuranceAdvisoryMenu.payroll_outsourcing_service_url,
    },
  ]

  const fundMenu = [
    {
      title: assuranceAdvisoryMenu.bud,
      url: assuranceAdvisoryMenu.bud_url,
    },
    {
      title: assuranceAdvisoryMenu.tvp,
      url: assuranceAdvisoryMenu.tvp_url,
    },
    {
      title: assuranceAdvisoryMenu.others,
      url: assuranceAdvisoryMenu.others_url,
    },
  ]
  const incorMenu = [
    {
      title: assuranceAdvisoryMenu.hong_kong,
      url: assuranceAdvisoryMenu.hong_kong_url,
    },
    {
      title: assuranceAdvisoryMenu.singapore,
      url: assuranceAdvisoryMenu.singapore_url,
    },
    {
      title: assuranceAdvisoryMenu.british,
      url: assuranceAdvisoryMenu.british_url,
    },
    {
      title: assuranceAdvisoryMenu.canada,
      url: assuranceAdvisoryMenu.canada_url,
    },
    {
      title: assuranceAdvisoryMenu.anguilla,
      url: assuranceAdvisoryMenu.anguilla_url,
    },
    {
      title: assuranceAdvisoryMenu.cayman_island,
      url: assuranceAdvisoryMenu.cayman_island_url,
    },

    {
      title: assuranceAdvisoryMenu.malaysia,
      url: assuranceAdvisoryMenu.malaysia_url,
    },
    {
      title: assuranceAdvisoryMenu.bvi,
      url: assuranceAdvisoryMenu.bvi_url,
    },
    {
      title: assuranceAdvisoryMenu.seychelles,
      url: assuranceAdvisoryMenu.seychelles_url,
    },
    {
      title: assuranceAdvisoryMenu.ngo,
      url: assuranceAdvisoryMenu.ngo_url,
    },
  ]

  return (
    <>
      <header>
        <Navigation
          parentMenu={parentMenu}
          titleMenu={titleMenu}
          auditMenu={auditMenu}
          advisoryMenu={advisoryMenu}
          fundMenu={fundMenu}
          incorMenu={incorMenu}
          cloudMenu={cloudMenu}
          logoURL={logo}
          lng={lng}
        />
      </header>
    </>
  )
}

export default Header
