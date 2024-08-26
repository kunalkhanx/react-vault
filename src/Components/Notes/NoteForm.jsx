import React, { useContext, useEffect, useState } from 'react'
import TextInput from '../../Elements/TextInput'
import TextArea from '../../Elements/TextArea'
import { z } from 'zod';
import store from '../../Lib/store';
import { PassKey } from '../Contexts/PassKey';

const createNoteSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
});

const NoteForm = ({selectedNote, onClose}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [errors, setErrors] = useState({title: [], content: []})

    const {key} = useContext(PassKey)

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
    }



    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedNote ? 'Update' : 'Add New'} Note</p>
                <button type='button' onClick={onClose} className='w-6 h-6 rounded border hover:bg-zinc-200 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <TextInput value={title} setValue={setTitle} label={'Title'} placeholder={'Enter note title'} error={errors.title[0]} />
            <TextArea value={content} setValue={setContent} label={'Message'} placeholder={'Enter message ...'} error={errors.content[0]} />

            <div>
                <button type='submit' className="rounded-md bg-blue-600 text-white hover:bg-blue-700 py-2 px-5">Save</button>
            </div>
        </form>
    )
}

export default NoteForm