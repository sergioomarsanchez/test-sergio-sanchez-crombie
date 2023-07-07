'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../img/Logo.png'
import LogoSmall from '../img/LogoSmall.png'
import PracticesLogo from '../icons/PracticesLogo.png'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../components/ui/collapsible'

function SideMenu () {
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(true)
  return (
    <nav className={`h-screen w-20 ${menuIsOpen ? 'w-60' : 'w-20'} fixed left-0 bg-navBar-00 flex flex-col gap-10 justify-start items-center pt-5 pb-8`}>
      <div className='h-10 xl:h-20'>
        <Image src={menuIsOpen ? Logo : LogoSmall} alt='Logotype of the company' className={`${menuIsOpen ? 'p-5' : 'p-1 mt-5'}`} />
      </div>
      <ul>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              DASHBOARD
            </span>
          </Link>
        </li>
        <li className='my-2 xl:my-8 md:text-sm'>
          <div className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 h-6 mx-2 cursor-pointer' onClick={() => setMenuIsOpen(!menuIsOpen)} />
            <Collapsible>
              <CollapsibleTrigger className={`${menuIsOpen ? '' : 'hidden'}`}>PROVIDERS</CollapsibleTrigger>
              <CollapsibleContent className={`${menuIsOpen ? '' : 'hidden'}`}>
                <ul className='flex flex-col gap-2 text-xs pl-5 pt-2'>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    Dashboard
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    Providers
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    My Tasks
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    All Tasks
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    Roster
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    Privileges
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    Credentials
                  </li>
                  <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    State Laws
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

          </div>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/Search' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              PRACTICES
            </span>
          </Link>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              JOBS
            </span>
          </Link>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              SCHEDULES
            </span>
          </Link>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              TIME & INVOICES
            </span>
          </Link>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              TIME & PAY
            </span>
          </Link>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              MESSAGES
            </span>
          </Link>
        </li>
      </ul>
      <ul className={`${menuIsOpen ? 'pr-10' : 'pr-0'} mt-10 xl:mt-24`}>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              HELP
            </span>
          </Link>
        </li>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)} className='my-2 xl:my-8 md:text-sm'>
          <Link href='/' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              SETTINGS
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideMenu
