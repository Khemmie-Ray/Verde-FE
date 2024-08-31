import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-secondary py-4 text-primary font-[500]'>
        <div className='w-[90%] mx-auto flex justify-between items-center '>
        <img src={logo} alt="" className='w-[150px]'/>
        <div>
            <NavLink to='/' className='mr-10'>Home</NavLink>
            <NavLink to='/campaigns'>Campaigns</NavLink>
        </div>
        <button>Connect Wallet</button>
        </div>
    </header>
  )
}

export default Header