import Link from 'next/link'
import { fetchSingleLang } from '../lib/utils'

type PropType = {
  contactUs: string
  lng: string
}

export default async function Contact({
  contactUs,
  lng,
}: {
  contactUs: string
  lng: string
}) {
  const footer = await fetchSingleLang('footer', lng)

  const buttonText = footer.contact_us
  return (
    <div className='mt-10 flex max-w-4xl flex-col items-center justify-center'>
      <div className='mx-5 flex flex-col items-center justify-center bg-contactBg bg-cover pb-20 md:flex-row'>
        <p className='mt-56 ml-20 mr-1 mb-2 text-left text-lg text-darkBlue md:mt-44'>
          {contactUs}
        </p>
        <Link
          className='text-md mr-2 inline-block w-2/5 place-self-end rounded-full bg-white py-2 px-4 text-center font-bold text-darkBlue hover:bg-darkBlue hover:text-white md:mb-6'
          href='/contact'
        >
          {buttonText}
        </Link>
      </div>
    </div>
  )
}
