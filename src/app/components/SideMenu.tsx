'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../img/Logo.png'
import LogoSmall from '../img/LogoSmall.png'
import PracticesLogo from '../icons/PracticesLogo.png'

function SideMenu () {
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(true)
  return (
    <nav className={`h-screen w-20 ${menuIsOpen ? 'w-40' : 'w-20'} fixed left-0 bg-navBar-00 flex flex-col gap-5 justify-start items-center pt-5`}>
      <div className='h-20'>
        <Image src={menuIsOpen ? Logo : LogoSmall} alt='Logotype of the company' className={`${menuIsOpen ? 'p-5' : 'p-1 mt-5'}`} />
      </div>
      <ul>
        <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <Link href='/Search' passHref className='flex gap-1'>
            <Image src={PracticesLogo} alt='Logotype of the company' className='w-6 mx-2' />
            <span className={`${menuIsOpen ? '' : 'hidden'}`}>
              Practices
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideMenu
