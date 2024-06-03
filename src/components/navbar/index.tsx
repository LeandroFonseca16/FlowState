import React from 'react'
import Image from 'next/image'
import Logo from '@/src/assets/images/flowlogowhite.png'
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-50 bg-zinc-600	 text-white p-2 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
         <Image src={Logo} width={'50'} alt='Logo' />
        </div>
        </div>
    </nav>
  )
}

export default Navbar
