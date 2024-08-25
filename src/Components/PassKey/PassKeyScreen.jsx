import React, { useState } from 'react'
import TextInput from '../../Elements/TextInput'

const PassKeyScreen = ({setValue}) => {

    const [key, setKey] = useState('')

    const onSubmitHandler = (e) => {
        setValue(key)
        e.preventDefault()
    }
    
  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center'>
        <div className='w-full max-w-sm shadow-md rounded border p-4'>
            <form method='POST' className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
                <h2 className='text-lg font-medium'>Please enter the secret key</h2>
                <TextInput value={key} setValue={setKey} placeholder={'Enter your passkey here.'} />
                <div>
                    <button type='submit' className='rounded-md bg-blue-600 text-white hover:bg-blue-700 py-1.5 px-5'>Decrypt</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PassKeyScreen