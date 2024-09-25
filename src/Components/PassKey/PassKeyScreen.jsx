import React, { useContext, useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import { SHA256 } from 'crypto-js'
import PrimaryButton from '../../Elements/PrimaryButton'
import { ToastContext } from '../../Contexts/ToastContext'

const nounce = 'magemonitor' // This is a string key that will use to verify key by hashing

const PassKeyScreen = ({setValue}) => {

    const [key, setKey] = useState('')
    const [hash, setHash] = useState(false)
    const [error, setError] = useState(null)

    const {runToast} = useContext(ToastContext)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setError(null)
        if(hash === null){
            if(key.length < 4){
                setError('Passkey size can\'t be less then 4 char(s)')
                return
            }
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
        runToast('Welcome back!')
    }

    useEffect(() => {
        const _hash = localStorage.getItem('_hash')
        setHash(_hash)
    }, [])
    
  return (
    <div className='w-screen h-screen text-gray-200 bg-gray-800 flex items-center justify-center'>
        <div className='w-full max-w-sm shadow-md border border-gray-700 bg-gray-900 p-4'>
            <form method='POST' className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
                <h2 className='text-lg font-medium'>{hash === null ? 'Please create a secret key' : 'Please enter the secret key'}</h2>
                <TextInput type='password' error={error} value={key} setValue={setKey} placeholder={'Enter your passkey here.'} />
                <div>
                    <PrimaryButton disabled={hash === false} type='submit'>{hash === null ? 'Start' : 'Decrypt'}</PrimaryButton>
                </div>
            </form>
            {hash === null && <>
            <hr className='my-8 border-gray-700' />
            <div className='text-gray-400'>
                <p className='mb-4'>Read this before start</p>
                <ul className='text-sm flex flex-col gap-3'>
                    <li className='flex items-start gap-2'>
                        <span className='text-green-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <span>The passkey is not stored anywhere and cannot be recovered once lost.</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-green-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <span>Your data is securely stored in your browser's local storage.</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-green-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <span>Clearing your browser's data will result in the loss of stored information.</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-green-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <span>You can easily back up and restore your data.</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-green-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <span>No data is sent to any server, and the app can be used offline.</span>
                    </li>
                </ul>
            </div></>}
        </div>
    </div>
  )
}

export default PassKeyScreen