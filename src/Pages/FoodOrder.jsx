import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
      
  const FoodOrder = () => {
  const navigate = useNavigate();
      // Food Details page a jaoyae jonno
  const goToDetails = (item) => {
  navigate(`/food/${item.id}`, { state: { food: item } });
      };
  const [allData, setAllData] = useState([]);

        // json file Access start
    useEffect(() => {
      fetch (`foodImage.json`)
      .then(res => res.json())
      .then(data => setAllData(data))
    })
        // json file Access end

  const [cart, setCart] = useState([]);
  const [search, ] = useState("");
  const [filter, setFilter] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  
        // Data filter
  const filteredFoods = allData.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || food.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div id='up' className="min-h-screen bg-white text-black relative">
      {/* 🔝 Header */}
      <header className="md:pl-8 ml-11 py-5">
      
  <div className="flex items-end justify-end  fixed top-12 right-3 z-50">
    {/* 🛒 Cart Button */}
   <button onClick={() => setShowCart(!showCart)}
    className="relative bg-gray-700 p-1 rounded-full hover:bg-pink-500 duration-200">
    🛒
    {cart.length > 0 && (
      <span className="absolute -top-1 -right-2 bg-pink-500 text-xs px-1 rounded-full">
        {cart.length}</span>
    )}
   </button>
  </div>

      {/* 🛍️ Cart Sidebar */}
    {showCart && (
     <div className="fixed top-0 right-0 bg-gray-200 w-60 h-full p-4 shadow-lg z-50  animate-slide-left">

    {/* Close Button */}
   <div className='flex justify-between items-center'>
     <h2 className="text-xl font-bold text-pink-400">Your Cart</h2>
     <button onClick={() => setShowCart(false)}
      className=" text-gray-900 hover:text-pink-400 text-xl">✕</button>
   </div>
   <hr className='text-gray-300'/>
    

    {cart.length === 0 ? (
      <p className="text-gray-600">Your cart is empty.</p>
    ) : (
      <div>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between my-5">
            <p>{item.name} x{item.qty}</p>
            <p>${(item.price * item.qty).toFixed(2)}</p>
          </div>
        ))}
        <hr className="border-gray-600 my-3" />
        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>${cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}</p>
        </div>
        <button onClick={()=> navigate('/checkout')} className="mt-3 bg-pink-500 hover:bg-pink-600 w-full rounded py-2">
          Checkout
        </button>
      </div>
    )}
     </div>
    )}



      {/* 🧭 Filter Buttons */}
      <details className="w-full px-5">
  <summary className="cursor-pointer px-3 py-1 bg-pink-500 text-white rounded-md">
    Select Category
  </summary>

  <div className="grid grid-cols-1 gap-2 mt-2 bg-white p-2 rounded-md shadow-md">
    {["All", "FastFood", "DeshiFood", "Snacks", "Drinks","MostPopular", "Discount"].map(cat => (
      <button
        key={cat}
        onClick={() => setFilter(cat)}
        className={`px-3 py-1 rounded border text-sm ${
          filter === cat
            ? "bg-pink-500 border-pink-500 text-white"
            : "border-gray-400 text-gray-700 hover:bg-pink-100"
        } duration-200`}>
        {cat}
      </button>
    ))}
  </div>
      </details>


      {/* 🍱 Food Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
        {filteredFoods.map(item => (
          <div  key={item.id} className="bg-gray-400/40 rounded-lg hover:scale-105 duration-300 shadow-lg">

              <div onClick={() => goToDetails(item)} className='max-w-full max-h-57'>
              <img src={item.image} alt={item.name} className="rounded-sm hover:scale-105 duration-500 w-full h-50 md:h-60" />
            </div>

            <div className='p-3'>
              <h3 className="mt-2 font-bold text-lg">{item.name}</h3>

              <p className="text-pink-400 font-semibold"> {item.price} ৳</p>

              <button onClick={() => addToCart(item)} className="mt-2 bg-pink-500 hover:bg-pink-600 w-full rounded py-1">
              Add to Cart</button>
            </div>
          </div>
        ))}
      </div>


    </header>
    <a className='font-bold z-50 right-0 bg-amber-300 px-2 rounded-sm fixed bottom-0' href="#up">↑</a>
  </div>
  );
}

export default FoodOrder;
