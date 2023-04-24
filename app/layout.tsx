import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import '../styles/globals.css'
import Script from 'next/script'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>CLG Group</title>
      </head>
      <body>
        {/* @ts-ignore */}
        <Header />

        {children}
        {/* @ts-ignore */}
        <Footer />

        <Script
          strategy='beforeInteractive'
          src='https://chatroom.dumbchat.ai/lib/TC.chatbot.umd.prod.min.js'
        ></Script>
        <Script strategy='afterInteractive'>
          new TC_ChatBot('CP303284@CB87358406')
        </Script>
      </body>
    </html>
  )
}
