// 'use client'
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import logo from '../../public/logo.png'

const fetchMenu = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/navigation/render/2`
  )

  const menu = await res.json()

  return menu
}

async function Header(props: { lng: string }) {
  const menu = await fetchMenu()

  const parentMenu = menu.filter((item: any) => item.parent === null)
  const childMenu = menu.filter((item: any) => item.parent !== null)

  const auditMenu = childMenu.filter((item: any) => item.parent.id === 65)
  const advisoryMenu = childMenu.filter((item: any) => item.parent.id === 68)
  const fundMenu = childMenu.filter((item: any) => item.parent.id === 71)
  const incorMenu = childMenu.filter((item: any) => item.parent.id === 75)
  const cloudMenu = childMenu.filter((item: any) => item.parent.id === 39)

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
          logoURL={logo}
          lng={props.lng}
        />
      </header>
    </>
  )
}

export default Header
