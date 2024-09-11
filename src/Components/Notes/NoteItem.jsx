import React from 'react'
import IconButton from '../../Elements/IconButton'

const NoteItem = ({ note, onEditMode, onDelete }) => {

  const onEditBtnClickHandler = () => {
    onEditMode(note)
  }

  const onDeleteBtnClickHandler = () => {
    onDelete(note)
  }

  return (
    <div className='rounded-md border border-gray-700 bg-gray-900 py-2 px-4 flex flex-col gap-1 text-sm relative [&>.action-btns]:hidden [&>.action-btns]:hover:flex'>
      <div className='items-center gap-1 absolute right-2 top-1 action-btns'>
        <IconButton onClick={onEditBtnClickHandler} action={'edit'} />
        <IconButton onClick={onDeleteBtnClickHandler} action={'delete'} />
      </div>
      <p className='font-medium text-lg'>{note.title}</p>
      <p className='text-xs line-clamp-3'>{note.content}</p>
    </div>
  )
}

export default NoteItem