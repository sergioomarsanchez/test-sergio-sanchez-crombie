'use client'
import React, { useState } from 'react'
import Fuse from 'fuse.js'
import Item from './Item'

type Data = { id: number; name: string; totalBeds: string }[];

export default function SearchBar ({ data } : { data: Data }) {
  const [searchData, setSearchData] = useState<Data>(data)

  const searchItem = async (query: string) => {
    const fuse = new Fuse(searchData, {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      keys: ['name']
    })
    const results = fuse.search(query)
    const finalResult: Data = []

    if (results.length) {
      results.forEach((item) => {
        finalResult.push(item.item)
      })
      setSearchData(finalResult)
    } else {
      setSearchData(data)
    }
  }

  return (
    <div className='text-black pt-5'>
      <p className='title'>Practices</p>
      <div className='search-container'>
        <input
          type='search'
          onChange={(e) => searchItem(e.target.value)}
          placeholder='Search'
          className='p-1'
        />
      </div>
      <div className='item-container pt-5'>
        {searchData.map((item) => (
          <Item name={item.name} key={item.id} beds={Number(item.totalBeds)} />
        ))}
      </div>
    </div>
  )
}
