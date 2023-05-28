import React from 'react'
import { v4 } from 'uuid'

type faqType = {
  title: string
  content: string
}

type PropType = {
  faqs: faqType[]
}

export default function Faqs(props: PropType) {
  return (
    <div className='mx-auto mb-16 mt-10 w-full max-w-4xl space-y-4 self-center px-10'>
      <h3 className='mb-10 w-full text-center text-4xl font-bold text-darkBlue'>
        FAQs
      </h3>
      {props.faqs.map((item, index) => (
        <details
          key={v4()}
          className='group border-b border-black pb-6 [&_summary::-webkit-details-marker]:hidden'
          // open
        >
          <summary className='flex w-full cursor-pointer items-center justify-between p-4 leading-7 '>
            <h4 className='flex items-start font-medium'>
              <span className='mr-2 inline-block w-7 shrink-0 grow-0 rounded-full bg-oceanBlue text-center text-white'>
                {index + 1}
              </span>
              <span className='summary-title inline-block font-bold text-darkBlue'>
                {item.title}
              </span>
            </h4>

            <svg
              className='ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </summary>

          <article
            className='faq mt-4 px-14 text-sm leading-relaxed text-gray-700'
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></article>
        </details>
      ))}
    </div>
  )
}
