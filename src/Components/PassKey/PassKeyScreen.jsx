import React, { useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import { SHA256 } from 'crypto-js'

const nounce = 'magemonitor' // This is a string key that will use to verify key by hashing

const PassKeyScreen = ({setValue}) => {

    const [key, setKey] = useState('')
    const [hash, setHash] = useState(false)
    const [error, setError] = useState(null)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setError(null)
        // if(key.length < 4){
        //     setError('Passkey size can\'t be less then 4 char(s)')
        //     return
        // }
        if(hash === null){
            const _hash = SHA256(nounce + key).toString()
            localStorage.setItem('_hash', _hash)
            setHash(_hash)
        }else{
            const _hash = SHA256(nounce + key).toString()
            if(_hash !== hash){
                setError('Invalid passkey!')
                return
            }
        }
        setValue(key)
    }

    useEffect(() => {
        const _hash = localStorage.getItem('_hash')
        setHash(_hash)
    }, [])
    
  return (
    <div className='w-screen h-screen text-gray-200 bg-gray-800 flex items-center justify-center'>
        <div className='w-full max-w-sm shadow-md rounded-md border border-gray-700 bg-gray-900 p-4'>
            <form method='POST' className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
                <h2 className='text-lg font-medium'>{hash === null ? 'Please create a secret key' : 'Please enter the secret key'}</h2>
                <TextInput error={error} value={key} setValue={setKey} placeholder={'Enter your passkey here.'} />
                <div>
                    <button disabled={hash === false} type='submit' className='rounded-md bg-blue-600 text-white hover:bg-blue-700 py-1.5 px-5 disabled:bg-blue-300 disabled:text-zinc-100'>{hash === null ? 'Start' : 'Decrypt'}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PassKeyScreen