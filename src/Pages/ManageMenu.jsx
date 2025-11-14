import React, { useState } from "react";
import ManageMenu from "../components/ManageMenu";
function ManageMenus() {
  const [foods, setFoods] = useState([
    { id: 1, name: "Chicken Biriyani", price: 250, category: "DeshiFood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWdsTP6pgjHcesz7CQa7qOgeEHduBqLbxkA&s" },
    { id: 2, name: "Beef Burger", price: 180, category: "FastFood", image: "https://www.tasteofhome.com/wp-content/uploads/2017/09/exps28800_UG143377D12_18_1b_RMS.jpg" },
    { id: 3, name: "Specil Pizza", price: 90, category: "FastFood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCJERFxVF4b2oTQrXoRUm9igZDflIth7GOg&s" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newFood, setNewFood] = useState({ name: "", price: "", category: "", image: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newFood.name || !newFood.price) return;
    setFoods([...foods, { ...newFood, id: Date.now() }]);
    setNewFood({ name: "", price: "", category: "", image: "" });
    setShowForm(false);
  };

  return (
    <div className="py-4 px-5 md:pl-12 ml-11 pb-10 min-h-screen">
      {/* Header */}

      <ManageMenu />

      {/* Menu Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {foods.map((food) => (
          <div key={food.id} className="bg-white rounded-2xl shadow hover:shadow-lg duration-300 p-4">
            <img src={food.image} alt={food.name} className="rounded-xl w-full h-40 object-cover mb-3" />
            <h2 className="font-semibold text-lg text-gray-800">{food.name}</h2>
            <p className="text-sm text-gray-500">{food.category}</p>
            <p className="font-bold text-pink-600 mt-1">{food.price}৳</p>
            <div className="flex justify-end gap-3 mt-3">
              <button className="text-blue-500 hover:text-blue-700 text-lg">✏️</button>
              <button className="text-red-500 hover:text-red-700 text-lg">🗑️</button>
            </div>
          </div>
        ))}
      </div>



      {/* Add Item Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 md:w-96 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl">
              ✕
            </button>
            <h2 className="text-xl font-bold text-pink-600 mb-4">Add New Food</h2>

            <form onSubmit={handleAdd} className="space-y-3">
              <input
                type="text"
                placeholder="Food Name"
                value={newFood.name}
                onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-pink-400" />
              <input
                type="number"
                placeholder="Price (৳)"
                value={newFood.price}
                onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-pink-400" />
              <select
                value={newFood.category}
                onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-pink-400">
                <option value="">Select Category</option>
                <option value="Fast Food">FastFood</option>
                <option value="Main Dish">DeshiFood</option>
                <option value="Drinks">Drinks</option>
                <option value="Drinks">Sancks</option>
              </select>
              <input
                type="text"
                placeholder="Image URL"
                value={newFood.image}
                onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-pink-400" />

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg">
                Add Item
              </button>
            </form>
          </div>
        </div>
      )}


      {/* Item Add Button */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md m-auto my-5 cursor-pointer">
          ➕ Add Item
        </button>
      </div>

    </div>
  );
}

export default ManageMenus;
