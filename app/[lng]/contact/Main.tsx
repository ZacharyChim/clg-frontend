'use client'
import Image from 'next/image'
import React from 'react'
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
import contactUs from '../../../public/contact_us.png'
import Link from 'next/link'

export default function Main() {
  const title = 'Fill up the form and our team will get back to you soon.'
  const serviceTitle = 'Which Services Are You Interested In ?'
  const more = '(You Can Select More Than One)'
  const audit = 'AUDIT & ASSURANCE'
  const audit1 = 'Accounting and Bookkeeping'
  const audit2 = 'Audit Assurance'
  const audit3 = 'Hong Kong Taxation'
  const advisory = 'ADVISORY'
  const advisory1 = 'Company Secretary'
  const advisory2 = 'Payroll Outsourcing Service'
  const funding = 'FUNDING AUDIT'
  const funding1 = 'BUD'
  const funding2 = 'TVP'
  const funding3 = 'Other Fundings'
  const cloud = 'CLOUD SOLUTION'
  const cloud1 = 'Accounting Solution'
  const cloud2 = 'HRM Solution'
  const cloud3 = 'POS System / F&B POS System'
  const cloud4 = 'Bookkeeping Documentation'
  const cloud5 = 'Online Shop'
  const hours = 'We will contact you within 24 hours of completing the form.'

  const contactUsWidth = 88
  const contactUsHeight = 16

  function unCheck(name: string) {
    var get = document.getElementsByName(name)

    for (var i = 0; i < get.length; i++) {
      get[i].checked = false
    }
  }

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    const formData = new FormData(event.target)
    const value = Object.fromEntries(formData.entries())

    let regions
    event.target.regions.value === 'Regions'
      ? (regions = '')
      : (regions = event.target.regions.value)

    let data = {
      data: {
        audit: '',
        advisory: '',
        funding: '',
        cloud: '',
        name: formData.get('name'),
        tel: formData.get('tel'),
        email: formData.get('email'),
        regions: regions,
        industry: formData.get('industry'),
        company: formData.get('company'),
        message: formData.get('message'),
      },
    }

    if (formData.getAll('audit').length !== 0) {
      data.data.audit = formData.getAll('audit').toString()
    }
    if (formData.getAll('advisory').length !== 0) {
      data.data.advisory = formData.getAll('advisory').toString()
    }
    if (formData.getAll('funding').length !== 0) {
      data.data.funding = formData.getAll('funding').toString()
    }
    if (formData.getAll('cloud').length !== 0) {
      data.data.cloud = formData.getAll('cloud').toString()
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/form'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    alert(`Your message is received. We will contact you within 24 hours.`)
    event.target.name.value = ''
    event.target.tel.value = ''
    event.target.email.value = ''
    event.target.industry.value = ''
    event.target.company.value = ''
    event.target.message.value = ''
    event.target.regions.selectedIndex = 0
    unCheck('audit')
    unCheck('advisory')
    unCheck('funding')
    unCheck('cloud')
  }

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
              <Link href='https://www.facebook.com/CLGCPA'>
                <Image
                  src={facebook}
                  alt=''
                  width={12}
                  height={22}
                  quality={100}
                />
              </Link>
              <Link href='https://www.linkedin.com/company/clggroupcpa/'>
                <Image
                  src={linkedin}
                  alt=''
                  width={23}
                  height={24}
                  quality={100}
                />
              </Link>
              <Link href='https://www.instagram.com/clg_group_hk/'>
                <Image
                  src={instagram}
                  alt=''
                  width={22}
                  height={22}
                  quality={100}
                />
              </Link>
              <Link href='https://api.whatsapp.com/send/?phone=85295421138&text&type=phone_number&app_absent=0'>
                <Image
                  src={whatsapp}
                  alt=''
                  width={22}
                  height={22}
                  quality={100}
                />
              </Link>
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
                Tong, Hong Kong
              </span>
            </div>
          </div>
          <div className='mt-14 md:w-2/3'>
            <span className='font-bold'>{serviceTitle}</span>
            <span className='text-oceanBlue'>{more}</span>

            <form
              onSubmit={handleSubmit}
              className='mt-8 grid grid-cols-6 gap-3'
            >
              <div className='col-span-6 sm:col-span-2'>
                <span className='text-oceanBlue'>{audit}</span>
                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={audit1}
                    value={audit1}
                    name='audit'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{audit1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={audit2}
                    value={audit2}
                    name='audit'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{audit2}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={audit3}
                    value={audit3}
                    name='audit'
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
                    id={advisory1}
                    value={advisory1}
                    name='advisory'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{advisory1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={advisory2}
                    value={advisory2}
                    name='advisory'
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
                    id={funding1}
                    value={funding1}
                    name='funding'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{funding1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={funding2}
                    value={funding2}
                    name='funding'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{funding2}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={funding3}
                    value={funding3}
                    name='funding'
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
                    id={cloud1}
                    value={cloud1}
                    name='cloud'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud1}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={cloud2}
                    value={cloud2}
                    name='cloud'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud2}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={cloud3}
                    value={cloud3}
                    name='cloud'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud3}</span>
                </label>
              </div>
              <div className='col-span-6 sm:col-span-2'>
                <label htmlFor='MarketingAccept' className='flex gap-1'>
                  <input
                    type='checkbox'
                    id={cloud4}
                    value={cloud4}
                    name='cloud'
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>{cloud4}</span>
                </label>

                <label htmlFor='MarketingAccept' className='mt-2 flex gap-1'>
                  <input
                    type='checkbox'
                    id={cloud5}
                    value={cloud5}
                    name='cloud'
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
                  required
                >
                  <option value='Regions' disabled>
                    Regions
                  </option>
                  <option value='Africa'>Africa</option>
                  <option value='Asia'>Asia</option>
                  <option value='Europe'>Europe</option>
                  <option value='North America'>North America</option>
                  <option value='South America'>South America</option>
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
