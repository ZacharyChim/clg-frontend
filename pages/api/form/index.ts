import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-uses`
    const body = req.body

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return res.json({ data: 'Successful' })
  } else {
    return res.status(500).json({
      data: 'This needs to be a POST request',
    })
  }
}
