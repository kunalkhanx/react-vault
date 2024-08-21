import React, { useState } from 'react'
import SectionTabs from './Navbar/SectionTabs'
import Passwords from './Passwords/Passwords'
import Cards from './Cards/Cards'
import Notes from './Notes/Notes'

const Sections = () => {

    const [currentSection, setCurrentSection] = useState('cards')

    const tabChangeHandler = (tab) => {
        setCurrentSection(tab)
    }

  return (
    <div className='flex flex-col gap-6'>
        <SectionTabs onChange={tabChangeHandler} currentTab={currentSection} />
        {currentSection === 'passwords' ? <Passwords /> : null}
        {currentSection === 'cards' ? <Cards /> : null}
        {currentSection === 'notes' ? <Notes /> : null}
    </div>
  )
}

export default Sections