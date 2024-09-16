import React from 'react'

const Toast = ({ type = 'success', message, onClose}) => {
    return (
        <div className='w-full max-w-72 fixed top-14 right-14 shadow-lg flex items-center gap-3 justify-between border border-gray-700 bg-gray-900 py-3 px-4 z-[999] text-white leading-5 text-sm'>
            <div className='flex items-center gap-3'>
                <span className={`w-8 h-8 ${type === 'error' && 'bg-red-500 text-red-200'} ${type === 'success' && 'bg-green-500 text-green-200'} flex items-center justify-center flex-shrink-0`}>
                    {type === 'error' &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                        </svg>}
                    {type === 'success' && 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>}
                </span>
                <p>{message}</p>
            </div>
            <button className='w-6 h-6 border border-gray-700 flex-shrink-0 flex items-center justify-center' onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}

export default Toast