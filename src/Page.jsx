import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sections from './Components/Sections'
import Modal from './Elements/Modal'
import { SettingsModal } from './Components/Settings/SettingsModal'
import { PassKey } from './Components/Contexts/PassKey'

export const Page = () => {
  
  const [openSetting, setOpenSetting] = useState(false)
  const {resetTimer} = useContext(PassKey)
  const [loadSections, setLoadSections] = useState(true)

  useEffect(() => {
    document.addEventListener('click', resetTimer);
    return () => {
      document.removeEventListener('click', resetTimer);
    };
  }, [resetTimer])

  useEffect(() => {
    if(!loadSections){
      setLoadSections(true)
    }
  }, [loadSections])

  const onSettingsClose = () => {
    setLoadSections(false)
    setOpenSetting(false)
  }

  return (
    <div className='flex flex-col gap-6 text-gray-200 bg-gray-800 min-h-screen'>
        {openSetting ? 
          <Modal className="max-w-xl" onClose={onSettingsClose}>
            <SettingsModal onClose={onSettingsClose} />
          </Modal> 
        : null}
        <Navbar onSettingOpen={() => setOpenSetting(true)} />
        {loadSections ? <Sections /> : null}
    </div>
  )
}
