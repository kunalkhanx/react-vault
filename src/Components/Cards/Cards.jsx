import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import CardItem from './CardItem'
import Modal from '../../Elements/Modal'
import CardForm from './CardForm'
import store from '../../Lib/store'
import { PassKey } from '../Contexts/PassKey'
import { ToastContext } from '../Contexts/ToastContext'

const Cards = () => {

  const [formMode, setFormMode] = useState(false)
  const [cardList, setCardList] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  const {key} = useContext(PassKey)
  const {runToast} = useContext(ToastContext)

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
    setSelectedCard(null)
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
        runToast('Card deleted!')
        fetchCards()
      }
    }else{
      runToast('Nothing to delete!', 'error')
    }
  }

  return (
    <div className='section flex flex-col gap-4'>
        <SectionTitle title={'Cards'} onAction={formOpenHandler} />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
        {cardList.map(card => <CardItem card={card} key={card.id} onEditMode={onEditModeHandler} onDelete={onDeleteModeHandler} />)}
        </div>

        {formMode ? <Modal onClose={onFormCloseHandler} className={'max-w-sm'}>
          <CardForm onClose={onFormCloseHandler} selectedCard={selectedCard} />
        </Modal> : null}
    </div>
  )
}

export default Cards