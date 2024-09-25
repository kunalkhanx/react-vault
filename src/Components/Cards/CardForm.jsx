import React, { useContext, useEffect, useState } from 'react'
import SelectInput from '../../Elements/SelectInput'
import TextInput from '../../Elements/TextInput'
import { z } from 'zod';
import store from '../../Lib/store';
import { PassKey } from '../../Contexts/PassKey';
import Close from '../../Elements/Close';
import PrimaryButton from '../../Elements/PrimaryButton';
import { ToastContext } from '../../Contexts/ToastContext';

const cardTypes = [
    {label: 'Credit Card', value: 'Credit Card' },
    {label: 'Debit Card', value: 'Debit Card' }
];

const createCardSchema = z.object({
    cardName: z.string(),
    cardType: z.string(),
    cardNumber: z.string().length(16),
    cardExpireMonth: z.string(),
    cardExpireYear: z.string(),
    cvv: z.string()
});

const CardForm = ({ selectedCard, onClose }) => {

    const [cardName, setCardName] = useState('')
    const [cardType, setCardType] = useState('Credit Card')
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpireMonth, setCardExpireMonth] = useState('')
    const [cardExpireYear, setCardExpireYear] = useState('')
    const [cvv, setCvv] = useState('')

    const [errors, setErrors] = useState({ cardName: [], cardType: [], cardNumber: [], cardExpireMonth: [], cardExpireYear: [], cvv: [] })

    const {key} = useContext(PassKey)
    const {runToast} = useContext(ToastContext)

    useEffect(() => {
        if(selectedCard){
            setCardName(selectedCard.cardName)
            setCardType(selectedCard.cardType)
            setCardNumber(selectedCard.cardNumber)
            setCardExpireMonth(selectedCard.cardExpireMonth)
            setCardExpireYear(selectedCard.cardExpireYear)
            setCvv(selectedCard.cvv)
        }
    }, [selectedCard])



    const onSubmitHandler = (e) => {
        e.preventDefault()
        setErrors({ cardName: [], cardType: [], cardNumber: [], cardExpireMonth: [], cardExpireYear: [], cvv: [] })
        const result = createCardSchema.safeParse({
            cardName, cardType, cardNumber, cardExpireMonth, cardExpireYear, cvv
        });
        if (!result.success) {
            setErrors({...errors, ...result.error.flatten().fieldErrors})
            return
        }
        store.savedata('cards', {cardName, cardType, cardNumber, cardExpireMonth, cardExpireYear, cvv}, selectedCard ? selectedCard.id : null, key)
        onClose()
        runToast(selectedCard ? 'Card upated!' : 'New card added!')
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedCard ? 'Update' : 'Add New'} Card</p>
                <Close onClose={onClose} />
            </div>

            <TextInput value={cardName} setValue={setCardName} label={'Card Name'} placeholder={'Ex. Americal Express'} error={errors.cardName[0]} />
            <SelectInput value={cardType} setValue={setCardType} label={'Select Card Type'} placeholder={'Select Type'} error={errors.cardType[0]} data={cardTypes} />
            <TextInput type='number' value={cardNumber} setValue={setCardNumber} label={'Card Number'} placeholder={'Ex. 4021 ...'} error={errors.cardNumber[0]} />
            <div className='grid grid-cols-2 gap-3'>
                <TextInput type='number' value={cardExpireMonth} setValue={setCardExpireMonth} label={'Expire Month'} placeholder={'08'} error={errors.cardExpireMonth[0]} />
                <TextInput type='number' value={cardExpireYear} setValue={setCardExpireYear} label={'Expire Year'} placeholder={'2024'} error={errors.cardExpireYear[0]} />
            </div>
            <TextInput type='number' value={cvv} setValue={setCvv} label={'CVV'} placeholder={'123'} error={errors.cvv[0]} />

            <div>
                <PrimaryButton type='submit'>Save</PrimaryButton>
            </div>
        </form>
    )
}

export default CardForm