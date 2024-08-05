import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const Editjob = () => {

let {id}=useParams()
const[data,setData]=useState('')
const[job,setjob]=useState('')
useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await axios.get(`http://localhost:4000/vjobdetail/${id}`)
            setData(response.data)
            console.log(response.data);
        }
        catch(error){
            console.error("error")
        }
    }
    fetchData()
},[id])

const handlechange=(event)=>{
    setjob({...job,[event.target.name]:event.target.value})
}
const handlesubmit=async(event)=>{
    event.preventDefault()
    const response1=await axios.put(`http://localhost:4000/editjob/${id}`,job)
   setjob(job)
    console.log(response1.job);
    alert("edited")
}



  return (
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                EDIT JOB              </h1>
              <form onSubmit={handlesubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JOB</label>
                      <input onChange={handlechange} type='text' name='job' class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.job} />
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JOB DESCRIPTION</label>
                      <input onChange={handlechange} type="text" name="jd" placeholder={data.jd} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LOCATION</label>
                      <input onChange={handlechange} type="text" name="location" placeholder={data.location} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EXPERIENCE</label>
                      <input type="text" name="experience" placeholder={data.experience} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SALARY</label>
                      <input onChange={handlechange} type="text" name="salary" placeholder={data.salary} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
