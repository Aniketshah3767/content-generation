import { Search, SearchIcon } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-pink-100 via-purple-200 to-blue-100
 flex justify-center flex-col items-center text-purple'>
      <h2 className='text-3xl font-bold'>Browse all Templete</h2>
      <p>What would you like to Create Today</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-2xl mt-5 border-gray-900 my-2 w-[50%]'>
            <Search />
            <input type='text' placeholder='Search'
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
