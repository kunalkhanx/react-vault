import React, { useId } from 'react'

const FileInput = ({ label = 'Choose file', setValue }) => {

    const id = useId()

    const onInputChangeHandler = (e) => {
        const file = e.target.files[0]
        if(file){
            setValue(file)
        }
    }

    return (
        <div>
            <label htmlFor={id} className='cursor-pointer bg-amber-600 text-white hover:bg-amber-700 py-2 px-5 flex items-center justify-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>

                {label}
            </label>
            <input id={id} onChange={onInputChangeHandler} className='hidden' type="file" accept='application/json' />
        </div>
    )
}

export default FileInput