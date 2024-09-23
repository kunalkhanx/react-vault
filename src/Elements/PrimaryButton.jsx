import React from 'react'

const PrimaryButton = ({children, onClick = () => null, type = 'button', className, disabled = false, color = 'primary'}) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`py-2 px-5 flex items-center justify-center gap-2 
        ${color === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 border border-blue-600 hover:border-blue-700 disabled:border-blue-300'}
        ${color === 'secondary' && 'bg-transparent text-white hover:bg-white/10 disabled:bg-white/30 border border-white hover:border-white disabled:border-white/30'}
        ${color === 'success' && 'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300 border border-green-600 hover:border-green-700 disabled:border-green-300'}
        ${color === 'danger' && 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300 border border-red-600 hover:border-red-700 disabled:border-red-300'}
        disabled:text-zinc-400 ${className}`}>{children}</button>
  )
}

export default PrimaryButton