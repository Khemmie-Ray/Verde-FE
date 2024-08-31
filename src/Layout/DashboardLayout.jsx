import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex justify-between'>
      <Sidebar />
      <div>
        <w3m-button />
      <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout