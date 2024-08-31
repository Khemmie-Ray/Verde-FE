import React from 'react'
import heroImg from '../assets/hero-img.svg'


const Campaigns = () => {
  return (
    <main>
        <section className="bg-secondary h-[50vh] relative">
        <div style={{ backgroundImage: `url(${heroImg})`}} className="bg-cover bg-center flex justify-center items-center flex-col text-center lg:h-[60vh] md:h-[70vh] h-auto w-[90%] absolute left-1/2 top-4 transform -translate-x-1/2 text-white">
        <div className="w-[100%] lg:w-[50%] md:w-[50%] mx-auto">
        <h1 className="text-[24px] lg:text-[58px] md:text-[58px]">Launch Eco Campaigns, Engage and Earn Reward.</h1>
        </div>
        </div>
      </section>
    </main>
  )
}

export default Campaigns