"use client";
import React from 'react'
import SearchSection from './_components/SearchSection'
import TempleteListSection from './_components/TempleteListSection'


function Dashboard() {

    const [userSearchInput, setUserSearchInput] = React.useState<string>("");

  return (
    <div>
      {/* Search section */}
        <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)}/>

      {/* Templete List Section */}
        <TempleteListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
