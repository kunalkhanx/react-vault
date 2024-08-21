import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import CardItem from './CardItem'
import Modal from '../../Elements/Modal'
import CardForm from './CardForm'
import store from '../../Lib/store'

const Cards = () => {

  const [formMode, setFormMode] = useState(false)
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = () => {
    const response = store.getData('cards')
    setCardList(response)
  }

  const formOpenHandler = () => {
    setFormMode(true)
  }

  const onFormCloseHandler = () => {
    setFormMode(false)
    fetchCards()
  }

  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Cards'} onAction={formOpenHandler} />
        <div className='grid grid-cols-4 gap-6'>
        {cardList.map(card => <CardItem card={card} key={card.id} />)}
        </div>

        {formMode ? <Modal onClose={onFormCloseHandler} className={'max-w-sm'}>
          <CardForm onClose={onFormCloseHandler} />
        </Modal> : null}
    </div>
  )
}

export default Cards