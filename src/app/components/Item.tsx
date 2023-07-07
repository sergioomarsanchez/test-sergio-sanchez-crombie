import React from 'react'

function Item ({ name, beds }: { name: string, beds: number }) {
  return (
    <div className='flex justify-between hover:bg-blue-400 transition-colors transition-300ms w-[300px] md:w-[700px]'>
      <div>
        <input id={name} type='checkbox' />
        <label htmlFor={name} className='cursor-pointer m-1'>{name}</label>
      </div>
      <span>({beds})</span>
    </div>
  )
}

export default Item
