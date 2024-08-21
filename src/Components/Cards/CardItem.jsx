import React from 'react'

const CardItem = ({card, onEditMode, onDelete}) => {

    function splitByFourChars(str) {
        let result = [];
        for (let i = 0; i < str.length; i += 4) {
            result.push(str.slice(i, i + 4));
        }
        return result;
    }

  return (
    <div className='rounded-md border bg-white py-6 px-4 flex flex-col gap-1 text-sm'>
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