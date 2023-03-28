import React from 'react'

type PropType = {
  type: string
  title: string
  price: string
  details: string
}

export default function SecretaryCard(props: PropType) {
  return (
    <div className='px-6 py-8 border-4 border-borderBlue rounded-lg h-fit'>
      <details
        className='group [&_summary::-webkit-details-marker]:hidden'
        // open
      >
        <summary className='flex flex-col cursor-pointer border-b border-borderGray'>
          <span className='text-sm text-textGray pb-1'>{props.type}</span>
          <span className='font-bold text-sm text-darkBlue pb-1'>
            {props.title}
          </span>
          <span className='font-medium flex justify-between'>
            <span className='inline-block font-bold text-veryDarkBlue mb-2 half_background'>
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
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </span>
        </summary>

        <article
          className='text-xs mt-4 text-gray-700'
          dangerouslySetInnerHTML={{ __html: props.details }}
        ></article>
      </details>
    </div>
  )
}
