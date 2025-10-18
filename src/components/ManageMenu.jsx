import React from 'react'

function ManageMenu() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold uppercase tracking-[1px] text-pink-600">Manage Menu</h1>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-3  justify-center'>
         {/* Fast Food Menu */}
         <div className="bg-gray-200 p-2 rounded-md text-sm">
          <h3 className="text-center font-bold text-xl md:text-2xl">Fast Food Menu</h3>
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Specal Burger 🍔</p>
            <p>৳180</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className="font-bold">BBQ Burger 🍔</p>
            <p>৳390</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Egg Burger 🍔</p>
            <p>৳240</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Mushroom Burger 🍔</p>
            <p>৳290</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Chicken Burger 🍔</p>
            <p>৳370</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Specal Pizza 🍕</p>
            <p>L-৳220 / XL-৳320</p>
          </div><hr />
          <div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Chicken Pizza 🍕</p>
            <p>L-৳280 / XL-৳350</p>
          </div><hr /><div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">BBQ Pizza 🍕</p>
            <p>L-৳340 / XL-৳420</p>
          </div><hr /><div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Tandori Pizza 🍕</p>
            <p>L-৳310 / XL-৳390</p>
          </div><hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Sandwich 🥪</p>
            <p>৳120</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3">
            <p className="font-bold">Hot Dog 🌭</p>
            <p>৳170</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Fried Chicken 🍗</p>
            <p>৳80</p>
          </div> <hr />
         </div>
                {/* Deshi Food Menu */}
         <div className="bg-gray-200 p-2 rounded-md text-sm">
          <h3 className="text-center font-bold text-xl md:text-2xl">Deshi Food Menu</h3>
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Beef Bhuna</p>
            <p>H-৳120 / F-৳180</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Chicken Biryani</p>
            <p>H-৳180 / F-৳240</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Beef Biryani</p>
            <p>H-৳140 / F-৳200</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Kacchi Biryani</p>
            <p>H-৳220 / F-৳330</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Tehari</p>
            <p>H-৳250 / F-৳340</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Polao with Roast</p>
            <p>H-৳150 / F-৳220</p>
          </div><hr />
          <div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Bhuna Khichuri</p>
            <p>H-৳70 / F-৳110</p>
          </div><hr /><div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Mixed Vegetable</p>
            <p>H-৳70 / F-৳120</p>
          </div><hr /><div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Chicken Korma</p>
            <p>H-৳110 / F-৳190</p>
          </div><hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Mutton Rezala</p>
            <p>৳190</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Chicken Cup</p>
            <p>৳130</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Chicken </p>
            <p>৳80</p>
          </div> <hr />
         </div>

                 {/* Snacks Food Menu */}
         <div className="bg-gray-200 p-2 rounded-md text-sm">
          <h3 className="text-center font-bold text-xl md:text-2xl">Snacks Food Menu</h3>
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Fuchka (Pani Puri)</p>
            <p>H-৳80 / F-৳130</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Chotpoti</p>
            <p>H-৳60 / F-৳90</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Chicken Roll</p>
            <p>L-৳110 / XL-৳190</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Egg Roll</p>
            <p>L-৳50 / XL-৳75</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Vegetable Roll</p>
            <p>L-৳40 / XL-৳60</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Beef Roll</p>
            <p>৳175</p>
          </div><hr />
         </div>

                {/* Drinks Food Menu */}
         <div className="bg-gray-200 p-2 rounded-md text-sm">
          <h3 className="text-center font-bold text-xl md:text-2xl">Drinks Food Menu</h3>
          <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Lassi</p>
            <p>৳140</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Lemon Juice</p>
            <p>৳90</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Falooda</p>
            <p>H-60 / F-৳110</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Borhani</p>
            <p>H-70 / F-৳120</p>
          </div> <hr />
           <div className="flex justify-between items-center gap-3">
            <p className=" font-bold">Tea (Milk Tea / Black Tea)</p>
            <p>৳20 / ৳10</p>
          </div> <hr />
          <div className="flex justify-between items-center gap-3 ">
            <p className=" font-bold">Coffee (Hot / Cold)</p>
            <p>৳40 / ৳30</p>
          </div><hr />
         </div>
       </div>

    </div>
  )
}

export default ManageMenu
