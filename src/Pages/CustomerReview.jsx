import React, { useState } from "react";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Aminul Islam",
      image: "https://i.pravatar.cc/100?img=12",
      rating: 5,
      message: "Food was delicious and delivery was super fast! 😋",
      date: "October 16, 2025",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      image: "https://i.pravatar.cc/100?img=5",
      rating: 4,
      message: "Loved the taste, but portion size could be bigger 🍱",
      date: "October 15, 2025",
    },
    {
      id: 3,
      name: "Rakib Hasan",
      image: "https://i.pravatar.cc/100?img=25",
      rating: 5,
      message: "Best biriyani I’ve ever had! Totally worth it 😍",
      date: "October 10, 2025",
    },
    {
      id: 4,
      name: "Noah Kim",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 3.5,
      message: "Love the Indian twist! Spicy and flavorful.",
      date: "October 16, 2025",
    },
    {
      id: 5,
      name: "Sadiya Noor",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      rating: 4,
      message: "Soft roast and buttery polao — absolutely mouthwatering!",
      date: "October 23, 2025",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    rating: "5",
    message: "",
  });

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return alert("Please fill all fields!");

    const newReview = {
      id: Date.now(),
      name: formData.name,
      image: "https://i.pravatar.cc/100",
      rating: parseInt(formData.rating),
      message: formData.message,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", rating: "5", message: "" });
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 ml-12 md:ml-18">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-500">⭐ Customer Reviews</h1>
        <p className="text-gray-600 mt-2">
          See why people love <span className="font-semibold text-pink-600">GoodFood</span> 🍔
        </p>
      </div>

      {/* Average Rating */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-500">4.8 / 5</h2>
        <p className="text-gray-500">Based on {reviews.length}+ customer reviews</p>
        <div className="flex justify-center mt-2 text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
      </div>

      {/* Reviews Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-3">
              <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full border-2 border-pink-300" />
              <div>
                <h3 className="font-semibold text-gray-800">{r.name}</h3>
                <div className="text-yellow-400 text-sm">{'⭐'.repeat(r.rating)}</div>
              </div>
            </div>
            <p className="italic text-gray-700 mb-2">“{r.message}”</p>
            <p className="text-gray-400 text-sm">{r.date}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="bg-white max-w-md mx-auto p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-pink-500 mb-4 text-center">🖊️ Leave Your Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-2 mb-3 rounded-lg focus:outline-pink-400"
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="border w-full p-2 mb-3 rounded-lg focus:outline-pink-400"
          >
            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
            <option value="4">⭐⭐⭐⭐ (4)</option>
            <option value="3">⭐⭐⭐ (3)</option>
            <option value="2">⭐⭐ (2)</option>
            <option value="1">⭐ (1)</option>
          </select>

          <textarea
            name="message"
            placeholder="Write your feedback..."
            value={formData.message}
            onChange={handleChange}
            className="border w-full p-2 mb-3 rounded-lg h-24 focus:outline-pink-400"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold w-full py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReviews;
