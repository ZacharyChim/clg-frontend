import Image from 'next/image'
import earth from '../public/earth.png'
import { v4 } from 'uuid'
import { fetchSingle } from '../lib/utils'

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
export default async function Countries(props: PropType) {
  const dataMenu = await fetchSingle('incorporation-menu')

  let data

  props.lng === 'en'
    ? (data = dataMenu)
    : (data = dataMenu.localizations.data[0].attributes)

  const nav = [
    { title: data.anguilla, url: data.anguilla_url },
    { title: data.british, url: data.british_url },
    { title: data.bvi, url: data.bvi_url },
    { title: data.canada, url: data.canada_url },
    { title: data.cayman_island, url: data.cayman_island_url },
    { title: data.malaysia, url: data.malaysia_url },
    { title: data.seychelles, url: data.seychelles_url },
    { title: data.singapore, url: data.singapore_url },
  ]
  return (
    <div className='mx-10 mb-10 flex flex-col md:mx-auto md:w-1/5'>
      <div className='flex flex-row border-b border-black pb-4'>
        <Image src={earth} alt='' width='23' height='23' />
        <span className='ml-2 font-bold text-darkBlue '>
          {data.other_countries}
        </span>
      </div>
      <div className='mt-3 text-sm leading-8'>
        <ul>
          {nav.map((item) => (
            <li key={v4()}>
              <a
                href={item.url}
                className={`${
                  props.country === item.title
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
