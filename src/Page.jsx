import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sections from './Components/Sections'

export const Page = () => {
  return (
    <div className='flex flex-col gap-6 text-zinc-600'>
        <Navbar />
        <Sections />
    </div>
  )
}
