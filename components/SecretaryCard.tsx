import React from 'react'

type PropType = {
  type: string
  title: string
  price: string
  details: string
}

export default function SecretaryCard(props: PropType) {
  return (
    <div className='h-fit rounded-lg border-4 border-borderBlue px-6 py-8'>
      <details
        className='group [&_summary::-webkit-details-marker]:hidden'
        // open
      >
        <summary className='flex cursor-pointer flex-col border-b border-borderGray'>
          <span className='pb-1 text-sm text-textGray'>{props.type}</span>
          <span className='pb-1 text-sm font-bold text-darkBlue'>
            {props.title}
          </span>
          <span className='flex justify-between font-medium'>
            <span className='half_background mb-2 inline-block font-bold text-veryDarkBlue'>
              {props.price}
            </span>

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
          </span>
        </summary>

        <article
          className='mt-4 text-xs text-gray-700'
          dangerouslySetInnerHTML={{ __html: props.details }}
        ></article>
      </details>
    </div>
  )
}
