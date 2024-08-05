import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Adminav = () => {
  return (
    <>
<div className='p-7 bg-pink-950 text-white flex justify-between'>
        <div className='text-[23px] font-semibold'>CareerBuilder</div>
        <div className='flex flex-wrap gap-6'>
     <Link to='/admin'> <button>HOME</button></Link>
     <Link to='/admin/addjob' ><button>ADD JOB</button></Link>
     <Link to='/admin/advjob'> <button>VIEW JOB</button></Link>
     <Link to='/admin/viewapply'> <button>APPLICATIONS</button></Link>
     <Link to='/admin/addimage'> <button>IMAGE</button></Link>

      <button>LOG OUT</button>

        </div>
       
    </div>
    <Outlet></Outlet>
    </>
      )
}
