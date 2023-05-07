'use client'
import { Modal } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import demoImage from '../public/demo.png'
import calendar from '../public/calendar.png'
import whatsapp from '../public/whatsapp2.png'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const Step1 = (props: any) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  return (
    <div key='step1' className='container col-span-4 grid'>
      <div key='preferredDate1Div' className='contact input-wrapper col-span-2'>
        <label htmlFor='preferredDate' className='contact-label text-gray-700'>
          Your Preferred Date
        </label>
        <input
          key='preferredDate1'
          type='text'
          id='preferredDate'
          name='preferredDate'
          className='contact-input text-sm text-gray-700'
          placeholder='DD-MM-YYYY'
          required
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          onBlur={(e) => props.setPreferredDate1(e.target.value)}
        />
      </div>

      <div key='preferredTime1Div' className='contact input-wrapper col-span-2'>
        <label htmlFor='time1' className='contact-label text-gray-700'>
          Time
        </label>
        <select
          key='preferredTime1'
          id='time1'
          defaultValue={props.preferredTime1 ? props.preferredTime1 : '09-10'}
          className='contact-select relative w-full rounded-t-md'
          required
          onChange={(e) => {
            props.setPreferredTime1(e.target.value)
          }}
        >
          <option value='09-10'>09:00 - 10:00</option>
          <option value='10-11'>10:00 - 11:00</option>
          <option value='11-12'>11:00 - 12:00</option>
          <option value='12-13'>12:00 - 13:00</option>
          <option value='13-14'>13:00 - 14:00</option>
          <option value='14-15'>14:00 - 15:00</option>
          <option value='15-16'>15:00 - 16:00</option>
          <option value='16-17'>16:00 - 17:00</option>
          <option value='17-18'>17:00 - 18:00</option>
        </select>
      </div>

      <div key='preferredDate2Div' className='contact input-wrapper col-span-2'>
        <label htmlFor='PreferredDate2' className='contact-label text-gray-700'>
          Your Second Preferred Date
        </label>

        <input
          key='preferredDate2'
          type='text'
          id='preferredDate2'
          name='preferredDate2'
          className='contact-input text-sm text-gray-700'
          placeholder='DD-MM-YYYY'
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          onBlur={(e) => {
            props.setPreferredDate2(e.target.value)
          }}
        />
      </div>

      <div key='preferredTime2Div' className='contact input-wrapper col-span-2'>
        <label htmlFor='time2' className='contact-label text-gray-700'>
          Time
        </label>
        <select
          key='preferredTime2'
          id='time2'
          defaultValue={props.preferredTime2 ? props.preferredTime2 : '09-10'}
          className='contact-select relative w-full rounded-t-md'
          onChange={(e) => props.setPreferredTime2(e.target.value)}
        >
          <option value='09-10'>09:00 - 10:00</option>
          <option value='10-11'>10:00 - 11:00</option>
          <option value='11-12'>11:00 - 12:00</option>
          <option value='12-13'>12:00 - 13:00</option>
          <option value='13-14'>13:00 - 14:00</option>
          <option value='14-15'>14:00 - 15:00</option>
          <option value='15-16'>15:00 - 16:00</option>
          <option value='16-17'>16:00 - 17:00</option>
          <option value='17-18'>17:00 - 18:00</option>
        </select>
      </div>

      <div key='preferredDate3Div' className='contact input-wrapper col-span-2'>
        <label htmlFor='PreferredDate3' className='contact-label text-gray-700'>
          Your Third Preferred Date
        </label>

        <input
          key='preferredDate3'
          type='text'
          id='preferredDate3'
          name='preferredDate3'
          className='contact-input text-sm text-gray-700'
          placeholder='DD-MM-YYYY'
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          onBlur={(e: any) => props.setPreferredDate3(e.target.value)}
        />
      </div>

      <div key='preferredTime3Div' className='contact input-wrapper col-span-2'>
        <label htmlFor='time3' className='contact-label text-gray-700'>
          Time
        </label>
        <select
          key='preferredTime3'
          id='time3'
          defaultValue={props.preferredTime3 ? props.preferredTime3 : '09-10'}
          className='contact-select relative w-full rounded-t-md'
          onChange={(e) => props.setPreferredTime3(e.target.value)}
        >
          <option value='09-10'>09:00 - 10:00</option>
          <option value='10-11'>10:00 - 11:00</option>
          <option value='11-12'>11:00 - 12:00</option>
          <option value='12-13'>12:00 - 13:00</option>
          <option value='13-14'>13:00 - 14:00</option>
          <option value='14-15'>14:00 - 15:00</option>
          <option value='15-16'>15:00 - 16:00</option>
          <option value='16-17'>16:00 - 17:00</option>
          <option value='17-18'>17:00 - 18:00</option>
        </select>
      </div>

      <div key='servicesDiv' className='col-span-4'>
        <h3 className='py-6 font-bold text-gray-700'>
          What Services Are You Interested In?{' '}
          <span className='font-normal text-oceanBlue'>
            (You Can Tick More Than One)
          </span>
        </h3>

        <p className='pb-4 font-bold text-oceanBlue'>CLOUD SOLUTION</p>
        <div className='flex w-full flex-row'>
          <div className='w-1/2'>
            <label htmlFor='accounting' className='mb-2 flex gap-1'>
              <input
                key='accountingCheck'
                type='checkbox'
                id='accounting'
                value='accounting'
                name='accounting'
                className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                checked={props.accounting ? true : false}
                onChange={() => {
                  props.setAccounting(!props.accounting)
                }}
              />

              <span className='text-sm text-gray-700'>Accounting Solution</span>
            </label>

            <label htmlFor='hrm' className='mb-2 flex gap-1'>
              <input
                key='hrmCheck'
                type='checkbox'
                id='hrm'
                value='hrm'
                name='hrm'
                className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                checked={props.hrm ? true : false}
                onChange={() => {
                  props.setHrm(!props.hrm)
                }}
              />

              <span className='text-sm text-gray-700'>HRM Solution</span>
            </label>
          </div>
          <div className='w-1/2'>
            <label htmlFor='pos' className='mb-2 flex gap-1'>
              <input
                key='posCheck'
                type='checkbox'
                id='pos'
                value='pos'
                name='pos'
                className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                checked={props.pos ? true : false}
                onChange={() => {
                  props.setPos(!props.pos)
                }}
              />

              <span className='text-sm text-gray-700'>
                POS System / F&B POS System
              </span>
            </label>

            <label htmlFor='shop' className='mb-2 flex gap-1'>
              <input
                key='shopCheck'
                type='checkbox'
                id='shop'
                value='shop'
                name='shop'
                className='h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm'
                checked={props.shop ? true : false}
                onChange={() => {
                  props.setShop(!props.shop)
                }}
              />

              <span className='text-sm text-gray-700'>Online Shop</span>
            </label>
          </div>
        </div>
      </div>

      <div key='nextDiv' className='col-span-4 items-center gap-4'>
        <button
          onClick={props.handleNext}
          type='button'
          className='mx-2 mt-4 shrink-0 rounded-full border border-blue-400 bg-blue-400 py-3 pl-10 pr-8 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500'
        >
          NEXT <span className='ml-2'>&rarr;</span>
        </button>
      </div>
    </div>
  )
}
export default function FloatingButtons() {
  // const [hidePopup, setHidePopup] = useState(false)
  const searchParams = useSearchParams()

  const demo = searchParams.get('demo')

  const [step, setStep] = useState(1)
  const [preferredDate1, setPreferredDate1] = useState('')
  const [preferredDate2, setPreferredDate2] = useState('')
  const [preferredDate3, setPreferredDate3] = useState('')
  const [preferredTime1, setPreferredTime1] = useState('09-10')
  const [preferredTime2, setPreferredTime2] = useState('')
  const [preferredTime3, setPreferredTime3] = useState('')
  const [accounting, setAccounting] = useState(false)
  const [hrm, setHrm] = useState(false)
  const [pos, setPos] = useState(false)
  const [shop, setShop] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    let regions
    event.target.regions.value === 'Regions'
      ? (regions = '')
      : (regions = event.target.regions.value)

    let services = ''
    if (accounting) {
      services += 'Accounting Solution; '
    }
    if (hrm) {
      services += 'HRM Solution; '
    }
    if (pos) {
      services += 'POS System / F&B POS System; '
    }
    if (shop) {
      services += 'Online Shop; '
    }

    if (preferredDate2) {
      if (!preferredTime2) setPreferredTime2('09-10')
    }
    if (preferredDate3) {
      if (!preferredTime3) setPreferredTime3('09-10')
    }

    let data = {
      data: {
        name: formData.get('name'),
        tel: formData.get('tel'),
        email: formData.get('email'),
        regions: regions,
        industry: formData.get('industry'),
        company: formData.get('company'),
        message: formData.get('message'),
        preferred_date: preferredDate1,
        preferred_time: preferredTime1,
        second_preferred_date: preferredDate2,
        second_preferred_time: preferredTime2,
        third_preferred_date: preferredDate3,
        third_preferred_time: preferredTime3,
        interested_services: services,
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
    setPreferredDate1('')
    setPreferredDate2('')
    setPreferredDate3('')
    setPreferredTime1('')
    setPreferredTime2('')
    setPreferredTime3('')
    setAccounting(false)
    setHrm(false)
    setPos(false)
    setShop(false)

    setIsOpen(false)
  }

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (demo) {
      setIsOpen(true)
    }
  }, [])
  const Step2 = () => (
    <>
      <div key='step2' className='contact input-wrapper col-span-2'>
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

      <div className='contact input-wrapper col-span-2'>
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

      <div className='contact input-wrapper col-span-4'>
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

      <div className='contact input-wrapper col-span-2'>
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

      <div className='contact input-wrapper col-span-2'>
        <label htmlFor='Industry' className='contact-label text-gray-700'>
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

      <div className='contact input-wrapper col-span-2'>
        <label htmlFor='Company' className='contact-label text-gray-700'>
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

      <div className='contact input-wrapper col-span-4'>
        <label htmlFor='Message' className='contact-label text-gray-700'>
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

      <div className='col-span-4 items-center gap-4'>
        <button
          onClick={handleBack}
          className='mx-2 mt-4 shrink-0 rounded-full border border-pinkish bg-pinkish py-3 pl-10 pr-10 text-sm font-bold text-white transition hover:bg-transparent hover:text-pinkish focus:outline-none focus:ring active:text-pinkish'
        >
          <span className='mr-2'>&larr;</span> BACK
        </button>
        <button className='mx-2 mt-4 shrink-0 rounded-full border border-blue-400 bg-blue-400 py-3 pl-10 pr-8 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500'>
          SUBMIT <span className='ml-2'>&rarr;</span>
        </button>
      </div>
    </>
  )

  return (
    <React.Fragment>
      <div key='floatingButtons' className='relative'>
        <div className='fixed top-1/3 right-5'>
          <button type='button' onClick={() => setIsOpen(true)}>
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
          {/* <Image src={chat} width='50' height='50' alt='' quality={100}></Image> */}
        </div>
      </div>

      <Modal
        key='demoModal'
        id='demo'
        size='5xl'
        dismissible={true}
        show={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Body className='max-w-5xl p-0'>
          <div className='relative cursor-pointer text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
            <span
              onClick={() => setIsOpen(false)}
              className='absolute right-5 top-3'
            >
              X
            </span>
          </div>
          <div className='flex flex-row'>
            <div className='m-10 w-3/5 space-y-4'>
              <h3 className='p-0 text-2xl font-bold text-darkBlue'>
                Schedule a Demo
              </h3>
              <p className='text-md m-0 p-0 text-left text-veryDarkBlue'>
                Tell us about your business, goals and challenges. Our Team is
                ready to plan the route to success and then walk through
                together with you.
              </p>
              <form
                onSubmit={handleSubmit}
                className='m-0 grid grid-cols-4 items-center'
              >
                {step === 1 ? (
                  <Step1
                    preferredDate1={preferredDate1}
                    setPreferredDate1={setPreferredDate1}
                    preferredTime1={preferredTime1}
                    setPreferredTime1={setPreferredTime1}
                    preferredDate2={preferredDate2}
                    setPreferredDate2={setPreferredDate2}
                    preferredTime2={preferredTime2}
                    setPreferredTime2={setPreferredTime2}
                    preferredDate3={preferredDate3}
                    setPreferredDate3={setPreferredDate3}
                    preferredTime3={preferredTime3}
                    setPreferredTime3={setPreferredTime3}
                    accounting={accounting}
                    setAccounting={setAccounting}
                    hrm={hrm}
                    setHrm={setHrm}
                    pos={pos}
                    setPos={setPos}
                    shop={shop}
                    setShop={setShop}
                    handleNext={handleNext}
                  />
                ) : (
                  <Step2 />
                )}
              </form>
            </div>
            <div className='w-2/5'>
              <Image
                className='h-full w-full object-cover'
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
