'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { User } from 'lucide-react'
import { SignedIn, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50  w-full bg-dark-1 px-6 py-4 lg:px-10  '>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/icons/logo.svg'
          alt='logo'
          width={42}
          height={42}
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Meetly</p>
      </Link>

      <div className='flex-between gap-5'>
        <SignedIn>
            <UserButton/> 
        </SignedIn>    


        <MobileNav/>
      </div>

    </nav>
  )
}

export default Navbar