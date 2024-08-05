import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Adminvjob = () => {
    const[data,setData]=useState([])
    const[refresh,setrefresh]=useState('')
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
     },[refresh])

     let handleDelete=(id)=>{
        const response =axios.delete(`http://localhost:4000/delete/${id}`)
        console.log(response);
        setrefresh(!refresh)

      }
  return (
    <div><div class="relative overflow-x-auto">
        <h1 className='text-center font-extrabold'>JOBS</h1>
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
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        {data.map((item)=>(
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
                <td class="px-6 py-4 flex gap-4"><Link to={`/admin/editjob/${item._id}`}><button className='text-blue-700 hover:underline'>EDIT</button></Link>
                <button onClick={()=>handleDelete(item._id)} className='text-blue-700 hover:underline'>DELETE</button>
                </td>
            </tr>
           
            
        </tbody>
        ))}
    </table>
</div>
</div>
  )
}
