import React from 'react'
import Modal from './Modal'
import PrimaryButton from './PrimaryButton'

const DeleteModal = ({onCancel, onConfirm, message = 'Are you sure to delete the item?'}) => {
  return (
    <Modal className='max-w-sm text-gray-200'>
        <p className='text-xl font-medium mb-2'>{message}</p>
        <p className='text-sm text-gray-500 mb-6'>This action is irreversible.</p>
        <div className='flex items-center gap-2'>
            <PrimaryButton color='danger' onClick={onConfirm}>Confirm</PrimaryButton>
            <PrimaryButton color='secondary' onClick={onCancel}>Cancel</PrimaryButton>
        </div>
    </Modal>
  )
}

export default DeleteModal