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

// export const metadata: Metadata = {
//   title:
//     'CLG Group | Accounting | Funding Audit | TVP Audit | BUD Audit | Company Secretary | Xero Hong Kong',
//   description:
//     'By facing substantial change in society and the general environment, we are always passionate about finding solutions for different business difficulties, to help our clients to work smartly and easily everyday.  We did it through our three main service scopes — cloud solutions, assurance, and advisory.  We are always doing our best to assist our clients with their challenging and tough business tasks and realize their largest aspiration in their business.',
//   keywords:
//     'Accounting, Funding Audit, TVP Audit, BUD Audit, Company Secretary, Xero Hong Kong',
// }

export default function RootLayout({
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
      <body>
        {/* @ts-ignore */}
        <Header lng={lng} />

        {children}
        {/* @ts-ignore */}
        <Footer lng={lng} />
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-Q099K983TN' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-Q099K983TN"');
        `}
        </Script>
      </body>
    </html>
  )
}
