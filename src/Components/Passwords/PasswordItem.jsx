import React, { useState } from 'react'
import IconButton from '../../Elements/IconButton'

const PasswordItem = ({ password, onEditMode, onDelete }) => {

    const [view, setView] = useState(false)

    const viewChangeHanlder = () => {
        setView(!view)
    }

    const onEditBtnClickHandler  = () => {
        onEditMode(password)
    }

    const onDeleteBtnClickHandler = () => {
        onDelete(password)
    }
    

    return (
        <div className='rounded-md border border-gray-700 bg-gray-900 py-2 px-4 flex flex-col gap-1 text-sm relative [&>.action-btns]:hidden [&>.action-btns]:hover:flex'>
            <div className='items-center gap-1 absolute right-2 top-1 action-btns'>
                <IconButton action={'edit'} onClick={onEditBtnClickHandler} />
                <IconButton action={'delete'} onClick={onDeleteBtnClickHandler} />
            </div>
            <p className='text-left text-base'>{password.siteName}</p>
            <p className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span>{password.username}</span>
            </p>
            <p className='flex items-center gap-1'>
                <button type='button' onClick={viewChangeHanlder}>
                    {!view ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg> :

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>}
                </button>
                <span>{view ? password.password : '•'.repeat(password.password.length)}</span>
            </p>
        </div>
    )
}

export default PasswordItem