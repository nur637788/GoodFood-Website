import React from "react";
import { useNavigate } from "react-router-dom";

const RevenueReport = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 pl-16 md:pl-23 py-10 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-extrabold text-gray-800">Revenue Report</h1>
        <button className="px-2 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-95 duration-300 ">
          Export PDF
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Revenue Card */}
        <div className="bg-white p-5 rounded-md shadow hover:shadow-blue-600 hover:scale-95 duration-300">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-xl md:text-2xl">Revenue</p>
            <button className="px-3 py-1 bg-gray-200 rounded-md hover:text-blue-800">
              View Details
            </button>
          </div>
          <p className="text-xl md:text-2xl font-semibold">IDR 7.852.000</p>
          <p>
            <span className="text-green-600 font-bold">↑ 2.1%</span> vs last week
          </p>
          <p className="mt-3 text-gray-500">Sales from 1-12 Dec, 2025</p>
        </div>

        {/* Orders Card */}
        <div className="bg-white p-5 rounded-md shadow hover:shadow-blue-600 hover:scale-95 duration-300">
          <p className="font-bold text-xl md:text-2xl mb-2">Orders</p>
          <p className="text-xl md:text-2xl font-semibold">1,245</p>
          <p>
            <span className="text-red-500 font-bold">↓ 0.8%</span> vs last week
          </p>
        </div>

        {/* Customers Card */}
        <div className="bg-white p-5 rounded-md shadow hover:shadow-blue-600 hover:scale-95 duration-300">
          <p className="font-bold text-xl md:text-2xl mb-2">New Customers</p>
          <p className="text-xl md:text-2xl font-semibold">325</p>
          <p>
            <span className="text-green-600 font-bold">↑ 5%</span> vs last week
          </p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white p-5 rounded-md shadow mb-8">
        <p className="font-bold text-xl mb-4">Revenue Trend (1-12 Dec, 2025)</p>
        <div className="flex gap-4 md:gap-8 items-end h-40">
          {/* Example Bar */}
          {[20, 24, 16, 20, 10, 18, 12,].map((h, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="flex gap-1 items-end">
                <p className={`h-${h} w-2 bg-[#5A6ACF]`}></p>
                <p className={`h-${Math.floor(h / 2)} w-2 bg-[#E6E8EC]`}></p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{`0${idx + 1}`}</p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-5 mt-4">
          <div className="flex gap-2 items-center">
            <p className="h-2 w-2 bg-[#5A6ACF]"></p>
            <span>Last Week</span>
          </div>
          <div className="flex gap-2 items-center">
            <p className="h-2 w-2 bg-[#E6E8EC]"></p>
            <span>This Week</span>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white p-2 md:p-5 rounded-md shadow">
        <p className="font-bold text-lg mb-4">Daily Revenue Details</p>
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 text-sm md:text-xl border">Date</th>
              <th className="px-2 py-2 text-sm md:text-xl border">Revenue</th>
              <th className="px-2 py-2 text-sm md:text-xl border">Orders</th>
              <th className="px-2 py-2 text-sm md:text-xl border">Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "01 Dec", rev: "IDR 652.000", orders: 120, change: "+2%" },
              { date: "02 Dec", rev: "IDR 754.000", orders: 140, change: "+5%" },
              { date: "03 Dec", rev: "IDR 512.000", orders: 100, change: "-1%" },
              { date: "04 Dec", rev: "IDR 652.000", orders: 130, change: "+0.5%" },
              { date: "05 Dec", rev: "IDR 412.000", orders: 90, change: "-3%" },
              { date: "06 Dec", rev: "IDR 582.000", orders: 110, change: "+1%" },
              { date: "07 Dec", rev: "IDR 452.000", orders: 95, change: "-0.5%" },
            ].map((item, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-2 py-2 border">{item.date}</td>
                <td className="px-2 py-2 border">{item.rev}</td>
                <td className="px-2 py-2 border">{item.orders}</td>
                <td className={`px-2 py-2 border ${item.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{item.change}</td>
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

export default RevenueReport;
