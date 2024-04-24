import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewData() {
    let {id} = useParams()
    let [user, setUser] = useState([])
    useEffect(()=>{
        loadData()
    },[])
    async function loadData() {
        let response = await axios.get(`http://localhost:4000/viewdata/${id}`)

        setUser(response.data)
      
    }
  return (
    <>
    <div id="card">
        {user.map((data)=>(
    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">id:- {data._id}</h1>
        <h1 className="text-lg font-semibold">productName:- {data.name}</h1>
        <h1 className="text-lg font-semibold">title:- {data.email}</h1>
       
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    ))}
    </div>
    </>
   
  )
}
