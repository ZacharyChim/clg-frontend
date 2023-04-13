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
      <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
        <div className='max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href='#' className='flex items-center'>
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
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-multi-level'
            aria-expanded='false'
          >
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            className='hidden w-full md:block md:w-auto'
            id='navbar-multi-level'
          >
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              {props.parentMenu.map((item) => {
                if (item.id === 38) {
                  return (
                    <li>
                      <button
                        id='mega-menu-full-cta-image-button'
                        data-dropdown-toggle='mega-menu-full-image-dropdown'
                        data-dropdown-offset-distance='12'
                        className='flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto'
                      >
                        {item.title}
                        <svg
                          className='w-5 h-5 ml-1'
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
                        className='z-10 absolute hidden left-0 w-full bg-white shadow-sm'
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
                        <div className='grid md:gap-8 mx-auto text-sm text-gray-500 md:grid-cols-5'>
                          <span className='col-span-2 hidden md:block p-8 text-right bg-menuBg bg-no-repeat bg-cover hover:bg-blend-soft-light'>
                            <p className='max-w-xl mb-5 text-2xl font-extrabold leading-wide tracking-wide text-white'>
                              {item.title}
                            </p>
                          </span>
                          <div className='grid mt-4 mx-10 md:mx-0 md:py-10 arrow-list md:grid-rows-2'>
                            <div>
                              <p className='text-menuBlue font-bold text-lg mb-2'>
                                {props.auditMenu[0].parent.title}
                              </p>
                              <ul
                                className='py-2 mb-2 text-sm text-gray-700 space-y-2'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.auditMenu.map((subItem) => (
                                  <li>
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
                              <p className='text-menuBlue font-bold text-lg mb-2'>
                                {props.fundMenu[0].parent.title}
                              </p>
                              <ul
                                className='py-2 mb-2 text-sm text-gray-700 space-y-2'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.fundMenu.map((subItem) => (
                                  <li>
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
                          <div className='grid mt-4 mx-10 md:mx-0 md:py-10 arrow-list md:grid-rows-2'>
                            <div>
                              <p className='text-menuBlue font-bold text-lg mb-2'>
                                {props.advisoryMenu[0].parent.title}
                              </p>
                              <ul
                                className='py-2 mb-2 text-sm text-gray-700 space-y-2'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.advisoryMenu.map((subItem) => (
                                  <li>
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
                              <p className='text-menuBlue font-bold text-lg mb-2'>
                                {props.incorMenu[0].parent.title}
                              </p>
                              <ul
                                className='grid grid-cols-2 mb-2 text-sm text-gray-700 leading-7'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.incorMenu.map((subItem) => (
                                  <li>
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
                    <li>
                      <button
                        id='mega-menu-full-cta-image-button2'
                        data-dropdown-toggle='mega-menu-full-image-dropdown2'
                        data-dropdown-offset-distance='12'
                        className='flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto'
                      >
                        {item.title}
                        <svg
                          className='w-5 h-5 ml-1'
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
                        className='z-10 absolute hidden left-0 w-full bg-white shadow-sm'
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
                        <div className='grid md:gap-8 mx-auto text-sm text-gray-500 md:grid-cols-5'>
                          <span className='col-span-2 hidden md:block p-8 text-right bg-menuBg bg-no-repeat bg-cover hover:bg-blend-soft-light'>
                            <p className='max-w-xl mb-5 text-2xl font-extrabold leading-wide tracking-wide text-white'>
                              {item.title}
                            </p>
                          </span>
                          <div className='grid mt-4 mx-10 md:mx-0 md:py-10 arrow-list'>
                            <div>
                              <p className='text-menuBlue font-bold text-lg mb-2'>
                                {props.cloudMenu[0].parent.title}
                              </p>
                              <ul
                                className='py-2 text-sm text-gray-700 dark:text-gray-400 space-y-4'
                                aria-labelledby='dropdownLargeButton'
                              >
                                {props.cloudMenu.map((cloudItem) => (
                                  <li>
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
                  <li>
                    <Link
                      href='#'
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}

              {/* // <li>
              //   <Link
              //     href='#'
              //     className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
              //     aria-current='page'
              //   >
              //     Home
              //   </Link>
              // </li>
              
              // <li>
              //   <Link
              //     href='#'
              //     className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              //   >
              //     Services
              //   </Link>
              // </li>
              // <li>
              //   <Link
              //     href='#'
              //     className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              //   >
              //     Pricing
              //   </Link>
              // </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <nav className='relative container mx-auto p-5 max-w-5xl'>
    //   <div className='flex items-center justify-between'>
    //     <div className='pt-2'>
    //       <Image
    //         src={props.logoURL}
    //         alt='CLG Group Logo'
    //         width={80}
    //         height={80}
    //       />
    //     </div>
    //     <div className='hidden md:flex space-x-6'>
    //       {props.parentMenu.map((item) => {
    //         if (item.id === 38) {
    //           return (

    // {/* <Link
    //   href=''
    //   key={v4()}
    //   className='hover:text-darkGrayishBlue'
    // >
    //   {item.title}
    // </Link> */}

    //           )
    //         }
    //         if (item.id === 39) {
    //           return (
    //             <Link
    //               href={item.externalPath}
    //               key={v4()}
    //               className='hover:text-darkGrayishBlue'
    //             >
    //               {item.title}
    //             </Link>
    //           )
    //         }
    //         return (
    //           <Link
    //             href={item.externalPath}
    //             key={v4()}
    //             className='hover:text-darkGrayishBlue'
    //           >
    //             {item.title}
    //           </Link>
    //         )
    //       })}
    //     </div>
    //     <button
    //       id='menu-btn'
    //       className={`${
    //         isOpen ? 'open' : ''
    //       } block hamburger md:hidden focus:outline-none`}
    //       onClick={toggleMenu}
    //     >
    //       <span className='hamburger-top'></span>
    //       <span className='hamburger-middle'></span>
    //       <span className='hamburger-bottom'></span>
    //     </button>
    //   </div>
    //   <div className='md:hidden'>
    //     <div
    //       id='menu'
    //       className={`${
    //         isHidden ? 'hidden' : 'flex'
    //       } absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
    //     >
    //       {props.parentMenu.map((item) => (
    //         <Link href='#' key={v4()} className='hover:text-darkGrayishBlue'>
    //           {item.title}
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </nav>
  )
}
