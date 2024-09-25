import React, { useContext, useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import TextArea from '../../Elements/TextArea'
import { z } from 'zod';
import store from '../../Lib/store';
import { PassKey } from '../../Contexts/PassKey';
import Close from '../../Elements/Close';
import PrimaryButton from '../../Elements/PrimaryButton';
import { ToastContext } from '../../Contexts/ToastContext';

const createNoteSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
});

const NoteForm = ({selectedNote, onClose}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [errors, setErrors] = useState({title: [], content: []})

    const {key} = useContext(PassKey)
    const {runToast} = useContext(ToastContext)

    useEffect(() => {
        if(selectedNote){
            setTitle(selectedNote.title)
            setContent(selectedNote.content)
        }        
    }, [selectedNote])


    const onSubmitHandler = (e) => {
        e.preventDefault()
        setErrors({title: [], content: []})
        
        const result = createNoteSchema.safeParse({
            title, content
        });
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors)
            return
        }
        store.savedata('notes', {title, content}, selectedNote ? selectedNote.id : null, key)
        onClose()
        runToast(selectedNote ? 'Note updated!' : 'New note added')
    }



    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedNote ? 'Update' : 'Add New'} Note</p>
                <Close onClose={onClose} />
            </div>

            <TextInput value={title} setValue={setTitle} label={'Title'} placeholder={'Enter note title'} error={errors.title[0]} />
            <TextArea value={content} setValue={setContent} label={'Message'} placeholder={'Enter message ...'} error={errors.content[0]} />

            <div>
                <PrimaryButton type='submit'>Save</PrimaryButton>
            </div>
        </form>
    )
}

export default NoteForm