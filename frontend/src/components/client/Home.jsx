import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import axios from 'axios'
import '../../App.css'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default function Home() {

  let [user, setUser] = useState([])
  useEffect(() => {
    loadData()
    getCart()

  }, [])
  let [inp, setInp] = useState('')

  async function loadData() {
    let response = await axios.get('http://localhost:4000/api/getProduct')
    setUser(response.data)
  
  }
  async function twoHundred() {
    let response = await axios.get('http://localhost:4000/getdata')
    let result = response.data.filter((item)=> (item.productPrice >= 1000 && item.productPrice <= 2000))
   
  }

  async function filterData() {
    let response = await axios.get(`http://localhost:4000/getdata/${inp}`)
    setUser(response.data)
  }

  let {setList} = useContext(UserContext)
  async function getCart(){
    let result = await axios.get('http://localhost:4000/getCartData')
    setList(result.data.length)
  }

  async function handleCart(data){
    await axios.post('http://localhost:4000/cartSubmit',{
      productBrand:data.productBrand,
      productPrice: data.productPrice,
      productRating: data.productRating,
      productType: data.productType,
      image:data.image
    })
    alert('cart added')
    getCart()
  }

 
  return (
    <div>
      <aside className="flex fixed my-14 h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Search</label>
              <form class="max-w-md mx-auto">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search"
                    value={inp}
                    onChange={(e) => setInp(e.target.value)}
                    id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />

                </div>
              </form>

              <button
              onClick={filterData}
                className="flex transform items-center bg-gray-100 rounded-lg px-3 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                Search
              </button>
              <button
              onClick={loadData}
                className="flex transform items-center bg-gray-100 rounded-lg px-3 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                All
              </button>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
              <button
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={twoHundred}
               
              >
                <span className="mx-2 text-sm font-medium">1000 - 2000</span>
              </button>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <BellRing className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Notifications</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Paperclip className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Checklists</span>
              </a>
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Brush className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Themes</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Setting</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>

      <div id='main'>
        {user.map((data) => (

          <div className="w-[300px] rounded-md border">
            <img
              src={`http://localhost:4000/${data.image}`}
              alt="Laptop"
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Brand:- {data.productBrand}</h1>
              <h1 className="text-lg font-semibold">type:- {data.productType}</h1>
              <h1 className="text-lg font-semibold">Rating:- {data.productRating}</h1>
              <h1 className="text-lg font-semibold">price:- {data.productPrice}</h1>

              <button
                onClick={()=>handleCart(data)}
                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"    
             >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
