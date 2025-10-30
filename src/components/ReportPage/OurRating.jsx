import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const OrderTimeReport = () => {
  const navigate = useNavigate();
  const printRef = useRef();

  const handlePrint = () => {
    window.print();
  }
  return (
    <div ref={printRef} className="bg-white min-h-screen px-5 py-10 pl-17 md:pl-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold ">
          Our Rating Report
        </h1>
        <button onClick={handlePrint} className="px-2 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-95 duration-300 ">
          Export PDF
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-blue-500 duration-300">
          <h3 className="font-bold text-lg mb-2 text-gray-700">Overall Rating</h3>
          <p className="text-4xl font-bold text-yellow-500">4.5 ★</p>
          <p className="text-sm text-gray-500 mt-2">↑ Improved by 4.1% this week</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-blue-500 duration-300">
          <h3 className="font-bold text-lg mb-2 text-gray-700">Customer Satisfaction</h3>
          <p className="text-4xl font-bold text-green-500">95%</p>
          <p className="text-sm text-gray-500 mt-2">Compared to 92% last week</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-blue-500 duration-300">
          <h3 className="font-bold text-lg mb-2 text-gray-700">Average Order Rating</h3>
          <p className="text-4xl font-bold text-blue-500">4.2 ★</p>
          <p className="text-sm text-gray-500 mt-2">Sales from 1–7 Oct 2025</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Rating Comparison</h2>

        <div className="flex flex-col md:flex-row justify-around items-center gap-8 mt-6">
          {/* Chart 1 */}
          <div className="relative w-28 h-28 flex items-center justify-center 
          bg-[conic-gradient(#5A6ACF_330deg,#f29e0c_72deg,transparent_250deg,transparent_360deg)] rounded-full">
            <div className="absolute w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-2xl text-blue-700">
              95%
            </div>
          </div>

          {/* Chart 2 */}
          <div className="relative w-28 h-28 flex items-center justify-center 
          bg-[conic-gradient(#2FBFDE_320deg,#f59e0b_72deg,transparent_300deg,transparent_360deg)] rounded-full">
            <div className="absolute w-24 h-24 bg-red-400 rounded-full flex items-center justify-center text-2xl text-[#2FBFDE]">
              80%
            </div>
          </div>

          {/* Chart 3 */}
          <div className="relative w-28 h-28 flex items-center justify-center 
          bg-[conic-gradient(#f59e0b_300deg,#f59e0b_72deg,transparent_300deg,transparent_360deg)] rounded-full">
            <div className="absolute w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-2xl text-amber-500">
              70%
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-2 md:gap-5 mt-8 text-[8px] md:text-base">
        <div className="flex gap-2 items-center">
          <p className="h-3 w-3 bg-green-400 rounded-full"></p>
          <span>Customer Satisfaction: 95%</span>
        </div>
        <div className="flex gap-2 items-center">
          <p className="h-3 w-3 bg-red-400 rounded-full"></p>
          <span>Delivery Speed: 80%</span>
        </div>
        <div className="flex gap-2 items-center">
          <p className="h-3 w-3 bg-blue-500 rounded-full"></p>
          <span>Product Quality: 70%</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-10 bg-white p-2 md:p-5 rounded-lg shadow">
        <h3 className="md:text-xl font-bold mb-4">Detailed Weekly Report</h3>
        <table className="w-full text-left border">
          <thead className="bg-gray-200">
            <tr className="text-[10px] md:text-base">
              <th className="p-2 border">Week</th>
              <th className="p-2 border">Customer Satisfaction</th>
              <th className="p-2 border">Delivery Rating</th>
              <th className="p-2 border">Product Quality</th>
              <th className="p-2 border">Overall</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr>
              <td className="p-2 border">1–7 Oct 2025</td>
              <td className="p-2 border text-green-500 font-semibold">95%</td>
              <td className="p-2 border text-red-500 font-semibold">80%</td>
              <td className="p-2 border text-blue-500 font-semibold">70%</td>
              <td className="p-2 border font-bold">4.5 ★</td>
            </tr>
            <tr>
              <td className="p-2 border">24–30 Sep 2025</td>
              <td className="p-2 border text-green-400 font-semibold">92%</td>
              <td className="p-2 border text-red-400 font-semibold">78%</td>
              <td className="p-2 border text-blue-400 font-semibold">68%</td>
              <td className="p-2 border font-bold">4.3 ★</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* back button  */}
      <button onClick={() => navigate(-1)} className="px-4 py-1 bg-red-500 hover:bg-red-600 hover:scale-95 duration-300 rounded my-5">← Back</button>
    </div>
  );
};

export default OrderTimeReport;
