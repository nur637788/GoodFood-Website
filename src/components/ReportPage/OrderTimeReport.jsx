import React from "react";
import { useNavigate } from "react-router-dom";

const OrderTimeReport = () => {
    const navigate =useNavigate();
  return (
    <div className="min-h-screen bg-white p-6 pl-17 md:pl-25">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-extrabold text-gray-800">Order Time Report</h1>
        <button className="px-2 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-95 duration-300 ">
          Export PDF
        </button>
      </div>

      {/* Overview */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 hover:shadow-blue-600 duration-300">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg md:text-xl font-bold">Order Time</h2>
          <button className="px-2 py-1 text-sm md:text-lg bg-gray-200 rounded hover:text-blue-800">
            View Deteils
          </button>
        </div>
        <p className="text-gray-600">From 1-6 Dec, 2025</p>

        {/* Chart Circle */}
        <div className="flex justify-center py-8">
          <div
            className="relative w-52 h-52 rounded-full flex items-center justify-center 
              bg-[conic-gradient(#5A6ACF_0deg_100deg,#F59E0B_100deg_240deg,#10B981_240deg_360deg)] shadow-md"
          >
            <div className="absolute bg-white w-32 h-32 rounded-full flex flex-col justify-center items-center shadow-inner">
              <p className="text-2xl font-bold text-gray-800">100%</p>
              <span className="text-gray-500 text-sm">Total Orders</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-around mt-6 text-[7px] md:text-lg">
          <div className="flex gap-2 items-center">
            <p className="h-3 w-3 bg-[#5A6ACF] rounded-sm"></p>
            <span className="text-gray-700">Morning – 28%</span>
          </div>
          <div className="flex gap-2 items-center">
            <p className="h-3 w-3 bg-amber-500 rounded-sm"></p>
            <span className="text-gray-700">Afternoon – 40%</span>
          </div>
          <div className="flex gap-2 items-center">
            <p className="h-3 w-3 bg-green-600 rounded-sm"></p>
            <span className="text-gray-700">Evening – 32%</span>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-600 duration-300">
        <h2 className="text-xl font-bold mb-4">Detailed Order Distribution</h2>
        <table className="min-w-full border border-gray-200 text-center">
          <thead className="bg-gray-100">
            <tr className="text-[8px] md:text-xl">
              <th className="border px-2 py-2">Time Period</th>
              <th className="border px-2 py-2">Total Orders</th>
              <th className="border px-2 py-2">Percentage</th>
              <th className="border px-2 py-2">Change (vs last week)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                time: "Morning (6AM - 12PM)",
                orders: 280,
                percent: "28%",
                change: "+4%",
              },
              {
                time: "Afternoon (12PM - 6PM)",
                orders: 400,
                percent: "40%",
                change: "+2%",
              },
              {
                time: "Evening (6PM - 12AM)",
                orders: 320,
                percent: "32%",
                change: "-1%",
              },
            ].map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border text-[8px] md:text-lg px-2 py-2">{item.time}</td>
                <td className="border text-[8px] md:text-lg px-2 py-2">{item.orders}</td>
                <td className="border text-[8px] md:text-lg px-2 py-2">{item.percent}</td>
                <td
                  className={`border text-[8px] md:text-lg px-2 py-2 font-semibold ${
                    item.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    {/* back button  */}
      <button onClick={()=> navigate (-1)} className="px-4 py-1 bg-red-500 hover:bg-red-600 hover:scale-95 duration-300 rounded mt-5">← Back</button>
      
    </div>
  );
};

export default OrderTimeReport;
