import React from 'react'

function Item ({ name, beds }: { name: string, beds: number }) {
  return (
    <div className='flex justify-between items-center hover:bg-blue-400 transition-colors transition-300ms py-1 my-1 w-[290px] h-12 md:w-[650px] md:h-fit pr-2 text-xs md:text-base'>
      <div className='flex items-center'>
        <input id={name} type='checkbox' />
        <label htmlFor={name} className='cursor-pointer m-1 pr-2'>{name}</label>
      </div>
      <span>({beds})</span>
    </div>
  )
}

export default Item
