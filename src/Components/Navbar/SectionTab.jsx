import React from 'react'

const SectionTab = ({active = false, tabTitle, onClick}) => {
  return (
    <button onClick={onClick} className={`w-fit px-8 py-1 border ${active ? 'border-transparent bg-red-500 text-white' : 'hover:bg-gray-950'}`}>
        {tabTitle}
    </button>
  )
}

export default SectionTab