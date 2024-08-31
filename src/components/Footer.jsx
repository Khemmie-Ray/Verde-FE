import React from 'react'
import logo from '../assets/logo.svg'
import { AiFillInstagram, AiFillTikTok, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='py-4'>
        <div className='flex justify-between flex-col lg:flex-row md:flex-row w-[100%] lg:w-[90%] md:w-[90%] mx-auto'>
        <img src={logo} alt="" className='w-[150px]'/>
        <p>&copy; All Rights Reserved Verdi Team 2024</p>
        <div className='flex justify-between text-[36px] text-primary'>
        <AiFillInstagram />
        <AiFillTikTok />
        <AiFillFacebook />
        <AiFillLinkedin />
        </div>
        </div>
    </footer>
  )
}

export default Footer