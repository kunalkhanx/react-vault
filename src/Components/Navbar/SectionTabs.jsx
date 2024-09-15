import React from 'react'
import SectionTab from './SectionTab'



const SectionTabs = ({onChange, currentTab}) => {
  return (
    <div className='section flex items-center gap-2 flex-wrap px-4'>
        <SectionTab tabTitle={'Passowrds'} active={currentTab === 'passwords'} onClick={() => onChange('passwords')} />
        <SectionTab tabTitle={'Cards'} active={currentTab === 'cards'} onClick={() => onChange('cards')} />
        <SectionTab tabTitle={'Notes'} active={currentTab === 'notes'} onClick={() => onChange('notes')} />
    </div>
  )
}

export default SectionTabs