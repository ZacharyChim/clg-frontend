import Main from './Main'
import Hero from './Hero'

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
