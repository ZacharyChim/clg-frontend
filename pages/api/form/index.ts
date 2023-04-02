// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//   data: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const body = req.body
//   console.log('body: ', body.name)

//   // Both of these are required.
//   if (!body.name) {
//     return res.json({ data: 'Name not found' })
//   }

//   // // Found the name.
//   res.json({ data: body.name })
//   res.status(200).json(body.name)
// }
