import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md rounded-b-2xl">
      <div className="flex items-center space-x-4">
        <Image
          src="/log.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition duration-300">
          AI Short Vid
        </h1>
      </div>
      <div className='flex justify-between space-x-4'>
      <Button className='bg-purple-700 hover:bg-purple-800 transition duration-300 cursor-pointer'>Dashboard</Button>
      <UserButton/>
      </div>
    </header>
  )
}

export default Header
