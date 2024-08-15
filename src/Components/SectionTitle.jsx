import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex items-center justify-between'>
            <h1 className='font-medium text-2xl'>{title}</h1>
            <button className="rounded-md bg-blue-600 text-white hover:bg-blue-700 py-2 px-5">Add</button>
        </div>
  )
}

export default SectionTitle