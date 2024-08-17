import React from 'react'

const CardItem = () => {
  return (
    <div className='rounded-md border bg-white py-6 px-4 flex flex-col gap-1 text-sm'>
        <div className='flex items-center justify-between mb-4'>
            <p className='font-medium text-base uppercase'>American Express</p>
            <p className='italic'>Credit Card</p>
        </div>
        <div className='py-4 flex gap-3 text-lg'>
            <span>4236</span>
            <span>4236</span>
            <span>4236</span>
            <span>4236</span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p className='leading-4 text-xs'>CVV</p>
                <p className='text-base font-medium'>477</p>
            </div>
            <div className='flex items-center gap-3'>
                <p className='leading-4 text-xs'>Valid <br /> Thru</p>
                <p className='text-base font-medium'>02/25</p>
            </div>
        </div>
    </div>
  )
}

export default CardItem