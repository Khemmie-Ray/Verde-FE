import React from 'react'
import heroImg from '../assets/hero-img.svg'
import Register from '../components/Register'


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
      <section className='bg-secondary mt-36 py-8'>
      <h2 className="text-[24px] lg:text-[48px] md:text-[48px] text-center text-primary my-4"> Current Campaigns</h2>
      <div className="flex justify-between  w-[100%] lg:w-[90%] md:w-[90%] mx-auto flex-wrap">
        <div className="w-[100%] bg-white flex justify-between rounded-lg p-4">
          <img src="https://img.freepik.com/free-photo/group-happy-african-volunteers-planting-tree-park-africa-volunteering-charity-people-ecology-concept_627829-320.jpg?size=626&ext=jpg&ga=GA1.1.663094344.1720174275&semt=ais_hybrid" alt=""  className="object-cover object-center h-[40vh] w-[100%] rounded-lg"/>
          <div className="p-6">
        <h2 className="text-[24px] lg:text-[32px] md:text-[32px] text-primary">EarthFund</h2>
        <p className="text-gray mb-2 text-[18px] lg:text-[20px] md:text-[20px] font-bold">Clean Water Initiative</p>
        <p className="text-gray mb-2 text-[16px] lg:text-[20px] md:text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, porro. Corrupti impedit, omnis, est vitae modi alias aliquam et minus a nulla temporibus fuga placeat?</p>
        <Register />
        </div>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Campaigns