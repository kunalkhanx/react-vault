import React, { useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import { z } from "zod";
import store from '../../Lib/store';

const createPasswordSchema = z.object({
    siteName: z.string().min(1),
    username: z.string().min(1),
    password: z.string().min(1),
});
  

const PasswordForm = ({onClose, selectedPassword}) => {

    // Inputs
    const [siteName, setSiteName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({siteName:[''], username: [''], password: ['']})

    useEffect(() => {
        if(selectedPassword){
            setSiteName(selectedPassword.siteName)
            setUsername(selectedPassword.username)
            setPassword(selectedPassword.password)
        }        
    }, [selectedPassword])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setErrors({siteName:[''], username: [''], password: ['']})
        
        const result = createPasswordSchema.safeParse({
            siteName, username, password
        });
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors)
            return
        }
        store.savedata('passwords', {siteName, username, password}, selectedPassword ? selectedPassword.id : null)
        onClose()
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedPassword ? 'Update' : 'Add New'} Password</p>
                <button type='button' onClick={onClose} className='w-6 h-6 rounded border hover:bg-zinc-200 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <TextInput value={siteName} setValue={setSiteName} label={'Site name'} placeholder={'Ex. Google, My FB etc.'} error={errors.siteName[0]} />
            <TextInput value={username} setValue={setUsername} label={'Username'} placeholder={'Username or email'} error={errors.username[0]} />
            <TextInput type='password' value={password} setValue={setPassword} label={'Password'} placeholder={'Enter secret password'} error={errors.password[0]} />

            <div>
                <button type='submit' className="rounded-md bg-blue-600 text-white hover:bg-blue-700 py-2 px-5">Save</button>
            </div>
        </form>
    )
}

export default PasswordForm