import React from 'react'
import PrimaryButton from '../Elements/PrimaryButton'

const SectionTitle = ({ title, onAction }) => {
  return (
    <div className='flex items-center justify-between px-4'>
      <h1 className='font-medium text-2xl'>{title}</h1>
      <PrimaryButton onClick={onAction}>Add</PrimaryButton>
    </div>
  )
}

export default SectionTitle