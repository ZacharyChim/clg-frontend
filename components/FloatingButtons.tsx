'use client'
import { Button, Modal } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import demoImage from '../public/demo.png'
import calendar from '../public/calendar.png'
import whatsapp from '../public/whatsapp2.png'
import chat from '../public/chat.png'
import React, { useEffect, useState } from 'react'

export default function FloatingButtons() {
  // const [hidePopup, setHidePopup] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    let regions
    event.target.regions.value === 'Regions'
      ? (regions = '')
      : (regions = event.target.regions.value)

    let data = {
      data: {
        name: formData.get('name'),
        tel: formData.get('tel'),
        email: formData.get('email'),
        regions: regions,
        industry: formData.get('industry'),
        company: formData.get('company'),
        message: formData.get('message'),
      },
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/demo'

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
    setOpen(false)
  }

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <div className='relative'>
        <div className='fixed top-1/3 right-5'>
          <button type='button' onClick={() => setOpen(true)}>
            <Image
              src={calendar}
              width='50'
              height='50'
              alt=''
              quality={100}
              className='mb-4'
            ></Image>
          </button>
          <Link href='https://api.whatsapp.com/send/?phone=85295421138&text&type=phone_number&app_absent=0'>
            <Image
              src={whatsapp}
              width='50'
              height='50'
              alt=''
              quality={100}
              className='mb-4'
            ></Image>
          </Link>
          <Image src={chat} width='50' height='50' alt='' quality={100}></Image>
        </div>
      </div>

      <Modal
        size='5xl'
        dismissible={true}
        show={isOpen}
        onClose={() => setOpen(false)}
      >
        <Modal.Body className='p-0 max-w-5xl'>
          <div className='relative cursor-pointer text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
            <span
              onClick={() => setOpen(false)}
              className='absolute right-5 top-3'
            >
              X
            </span>
          </div>
          <div className='flex flex-row'>
            <div className='space-y-4 m-10 w-3/5'>
              <h3 className='text-darkBlue text-2xl font-bold p-0'>
                Schedule a Demo
              </h3>
              <p className='text-left text-md text-veryDarkBlue p-0 m-0'>
                Tell us about your business, goals and challenges. Our Team is
                ready to plan the route to success and then walk through
                together with you.
              </p>
              <form
                onSubmit={handleSubmit}
                className='m-0 grid grid-cols-4 items-center'
              >
                <div className='col-span-2 contact input-wrapper'>
                  <label htmlFor='Name' className='text-gray-700 contact-label'>
                    Name
                  </label>

                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='Name'
                    required
                  />
                </div>

                <div className='col-span-2 contact input-wrapper'>
                  <label htmlFor='Tel' className='text-gray-700 contact-label'>
                    Tel
                  </label>

                  <input
                    type='tel'
                    id='tel'
                    name='tel'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='Tel'
                    required
                  />
                </div>

                <div className='col-span-4 contact input-wrapper'>
                  <label
                    htmlFor='Email'
                    className='text-gray-700 contact-label'
                  >
                    Email
                  </label>

                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='Email'
                    required
                  />
                </div>

                <div className='col-span-2 contact input-wrapper'>
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

                <div className='col-span-2 contact input-wrapper'>
                  <label
                    htmlFor='Industry'
                    className='text-gray-700 contact-label'
                  >
                    Business Industry
                  </label>

                  <input
                    type='text'
                    id='industry'
                    name='industry'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='Business Industry'
                    required
                  />
                </div>

                <div className='col-span-2 contact input-wrapper'>
                  <label
                    htmlFor='Company'
                    className='text-gray-700 contact-label'
                  >
                    Company Name
                  </label>

                  <input
                    type='text'
                    id='company'
                    name='company'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='Company Name'
                    required
                  />
                </div>

                <div className='col-span-4 contact input-wrapper'>
                  <label
                    htmlFor='Message'
                    className='text-gray-700 contact-label'
                  >
                    Message
                  </label>

                  <textarea
                    id='message'
                    name='message'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='Message'
                    required
                  />
                </div>

                <div className='col-span-4 items-center gap-4'>
                  <button
                    onClick={() => setOpen(false)}
                    className='shrink-0 rounded-full border border-pinkish bg-pinkish pl-10 pr-10 py-3 mx-2 mt-4 text-sm font-bold text-white transition hover:bg-transparent hover:text-pinkish focus:outline-none focus:ring active:text-pinkish'
                  >
                    <span className='mr-2'>&larr;</span> BACK
                  </button>
                  <button className='shrink-0 rounded-full border border-blue-400 bg-blue-400 pl-10 pr-8 py-3 mx-2 mt-4 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500'>
                    SUBMIT <span className='ml-2'>&rarr;</span>
                  </button>
                </div>
              </form>
            </div>
            <div className='w-2/5'>
              <Image
                className='object-cover h-full w-full'
                src={demoImage}
                alt=''
                width='300'
                height='400'
              ></Image>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
