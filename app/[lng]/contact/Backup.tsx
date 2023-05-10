import Image from 'next/image'
import React from 'react'
import { fetchSingle } from '../../../lib/utils'
import clg from '../../../public/clg-logo.png'
import facebook from '../../../public/icon-facebook.png'
import linkedin from '../../../public/icon-linkedin.png'
import instagram from '../../../public/icon-instagram.png'
import whatsapp from '../../../public/icon-whatsapp.png'
import whatsappBlue from '../../../public/icon-blue-whatsapp.png'
import emailBlue from '../../../public/icon-blue-email.png'
import mobileBlue from '../../../public/icon-blue-mobile.png'
import faxBlue from '../../../public/icon-blue-fax.png'
import addrBlue from '../../../public/icon-blue-addr.png'

export default async function Main() {
  const contact = await fetchSingle('contact')

  const title = contact.title
  const serviceTitle = contact.service_title
  const more = contact.more
  const audit = contact.audit
  const audit1 = contact.audit1
  const audit2 = contact.audit2
  const audit3 = contact.audit3
  const advisory = contact.advisory
  const advisory1 = contact.advisory1
  const advisory2 = contact.advisory2
  const funding = contact.funding
  const funding1 = contact.funding1
  const funding2 = contact.funding2
  const funding3 = contact.funding3
  const cloud = contact.cloud
  const cloud1 = contact.cloud1
  const cloud2 = contact.cloud2
  const cloud3 = contact.cloud3
  const cloud4 = contact.cloud4
  const cloud5 = contact.cloud5
  const hours = contact.hours

  const contactUs =
    process.env.NEXT_PUBLIC_STRAPI_URL + contact.contact_us.data.attributes.url
  const contactUsWidth = contact.contact_us.data.attributes.width
  const contactUsHeight = contact.contact_us.data.attributes.height

  return (
    <>
      <section className='items-left mx-auto mt-10 mb-40 flex max-w-5xl flex-col'>
        <Image
          src={contactUs}
          alt=''
          width={contactUsWidth}
          height={contactUsHeight}
        />

        <h3 className='mt-4 text-2xl font-bold text-darkBlue'>{title}</h3>

        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/3'>
            <Image src={clg} alt='' width={160} height={140} quality={100} />
            <div className='ml-2 flex flex-row gap-5'>
              <Image
                src={facebook}
                alt=''
                width={12}
                height={22}
                quality={100}
              />
              <Image
                src={linkedin}
                alt=''
                width={23}
                height={24}
                quality={100}
              />
              <Image
                src={instagram}
                alt=''
                width={22}
                height={22}
                quality={100}
              />
              <Image
                src={whatsapp}
                alt=''
                width={22}
                height={22}
                quality={100}
              />
            </div>
            <div className='mt-8 grid grid-cols-9 gap-y-6 gap-x-2'>
              <Image
                src={whatsappBlue}
                alt=''
                width={21}
                height={21}
                quality={100}
                className='col-span-1 mx-auto'
              />
              <span className='col-span-8 text-sm'>
                <span className='text-sm text-oceanBlue'>Whatsapp</span>: +853
                9542-1138
              </span>
              <Image
                src={emailBlue}
                alt=''
                width={21}
                height={18}
                quality={100}
                className='col-span-1 mx-auto'
              />
              <span className='col-span-8 text-sm'>
                <span className='text-sm text-oceanBlue'>Email</span>:
                info@clgcpa.com
              </span>
              <Image
                src={mobileBlue}
                alt=''
                width={15}
                height={21}
                quality={100}
                className='col-span-1 mx-auto'
              />
              <span className='col-span-8 text-sm'>
                <span className='text-sm text-oceanBlue'>Tel</span>: +853
                3564-8665
              </span>
              <Image
                src={faxBlue}
                alt=''
                width={22}
                height={22}
                quality={100}
                className='col-span-1 mx-auto'
              />
              <span className='col-span-8 text-sm'>
                <span className='text-sm text-oceanBlue'>Fax</span>: +853
                3464-0607
              </span>
              <Image
                src={addrBlue}
                alt=''
                width={18}
                height={21}
                quality={100}
                className='col-span-1 mx-auto'
              />
              <span className='col-span-8 mr-10 text-sm'>
                Room 2006, 20/F, Futura Plaza, 111-113 How Ming Street, Kwun
                Tong, Hong Kong 8
              </span>
            </div>
          </div>
          <div className='mt-14 md:w-2/3'>
            <span className='font-bold'>{serviceTitle}</span>
            <span className='text-oceanBlue'>{more}</span>

            <form action='#' className='mt-8 grid grid-cols-6 gap-3'>
              <div className='col-span-6 sm:col-span-2'>
                <span className='text-oceanBlue'>{audit}</span>
                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{audit1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{audit2}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{audit3}</span>
                </label>
              </div>

              <div className='col-span-6 sm:col-span-2'>
                <span className='text-oceanBlue'>{advisory}</span>
                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{advisory1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{advisory2}</span>
                </label>
              </div>

              <div className='col-span-6 sm:col-span-2'>
                <span className='text-oceanBlue'>{funding}</span>
                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{funding1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{funding2}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{funding3}</span>
                </label>
              </div>

              <div className='col-span-6 mt-6'>
                <span className='text-oceanBlue'>{cloud}</span>
              </div>
              <div className='col-span-6 sm:col-span-2'>
                <label htmlFor='MarketingAccept' className='flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud2}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud3}</span>
                </label>
              </div>
              <div className='col-span-6 sm:col-span-2'>
                <label htmlFor='MarketingAccept' className='flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud4}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud5}</span>
                </label>
              </div>

              <div className='col-span-6'></div>

              <div className='contact input-wrapper col-span-6 md:col-span-3'>
                <label htmlFor='Name' className='contact-label text-gray-700'>
                  Name
                </label>

                <input
                  type='text'
                  id='name'
                  name='name'
                  className='contact-input text-sm text-gray-700'
                  placeholder='Name'
                  required
                />
              </div>

              <div className='contact input-wrapper col-span-6 md:col-span-3'>
                <label htmlFor='Tel' className='contact-label text-gray-700'>
                  Tel
                </label>

                <input
                  type='tel'
                  id='tel'
                  name='tel'
                  className='contact-input text-sm text-gray-700'
                  placeholder='Tel'
                  required
                />
              </div>

              <div className='contact input-wrapper col-span-6'>
                <label htmlFor='Email' className='contact-label text-gray-700'>
                  Email
                </label>

                <input
                  type='email'
                  id='email'
                  name='email'
                  className='contact-input text-sm text-gray-700'
                  placeholder='Email'
                  required
                />
              </div>

              <div className='contact input-wrapper col-span-6 md:col-span-3'>
                <select
                  id='regions'
                  defaultValue={'Regions'}
                  className='contact-select relative w-full rounded-t-md'
                >
                  <option value='Regions' disabled>
                    Regions
                  </option>
                  <option value='1'>Africa</option>
                  <option value='2'>Asia</option>
                  <option value='3'>Europe</option>
                  <option value='4'>North America</option>
                  <option value='5'>South America</option>
                </select>
              </div>

              <div className='contact input-wrapper col-span-6 md:col-span-3'>
                <label
                  htmlFor='Industry'
                  className='contact-label text-gray-700'
                >
                  Business Industry
                </label>

                <input
                  type='text'
                  id='industry'
                  name='industry'
                  className='contact-input text-sm text-gray-700'
                  placeholder='Business Industry'
                  required
                />
              </div>

              <div className='contact input-wrapper col-span-6'>
                <label
                  htmlFor='Company'
                  className='contact-label text-gray-700'
                >
                  Company Name
                </label>

                <input
                  type='text'
                  id='company'
                  name='company'
                  className='contact-input text-sm text-gray-700'
                  placeholder='Company Name'
                  required
                />
              </div>

              <div className='contact input-wrapper col-span-6'>
                <label
                  htmlFor='Message'
                  className='contact-label text-gray-700'
                >
                  Message
                </label>

                <textarea
                  id='message'
                  name='message'
                  className='contact-input text-sm text-gray-700'
                  placeholder='Message'
                  required
                />
              </div>

              <div className='col-span-6 items-center gap-4'>
                <p className='mx-2 text-sm text-oceanBlue'>{hours}</p>

                <button className='mx-2 mt-4 shrink-0 rounded-full border border-blue-400 bg-blue-400 py-3 pl-10 pr-4 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500'>
                  SUBMIT <span className='ml-4'>&#10132;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
