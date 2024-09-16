import React, { useContext, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import settings from './settings'
import { SettingsContext } from '../Contexts/SettingsCtx'
import ImportExport from './ImportExport'
import Close from '../../Elements/Close'
import PrimaryButton from '../../Elements/PrimaryButton'
import { ToastContext } from '../Contexts/ToastContext'

export const SettingsModal = ({ onClose }) => {

    const [settingsFormData, setSettingsFormData] = useState({})
    const { setSettingsData } = useContext(SettingsContext)

    const {runToast} = useContext(ToastContext)

    useState(() => {
        setSettingsFormData(settings.get())
    }, [])


    const onSettingsChange = (name, value) => {
        setSettingsFormData(prev => { return { ...prev, [name]: value } })
    }

    const onSave = (e) => {
        e.preventDefault()
        settings.save(settingsFormData)
        setSettingsData(settingsFormData)
        runToast('Settings saved!')
    }

    return (
        <div className='flex flex-col gap-4'>
            <form onSubmit={onSave} className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Settings</h2>
                <Close onClose={onClose} />
            </div>

            <div className='grid grid-cols-2 gap-4 items-center'>
                <p>PassKey Expire (seconds):</p>
                <TextInput value={settingsFormData.passkey_expire} setValue={(val) => onSettingsChange('passkey_expire', parseInt(val))} />
            </div>

            <div className='flex gap-3'>
                <PrimaryButton type='submit'>Save</PrimaryButton>
            </div>
            </form>

            <hr />

            <ImportExport />
            
        </div>
    )
}
