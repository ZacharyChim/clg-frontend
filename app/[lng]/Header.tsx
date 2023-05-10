// 'use client'
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'

const fetchMenu = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/navigation/render/2`
  )

  const menu = await res.json()

  return menu
}

const fetchLogo = async () => {
  const logo = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/top-menu?populate=%2A`
  )
  const logoJSON = await logo.json()

  return logoJSON.data.attributes.SiteLogo.data.attributes.url
}

// type PageProps = {
//   title: string
// }

async function Header(props: { lng: string }) {
  const menu = await fetchMenu()

  const parentMenu = menu.filter((item) => item.parent === null)
  const childMenu = menu.filter((item) => item.parent !== null)

  const auditMenu = childMenu.filter((item) => item.parent.id === 65)
  const advisoryMenu = childMenu.filter((item) => item.parent.id === 68)
  const fundMenu = childMenu.filter((item) => item.parent.id === 71)
  const incorMenu = childMenu.filter((item) => item.parent.id === 75)
  const cloudMenu = childMenu.filter((item) => item.parent.id === 39)

  const logo = await fetchLogo()
  const logoURL = process.env.NEXT_PUBLIC_STRAPI_URL + logo
  return (
    <>
      <header>
        <Navigation
          parentMenu={parentMenu}
          auditMenu={auditMenu}
          advisoryMenu={advisoryMenu}
          fundMenu={fundMenu}
          incorMenu={incorMenu}
          cloudMenu={cloudMenu}
          logoURL={logoURL}
          lng={props.lng}
        />
      </header>
    </>
  )
}

// export async function generateStaticParams() {
//   const res = await fetch(`http://localhost:1338/api/navigation/render/1`, {
//     next: { revalidate: 60 },
//   })

//   const menu = await res.json()
//   return menu.map((item) => ({
//     title: item.title,
//   }))
// }

export default Header