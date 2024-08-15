import React from 'react'
import SectionTitle from '../SectionTitle'
import CardItem from './CardItem'

const Cards = () => {
  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Cards'} />
        <div className='grid grid-cols-3 gap-6'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
    </div>
  )
}

export default Cards