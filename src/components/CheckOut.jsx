// Checkout.jsx
import React, { useState } from "react";

const Checkout = () => {

  const [randomNumber, setRandomNumber] = useState([0,0,0]);

  // Random Number Genarate
  const generateRandomNumber = () => {
    const randNum = Math.floor(100 + Math.random() * 500);
    setRandomNumber(randNum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!randomNumber) return; 
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-6 pl-18">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-pink-500">
          Checkout Form
        </h2>

        {/* Customer Info */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border w-full px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Mobail No"
            className="border w-full px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Table Number"
            className="border w-full px-3 py-2 rounded uppercase" required/>
        </div>

        {/* Generate Random Number Button */}
       <div className="flex items-center justify-between gap-4">
          <p className="mt-3 px-3 py-2 rounded border w-full font-bold">
            61922{randomNumber}
          </p>
         <button
          type="button"
          onClick={generateRandomNumber}
          className="mt-3 w-20 bg-blue-600 hover:bg-blue-700 text-white font-light py-2 px-2 rounded-lg">
          Generate
        </button>
       </div>
        

        {/* Confirm Order Button */}
        <button type="submit"
          className= "mt-5 w-full bg-pink-500 hover:bg-pink-600 hover:scale-95 duration-300 font-semibold py-2 rounded-lg" >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
