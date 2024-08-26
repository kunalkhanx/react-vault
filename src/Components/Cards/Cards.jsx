import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import CardItem from './CardItem'
import Modal from '../../Elements/Modal'
import CardForm from './CardForm'
import store from '../../Lib/store'
import { PassKey } from '../Contexts/PassKey'

const Cards = () => {

  const [formMode, setFormMode] = useState(false)
  const [cardList, setCardList] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  const {key} = useContext(PassKey)

  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = () => {
    const response = store.getData('cards', key)
    setCardList(response)
  }

  const formOpenHandler = () => {
    setFormMode(true)
  }

  const onFormCloseHandler = () => {
    setFormMode(false)
    fetchCards()
  }

  const onEditModeHandler = (card) => {
    if(card){
      setSelectedCard(card)
      setFormMode(true)
    }else{
      setSelectedCard(null)
    }
  }

  const onDeleteModeHandler = (card) => {
    if(card){
      if(window.confirm('Are you sure to delete the card?')){
        store.deleteData('cards', card.id)
        fetchCards()
      }
    }else{
    }
  }

  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Cards'} onAction={formOpenHandler} />
        <div className='grid grid-cols-4 gap-6'>
        {cardList.map(card => <CardItem card={card} key={card.id} onEditMode={onEditModeHandler} onDelete={onDeleteModeHandler} />)}
        </div>

        {formMode ? <Modal onClose={onFormCloseHandler} className={'max-w-sm'}>
          <CardForm onClose={onFormCloseHandler} selectedCard={selectedCard} />
        </Modal> : null}
    </div>
  )
}

export default Cards