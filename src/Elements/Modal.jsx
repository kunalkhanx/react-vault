import React from 'react'

const Modal = ({className, children, onClose}) => {
  return (
    <div className='w-screen h-screen z-[598] fixed left-0 top-0 flex items-center justify-center'>
        <div onClick={onClose} className='w-screen h-screen z-[599] fixed left-0 top-0 backdrop-blur'></div>
        <div className={`${className} relative z-[600] bg-white border shadow-md rounded-md p-6 w-fit w-full`}>
            {children}
        </div>
    </div>
  )
}

export default Modal