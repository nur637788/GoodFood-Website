import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 ml-11 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold text-pink-500">GoodFood</span>, your privacy is our top priority. 
          This Privacy Policy describes how we collect, use, and protect your personal information when you use our website or services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect information that you provide directly to us, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Name, phone number, and delivery address during checkout</li>
          <li>Payment information for completing orders</li>
          <li>Email address for communication and updates</li>
          <li>Feedback or reviews submitted on our site</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use your data to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Process your food orders and payments</li>
          <li>Improve our menu, services, and customer experience</li>
          <li>Send order updates or promotional offers (if you opt-in)</li>
          <li>Ensure secure transactions and prevent fraud</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We take appropriate measures to protect your personal data from unauthorized access, loss, or misuse.
          Your sensitive information (like payment details) is encrypted and never shared with third parties.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Cookies</h2>
        <p className="text-gray-700 mb-4">
          Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings,
          but some features may not work properly without them.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          We may use trusted third-party services (like payment gateways) to process transactions securely.
          These services have their own privacy policies, which we encourage you to review.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or request deletion of your personal data at any time. 
          For such requests, please contact us at 
          <span className="text-pink-500 font-medium"> privacy@goodfood.com</span>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. Policy Updates</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Changes will take effect once posted on this page.
          Please check this page periodically for updates.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For any privacy-related concerns, please email us at  
          <span className="text-pink-500 font-medium"> support@goodfood.com</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
