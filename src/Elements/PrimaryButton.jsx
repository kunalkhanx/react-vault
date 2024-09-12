import React from 'react'

const PrimaryButton = ({children, onClick = () => null, type = 'button', className, disabled = false, color = 'primary'}) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`py-2 px-5 flex items-center justify-center gap-2 
        ${color === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300'}
        ${color === 'success' && 'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300'} 
        disabled:text-zinc-400 ${className}`}>{children}</button>
  )
}

export default PrimaryButton