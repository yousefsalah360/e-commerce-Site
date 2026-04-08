import React from 'react'

const OnSubmit = (event) => {
  event.preventDefault();
}

const NewestLetterbox = () => {
  return (
      <div className='text-center'>
          <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-2'>Sign up for exclusive updates, new arrivals & insider-only discounts</p>
      
      <form className='w-full sm:w-1/2 flex flex-center gap-3 mx-auto my-6 border pl-3' onSubmit={OnSubmit}>

        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>Subscribe</button>

      </form>
    </div>
  )
}

export default NewestLetterbox