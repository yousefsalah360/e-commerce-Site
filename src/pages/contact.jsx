import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/frontend_assets/assets'
import NewestLetter from "../components/newestLetterbox";

function contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className=' w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className="font-semibold text-xl text-gray-800">Our Store</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black py-2 px-4 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-500'>Explore jops</button>
          </div>
      </div>
      <NewestLetter />
      </div>
  )
}

export default contact