"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './(component)/EmptyState';

function page() {
  const [VideoList,setVideoList]=useState([]);
  return (
    <div >
      <div className='p-5 flex justify-between items-center'>
       <div className='font-bold text-purple-700 text-2xl'>Dashboard</div>
       <Button className='bg-purple-700 hover:bg-purple-800 transition duration-300 cursor-pointer'>+ Create New</Button>
       </div>
       {
        (VideoList.length===0)&&<EmptyState/>
       }
    </div>
  )
}

export default page
