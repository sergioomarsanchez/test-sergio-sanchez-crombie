'use client'
import React, { useState } from 'react'

function SideMenu () {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState<Boolean>(true)
  return (
    <div className={`h-screen w-20 ${isOpen ? 'w-40' : 'w-20'} bg-red-500`}>
      <span onClick={() => setIsOpen(false)}>X</span>
      <div>Soy el menú carajo donde estoy?
      </div>
    </div>
  )
}

export default SideMenu
