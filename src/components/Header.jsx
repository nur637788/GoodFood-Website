import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const [open, setOpen] = useState(true);
  return (
    <header className='bg-gray-700/30 shadow-sm shadow-blue-700 relative'>
            {/* Toggole Button */}
        <button onClick={()=> setOpen (!open)} className='text-3xl md:text-5xl absolute z-50 -right-1 top-1'>{open ? "›" : "‹"}</button>
        
       <div className='space-y-7 flex-1 w-full h-screen px-2 md:px-4 py-3'>
                {/* Logo */}
         <div className='flex gap-2 items-center animate-pulse hover:animate-bounce'>
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-full bg-pink-400 flex items-center justify-center'>
                <button className='font-bold italic'>GF</button>
            </div>
            <h1 className={`font-extrabold italic ${open ? "hidden" : ""}`}>GOODFOOD</h1>
        </div>
        {/*  Main Menu  */}
        <nav className='flex flex-col items-start gap-2 space-y-1'>
            <p className={` md:block font-bold text-[10px] italic { ${open ? "hidden" : ""}`}>MENU</p>
                {/* Dashboard icon */}
            <NavLink to='/'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/desh.png" alt="Dashboard-icon" />
                </span>
                <span className={` ${open ? "hidden" : ""}`}>Dashboard</span>
            </button></NavLink>

                {/* Food Order icon */}
            <NavLink to='/foodOrder'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/cart.png" alt="Food-Order-icon" /></span>
                <span className={` ${open ? "hidden" : ""}`}>Food Order</span>
            </button></NavLink>

                {/* Manage Menu icon */}
            <NavLink to='/manageMenu'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/menu.png" alt="Manage-Menu-icon" /></span>
                <span className={`  ${open ? "hidden" : ""}`}>Food Menu</span>
            </button></NavLink>

                {/* Customer Review icon */}
            <NavLink to='/customerReview'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/chat.png" alt="Customer-Review-icon" /></span>
                <span className={` ${open ? "hidden" : ""}`}>Review</span>
            </button></NavLink>

        </nav>

            {/*Others Menu  */}
        <nav className='flex flex-col items-start gap-2 space-y-1'>
            <p className={` md:block font-bold text-[10px] italic { ${open ? "hidden" : ""}`}>OTHERS</p>
                {/* Setting menu */}
            <NavLink to='/settings'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/setting.png" alt="Settings-icon" /></span>
                <span className={` ${open ? "hidden" : ""}`}>Settings</span>
            </button></NavLink>
                {/* Payment menu */}
            <NavLink to='/payment'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/wallet.png" alt="Payment-icon" /></span>
                <span className={` ${open ? "hidden" : ""}`}>Payment</span>
            </button></NavLink>
                {/* Accounts menu */}
            <NavLink to='/accounts'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/pofile.png" alt="Accounts-icon" /></span>
                <span className={` ${open ? "hidden" : ""}`}>Accounts</span>
            </button></NavLink>
                {/* Help Menu */}
            <NavLink to='/help'><button className='flex gap-2 items-center hover:scale-110 hover:text-teal-500  duration-300 cursor-pointer'>
                <span className='bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 '><img className='w-4 h-4 ' src="/icons/help.png" alt="Help-icon" /></span>
                <span className={` ${open ? "hidden" : ""}`}>Help</span>
            </button></NavLink>    

        </nav>
       </div>
    </header>
  )
}

export default Header
