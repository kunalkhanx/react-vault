import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import NoteItem from './NoteItem'
import Modal from '../../Elements/Modal'
import NoteForm from './NoteForm'
import store from '../../Lib/store'
import { PassKey } from '../../Contexts/PassKey'
import { ToastContext } from '../../Contexts/ToastContext'
import { DeleteContext } from '../../Contexts/DeleteContext'

const Notes = () => {

  const [formMode, setFormMode] = useState(false)
  const [notesList, setNotesList] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  const {key} = useContext(PassKey)
  const {runToast} = useContext(ToastContext)
  const confirmDelete = useContext(DeleteContext)

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = () => {
    const response = store.getData('notes', key)
    setNotesList(response)
  }

  const formOpenHandler = () => {
    setFormMode(true)
  }

  const onFormCloseHandler = () => {
    setFormMode(false)
    fetchNotes()
    setSelectedNote(null)
  }

  const onEditModeHandler = (note) => {
    if(note){
      setSelectedNote(note)
      setFormMode(true)
    }else{
      setSelectedNote(null)
    }
  }

  const onDeleteModeHandler = async (note) => {
    if(note){
      const confirm = await confirmDelete('Are you sure to delete the note?')
      if(confirm){
        store.deleteData('notes', note.id)
        runToast('Note deleted!')
        fetchNotes()
      }
    }else{
      runToast('Nothing to delete!', 'error')
    }
  }

  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Notes'} onAction={formOpenHandler} />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
            {notesList.map(note => <NoteItem key={note.id} note={note} onEditMode={onEditModeHandler} onDelete={onDeleteModeHandler} />)}
        </div>
        {formMode ? <Modal onClose={onFormCloseHandler} className={'max-w-sm'}>
          <NoteForm onClose={onFormCloseHandler} selectedNote={selectedNote} />
        </Modal> : null}
    </div>
  )
}

export default Notes