import React from 'react'
import PasswordItem from './PasswordItem'
import SectionTitle from '../SectionTitle'


const Passwords = () => {
  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Passwords'} />
        <div className='grid grid-cols-4 gap-6'>
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
            <PasswordItem />
        </div>
    </div>
  )
}

export default Passwords