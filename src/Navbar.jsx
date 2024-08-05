import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
<div className='p-7 bg-pink-950 text-white flex justify-between'>
        <div className='text-[23px] font-semibold'>CareerBuilder</div>
        <div className='flex flex-wrap gap-6'>
        <Link to='/'> <button>HOME</button></Link>
    <Link to='register'> <button>REGISTER</button></Link>
    <Link to='login'><button>LOGIN</button></Link>
        </div>
       
    </div> <Outlet></Outlet></> 
    )
}
