'use client'
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import menuPoint from '../../public/menu-point.png'
import menuPointLg from '../../public/menu-point-lg.png'
import menuCloud from '../../public/menu-cloud.png'
import langIcon from '../../public/lang.png'

export default function Navigation(props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [assuranceMenuOpen, setAssuranceMenuOpen] = useState(false)
  const [cloudMenuOpen, setCloudMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleAssuranceMenu = () => {
    setCloudMenuOpen(false)
    setLangMenuOpen(false)
    setAssuranceMenuOpen(!assuranceMenuOpen)
  }

  const toggleCloudMenu = () => {
    setAssuranceMenuOpen(false)
    setLangMenuOpen(false)
    setCloudMenuOpen(!cloudMenuOpen)
  }

  const toggleLangMenu = () => {
    setAssuranceMenuOpen(false)
    setLangMenuOpen(false)
    setCloudMenuOpen(false)
    setLangMenuOpen(!langMenuOpen)
  }
  return (
    <>
      <nav className='border-gray-200	bg-white align-text-bottom dark:border-gray-700 dark:bg-gray-900'>
        <div className='mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4'>
          <Link href='/' className='flex items-center'>
            <Image src={props.logoURL} alt='' width={80} height={80} />
          </Link>
          <div className='hidden w-full md:flex md:w-auto' id='navbar'>
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0'>
              {props.parentMenu.map((item) => {
                if (
                  item.title === 'Assurance & Advisory' ||
                  item.title === '鑒證及諮詢'
                ) {
                  return (
                    <li key={v4()}>
                      <button
                        id='assurance-advisory-button'
                        // data-dropdown-toggle='assurance-advisory-dropdown'
                        // data-dropdown-offset-distance='12'
                        onClick={toggleAssuranceMenu}
                        className='flex w-full items-center justify-between rounded py-2 pl-3 pr-4 align-baseline text-sm text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
                      >
                        {item.title}
                        <svg
                          className='ml-1 h-5 w-5'
                          fill='#00b7e3'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </button>
                      <div
                        id='assurance-advisory-dropdown'
                        className={
                          assuranceMenuOpen
                            ? 'absolute left-0 z-10 mt-8 w-full bg-white shadow-sm'
                            : 'hidden'
                        }
                      >
                        <Image
                          src={menuPoint}
                          alt=''
                          width='1918'
                          height='27'
                          quality='100'
                          className='hidden lg:flex'
                        ></Image>
                        <Image
                          src={menuPointLg}
                          alt=''
                          width='1918'
                          height='27'
                          quality='100'
                          className='hidden md:flex lg:hidden'
                        ></Image>
                        <div className='mx-auto grid text-sm text-gray-500 md:grid-cols-5 md:gap-8'>
                          <span className='col-span-2 hidden bg-menuBg bg-cover bg-no-repeat p-8 text-right hover:bg-blend-soft-light md:block'>
                            <p className='leading-wide mb-5 max-w-xl text-2xl font-extrabold tracking-wide text-white'>
                              {item.title}
                            </p>
                          </span>
                          <div className='arrow-list mx-10 mt-4 grid md:mx-0 md:grid-rows-2 md:py-10'>
                            <div>
                              <p className='mb-2 text-lg font-bold text-menuBlue'>
                                {props.titleMenu[0]}
                              </p>
                              <ul className='mb-2 space-y-2 py-2 text-sm text-gray-700'>
                                {props.auditMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.url}
                                      className='py-2 hover:bg-gray-100 '
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className='mb-2 text-lg font-bold text-menuBlue'>
                                {props.titleMenu[1]}
                              </p>
                              <ul className='mb-2 space-y-2 py-2 text-sm text-gray-700'>
                                {props.fundMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.url}
                                      className='py-2 hover:bg-gray-100 '
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className='arrow-list mx-10 mt-4 grid md:mx-0 md:grid-rows-2 md:py-10'>
                            <div>
                              <p className='mb-2 text-lg font-bold text-menuBlue'>
                                {props.titleMenu[2]}
                              </p>
                              <ul className='mb-2 space-y-2 py-2 text-sm text-gray-700'>
                                {props.advisoryMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.url}
                                      className='py-2 hover:bg-gray-100 '
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className='mb-2 text-lg font-bold text-menuBlue'>
                                {props.titleMenu[3]}
                              </p>
                              <ul className='mb-2 grid grid-cols-2 text-sm leading-7 text-gray-700'>
                                {props.incorMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.url}
                                      className='py-2 hover:bg-gray-100 '
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                }
                if (
                  item.title === 'Cloud Solutions' ||
                  item.title === '雲端解決方案'
                ) {
                  return (
                    <li key={v4()}>
                      <button
                        id='cloud-solutions-button'
                        // data-dropdown-toggle='cloud-solutions-dropdown'
                        // data-dropdown-offset-distance='12'
                        onClick={toggleCloudMenu}
                        className='flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-sm text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
                      >
                        {item.title}
                        <svg
                          className='ml-1 h-5 w-5'
                          aria-hidden='true'
                          fill='#00b7e3'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </button>
                      <div
                        id='cloud-solutions-dropdown'
                        className={
                          cloudMenuOpen
                            ? 'absolute left-0 z-10 mt-8 w-full bg-white shadow-sm'
                            : 'hidden'
                        }
                      >
                        <Image
                          src={menuCloud}
                          alt=''
                          width='1918'
                          height='27'
                          quality='100'
                          className='hidden md:flex'
                        ></Image>
                        {/* <Image
                          src={menuPoint}
                          alt=''
                          width='1918'
                          height='27'
                          quality='100'
                          className='hidden md:flex lg:hidden'
                        ></Image> */}
                        <div className='mx-auto grid text-sm text-gray-500 md:grid-cols-5 md:gap-8'>
                          <span className='col-span-2 hidden bg-menuBg bg-cover bg-no-repeat p-8 text-right hover:bg-blend-soft-light md:block'>
                            <p className='leading-wide mb-5 max-w-xl text-2xl font-extrabold tracking-wide text-white'>
                              {item.title}
                            </p>
                          </span>
                          <div className='arrow-list mx-10 mt-4 grid md:mx-0 md:py-10'>
                            <div>
                              <p className='mb-2 text-lg font-bold text-menuBlue'>
                                {props.titleMenu[4]}
                              </p>
                              <ul className='space-y-4 py-2 text-sm text-gray-700 dark:text-gray-400'>
                                {props.cloudMenu.map((cloudItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={cloudItem.url}
                                      className='py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                                    >
                                      {cloudItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                }
                return (
                  <li key={v4()}>
                    <Link
                      href={item.url}
                      className='block rounded py-2 pl-3 pr-4 text-sm text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
              <li key={v4()}>
                <button
                  id='dropdownLangButton'
                  // data-dropdown-toggle='dropdownLang'
                  onClick={toggleLangMenu}
                  className='inline-flex items-center rounded-lg py-2 pl-3 text-center align-top text-sm hover:text-blue-700 md:py-0 md:pl-0'
                  type='button'
                >
                  <Image
                    src={langIcon}
                    width='18'
                    height='18'
                    alt=''
                    className='mr-1'
                  />
                  {props.lng}
                  <svg
                    className='ml-1 h-5 w-5'
                    fill='#00b7e3'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
                <div
                  id='dropdownLang'
                  className={
                    langMenuOpen
                      ? 'absolute z-10 mt-4 w-32 rounded-lg bg-white shadow-lg'
                      : 'hidden'
                  }
                >
                  <ul className='py-2 text-sm text-gray-700'>
                    <li>
                      <Link
                        href='/en'
                        locale='en'
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        English
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/hk'
                        locale='zh-Hant-HK'
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        中文（繁體）
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <button
            // data-collapse-toggle='navbar'
            onClick={toggleMenu}
            type='button'
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
          >
            <svg
              className='h-6 w-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            className={
              menuOpen
                ? 'fixed left-0 top-0 h-screen w-[85%] overflow-auto bg-veryLightBlue p-8 duration-500 ease-in md:hidden'
                : 'fixed left-[-100%] top-0 h-screen p-8'
            }
          >
            <div className='flex w-full items-center justify-end'>
              <div onClick={toggleMenu} className='cursor-pointer'>
                <span className='text-xl'>&#10005;</span>
              </div>
            </div>
            <div className='flex-col' id='mobile'>
              <ul className='mt-4 flex-col space-y-2 font-medium'>
                {props.parentMenu.map((item) => {
                  if (
                    item.title === 'Assurance & Advisory' ||
                    item.title === '鑒證及諮詢'
                  ) {
                    return (
                      <li key={v4()}>
                        <button
                          id='assurance-advisory-button'
                          // data-dropdown-toggle='assurance-advisory-dropdown'
                          // data-dropdown-offset-distance='12'
                          onClick={toggleAssuranceMenu}
                          className='flex w-full items-center justify-between rounded py-2 pl-3 pr-4 align-baseline text-sm text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
                        >
                          {item.title}
                          <svg
                            className='ml-1 h-5 w-5'
                            fill='#00b7e3'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </button>
                        <div
                          id='assurance-advisory-dropdown'
                          className={
                            assuranceMenuOpen
                              ? 'absolute left-0 z-10 mt-4 w-full bg-white shadow-sm'
                              : 'hidden'
                          }
                        >
                          <Image
                            src={menuPoint}
                            alt=''
                            width='1918'
                            height='27'
                            quality='100'
                            className='hidden lg:flex'
                          ></Image>
                          <Image
                            src={menuPointLg}
                            alt=''
                            width='1918'
                            height='27'
                            quality='100'
                            className='hidden md:flex lg:hidden'
                          ></Image>
                          <div className='mx-auto grid text-sm text-gray-500 md:grid-cols-5 md:gap-8'>
                            <span className='col-span-2 hidden bg-menuBg bg-cover bg-no-repeat p-8 text-right hover:bg-blend-soft-light md:block'>
                              <p className='leading-wide mb-5 max-w-xl text-2xl font-extrabold tracking-wide text-white'>
                                {item.title}
                              </p>
                            </span>
                            <div className='arrow-list mx-10 mt-4 grid md:mx-0 md:grid-rows-2 md:py-10'>
                              <div>
                                <p className='mb-2 text-lg font-bold text-menuBlue'>
                                  {props.titleMenu[0]}
                                </p>
                                <ul className='mb-2 space-y-2 py-2 text-sm text-gray-700'>
                                  {props.auditMenu.map((subItem) => (
                                    <li key={v4()}>
                                      <Link
                                        href={subItem.url}
                                        className='py-2 hover:bg-gray-100 '
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className='mb-2 text-lg font-bold text-menuBlue'>
                                  {props.titleMenu[1]}
                                </p>
                                <ul className='mb-2 space-y-2 py-2 text-sm text-gray-700'>
                                  {props.fundMenu.map((subItem) => (
                                    <li key={v4()}>
                                      <Link
                                        href={subItem.url}
                                        className='py-2 hover:bg-gray-100 '
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className='arrow-list mx-10 mt-4 grid md:mx-0 md:grid-rows-2 md:py-10'>
                              <div>
                                <p className='mb-2 text-lg font-bold text-menuBlue'>
                                  {props.titleMenu[2]}
                                </p>
                                <ul className='mb-2 space-y-2 py-2 text-sm text-gray-700'>
                                  {props.advisoryMenu.map((subItem) => (
                                    <li key={v4()}>
                                      <Link
                                        href={subItem.url}
                                        className='py-2 hover:bg-gray-100 '
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className='mb-2 text-lg font-bold text-menuBlue'>
                                  {props.titleMenu[3]}
                                </p>
                                <ul className='mb-2 grid grid-cols-2 text-sm leading-7 text-gray-700'>
                                  {props.incorMenu.map((subItem) => (
                                    <li key={v4()}>
                                      <Link
                                        href={subItem.url}
                                        className='py-2 hover:bg-gray-100 '
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  }
                  if (
                    item.title === 'Cloud Solutions' ||
                    item.title === '雲端解決方案'
                  ) {
                    return (
                      <li key={v4()}>
                        <button
                          id='cloud-solutions-button'
                          // data-dropdown-toggle='cloud-solutions-dropdown'
                          // data-dropdown-offset-distance='12'
                          onClick={toggleCloudMenu}
                          className='flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-sm text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
                        >
                          {item.title}
                          <svg
                            className='ml-1 h-5 w-5'
                            aria-hidden='true'
                            fill='#00b7e3'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </button>
                        <div
                          id='cloud-solutions-dropdown'
                          className={
                            cloudMenuOpen
                              ? 'absolute left-0 z-10 mt-4 w-full bg-white shadow-sm'
                              : 'hidden'
                          }
                        >
                          <Image
                            src={menuCloud}
                            alt=''
                            width='1918'
                            height='27'
                            quality='100'
                            className='hidden md:flex'
                          ></Image>
                          {/* <Image
                          src={menuPoint}
                          alt=''
                          width='1918'
                          height='27'
                          quality='100'
                          className='hidden md:flex lg:hidden'
                        ></Image> */}
                          <div className='mx-auto grid text-sm text-gray-500 md:grid-cols-5 md:gap-8'>
                            <span className='col-span-2 hidden bg-menuBg bg-cover bg-no-repeat p-8 text-right hover:bg-blend-soft-light md:block'>
                              <p className='leading-wide mb-5 max-w-xl text-2xl font-extrabold tracking-wide text-white'>
                                {item.title}
                              </p>
                            </span>
                            <div className='arrow-list mx-10 mt-4 grid md:mx-0 md:py-10'>
                              <div>
                                <p className='mb-2 text-lg font-bold text-menuBlue'>
                                  {props.titleMenu[4]}
                                </p>
                                <ul className='space-y-4 py-2 text-sm text-gray-700 dark:text-gray-400'>
                                  {props.cloudMenu.map((cloudItem) => (
                                    <li key={v4()}>
                                      <Link
                                        href={cloudItem.url}
                                        className='py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                                      >
                                        {cloudItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  }
                  return (
                    <li key={v4()}>
                      <Link
                        href={item.url}
                        className='block rounded py-2 pl-3 pr-4 text-sm text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
                <li key={v4()}>
                  <button
                    id='dropdownLangButton'
                    // data-dropdown-toggle='dropdownLang'
                    onClick={toggleLangMenu}
                    className='inline-flex items-center rounded-lg py-2 pl-3 text-center align-top text-sm hover:text-blue-700 md:py-0 md:pl-0'
                    type='button'
                  >
                    <Image
                      src={langIcon}
                      width='18'
                      height='18'
                      alt=''
                      className='mr-1'
                    />
                    {props.lng}
                    <svg
                      className='ml-1 h-5 w-5'
                      fill='#00b7e3'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                  <div
                    id='dropdownLang'
                    className={
                      langMenuOpen
                        ? 'absolute z-10 mt-2 w-32 rounded-lg bg-white shadow-lg'
                        : 'hidden'
                    }
                  >
                    <ul className='py-2 text-sm text-gray-700'>
                      <li>
                        <Link
                          href='/en'
                          locale='en'
                          className='block px-4 py-2 hover:bg-gray-100'
                        >
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/hk'
                          locale='zh-Hant-HK'
                          className='block px-4 py-2 hover:bg-gray-100'
                        >
                          中文（繁體）
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
