'use client'
import { Button, Modal } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import popImage from '../public/popup.png'
import React, { useEffect, useState } from 'react'

type PageProps = {
  lng: string
  popupText: any
}

export default function Popup(props: PageProps) {
  let lang: any
  props.lng === 'en'
    ? (lang = props.popupText)
    : (lang = props.popupText.localizations.data[0].attributes)
  console.log(lang.your_tax_expert)
  const [hidePopup, setHidePopup] = useState(false)
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
      setHidePopup(true)
      localStorage.setItem('hidePopup', 'true')
    } else {
      setHidePopup(false)
    }

    alert(lang.we_will_contact)

    if (isOpen) {
      setOpen(false)
    }
  }

  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('hidePopup') !== 'true') {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [])

  return (
    <React.Fragment>
      <Modal dismissible={true} show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header className='relative h-96 border-b-0 bg-popupBg bg-no-repeat'>
          <p
            className={`absolute top-80 ${
              props.lng === 'en' ? 'left-40' : 'left-52'
            } mx-auto mt-6 text-4xl font-bold text-darkBlue`}
          >
            {lang.your_tax_expert}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-20 space-y-6'>
            <p className='text-center text-lg leading-relaxed text-veryDarkBlue'>
              {lang.sign_up_now}
              <span className='half_background mx-2 text-3xl font-bold text-darkBlue'>
                {lang.free}
              </span>
              {lang.tax_guide}
            </p>
            <form
              onSubmit={handleSubmit}
              className='mt-8 flex flex-col items-center'
            >
              <div className='flex w-full flex-row gap-3 px-4'>
                <div className='input-wrapper w-full'>
                  <label htmlFor='Name' className='contact-label text-gray-700'>
                    {lang.name}
                  </label>

                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='contact-input text-sm text-gray-700'
                    placeholder={lang.name}
                    required
                  />
                </div>
                <div className='input-wrapper w-full'>
                  <label htmlFor='Tel' className='contact-label text-gray-700'>
                    {lang.tel}
                  </label>

                  <input
                    type='text'
                    id='tel'
                    name='tel'
                    className='contact-input text-sm text-gray-700'
                    placeholder={lang.tel}
                    required
                  />
                </div>
                <div className='mx-auto'>
                  <button className='mt-3 h-12 w-12 rounded-full border border-blue-400 bg-blue-400 pl-3 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500'>
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
              <label htmlFor='hide' className='mt-2 flex gap-1'>
                <input
                  type='checkbox'
                  id='hide'
                  value='hide'
                  name='funding'
                  defaultChecked={true}
                  className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                />

                <span className='text-sm text-gray-700'>{lang.dont_show}</span>
              </label>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
