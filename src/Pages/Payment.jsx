import React from "react";
import { CreditCard, Smartphone, Truck } from "lucide-react";

const PaymentInfo = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-5 ml-13">
      <div className="max-w-4xl bg-gray-900 shadow-2xl rounded-2xl p-3">
        <h1 className="text-xl md:text-3xl font-bold text-center text-pink-500 mb-6">
          💳 Payment Options at GoodFood
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          আমরা আমাদের কাস্টমারদের জন্য নিরাপদ ও সহজ পেমেন্ট ব্যবস্থা রেখেছি।  
          নিচে তিনটি পদ্ধতি থেকে আপনি আপনার সুবিধামতো পেমেন্ট করতে পারবেন।
        </p>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Cash on Delivery */}
          <div className="bg-pink-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:scale-105 duration-300">
            <div className="flex justify-center mb-3">
              <Truck className="text-pink-500 w-10 h-10" />
            </div>
            <h2 className="text-xl font-semibold text-center text-pink-600 mb-2">
              💵 Cash on Delivery
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              অর্ডার হাতে পাওয়ার পর পেমেন্ট করতে পারবেন।  
              এটি সবচেয়ে জনপ্রিয় ও নির্ভরযোগ্য পেমেন্ট মাধ্যম।  
              কোন অনলাইন ট্রান্সফার ছাড়াই ডেলিভারির সময় নগদ অর্থ প্রদান করুন।
            </p>
          </div>

          {/* Card Payment */}
          <div className="bg-pink-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:scale-105 duration-300">
            <div className="flex justify-center mb-3">
              <CreditCard className="text-pink-500 w-10 h-10" />
            </div>
            <h2 className="text-xl font-semibold text-center text-pink-600 mb-2">
              💳 Debit / Credit Card
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              আমরা Visa, MasterCard, এবং American Express কার্ড সাপোর্ট করি।  
              আপনার কার্ড তথ্য নিরাপদভাবে এনক্রিপ্টেড থাকে এবং কোন থার্ড পার্টির কাছে শেয়ার করা হয় না।
            </p>
          </div>

          {/* Mobile Wallet */}
          <div className="bg-pink-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:scale-105 duration-300">
            <div className="flex justify-center mb-3">
              <Smartphone className="text-pink-500 w-10 h-10" />
            </div>
            <h2 className="text-xl font-semibold text-center text-pink-600 mb-2">
              📱 Mobile Payment (Bkash / Nagad)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              আপনি সহজেই বিকাশ বা নগদ দিয়ে পেমেন্ট করতে পারবেন।  
              পেমেন্ট করার পর একটি কনফার্মেশন SMS পাবেন, যা আপনার অর্ডার নিশ্চিত করবে।
            </p>
          </div>
        </div>

        {/* Secure Info */}
        <div className="mt-10 bg-gray-200 dark:bg-gray-700 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-pink-500 mb-2">
            🔒 100% Secure Payment System
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            আমরা SSL Encrypted Payment Gateway ব্যবহার করি যাতে আপনার পেমেন্ট সম্পূর্ণ নিরাপদ থাকে।  
            আপনার কোনো ব্যক্তিগত তথ্য কখনও শেয়ার বা সংরক্ষণ করা হয় না।
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <a
            href="/payment"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-md duration-300"
          >
            Proceed to Payment →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
