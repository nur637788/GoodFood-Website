import React, { useState, useEffect } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState({
    name: "Abun Nur",
    email: "mdnoyon1200@gmail.com",
    phone: "+88017XXXXXXX",
    address: "Dhaka, Bangladesh",
  });

  // Theme toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("✅ Settings Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white  p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-pink-500  mb-6 text-center">
          ⚙️ Settings
        </h2>

        {/* Profile Section */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg "
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 ">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg "
            />
          </div>

          <div>
            <label className="block font-semibold ">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg "
            />
          </div>

          <div>
            <label className="block font-semibold ">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg "
            />
          </div>

          {/* Theme Switch */}
          <div className="flex items-center justify-between mt-6">
            <span className="font-semibold text-gray-700 ">
              🌗 Dark Mode
            </span>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                darkMode ? "bg-pink-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all ${
                  darkMode ? "translate-x-7" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            💾 Save Settings
          </button>

          {/* Danger Zone */}
          <div className="mt-8 border-t pt-5">
            <h3 className="text-lg font-semibold text-gray-700  mb-3">
              ⚠️ Danger Zone
            </h3>
            <button
              type="button"
              onClick={() => alert("Account deleted! (demo only)")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
