import React from 'react'
import SectionTitle from '../SectionTitle'
import NoteItem from './NoteItem'

const Notes = () => {
  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Notes'} />
        <div className='grid grid-cols-4 gap-6'>
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
        </div>
    </div>
  )
}

export default Notes