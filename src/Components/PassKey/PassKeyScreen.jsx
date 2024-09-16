import React, { useContext, useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import { SHA256 } from 'crypto-js'
import PrimaryButton from '../../Elements/PrimaryButton'
import { ToastContext } from '../Contexts/ToastContext'

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
                <TextInput error={error} value={key} setValue={setKey} placeholder={'Enter your passkey here.'} />
                <div>
                    <PrimaryButton disabled={hash === false} type='submit'>{hash === null ? 'Start' : 'Decrypt'}</PrimaryButton>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PassKeyScreen