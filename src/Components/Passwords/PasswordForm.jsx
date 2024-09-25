import React, { useContext, useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import { z } from "zod";
import store from '../../Lib/store';
import { PassKey } from '../../Contexts/PassKey';
import Close from '../../Elements/Close';
import PrimaryButton from '../../Elements/PrimaryButton';
import { ToastContext } from '../../Contexts/ToastContext';

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

    const {key} = useContext(PassKey)
    const {runToast} = useContext(ToastContext)

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
        store.savedata('passwords', {siteName, username, password}, selectedPassword ? selectedPassword.id : null, key)
        onClose()
        runToast(selectedPassword ? 'Password updated!' : 'New password added!')
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedPassword ? 'Update' : 'Add New'} Password</p>
                <Close onClose={onClose} />
            </div>

            <TextInput value={siteName} setValue={setSiteName} label={'Site name'} placeholder={'Ex. Google, My FB etc.'} error={errors.siteName[0]} />
            <TextInput value={username} setValue={setUsername} label={'Username'} placeholder={'Username or email'} error={errors.username[0]} />
            <TextInput type='password' value={password} setValue={setPassword} label={'Password'} placeholder={'Enter secret password'} error={errors.password[0]} />

            <div>
                <PrimaryButton type='submit'>Save</PrimaryButton>
            </div>
        </form>
    )
}

export default PasswordForm