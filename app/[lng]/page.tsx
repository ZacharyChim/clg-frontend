import Main from './Main'
import Hero from './Hero'
import { fetchMeta } from '../../lib/utils'
import type { Metadata } from 'next'

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string }
}): Promise<Metadata> {
  return await fetchMeta('home-page', lng)
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      {/* @ts-ignore */}
      <Hero lng={lng} />

      {/* @ts-ignore */}
      <Main lng={lng} />
    </>
  )
}
