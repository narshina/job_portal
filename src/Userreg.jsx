import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Userreg = () => {
    const[data,setData]=useState({})

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit=async(event)=>{
        event.preventDefault()
        let response=await axios.post('http://localhost:4000/register',{...data,usertype:"user"})
        setData(data)
        console.log(data);
        console.log(response);
    }
  return (
    <form onSubmit={handlesubmit}>
    <div className='bg-slate-400 w-full h-[1000px] flex justify-center  '>
        <div className='w-[500px] h-[500px] flex flex-col'>
            <div className='text-center font-bold' >USER REGISTRATION</div>
            <label>NAME:</label>
            <input className='h-10 border rounded-lg' onChange={handlechange}  placeholder='NAME' name='name' type='text'></input>
            <label>AGE:</label>
            <input className='h-10 border rounded-lg' onChange={handlechange}  placeholder='AGE' name='age' type='number'></input>
            <label>EMAIL:</label>
            <input className='h-10 border rounded-lg' onChange={handlechange}  placeholder='EMAIL' name='email' type='email'></input>
            <label>PASSWORD</label>
            <input className='h-10 border rounded-lg' onChange={handlechange}  placeholder='PASSWORD' name='password' type='password'></input>
            <label>ADDRESS:</label>
            <input className='h-10 border rounded-lg' onChange={handlechange}  placeholder='ADDRESS' name='address' type='text'></input>
            <label>QUALIFICATION</label>
            <input className='h-10 border rounded-lg' onChange={handlechange}  placeholder='QUALIFICATION' name='qualification' type='text'></input>
           <div className='flex justify-center mt-5 '> <button className='bg-black text-white w-24 font-bold h-10 border rounded-lg' type='submit'>SUBMIT</button></div>
        </div>
    </div>
    </form> 
  )
}
