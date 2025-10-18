import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
  return (
    <footer className='bg-gray-400 '>
        <div data-aos='fade-up' className='grid grid-cols-2 md:grid-cols-4  justify-between pl-15 px-5 md:px-20 py-5'>
            {/* Company Logo */}
            <div className='space-y-1'>
                <h3 className='text-2xl font-bold'>Website</h3>
                <h4 className='font-extrabold text-blue-600 italic'><span className='text-pink-500'>GOOD</span>FOOD</h4>
                <div className='w-15  h-15  rounded-full bg-pink-400 flex items-center justify-center'>
                <button className='font-extrabold text-3xl'>GF</button>
            </div>
            </div>

            {/* Social Link */}
            <div className='flex flex-col space-y-1'>
                <h3 className='text-2xl font-bold'>Follow Us</h3>
                <a className='hover:text-blue-600' href="">Facebook</a>
                <a className='hover:text-blue-600' href="">Instagram</a>
                <a className='hover:text-blue-600' href="">YouTube</a>
            </div>

            {/* Privacy policy Link Button*/}
            <div className='flex flex-col items-start space-y-1'>
                <h3 className='text-2xl font-bold'>Important Links</h3>
                <button className='cursor-pointer hover:text-blue-600'>Shop</button>
                <button onClick={()=>navigate('/privacypolicy')} className='cursor-pointer hover:text-blue-600'>Privacy Policy</button>
                <button onClick={()=>navigate('/termcondition')} className='cursor-pointer hover:text-blue-600'>Terms & Condition</button>
            </div>

            {/* Catagoris Link button*/}
            <div className=' space-y-1 grid grid-cols-1 justify-center items-center gap-x-5'>
                <h3 className='text-2xl font-bold'>Category</h3>
                <div className='flex  gap-8'>
                    <button onClick={()=>navigate('/chair')} className='font-semibold cursor-pointer hover:text-blue-600'>FastFood</button>
                    <button onClick={()=>navigate('/table')} className='font-semibold cursor-pointer hover:text-blue-600'>DeshiFood</button>
                </div>
                <div className='flex  gap-8'>
                    <button onClick={()=>navigate('/sofa')} className='font-semibold cursor-pointer hover:text-blue-600'>Snacks</button>
                    <button onClick={()=>navigate('/bed')} className='font-semibold cursor-pointer hover:text-blue-600'>Drinks</button>
                </div>
                <div className='flex  gap-8'>
                    <button onClick={()=>navigate('/lamp')} className='font-semibold cursor-pointer hover:text-blue-600'>MostPopular</button>
                    <button className='font-semibold cursor-pointer hover:text-blue-600'>Discount</button>
                </div>
            </div>

        </div><hr className='text-gray-500'/>
        <p className="text-gray-800 text-sm text-center py-2">
          &copy; {new Date().getFullYear()} GoodFood. All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer;
