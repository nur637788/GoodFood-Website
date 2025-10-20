import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    landmark: "",
    paymentMethod: "cod",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    walletNumber: "",
    instructions: ""
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.id) newErrors.id = "Product ID is required";
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.street) newErrors.street = "Street Address is required";
    if (!formData.city) newErrors.city = "City is required";
    // if (!formData.zip) newErrors.zip = "ZIP Code is required";

    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber) newErrors.cardNumber = "Card Number required";
      if (!formData.expiry) newErrors.expiry = "Expiry required";
      if (!formData.cvv) newErrors.cvv = "CVV required";
      if (!formData.cardName) newErrors.cardName = "Cardholder Name required";
    }

    if (formData.paymentMethod === "wallet") {
      if (!formData.walletNumber) newErrors.walletNumber = "Wallet Number required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Random number generate
  const generateRandomNumber = () => {
    const randNum = Math.floor(100000 + Math.random() * 900000); // 6 digits
    setRandomNumber(randNum);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!randomNumber) {
      alert("⚠️ Please generate your order number first!");
      return;
    }

    if (validate()) {
      console.log("Order Data:", formData);
      alert(`✅ Order Confirmed!\nOrder ID: ${randomNumber}`);

      // Reset form
      setFormData({
        id: "",
        fullName: "",
        phone: "",
        street: "",
        city: "",
        zip: "",
        landmark: "",
        paymentMethod: "cod",
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardName: "",
        walletNumber: "",
        instructions: ""
      });
      setErrors({});
      setRandomNumber("");
    }
  };

  return (
    <div className="md:pl-8 ml-13 py-5">
        <div className="max-w-lg m-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-pink-500 mb-4 text-center">
        🛍️ Product Order Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Product ID */}
        <div>
          <label className="font-semibold">Product ID</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
        </div>

        {/* Name */}
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="font-semibold">Street Address</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div className="flex-1">
            <label className="font-semibold">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border p-2 rounded"/>
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
          </div>
        </div>

        {/* Random Number */}
        <div className="flex items-center justify-between gap-4">
          <p className="mt-3 px-3 py-2 rounded border w-full font-bold  text-gray-700">
            {randomNumber || "000000"}
          </p>
          <button
            type="button"
            onClick={generateRandomNumber}
            className="mt-3 w-32 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg"
          >
            Generate
          </button>
        </div>

        {/* Payment Method */}
        <div>
          <label className="font-semibold">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border p-2 rounded">
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="wallet">Bkash/Nagad</option>
          </select>
        </div>

        {/* Card Payment */}
        {formData.paymentMethod === "card" && (
          <div className="space-y-2">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"/>
            <div className="flex gap-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="flex-1 border p-2 rounded"/>
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                className="flex-1 border p-2 rounded" />
            </div>
            <input
              type="text"
              name="cardName"
              placeholder="Cardholder Name"
              value={formData.cardName}
              onChange={handleChange}
              className="w-full border p-2 rounded"/>
          </div>
        )}

        {/* Wallet Payment */}
        {formData.paymentMethod === "wallet" && (
          <div>
            <input
              type="text"
              name="walletNumber"
              placeholder="Bkash/Nagad Number"
              value={formData.walletNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"/>
          </div>
        )}

        {/* Instructions */}
        <div>
          <label className="font-semibold">Your Instructions (Optional)</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"/>
        </div>

        {/* Confirm Button */}
        <button
          type="submit"
          disabled={!randomNumber}
          className={`w-full text-white p-2 rounded font-semibold ${
            randomNumber
              ? "bg-pink-600 hover:bg-pink-700 hover:scale-95 duration-300"
              : "bg-gray-400 cursor-not-allowed" }`}>
          Confirm Order
        </button>
      </form>
    </div>
          {/* back button  */}
      <button onClick={()=> navigate (-1)} className="px-4 py-1 bg-red-500 hover:bg-red-600 hover:scale-95 duration-300 rounded my-5">← Back</button>
    </div>
  );
};

export default OrderPage;
