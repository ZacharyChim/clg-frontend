import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import '../styles/globals.css'
import Chatbot from '../components/chatbot'
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
        <Script src='https://chatroom.dumbchat.ai/lib/TC.chatbot.umd.prod.min.js?v=20230425' />
        <Script src='chatbot.js' />
      </head>
      <body>
        {/* @ts-ignore */}
        <Header />

        {children}
        {/* @ts-ignore */}
        <Footer />
      </body>
    </html>
  )
}
