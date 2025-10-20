import React from "react";
import { useState } from "react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "🍔 How to place an order?",
      content:
        "Go to the Menu page, select your favorite items, and click 'Add to Cart'. Then visit the Checkout page to confirm delivery and payment.",
    },
    {
      title: "🚚 How to track my delivery?",
      content:
        "After placing an order, you can check your order status from your profile’s 'My Orders' section.",
    },
    {
      title: "💳 What payment methods are available?",
      content:
        "GoodFood accepts Bkash, Nagad, Rocket, and Debit/Credit Cards. You can also apply coupon codes during checkout.",
    },
    {
      title: "⚙️ I’m facing a technical issue. What should I do?",
      content:
        "Try refreshing the page or clearing browser cache. If the problem remains, contact support@goodfood.com.",
    },
    {
      title: "📞 How can I contact customer support?",
      content:
        "You can email us at support@goodfood.com or call +8801XXXXXXXXX (9AM–10PM).",
    },
  ];
  return (
    <section className="bg-white text-black">
      <div className="md:pl-11 ml-14 min-h-screen  px-6 md:px-16 py-12 ">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-pink-400 tracking-wide">
            GoodFood Help Center
          </h1>
          <p className="text-gray-800 mt-3">
            Need help? You’re in the right place! 🍽️ <br />
            Find answers to all your questions about ordering, payments, and more.
          </p>
        </div>

        {/* Section 1: Introduction */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the GoodFood Help Center! We’re here to make your food ordering experience simple and delicious.
            Explore below to find out how to order, make payments, and contact support.
          </p>
        </div>

        {/* Section 2: Ordering & Delivery */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">2. Ordering & Delivery</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>How to place an order</li>
            <li>How to track your order</li>
            <li>Cancel or change your order</li>
            <li>What to do if your order is delayed or missing</li>
          </ul>
          <p className="mt-3 text-gray-700 italic">
            To place an order, visit the <span className="text-pink-400">Menu</span> page, add your favorite items to the cart, and confirm your delivery at checkout.
          </p>
        </div>

        {/* Section 3: Payment & Refund */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">3. Payment & Refund</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Accepted payment methods</li>
            <li>How to apply coupons or discounts</li>
            <li>Requesting a refund</li>
            <li>What to do if payment fails</li>
          </ul>
          <p className="mt-3 text-gray-600 italic">
            We accept <span className="text-pink-400">Bkash, Nagad, Rocket</span>, and all major debit/credit cards.
            For failed payments, please try again or contact our support team.
          </p>
        </div>

        {/* Section 4: Account & Profile */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">4. Account & Profile</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Creating an account</li>
            <li>Updating your profile or password</li>
            <li>Resetting a forgotten password</li>
          </ul>
        </div>

        {/* Section 5: Customer Support */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">5. Customer Support</h2>
          <p className="text-gray-600">
            Our support team is available every day from <span className="text-pink-400">9AM – 10PM</span>.
            <br /> You can reach us via:
          </p>
          <ul className="ml-6 mt-2 text-gray-600 space-y-1">
            <li>💬 Live Chat on our website</li>
            <li>📧 Email: <a href="mailto:support@goodfood.com" className="text-pink-400 underline">support@goodfood.com</a></li>
            <li>📞 Phone: +8801XXXXXXXXX</li>
          </ul>
        </div>

        {/* Section 6: Technical Issues */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">6. Technical Issues</h2>
          <p className="text-gray-600 leading-relaxed">
            If you experience any technical issues, try refreshing your browser or clearing the cache.
            <br /> If the problem continues, please contact us via email.
          </p>
        </div>

        {/* Section 7: Feedback */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-amber-400 mb-2">7. Feedback</h2>
          <p className="text-gray-600 leading-relaxed">
            We love hearing from our users! 💖  
            If you have any suggestions, feature ideas, or improvements, please share them with us.
          </p>
        </div>

            {/* Faqs Section */}
        <div className="max-w-3xl mx-auto space-y-4 py-5">
            <h2 className="text-center font-bold text-2xl text-amber-400">FAQS Section</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-700/30 rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold hover:bg-gray-600/50 duration-300"
            >
              <span>{faq.title}</span>
              <span className="text-pink-400 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-900 border-t border-gray-600">
                {faq.content}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Help;
