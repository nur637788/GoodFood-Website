import React from 'react'

function Navber() {
  return (
    <div className='bg-gray-100'>
        <div className='py-2 px-5 md:pl-12 ml-11'>
      <div className='flex justify-between items-center gap-5'>
        <div className='flex bg-gray-200  h-7 rounded-md'>
        <input className='px-2 w-30 sm:w-50 md:w-[400px] rounded-md ' type="text" placeholder='Search' />
        {/* <img className='w-4 h-4 m-auto' src="/icons/search.png" alt="search-icon" /> */}
      </div>
      <div className='flex gap-3 items-center'>
        <div className='w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center'>
         <img className='w-4 h-4' src="/icons/barger.png" alt="berger" />
        </div>
        <p>Burger </p>
        <button className='text-xl'><img src="/icons/arrow.png" alt="" /></button>
        <div className='w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center'>
            <img className='w-4 h-4' src="/icons/notifi.png" alt="Notification icon" />
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navber
