import React from 'react'
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
      <div>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              <div>
                  <img src={assets.logo} className='mb-5 w-32' alt="" />
                  <p className='w-full md:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>

              <div>
                  <p className='text-gray-700 font-semibold mb-4'>COMPANY</p>
                  <ul className='text-gray-600 flex flex-col gap-2'>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                  </ul>
              </div>

              <div>
                  <p className='text-gray-700 font-semibold mb-4'>GET IN TOUCH</p>
                  <ul className='text-gray-600 flex flex-col gap-2'>
                      <li>+971 50 123 4567</li>
                      <li>contact@foreveryou.com</li>
                  </ul>
              </div>
          </div>
          <hr className='my-10 border-gray-300' />
          <p className='text-center py-5 text-sm'>Copyright 2026@ forever.com - All Right Reserved..</p>
    </div>
  )
}

export default Footer