'use client'
import { Modal } from 'flowbite'
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

    let mailData = {
      message:
        'NEW! Your Tax Expert Popup: Please Check COLLECTION TYPES/popup in the Backend',
    }

    fetch('/api/mailer', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailData),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })
  }

  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('hidePopup') !== 'true') {
      setOpen(true)
      const $targetEl = document.getElementById('popup')
      const options = {
        onHide: () => {
          const hideCheck = document.getElementById('hide')
          if (hideCheck.checked) {
            localStorage.setItem('hidePopup', 'true')
          }
        },
      }
      const modal = new Modal($targetEl, options)

      modal.show()
    } else {
      setOpen(false)
    }
  }, [])

  return (
    <React.Fragment>
      <div
        id='popup'
        className='fixed top-0 left-0 right-0 z-50 hidden h-full max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0'
      >
        <div className='relative max-h-full w-[80%] max-w-2xl'>
          <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
            <div className='relative h-96 border-b-0 bg-popupBg bg-cover bg-no-repeat'>
              <div className='absolute top-80 w-full'>
                <p
                  className={`mx-auto mt-12 block text-center text-2xl font-bold text-darkBlue`}
                >
                  {lang.your_tax_expert}
                </p>
              </div>
            </div>

            <div className='mt-6 mb-20'>
              <p className='text-center text-lg leading-relaxed text-veryDarkBlue'>
                {lang.sign_up_now}
                <span className='half_background mx-2 text-xl font-bold text-darkBlue'>
                  {lang.free}
                </span>
                {lang.tax_guide}
              </p>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center'
              >
                <div className='flex w-full flex-row gap-3 px-4'>
                  <div className='input-wrapper w-full'>
                    <label
                      htmlFor='Name'
                      className='contact-label text-gray-700'
                    >
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
                    <label
                      htmlFor='Tel'
                      className='contact-label text-gray-700'
                    >
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
                <label htmlFor='hide' className='mt-2 mb-4 flex gap-1'>
                  <input
                    type='checkbox'
                    id='hide'
                    value='hide'
                    name='funding'
                    defaultChecked={true}
                    className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>
                    {lang.dont_show}
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
