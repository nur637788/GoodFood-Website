import React from 'react'

function Dashboard() {
  return (
   <section>
      <div className='py-2 px-5 md:pl-12 ml-11 pb-10'>
        <h2 className='text-xl md:text-2xl font-bold uppercase tracking-[1px] text-pink-600'>Dashboard</h2>
        <div className=''>
          
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    {/* Revenue Area */}
    <div className='bg-gray-200/40 px-5 py-5 my-5 rounded-md shadow-sm hover:shadow-blue-600 hover:scale-95 hover:-translate-y-3 duration-300'>
        <div className='flex justify-between'>
          <p className='font-bold md:text-2xl'>Revenue</p>
          <button className='px-3 py-1 bg-gray-200 rounded-md hover:text-blue-800'>View Report</button>
        </div>
        <p className='md:text-xl'>IDR 7.852.000</p>
        <p><span className='text-[#149D52] font-bold'>↑ 2.1%</span> vs last week</p>
        <p className='my-5'>Sales from 1-12 Dec, 2025</p>

    <div className="flex gap-5 items-end">
  {/* 01 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-20 w-2 bg-[#5A6ACF]"></p>
      <p className="h-10 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">01</p>
  </div>

  {/* 02 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-24 w-2 bg-[#5A6ACF]"></p>
      <p className="h-12 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">02</p>
  </div>

  {/* 03 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-16 w-2 bg-[#5A6ACF]"></p>
      <p className="h-8 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">03</p>
  </div>

  {/* 04 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-20 w-2 bg-[#5A6ACF]"></p>
      <p className="h-14 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">04</p>
  </div>

  {/* 05 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-10 w-2 bg-[#5A6ACF]"></p>
      <p className="h-18 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">05</p>
  </div>

  {/* 06 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-18 w-2 bg-[#5A6ACF]"></p>
      <p className="h-12 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">06</p>
  </div>

  {/* 07 */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1 items-end">
      <p className="h-12 w-2 bg-[#5A6ACF]"></p>
      <p className="h-8 w-2 bg-[#E6E8EC]"></p>
    </div>
    <p className="mt-1 text-sm text-gray-500">07</p>
  </div>
 
</div>
      {/* Week Area */}
  <div className='flex gap-5 mt-4'>
      <div className='flex gap-2 items-center'>
        <p className="h-2 w-2 bg-[#5A6ACF]"></p>
        <span> Lest Week</span>
      </div>
      <div className='flex gap-2 items-center'>
        <p className="h-2 w-2 bg-[#E6E8EC]"></p>
        <span> Lest week</span>
      </div>
  </div>
 </div>


      {/* Order Time Area */}
    <div className='bg-gray-200/40 px-5 py-5 my-5 rounded-md shadow-sm hover:shadow-blue-600 hover:scale-95 hover:-translate-y-3 duration-300'>
      <div className='flex justify-between'>
        <h2 className='font-black md:text-2xl '>Order Time</h2>
        <button className='px-3 py-1 bg-gray-200 rounded-md hover:text-blue-800'>View Report</button>
      </div>
      <p className='md:text-xl'>From 1-6 Dec, 2025</p>
        <div className='flex items-center justify-center py-5'>
          <div className="relative w-50 h-50 rounded-full flex items-center justify-center 
  bg-[conic-gradient(#5A6ACF_0deg_100deg,#F59E0B_100deg_240deg,#10B981_240deg_360deg)]">
              <p className="absolute text-xl font-bold text-gray-800 "></p>
          </div>
        </div>
       <div className='flex justify-between'>
         <div className='flex gap-2  items-center'>
        <p className="h-2 w-2 bg-[#5A6ACF]"></p>
        <span className=''>Morning 28%</span>
         </div>
         
      <div className='flex gap-2 items-center'>
        <p className="h-2 w-2 bg-green-600"></p>
        <span>Evening 32%</span>
      </div>
      <div className='flex gap-2 items-center'>
        <p className="h-2 w-2 bg-amber-500"></p>
        <span>Afternoon 40%</span>
      </div>
       </div>
    </div>
  </div>

        {/* Your Rating Area */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5  '>
        <div className='bg-gray-200/40 px-5 py-5 mt-5 rounded-md justify-center items-center shadow-sm hover:shadow-blue-600 hover:scale-95 hover:-translate-y-3 duration-300'>
          {/* Ring Chart Area */}
          <h3 className='font-bold md:text-2xl text-center'>Your Rating</h3>
          <p className='text-sm md:text-xl text-center'>Lorem ipsum dolor sit amet, consectetur</p>

       <div className='flex flex-col items-center'>
         <div className='mt-5'>
          <div className=" relative w-22 h-22 rounded-full flex items-center justify-center 
  bg-[conic-gradient(#f59e0b_300deg,#f59e0b_72deg,transparent_300deg,transparent_360deg)]">
          <div className="absolute w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-2xl text-amber-500 ">70% </div>
        </div>
        </div>
       <div className='flex gap-3 mt-3'>
         <div className="relative w-38 h-38 rounded-full flex items-center justify-center 
  bg-[conic-gradient(#5A6ACF_330deg,#f29e0c_72deg,transparent_250deg,transparent_360deg)]">
          <div className="absolute w-36 h-36 bg-green-500 rounded-full flex items-center justify-center text-2xl text-blue-700 ">95%</div>
        </div>
        <div className="relative w-28 h-28 rounded-full flex items-center justify-center 
  bg-[conic-gradient(#2FBFDE_320deg,#f59e0b_72deg,transparent_300deg,transparent_360deg)]">
          <div className="absolute w-26 h-26 bg-red-400 rounded-full flex items-center justify-center text-2xl text-[#2FBFDE]">80%</div>
        </div>
       </div>
       </div>
        </div>

              {/* Oder area Chart */}
        <div className='bg-gray-200/40 px-5 py-5 mt-5 rounded-md shadow-sm hover:shadow-blue-600 hover:scale-95 hover:-translate-y-3 duration-300'>
            <div className='flex justify-between'>
              <h2 className='font-bold md:text-2xl'>Order</h2>
              <button className='px-3 py-1 bg-gray-200 rounded-md hover:text-blue-800'>View Report</button>
            </div>
            <p>2.568</p>
            <p><span className='text-red-600 font-bold'>↓ 2.1%</span> vs last week</p>
            <p>Sales from 1-6 Dec, 2025</p>
          <div className='flex items-center justify-center py-5'>
            <div className="relative w-50 h-50 rounded-full flex items-center justify-center 
  bg-[conic-gradient(#5A6ACF_0deg_250deg,#E6E8EC_250deg_360deg)]">
              <p className="absolute text-xl font-bold text-gray-800 "></p>
          </div>
          </div>
          {/* Week Area */}
          <div className='flex gap-5 mt-4'>
             <div className='flex gap-2 items-center'>
             <p className="h-2 w-2 bg-[#5A6ACF]"></p>
            <span> Lest Week 70%</span>
            </div>
            <div className='flex gap-2 items-center'>
            <p className="h-2 w-2 bg-[#E6E8EC]"></p>
            <span> Lest week 30%</span>
            </div>
          </div>
        </div>
      </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-5  '>
              {/* Most Order Food Area */}
          <div className='bg-gray-200/40 px-5 py-5 mt-5  rounded-md shadow-sm hover:shadow-blue-600 hover:scale-95 hover:-translate-y-3 duration-300'>
            <h1 className='font-bold md:text-2xl text-center'>Most Ordered Food</h1>
            <p className='text-sm md:text-xl text-center'>Adipiscing elit, sed do eiusmod tempor</p>
            <div className='flex justify-evenly gap-2 items-center mt-7'>
              <img className='w-8 h-8 rounded-full' src="/icons/food1.png" alt="food1" />
              <p className=''>Fresh Salad Bowl</p>
              <p>IDR 45.000</p>
            </div>
            <div className='flex justify-evenly gap-2 items-center mt-3'>
              <img className='w-8 h-8 rounded-full' src="/icons/food2.png" alt="food2" />
              <p className=''>Chicken Noodles</p>
              <p>IDR 75.000</p>
            </div>
            <div className='flex justify-evenly gap-2 items-center mt-3'>
              <img className='w-8 h-8 rounded-full' src="/icons/food3.png" alt="food3" />
              <p className=''>Smoothie Fruits</p>
              <p>IDR 55.000</p>
            </div>
            <div className='flex justify-evenly gap-2 items-center mt-3'>
              <img className='w-8 h-8 rounded-full' src="/icons/food4.png" alt="food4" />
              <p className=''>Hot Chicken Wings</p>
              <p>IDR 45.000</p>
            </div>
          </div>


          {/* Most Popular Food Area */}
          <div className='bg-gray-200/40 px-5 py-5 mt-5 rounded-md shadow-sm hover:shadow-blue-600 hover:scale-95 hover:-translate-y-3 duration-300'>
            <h1 className='font-bold md:text-2xl text-center'>Most Popular Food</h1>
            <p className='text-sm md:text-xl text-center'>Adipiscing elit, sed do eiusmod tempor</p>
            <div className='flex justify-evenly gap-2 items-center mt-7'>
              <img className='w-8 h-8 rounded-full' src="/icons/food5.jpeg" alt="food5" />
              <p className=''>Chicken Burger</p>
              <p>Price: 3200.00</p>
            </div>
            <div className='flex justify-evenly gap-2 items-center mt-3'>
              <img className='w-8 h-8 rounded-full' src="/icons/food6.jpg" alt="food6" />
              <p className=''>Fresh Burger Bowl</p>
              <p>Price: 2320.00</p>
            </div>
            <div className='flex justify-evenly gap-2 items-center mt-3'>
              <img className='w-8 h-8 rounded-full' src="/icons/food7.jpg" alt="food7" />
              <p className=''>Fresh Combo Food</p>
              <p>Price: 1210.00</p>
            </div>
            <div className='flex justify-evenly gap-2 items-center mt-3'>
              <img className='w-8 h-8 rounded-full' src="/icons/food8.jpg" alt="food8" />
              <p className=''>Fresh Low Combo </p>
              <p>Price: 3602.00</p>
            </div>
          </div>
        </div>


      


        </div>
      </div>
   </section>
  )
}

export default Dashboard;
