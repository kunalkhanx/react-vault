import React from 'react'

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
                <button type='button' className='p-1 hover:text-green-500 transition-all' onClick={onEditBtnClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>

                <button type='button' className='p-1 hover:text-red-500 transition-all' onClick={onDeleteBtnClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </button>
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