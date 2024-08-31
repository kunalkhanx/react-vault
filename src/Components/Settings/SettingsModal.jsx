import React, { useContext, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import settings from './settings'
import { SettingsContext } from '../Contexts/SettingsCtx'

export const SettingsModal = ({onClose}) => {

    const [settingsFormData, setSettingsFormData] = useState({})
    const {setSettingsData} = useContext(SettingsContext)

    useState(() => {
        setSettingsFormData(settings.get())
    }, [])


    const onSettingsChange = (name, value) => {
        setSettingsFormData(prev => {return {...prev, [name]:value}})
    }

    const onSave = (e) => {
        e.preventDefault()
        settings.save(settingsFormData)
        setSettingsData(settingsFormData)
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={onSave}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Settings</h2>
                <button onClick={onClose} type='button' className='rounded border w-8 h-8 flex items-center justify-center hover:bg-zinc-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className='grid grid-cols-2 gap-4 items-center'>
                <p>PassKey Expire (seconds):</p>
                <TextInput value={settingsFormData.passkey_expire} setValue={(val) => onSettingsChange('passkey_expire', parseInt(val))} />
            </div>

            <div className='flex gap-3'>
                <button type='submit' className="rounded-md bg-blue-600 text-white hover:bg-blue-700 py-1.5 px-5">Save</button>
                <button type='button' onClick={onClose} className='rounded-md border flex items-center justify-center hover:bg-zinc-100 py-1.5 px-5'>Close</button>
            </div>
        </form>
    )
}
