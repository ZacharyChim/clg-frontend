// 'use client'
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import logo from '../../public/logo.png'
import { fetchSingle } from '../../lib/utils'

const fetchMenu = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/navigation/render/2`
  )

  const menu = await res.json()

  return menu
}

async function Header(props: { lng: string }) {
  const menu = await fetchMenu()
  const topMenu = await fetchSingle('top-menu')
  const topMenuHK = topMenu.localizations.data[0].attributes
  const cloudSolutionsMenu = await fetchSingle('cloud-solutions-menu')
  const cloudSolutionsMenuHK =
    cloudSolutionsMenu.localizations.data[0].attributes
  let langCloudSolutionsMenu
  props.lng === 'en'
    ? (langCloudSolutionsMenu = cloudSolutionsMenu)
    : (langCloudSolutionsMenu = cloudSolutionsMenuHK)
  const cloudMenu = [
    {
      title: langCloudSolutionsMenu.accounting_solution,
      url: langCloudSolutionsMenu.accounting_solution_url,
    },
    {
      title: langCloudSolutionsMenu.hrm_solution,
      url: langCloudSolutionsMenu.hrm_solution_url,
    },
    {
      title: langCloudSolutionsMenu.pos_solution,
      url: langCloudSolutionsMenu.pos_solution_url,
    },
    {
      title: langCloudSolutionsMenu.fb_pos_solution,
      url: langCloudSolutionsMenu.fb_pos_solution_url,
    },
    {
      title: langCloudSolutionsMenu.receipt_filing_solution,
      url: langCloudSolutionsMenu.receipt_filing_solution_url,
    },
    {
      title: langCloudSolutionsMenu.online_shop,
      url: langCloudSolutionsMenu.online_shop_url,
    },
  ]
  let menuLang
  props.lng === 'en' ? (menuLang = topMenu) : (menuLang = topMenuHK)
  const parentMenu = [
    { title: menuLang.home, url: menuLang.home_url },
    {
      title: menuLang.assurance_advisory,
      url: '',
    },
    { title: menuLang.cloud_solutions, url: '' },
    { title: menuLang.case_studies, url: menuLang.case_studies_url },
    { title: menuLang.blog, url: menuLang.blog_url },
    { title: menuLang.contact_us, url: menuLang.contact_us_url },
  ]

  // const parentMenu = menu.filter((item: any) => item.parent === null)
  const childMenu = menu.filter((item: any) => item.parent !== null)

  const assuranceAdvisoryMenu = await fetchSingle('assurance-advisory-menu')
  const assuranceAdvisoryMenuHK =
    assuranceAdvisoryMenu.localizations.data[0].attributes
  let titleMenu
  props.lng === 'en'
    ? (titleMenu = [
        assuranceAdvisoryMenu.audit_assurance_title,
        assuranceAdvisoryMenu.advisory_title,
        assuranceAdvisoryMenu.funding_audit_title,
        assuranceAdvisoryMenu.incorporation_title,
        cloudSolutionsMenu.cloud_solutions_title,
      ])
    : (titleMenu = [
        assuranceAdvisoryMenuHK.audit_assurance_title,
        assuranceAdvisoryMenuHK.advisory_title,
        assuranceAdvisoryMenuHK.funding_audit_title,
        assuranceAdvisoryMenuHK.incorporation_title,
        cloudSolutionsMenuHK.cloud_solutions_title,
      ])

  let langAssuranceAdvisoryMenu
  props.lng === 'en'
    ? (langAssuranceAdvisoryMenu = assuranceAdvisoryMenu)
    : (langAssuranceAdvisoryMenu = assuranceAdvisoryMenuHK)
  const auditMenu = [
    {
      title: langAssuranceAdvisoryMenu.audit_assurance,
      url: langAssuranceAdvisoryMenu.audit_assurance_url,
    },
    {
      title: langAssuranceAdvisoryMenu.hong_kong_taxation,
      url: langAssuranceAdvisoryMenu.hong_kong_taxation_url,
    },
  ]
  const advisoryMenu = [
    {
      title: langAssuranceAdvisoryMenu.company_secretary,
      url: langAssuranceAdvisoryMenu.company_secretary_url,
    },
    {
      title: langAssuranceAdvisoryMenu.payroll_outsourcing_service,
      url: langAssuranceAdvisoryMenu.payroll_outsourcing_service_url,
    },
  ]

  const fundMenu = [
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
  const incorMenu = [
    {
      title: langAssuranceAdvisoryMenu.hong_kong,
      url: langAssuranceAdvisoryMenu.hong_kong_url,
    },
    {
      title: langAssuranceAdvisoryMenu.singapore,
      url: langAssuranceAdvisoryMenu.singapore_url,
    },
    {
      title: langAssuranceAdvisoryMenu.british,
      url: langAssuranceAdvisoryMenu.british_url,
    },
    {
      title: langAssuranceAdvisoryMenu.cayman_island,
      url: langAssuranceAdvisoryMenu.cayman_island_url,
    },
    {
      title: langAssuranceAdvisoryMenu.anguilla,
      url: langAssuranceAdvisoryMenu.anguilla_url,
    },
    {
      title: langAssuranceAdvisoryMenu.ngo,
      url: langAssuranceAdvisoryMenu.ngo_url,
    },
    {
      title: langAssuranceAdvisoryMenu.malaysia,
      url: langAssuranceAdvisoryMenu.malaysia_url,
    },
    {
      title: langAssuranceAdvisoryMenu.bvi,
      url: langAssuranceAdvisoryMenu.bvi_url,
    },
    {
      title: langAssuranceAdvisoryMenu.seychelles,
      url: langAssuranceAdvisoryMenu.seychelles_url,
    },
    {
      title: langAssuranceAdvisoryMenu.canada,
      url: langAssuranceAdvisoryMenu.canada_url,
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
          lng={props.lng}
        />
      </header>
    </>
  )
}

export default Header
