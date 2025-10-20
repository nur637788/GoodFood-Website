import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white p-4 ml-12 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-5 max-w-3xl">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-pink-500">GoodFood</span>!  
          By accessing or using our website, you agree to be bound by these Terms and Conditions.
          Please read them carefully before using our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Service Use</h2>
        <p className="text-gray-700 mb-4">
          Our platform allows customers to browse, order, and pay for food items online.
          You must provide accurate and complete information during checkout.
          Misuse or fraudulent activity is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Orders & Payments</h2>
        <p className="text-gray-700 mb-4">
          All orders must be paid through the available payment methods such as
          <span className="font-medium text-pink-500"> bKash, Nagad, Rocket, Debit/Credit Card,</span> 
          or <span className="font-medium text-pink-500">Cash on Delivery</span>.
          Once payment is confirmed, the order will be processed immediately.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Refund & Cancellation</h2>
        <p className="text-gray-700 mb-4">
          Once an order is placed and confirmed, cancellation may not be possible.
          Refunds are only available in cases of incorrect or damaged delivery, 
          as per our <span className="text-pink-500">Refund Policy</span>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Privacy</h2>
        <p className="text-gray-700 mb-4">
          We respect your privacy. Your personal data is securely stored and not shared with
          third parties except as required by law. For more details, check our
          <span className="text-pink-500 font-medium"> Privacy Policy</span>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Liability</h2>
        <p className="text-gray-700 mb-4">
          GoodFood is not responsible for any issues caused by third-party delivery services
          or payment gateways. However, we always strive to provide the best service possible.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms & Conditions at any time. Changes will take effect
          immediately upon posting on this website.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms, please contact us at:  
          <span className="text-pink-500 font-medium"> support@goodfood.com</span>
        </p>

        
      </div>
    </div>
  );
};

export default Terms;
