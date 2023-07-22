import React from 'react'
import Main from './Main'
import Hero from '../../../../components/Hero'
import { fetchAllCollection } from '../../../../lib/utils'
import type { Metadata } from 'next'

type PageProps = {
  params: {
    slug: string
    lng: string
  }
}

export async function generateStaticParams() {
  let params: {}[] = []
  const cases = await fetchAllCollection('cases')

  cases.map((item: any) => {
    params.push({ lng: 'en', slug: item.attributes.slug as string })
  })

  cases.map((item: any) => {
    params.push({ lng: 'hk', slug: item.attributes.slug as string })
  })

  cases.map((item: any) => {
    params.push({ lng: 'cn', slug: item.attributes.slug as string })
  })

  return params
}

const fetchCaseMeta = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/cases/${slug}`
  )

  const resData = await res.json()
  return {
    title: resData.data.attributes.meta_title
      ? resData.data.attributes.meta_title
      : 'CLG Group | Accounting | Funding Audit | TVP Audit | BUD Audit | Company Secretary | Xero Hong Kong',
    description: resData.data.attributes.meta_description
      ? resData.data.attributes.meta_description
      : 'By facing substantial change in society and the general environment, we are always passionate about finding solutions for different business difficulties, to help our clients to work smartly and easily everyday.  We did it through our three main service scopes — cloud solutions, assurance, and advisory.  We are always doing our best to assist our clients with their challenging and tough business tasks and realize their largest aspiration in their business.',
    keywords: resData.data.attributes.meta_keywords
      ? resData.data.attributes.meta_keywords
      : 'Accounting, Funding Audit, TVP Audit, BUD Audit, Company Secretary, Xero Hong Kong',
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params
  return await fetchCaseMeta(slug)
}

export default function caseDetail({ params }: PageProps) {
  const { lng, slug } = params

  return (
    <>
      {/* @ts-ignore */}
      <Hero page='case-study' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} slug={slug} />
    </>
  )
}
