
import { useNavigate } from 'react-router-dom'

function Navber() {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-200 shadow-sm shadow-blue-200'>
        <div className='py-3 px-5 md:pl-12 ml-11'>
      <div className='flex justify-between items-center gap-5'>
        <div className='flex bg-gray-50  h-7 rounded-full border border-blue-500'>
        <input className='px-2 w-30 md:w-96  outline-0 focus:border-1 rounded-full' type="text" placeholder='Search...'/>
      </div>

      <div className='flex gap-4 items-center'>
        <div className='w-5 h-5 bg-green-400 rounded-full flex justify-center items-center hover:scale-125 duration-300 cursor-pointer'>
         <img  className='w-5 h-5 rounded-full' src="/icons/profile.jpg" alt="berger" />
        </div>
        <button onClick={()=> navigate ('/userprofile')} className=" cursor-pointer hover:text-blue-600 hover:scale-105 duration-300"><span>nur</span> <span>^</span></button>
        <div className='w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
            <img className='w-4 h-4' src="/icons/notifi.png" alt="Notification icon" />
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navber
