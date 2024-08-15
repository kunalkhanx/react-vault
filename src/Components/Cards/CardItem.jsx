import React from 'react'

const CardItem = () => {
  return (
    <div className='rounded-md border bg-white py-6 px-4 flex flex-col gap-1 text-sm'>
        <div className='flex items-center justify-between mb-8'>
            <p className='font-medium text-xl uppercase'>American Express</p>
            <p className='italic text-lg'>Credit Card</p>
        </div>
        <div className='py-4 flex gap-3 text-xl'>
            <span>4236</span>
            <span>4236</span>
            <span>4236</span>
            <span>4236</span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p className='leading-4 text-xs'>CVV</p>
                <p className='text-xl font-medium'>477</p>
            </div>
            <div className='flex items-center gap-3'>
                <p className='leading-4 text-xs'>Valid <br /> Thru</p>
                <p className='text-xl font-medium'>02/25</p>
            </div>
        </div>
    </div>
  )
}

export default CardItem