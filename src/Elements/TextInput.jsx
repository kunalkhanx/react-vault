import React, { useId, useState } from 'react'

const TextInput = ({ className, label, type = 'text', placeholder, error, value, setValue }) => {

    const [view, setView] = useState(false)
    const inputId = useId()
    const onChangeHandler = (e) => {
        if (!setValue) {
            return
        }
        setValue(e.target.value)
    }

    return (
        <div className={`${className} w-full ${type === 'password' ? 'relative' : ''}`}>
            {label ? <label htmlFor={inputId} className='block'>{label}</label> : null}
            <input value={value} id={inputId} onChange={onChangeHandler} type={type === 'password' ? (view ? 'text' : 'password') : type} placeholder={placeholder} className={`py-1.5 ${type === 'password' ? 'pl-3 pr-8' : 'px-3'} rounded bg-zinc-100 focus:bg-white border focus:outline-none focus:border-rose-500 block w-full`} />
            {type === 'password' ?
                <button type='button' onClick={() => setView(!view)} className='py-1.5 px-1.5 absolute top-6 right-0 text-zinc-500'>
                    {view ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    }
                </button>
                : null}
            {error ? <p className='text-red-600'>{error}/</p> : null}
        </div>
    )
}

export default TextInput