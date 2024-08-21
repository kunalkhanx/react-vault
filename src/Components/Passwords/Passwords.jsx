import React, { useEffect, useState } from 'react'
import PasswordItem from './PasswordItem'
import SectionTitle from '../SectionTitle'
import Modal from '../../Elements/Modal'
import PasswordForm from './PasswordForm'
import store from '../../Lib/store'


const Passwords = () => {

  const [formMode, setFormMode] = useState(false)
  const [passwordsList, setPasswordsList] = useState([])
  const [selectedPassword, setSelectedPassword] = useState(null)

  useEffect(() => {
    fetchPasswords()
  }, [])

  const fetchPasswords = () => {
    const response = store.getData('passwords')
    // console.log(response)
    setPasswordsList(response)
  }

  const onFormCloseHandler = () => {
    fetchPasswords()
    setFormMode(false)
  }

  const formOpenHandler = () => {
    setFormMode(true)
  }

  const onEditModeHandler = (password) => {
    if(password){
      setSelectedPassword(password)
      setFormMode(true)
    }else{
      setSelectedPassword(null)
    }
  }

  const onDeleteModeHandler = (password) => {
    if(password){
      if(window.confirm('Are you sure to delete the password?')){
        store.deletePassword(password.id)
        fetchPasswords()
      }
    }else{
    }
  }

  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Passwords'} onAction={formOpenHandler} />
        <div className='grid grid-cols-4 gap-6'>
          {passwordsList.map(password => <PasswordItem password={password} key={password.id} onEditMode={onEditModeHandler} onDelete={onDeleteModeHandler} />)}
            
        </div>
        {formMode ? <Modal onClose={onFormCloseHandler} className={'max-w-sm'}>
          <PasswordForm onClose={onFormCloseHandler} selectedPassword={selectedPassword} />
        </Modal> : null}
    </div>
  )
}

export default Passwords