import Image from 'next/image'
import earth from '../public/earth.png'
import { v4 } from 'uuid'
import { fetchSingle, fetchSingleLang } from '../lib/utils'

const fetchLinks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/navigation/render/3`
  )

  const links = await res.json()
  return links
}

type PropType = {
  country: string
  lng: string
}
export default async function Countries({
  country,
  lng,
}: {
  country: string
  lng: string
}) {
  const dataMenu = await fetchSingleLang('incorporation-menu', lng)

  const nav = [
    { title: dataMenu.anguilla, url: dataMenu.anguilla_url },
    { title: dataMenu.british, url: dataMenu.british_url },
    { title: dataMenu.bvi, url: dataMenu.bvi_url },
    { title: dataMenu.canada, url: dataMenu.canada_url },
    { title: dataMenu.cayman_island, url: dataMenu.cayman_island_url },
    { title: dataMenu.malaysia, url: dataMenu.malaysia_url },
    { title: dataMenu.seychelles, url: dataMenu.seychelles_url },
    { title: dataMenu.singapore, url: dataMenu.singapore_url },
  ]
  return (
    <div className='mx-10 mb-10 flex flex-col md:mx-auto md:w-1/5'>
      <div className='flex flex-row border-b border-black pb-4'>
        <Image src={earth} alt='' width='23' height='23' />
        <span className='ml-2 font-bold text-darkBlue '>
          {dataMenu.other_countries}
        </span>
      </div>
      <div className='mt-3 text-sm leading-8'>
        <ul>
          {nav.map((item) => (
            <li key={v4()}>
              <a
                href={item.url}
                className={`${
                  country === item.title
                    ? 'half_background text-black'
                    : 'text-darkGrayishBlue'
                } transition hover:opacity-75`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
