import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  fetchCollection,
  fetchSingle,
  richTextReducer,
  trimTitle,
} from '../../../../lib/utils'
import { v4 } from 'uuid'

type PageProps = {
  slug: string
  lng: string
}

const fetchPost = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts/${slug}`
  )

  const resData = await res.json()
  return resData.data.attributes
}

export default async function Main({ lng, slug }: PageProps) {
  const post = await fetchPost(slug)
  const blogText = await fetchSingle('blog')
  let lang
  lng === 'en'
    ? (lang = blogText)
    : (lang = blogText.localizations.data[0].attributes)
  const content = richTextReducer(post.content)

  const publishedAt = new Date(post.publishedAt)
  let monthNames
  lng === 'en'
    ? (monthNames = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
      ])
    : (monthNames = [
        '1 月',
        '2 月',
        '3 月',
        '4 月',
        '5 月',
        '6 月',
        '7 月',
        '8 月',
        '9 月',
        '10 月',
        '11 月',
        '12 月',
      ])
  const year = publishedAt.getFullYear()
  const month = monthNames[publishedAt.getMonth()]

  const date = publishedAt.getDate()
  let fullDate: string
  lng === 'en'
    ? (fullDate = `${month} ${date}, ${year}`)
    : (fullDate = `${year} 年 ${month} ${date} 日`)
  const allPosts = await fetchCollection('posts')
  const newPosts = allPosts.filter((item: any) => item.id < 4)

  return (
    <section id='post' className='mx-auto flex max-w-5xl flex-col items-center'>
      <div className='container mx-auto flex flex-col px-5 py-24'>
        <div className='flex flex-col md:flex-row'>
          <div className='pr-8 pb-8 text-center md:w-2/3 md:text-left'>
            <Link
              href={process.env.NEXT_PUBLIC_SITE_URL + '/' + lng + '/blog/'}
              className='inline-flex items-center text-xl text-darkBlue'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
                />
              </svg>
              {lang.back}
            </Link>

            <h2 className='my-4 text-3xl font-bold text-darkBlue'>
              {post.title}
            </h2>
            <p className='half_background inline text-left text-darkBrown'>
              {fullDate}
            </p>

            <article
              className='mt-4 text-justify text-darkBrown'
              dangerouslySetInnerHTML={{ __html: content }}
            ></article>
          </div>

          <div className='mx-auto text-center md:w-1/3'>
            <div className='flex flex-col space-y-12 pb-20'>
              {newPosts.map((item) => (
                <div
                  key={v4()}
                  className='flex flex-col items-center space-y-2 bg-veryLightBlue '
                >
                  <article className='m-3 overflow-hidden border border-gray-100 bg-white shadow-sm md:w-auto'>
                    <Image
                      alt={item.attributes.title}
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        item.attributes.featuredImage.data.attributes.url
                      }
                      width={
                        item.attributes.featuredImage.data.attributes.width
                      }
                      height={
                        item.attributes.featuredImage.data.attributes.height
                      }
                      className='h-56 w-full object-cover'
                    />

                    <div className='p-4 text-left md:p-2'>
                      <Link
                        href={
                          process.env.NEXT_PUBLIC_SITE_URL +
                          '/' +
                          lng +
                          '/blog/' +
                          item.attributes.slug
                        }
                      >
                        <h3 className='text-md text-darkBrown'>
                          {trimTitle(item.attributes.title)}
                        </h3>
                      </Link>

                      <Link
                        href={
                          process.env.NEXT_PUBLIC_SITE_URL +
                          '/' +
                          lng +
                          '/blog/' +
                          item.attributes.slug
                        }
                        className='group mt-2 inline-flex gap-1 text-sm font-medium text-blue-600'
                      >
                        {lang.details}
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
