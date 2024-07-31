import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Viewjob = () => {

    const[data,setData]=useState([])
    const[search,setsearch]=useState('')
     useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/vjob')
                setData(response.data)
                console.log(response);
            }
            catch(error){
             console.error("error")
            }
        }
        fetchData()
     },[])

     const filteredData = data.filter(item =>
        item.job.toLowerCase().includes(search.toLowerCase())
     );

     const handleSearchChange = event => {
        setsearch(event.target.value);
     };

  return (
    <div>
        
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input value={search} onChange={handleSearchChange} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
    </div>
</form>


<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    JOB
                </th>
                <th scope="col" class="px-6 py-3">
                    JOB DESCRIPTION
                </th>
                <th scope="col" class="px-6 py-3">
                    LOCATION
                </th>
                <th scope="col" class="px-6 py-3">
                    EXPERIENCE
                </th>
                <th scope="col" class="px-6 py-3">
                    SALARY
                </th>
            </tr>
        </thead>
        {filteredData.map((item)=>(
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.job}
                </th>
                <td class="px-6 py-4">
                    {item.jd}
                </td>
                <td class="px-6 py-4">
                    {item.location}
                </td>
                <td class="px-6 py-4">
                    {item.experience}
                </td>
                <td class="px-6 py-4">
                    {item.salary}
                </td>
                <td class="px-6 py-4"><Link to={`/apply/${item._id}`}><label className='text-blue-700 hover:underline'>APPLY</label></Link></td>
            </tr>
           
            
        </tbody>
        ))}
    </table>
</div>

    </div>
  )
}
