import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Viewapply = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/vapply')
                setData(response.data)
                console.log(response);
            }
            catch(error){
                console.error("error")
            }
        }
        fetchData()
    },[])


  return (
    <div>

    <div class="relative overflow-x-auto">
        <h1 className='text-center font-extrabold'>JOB APPLICATIONS</h1>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                      JOB
                    </th>
                    <th scope="col" class="px-6 py-3">
                        NAME
                    </th>
                    <th scope="col" class="px-6 py-3">
                        AGE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        ADDRESS
                    </th>
                    <th scope="col" class="px-6 py-3">
                        QUALIFICATION
                    </th>
                    <th scope="col" class="px-6 py-3">
                        EMAIL
                    </th>
                    <th scope="col" class="px-6 py-3">
                        EXPERIENCE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        COMPANY
                    </th>
                    <th scope="col" class="px-6 py-3">
                        ACTION
                    </th>
                </tr>
            </thead>
            {data.map((item)=>(
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.job?.job}
                    </th>
                    <td class="px-6 py-4">
                        {item?.user?.name}
                    </td>
                    <td class="px-6 py-4">
                        {item?.user?.age}
                    </td>
                    <td class="px-6 py-4">
                        {item?.user?.address}
                    </td>
                    <td class="px-6 py-4">
                        {item?.user?.qualification}
                    </td>
                    <td class="px-6 py-4">
                        {item?.user?.email}
                    </td>
                    <td class="px-6 py-4">
                        {item?.applications?.jobex}
                    </td>
                    <td class="px-6 py-4">
                        {item?.applications?.company}
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                       <button>ACCEPT</button>
                       <button>REJECT</button>
                    </td>
                </tr>
                
               
            </tbody>
            ))}
        </table>
    </div>
    </div>
  )
}
