import React, { useState } from 'react'
import CreateOrg from '../../components/CreateOrg'
import bannerImg from '../../assets/banner.svg'

const Profile = () => {
  

  return (
   <main className='flex flex-col w-[90%] mx-auto'>
    <div className='ml-auto my-4'>
    <w3m-button />
    </div>
    <section className='rounded-lg bg-secondary p-6 flex justify-between items-center'>
        <div className='lg:w-[50%] md:w-[50%] w-[100%]'>
        <h1 className="text-[24px] lg:text-[48px] md:text-[48px] text-primary">Get Started</h1>
        <p className='my-4'>Get started by creating your organization’s profile, then explore the dashboard to create and manage eco-friendly campaigns, track progress, and engage participants.</p>
        <CreateOrg />
        </div>
        <div className='flex'>
        <button className='bg-primary text-secondary px-6 py-4 rounded-lg'>View Program</button>
        </div>
    </section>
    <section className='flex'>
   
    </section>
   </main>
  )
}

export default Profile