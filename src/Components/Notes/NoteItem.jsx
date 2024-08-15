import React from 'react'

const NoteItem = () => {
  return (
    <div className='rounded-md border bg-white py-2 px-4 flex flex-col gap-1 text-sm'>
        <p className='font-medium text-lg'>This is my first note</p>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam ab nesciunt natus velit earum vitae perspiciatis id optio voluptates alias quasi, reprehenderit repudiandae laboriosam minus dignissimos. Placeat, modi omnis!</p>
    </div>
  )
}

export default NoteItem