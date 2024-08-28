import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sections from './Components/Sections'
import Modal from './Elements/Modal'
import { SettingsModal } from './Components/Settings/SettingsModal'

export const Page = () => {
  
  const [openSetting, setOpenSetting] = useState(false)

  return (
    <div className='flex flex-col gap-6 text-zinc-600'>
        {openSetting ? 
          <Modal className="max-w-xl" onClose={() => setOpenSetting(false)}>
            <SettingsModal onClose={() => setOpenSetting(false)} />
          </Modal> 
        : null}
        <Navbar onSettingOpen={() => setOpenSetting(true)} />
        <Sections />
    </div>
  )
}
