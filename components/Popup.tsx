'use client'
import { Button, Modal } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import popImage from '../public/popup.png'
import React, { useEffect, useState } from 'react'

export default function Popup() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    let data = {
      data: {
        name: event.target.name.value,
        tel: event.target.tel.value,
      },
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/popup'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()

    if (event.target.hide.checked) {
      setOpen(false)
    } else {
      setOpen(true)
    }

    alert('Our team will contact you as soon as possible.')

    if (isOpen) {
      setOpen(false)
    }
  }

  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    setOpen(true)
  }, [])
  return (
    <React.Fragment>
      <Modal dismissible={true} show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header className='relative bg-popupBg h-96 bg-no-repeat border-b-0'>
          <p className='absolute top-80 left-40 text-darkBlue font-bold text-4xl mt-6'>
            YOUR TAX EXPERT
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6 mb-20'>
            <p className='text-center text-lg leading-relaxed text-veryDarkBlue'>
              Sign up now to get a
              <span className='text-3xl font-bold text-darkBlue half_background mx-2'>
                FREE
              </span>
              tax guide to solve your tax problems
            </p>
            <form
              onSubmit={handleSubmit}
              className='mt-8 flex flex-col items-center'
            >
              <div className='flex flex-row w-full gap-3 px-4'>
                <div className='input-wrapper w-full'>
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
                <div className='input-wrapper w-full'>
                  <label htmlFor='Tel' className='text-gray-700 contact-label'>
                    Tel
                  </label>

                  <input
                    type='text'
                    id='tel'
                    name='tel'
                    className='text-sm text-gray-700 contact-input'
                    placeholder='tel'
                    required
                  />
                </div>
                <div className='mx-auto'>
                  <button className='mt-3 pl-3 h-12 w-12 rounded-full border border-blue-400 bg-blue-400 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500'>
                    <svg
                      className='h-5 w-5 rtl:rotate-180'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <label htmlFor='hide' className='flex gap-1 mt-2'>
                <input
                  type='checkbox'
                  id='hide'
                  value='hide'
                  name='funding'
                  defaultChecked={true}
                  className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                />

                <span className='text-sm text-gray-700'>
                  Don't show this popup again
                </span>
              </label>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
