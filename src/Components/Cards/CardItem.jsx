import React from 'react'
import IconButton from '../../Elements/IconButton';

const CardItem = ({ card, onEditMode, onDelete }) => {

    function splitByFourChars(str) {
        let result = [];
        for (let i = 0; i < str.length; i += 4) {
            result.push(str.slice(i, i + 4));
        }
        return result;
    }

    const onEditBtnClickHandler = () => {
        onEditMode(card)
    }

    const onDeleteBtnClickHandler = () => {
        onDelete(card)
    }

    return (
        <div className='rounded-md border border-gray-700 bg-gray-900 py-6 px-4 flex flex-col gap-1 text-sm relative [&>.action-btns]:hidden [&>.action-btns]:hover:flex'>
            <div className='items-center gap-1 absolute right-2 top-1 action-btns'>
                <IconButton onClick={onEditBtnClickHandler} action={'edit'} />
                <IconButton onClick={onDeleteBtnClickHandler} action={'delete'} />
            </div>
            <div className='flex items-center justify-between mb-4'>
                <p className='font-medium text-base uppercase'>{card.cardName}</p>
                <p className='italic'>{card.CardType}</p>
            </div>
            <div className='py-4 flex gap-3 text-lg'>
                {splitByFourChars(card.cardNumber).map((n, index) => <span key={index}>{n}</span>)}
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <p className='leading-4 text-xs'>CVV</p>
                    <p className='text-base font-medium'>{card.cvv}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='leading-4 text-xs'>Valid <br /> Thru</p>
                    <p className='text-base font-medium'>{card.cardExpireMonth}/{card.cardExpireYear}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItem