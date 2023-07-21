import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import '../../styles/globals.css'
import Script from 'next/script'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return [{ lng: 'en' }, { lng: 'hk' }, { lng: 'cn' }]
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: {
    lng: string
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>CLG Group</title>
        <Script src='https://chatroom.dumbchat.ai/lib/TC.chatbot.umd.prod.min.js?v=20230425' />
        <Script src={process.env.NEXT_PUBLIC_SITE_URL + '/chatbot.js'} />
      </head>
      <body>
        {/* @ts-ignore */}
        <Header lng={lng} />

        {children}
        {/* @ts-ignore */}
        <Footer lng={lng} />
      </body>
    </html>
  )
}
