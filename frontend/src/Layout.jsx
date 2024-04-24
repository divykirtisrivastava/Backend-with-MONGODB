import React from 'react'

import { Outlet } from 'react-router-dom'
import NavbarNew from './components/client/NavbarNew'
import UserContextProvider2 from './context/UserContextProvider2'

export default function Layout() {
  return (
   <UserContextProvider2>
     <NavbarNew/>
     <Outlet/>
   </UserContextProvider2>
    
  )
}
