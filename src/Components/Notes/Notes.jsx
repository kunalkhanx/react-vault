import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import NoteItem from './NoteItem'
import Modal from '../../Elements/Modal'
import NoteForm from './NoteForm'
import store from '../../Lib/store'
import { PassKey } from '../Contexts/PassKey'

const Notes = () => {

  const [formMode, setFormMode] = useState(false)
  const [notesList, setNotesList] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  const {key} = useContext(PassKey)

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
  }

  const onEditModeHandler = (note) => {
    if(note){
      setSelectedNote(note)
      setFormMode(true)
    }else{
      setSelectedNote(null)
    }
  }

  const onDeleteModeHandler = (note) => {
    if(note){
      if(window.confirm('Are you sure to delete the note?')){
        store.deleteData('notes', note.id)
        fetchNotes()
      }
    }else{
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