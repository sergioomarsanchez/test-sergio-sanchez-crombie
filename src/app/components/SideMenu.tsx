'use client'
import React, { useState } from 'react'
import Link from 'next/link'

function SideMenu () {
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(true)
  return (
    <nav className={`h-screen w-20 ${menuIsOpen ? 'w-40' : 'w-20'} fixed left-0 bg-blue-500`}>
      <span onClick={() => setMenuIsOpen(!menuIsOpen)}>X</span>
      <ul>
        <li onClick={() => setMenuIsOpen(false)}>
          <Link href='/Search' passHref>
            Practices
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideMenu
