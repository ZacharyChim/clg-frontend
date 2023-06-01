export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 1025,
    host: 'mail.clgcpa.com',
    auth: {
      user: 'info@clgcpa.com',
      pass: 'eijaeR4z',
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailData = {
    from: 'info@clgcpa.com',
    to: 'info@clgcpa.com',
    subject: req.body.message,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  }

  transporter.sendMail(mailData)
  return res.json({ data: 'Successful' })
}
