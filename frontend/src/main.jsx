import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Table from './components/Table.jsx'
import AddData from './components/AddData.jsx'
import ViewData from './components/ViewData.jsx'
import Update from './components/Update.jsx'
import Layout from './Layout.jsx'
import Home from './components/client/Home.jsx'
import Signin from './components/Signin.jsx'
import Protected from './components/Protected.jsx'
import AddCard from './components/client/AddCard.jsx'
import Clientsignin from './components/client/Clientsignin.jsx'
import ClientSignup from './components/client/ClientSignup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <>
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/addcart' element={<AddCard/>}/>
    <Route path='/usersignin' element={<Clientsignin/>}/>
    <Route path='/usersignup' element={<ClientSignup/>}/>
  </Route>


    <Route path='/admin' element={<App/>}>
      <Route path='' element={
        <Protected>
          <Table/>
        </Protected>
      }/>
      <Route path='/admin/signin' element={<Signin/>}/>
      <Route path='/admin/addData' element={
        <Protected>
          <AddData/>
        </Protected>
      }/>
      <Route path='/admin/viewdata/:id' element={<ViewData/>}/>
      <Route path='/admin/update/:id' element={<Update/>}/>

    </Route>
    </>

    
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
