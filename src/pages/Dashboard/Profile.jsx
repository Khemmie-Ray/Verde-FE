import React, { useState } from 'react'
import CreateOrg from '../../components/CreateOrg'

const Profile = () => {
  

  return (
   <main className='flex flex-col'>
    <div className='ml-auto'>
    <w3m-button />
    </div>
    <section className='rounded-lg bg-primary w-[100%] h-[30vh]'>
  
    </section>
    <section className='flex'>
    <CreateOrg />
    <button className='bg-primary text-secondary'>View Program</button>
    </section>
   </main>
  )
}

export default Profile