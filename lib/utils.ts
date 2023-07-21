import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Shadcn UI

import { marked } from 'marked'

export const fetchSingle = async (single: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${single}?populate=%2A`
  )

  const resData = await res.json()
  return resData.data.attributes
}

export const fetchSingleLang = async (single: string, lng: string) => {
  let language
  if (lng === 'hk') {
    language = 'zh-Hant-HK'
  } else if (lng === 'cn') {
    language = 'zh-Hans-CN'
  } else {
    language = lng
  }

  let res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${single}?populate=%2A&locale=${language}`
  )

  let resData = await res.json()
  if (resData.data === null) {
    res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${single}?populate=%2A&locale=${language}&publicationState=preview`
    )
    resData = await res.json()
  }
  return resData.data.attributes
}

export const fetchCollection = async (collection: string, lng: string) => {
  let language
  if (lng === 'hk') {
    language = 'zh-Hant-HK'
  } else if (lng === 'cn') {
    language = 'zh-Hans-CN'
  } else {
    language = lng
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${collection}?populate[0]=featuredImage&locale=${language}`
  )

  const resData = await res.json()
  return resData.data
}

export const fetchAllCollection = async (collection: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${collection}`
  )

  const resData = await res.json()
  return resData.data
}

export const richTextReducer = (raw: string) => {
  const parsed = marked.parse(raw)
  const fixedImageURL = parsed.replace(
    '/uploads/',
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/`
  )
  const fixedImage = fixedImageURL.replace(
    '<img',
    "<img style='margin: 10px 0; width: 100%'"
  )
  return fixedImage
}

export const trimTitle = (str: string, limit = 45) => {
  let newTitle: string[] = []
  if (str.length >= limit) {
    str.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur)
      }
      return acc + cur.length
    }, 0)
    return `${newTitle.join(' ')} ...`
  }
  return str
}
