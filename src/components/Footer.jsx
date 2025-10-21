import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  
  return (
    <footer className='bg-gray-200'>
      <div 
        data-aos='fade-up' 
        className='grid grid-cols-2 md:grid-cols-4 gap-8 px-10 md:px-20 py-5 ml-10'>
        {/* Company Logo */}
        <div className='space-y-2'>
          <h3 className='text-2xl font-bold'>Website</h3>
          <h4 className='font-extrabold text-blue-600 italic'>
            <span className='text-pink-500'>GOOD</span>FOOD
          </h4>
          <div className='w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center'>
            <button className='font-extrabold text-3xl'>
              <img className='w-7 h-7' src="/icons/barger.png" alt="logo" />
            </button>
          </div>
        </div>

        {/* Social Link */}
        <div className='flex flex-col space-y-2'>
          <h3 className='text-2xl font-bold'>Follow Us</h3>
          <a className='hover:text-blue-600 cursor-pointer'>Facebook</a>
          <a className='hover:text-blue-600 cursor-pointer'>Instagram</a>
          <a className='hover:text-blue-600 cursor-pointer'>YouTube</a>
        </div>

        {/* Useful Links */}
        <div className='flex flex-col items-start space-y-2'>
          <h3 className='text-2xl font-bold'>Useful Links</h3>
          <button className='cursor-pointer hover:text-blue-600'>Shop</button>
          <button 
            onClick={() => navigate('/privacypolicy')} 
            className='cursor-pointer hover:text-blue-600'>
            Privacy Policy
          </button>
          <button 
            onClick={() => navigate('/termcondition')} 
            className='cursor-pointer hover:text-blue-600'
          >
            Terms & Condition
          </button>
        </div>

        {/* Category */}
        <div className='flex flex-col space-y-2'>
          <h3 className='text-2xl font-bold'>Category</h3>
          <a className='hover:text-blue-600 cursor-pointer'>FastFood</a>
          <a className='hover:text-blue-600 cursor-pointer'>DeshiFood</a>
          <a className='hover:text-blue-600 cursor-pointer'>Drinks/Sncks</a>
        </div>
      </div>

      <hr className='border-gray-400' />
      <p className="text-gray-800 text-sm text-center py-3">
        &copy; {new Date().getFullYear()} GoodFood. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
