import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodDetails = () => {
    const navigate = useNavigate();
  const { state } = useLocation();
  const food = state?.food;

  if (!food) return <p>No food data available.</p>;

  return (
    <div className="mx-5 md:mx-10 md:pl-8 ml-17 md:ml-20 py-10">
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='w-full h-80 m-auto'>
            <img src={food.image} alt={food.name} className="w-full h-full max-w-md rounded-md" />
        </div>
      <div className='bg-gray-200/30 p-2 px-5 rounded-md'>
            <h2 className=' text-center text-black text-2xl font-light'>Food Info</h2>
        <div className='flex gap-3 items-center justify-between'>
            <p className='text-2xl font-semibold'>ID:</p>
            <p className='text-xl'>01{food.id}</p>
        </div><hr className='text-gray-400'/>
        <div className='flex gap-3 items-center justify-between '>
            <p className='text-2xl font-semibold'>Name:</p>
            <p className='text-xl'>{food.name}</p>
        </div><hr />
        <div className='flex gap-3 items-center justify-between'>
            <p className='text-2xl font-semibold'>Rating:</p>
            <p className='text-xl'>{food.reviews.rating}</p>
        </div><hr />
        <div className='flex gap-3 items-center justify-between'>
            <p className='text-2xl font-semibold'>Category:</p>
            <p className='text-xl'>{food.category}</p>
        </div><hr />
        <div className='flex gap-3 items-center justify-between'>
            <p className='text-2xl font-semibold'>Stock:</p>
            <p className='text-xl'>Available</p>
        </div><hr />
        <div className='flex gap-1 items-center justify-between'>
            <h1 className="text-2xl font-semibold">Price:</h1>
            <p className="text-xl font-semibold"><span className='line-through text-amber-400 text-lg'>{food.Dprice}  </span> {food.price}৳ </p>
        
        </div><hr />
        <div className='flex gap-4 items-center justify-center mt-5'>
            <button className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 hover:scale-95 duration-300'><img src="/icons/cart.png" alt="cart-icon" /></button>
            <button onClick={()=> navigate ('/orderpage')} className='bg-pink-500 px-10 py-2 rounded-full hover:bg-pink-600 hover:scale-95 duration-300'>Order Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <h1 className='text-xl font-bold py-2'>Coustomer reviews:</h1>
        <div className='bg-gray-50 p-4 rounded-md shadow'>
            <div className='flex gap-2'>
                <div className='w-15 h-15 rounded-full ring-2 ring-blue-700'>
                    <img className='w-full h-full rounded-full' src={food.reviews.img} alt={food.reviews.name} />
                </div>
            <div>
                <h2 className='text-xl font-semibold'>{food.reviews.name}</h2>
                <h2>{food.reviews.rating}</h2>
            </div>
        </div>
        <h2 className='mt-2 '>{food.reviews.massage}</h2>
        </div>
        <hr className='my-2 text-gray-400'/>
        <div className='bg-gray-50 p-4 rounded-md shadow'>
            <div className='flex gap-2'>
            <div className='w-15 h-15 rounded-full ring-2 ring-blue-700'>
                <img className='w-full h-full rounded-full' src="https://i.pravatar.cc/100?img=12" alt={food.reviews.name} />
            </div>
            <div>
                <h2 className='text-xl font-semibold'>Aminul Islam</h2>
                <h2>⭐⭐⭐⭐⭐</h2>
            </div>
        </div>
        <h2 className='mt-2'>“Food was delicious and delivery was super fast! 😋”</h2>
        </div>
      </div>
        

      </div>
    </div>
  );
};

export default FoodDetails;
