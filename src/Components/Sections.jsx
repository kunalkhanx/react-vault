import React, { useEffect, useState } from 'react'
import SectionTabs from './Navbar/SectionTabs'
import Passwords from './Passwords/Passwords'
import Cards from './Cards/Cards'
import Notes from './Notes/Notes'
import store from '../Lib/store'

const Sections = () => {

    const [currentSection, setCurrentSection] = useState(null)

    const tabChangeHandler = (tab) => {
        setCurrentSection(tab)
        store.state('last_tab', tab)
    }

    useEffect(() => {
      const last_tab = store.state('last_tab')
      if(last_tab){
        setCurrentSection(last_tab)
      }else{
        setCurrentSection('passwords')
      }
    }, [])

  return (
    <div className='flex flex-col gap-6 mb-6'>
        <SectionTabs onChange={tabChangeHandler} currentTab={currentSection} />
        {currentSection === 'passwords' ? <Passwords /> : null}
        {currentSection === 'cards' ? <Cards /> : null}
        {currentSection === 'notes' ? <Notes /> : null}
    </div>
  )
}

export default Sections