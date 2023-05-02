'use client'
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Dropdown } from 'flowbite-react'
import 'flowbite'
import menuImage from '../public/menu.png'
import menuPoint from '../public/menu-point.png'
import menuPointLg from '../public/menu-point-lg.png'
import menuCloud from '../public/menu-cloud.png'

export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const toggleMenu = () => {
    setIsOpen((current) => !current)
    setIsHidden((current) => !current)
  }
  return (
    <>
      <nav className='border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
        <div className='mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4'>
          <Link href='/' className='flex items-center'>
            <Image
              src={props.logoURL}
              alt='CLG Group Logo'
              width={80}
              height={80}
            />
          </Link>
          <button
            data-collapse-toggle='navbar-multi-level'
            type='button'
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-multi-level'
            aria-expanded='false'
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
            className='hidden w-full md:block md:w-auto'
            id='navbar-multi-level'
          >
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
              {props.parentMenu.map((item) => {
                if (item.id === 38) {
                  return (
                    <li key={v4()}>
                      <button
                        id='mega-menu-full-cta-image-button'
                        data-dropdown-toggle='mega-menu-full-image-dropdown'
                        data-dropdown-offset-distance='12'
                        className='flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
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
                        id='mega-menu-full-image-dropdown'
                        className='absolute left-0 z-10 hidden w-full bg-white shadow-sm'
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
                                {props.auditMenu[0].parent.title}
                              </p>
                              <ul
                                className='mb-2 space-y-2 py-2 text-sm text-gray-700'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.auditMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.externalPath}
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
                                {props.fundMenu[0].parent.title}
                              </p>
                              <ul
                                className='mb-2 space-y-2 py-2 text-sm text-gray-700'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.fundMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.externalPath}
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
                                {props.advisoryMenu[0].parent.title}
                              </p>
                              <ul
                                className='mb-2 space-y-2 py-2 text-sm text-gray-700'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.advisoryMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.externalPath}
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
                                {props.incorMenu[0].parent.title}
                              </p>
                              <ul
                                className='mb-2 grid grid-cols-2 text-sm leading-7 text-gray-700'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.incorMenu.map((subItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={subItem.externalPath}
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
                if (item.id === 39) {
                  return (
                    <li key={v4()}>
                      <button
                        id='mega-menu-full-cta-image-button2'
                        data-dropdown-toggle='mega-menu-full-image-dropdown2'
                        data-dropdown-offset-distance='12'
                        className='flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
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
                        id='mega-menu-full-image-dropdown2'
                        className='absolute left-0 z-10 hidden w-full bg-white shadow-sm'
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
                                {props.cloudMenu[0].parent.title}
                              </p>
                              <ul
                                className='space-y-4 py-2 text-sm text-gray-700 dark:text-gray-400'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.cloudMenu.map((cloudItem) => (
                                  <li key={v4()}>
                                    <Link
                                      href={cloudItem.externalPath}
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
                      href={item.externalPath}
                      className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
