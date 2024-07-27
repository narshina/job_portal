import axios from 'axios'
import React, { useState } from 'react'

export const Addjob = () => {
    const[data,setdata]=useState({})
    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit=async(event)=>{
        event.preventDefault()
        let response=await axios.post('http://localhost:4000/addjob',data)
        setdata(data)
        console.log(data);
        console.log(response);
    }
  return (
    <form onSubmit={handlesubmit}>
    <div className='bg-slate-400 w-full h-[1000px] flex justify-center '>
        <div className='w-[500px] h-[500px] flex flex-col'>
            <div className='text-center font-bold' >ADD JOB</div>
            <input onChange={handlechange}  placeholder='JOB' name='job' type='text'></input>
            <input onChange={handlechange}  placeholder='JOB DESCRIPTION' name='jd' type='text'></input>
            <input onChange={handlechange}  placeholder='LOCATION' name='location' type='text'></input>
            <input onChange={handlechange}  placeholder='EXPERIENCE' name='experience' type='text'></input>
            <input onChange={handlechange}   placeholder='SALARY' name='salary' type='text'></input>
            <button className='bg-black text-white' type='submit'>SUBMIT</button>
        </div>
    </div>
    </form> 
  )
}
