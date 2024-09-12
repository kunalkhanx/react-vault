import React, { useId } from 'react'

const TextArea = ({ className, label, placeholder, error, value, setValue, rows=3 }) => {

    const inputId = useId()
    const onChangeHandler = (e) => {
        if (!setValue) {
            return
        }
        setValue(e.target.value)
    }

    return (
        <div className={`${className} w-full`}>
            {label ? <label htmlFor={inputId} className='block'>{label}</label> : null}
            <textarea rows={rows} value={value} id={inputId} onChange={onChangeHandler} placeholder={placeholder} className={`py-1.5 px-3 bg-zinc-100 focus:bg-white border focus:outline-none focus:border-rose-500 block w-full text-gray-800`} />
            {error ? <p className='text-red-600'>{error}/</p> : null}
        </div>
    )
}

export default TextArea