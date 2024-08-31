import React from "react";
import heroImg from '../assets/hero-img.svg'
import aboutImg from '../assets/abt.svg'

const Home = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum dapibus elementum. Maecenas ac magna a nisi placerat vehicula. Vivamus venenatis.";

  return (
    <main>
      <section className="bg-secondary h-[50vh] relative">
        <div style={{ backgroundImage: `url(${heroImg})`}} className="bg-cover bg-center flex justify-center items-center flex-col text-center lg:h-[60vh] md:h-[70vh] h-auto w-[90%] absolute left-1/2 top-4 transform -translate-x-1/2 text-white">
        <div className="w-[100%] lg:w-[50%] md:w-[50%] mx-auto">
        <h1 className="text-[24px] lg:text-[58px] md:text-[58px]">Empowering Eco-Friendly Campaigns</h1>
            <p className="mt-4 mb-8 text-[18px] lg:text-[24px] md:text-[24px]">Join the Green Revolution: Participate, Make an Impact, and Earn Rewards for a Better Tomorrow.</p>
            <div>
                <a href="" className="border-2 border-white rounded-full p-4 mr-4">Explore Campaigns</a>
                <button className="text-primary bg-white rounded-full p-4 mr-4">Create Campaigns</button>
            </div>
        </div>
        </div>
      </section>
      <section className="mt-36 w-[100%] lg:w-[90%] md:w-[90%] mx-auto mb-10">
      <h2 className="text-[24px] lg:text-[48px] md:text-[48px] text-center my-4">About Verdi</h2>
      <div className="flex justify-between">
        <div className="w-[100%] lg:w-[50%] md:w-[50%] self-center">
        <p className="tracking-wider">Verdi is a decentralized platform connecting organizations and individuals to take action for the environment. Businesses, NGOs, and groups can easily create eco-friendly campaigns, such as reforestation or waste reduction, and offer rewards to participants.</p>
            <p className="my-4 tracking-wider">Participants join campaigns, complete tasks like planting trees, and receive rewards once their work is verified. With blockchain technology ensuring transparency, rewards can be withdrawn in cryptocurrency or fiat. Verdi empowers a global community to make a tangible impact on our planet.</p>
        </div>
        <div className="w-[100%] lg:w-[45%] md:w-[45%]">
            <img src={aboutImg} alt="" className="w-[100%]"/>
        </div>
        </div>
      </section>
      <section className="bg-secondary py-8 ">
      <h2 className="text-[24px] lg:text-[48px] md:text-[48px] text-center text-primary my-4"> Featured Campaigns</h2>
      <div className="flex justify-between  w-[100%] lg:w-[90%] md:w-[90%] mx-auto flex-wrap">
        <div className="w-[100%] lg:w-[32%] md:w-[32%] bg-white">
          <img src="https://img.freepik.com/free-photo/group-happy-african-volunteers-planting-tree-park-africa-volunteering-charity-people-ecology-concept_627829-320.jpg?size=626&ext=jpg&ga=GA1.1.663094344.1720174275&semt=ais_hybrid" alt=""  className="object-cover object-center h-[20vh] w-[100%]"/>
          <div className="p-6">
        <h2 className="text-[24px] lg:text-[32px] md:text-[32px] text-primary">EarthFund</h2>
        <p className="text-gray mb-2 text-[18px] lg:text-[20px] md:text-[20px]">Clean Water Initiative</p>
        {description.slice(0, 50)}... SEE MORE
        </div>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Home;
