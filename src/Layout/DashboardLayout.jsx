import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex justify-between'>
      <Sidebar />
      <div className='flex flex-col w-[100%] lg:w-[80%] md:w-[80%] p-6'>
        <div className='ml-auto'>
        <w3m-button />
        </div>
        <div className='min-h-[100vh] overflow-y-scroll my-4'>
      <Outlet />
      </div>
      </div>
    </div>
  )
}

export default DashboardLayout