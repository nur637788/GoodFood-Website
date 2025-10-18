import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div className='flex gap-[1.5px]'>
      <div className=' fixed z-50'>
        <Header />
      </div>
     <div className=' w-full '>
       <div className='fixed top-0 left-0 right-0 z-1'>
          <Navber />
       </div>
        <div className='mt-10'> <Outlet /></div>
        <div><Footer></Footer></div>
     </div>
    </div>
  )
}

export default Layout
