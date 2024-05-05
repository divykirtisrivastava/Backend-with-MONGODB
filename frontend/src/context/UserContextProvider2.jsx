import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider2({children}) {
    let [list, setList] = useState('')
    let [release, setRelease] = useState('')


  return (
    <UserContext.Provider value={{list, setList, release, setRelease}}>
        {children}
    </UserContext.Provider>
  )
}
