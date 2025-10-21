import React from "react";
import { useNavigate } from "react-router-dom";

const MostOrderReport = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white p-6 pl-17 md:pl-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg md:text-2xl font-extrabold text-gray-800">Most Order Report</h1>
        <button className="px-2 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-95 duration-300 ">
          Export PDF
        </button>
      </div>

      {/* Overview Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 hover:shadow-blue-600 duration-300">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg md:text-xl font-bold">Most Order</h2>
          <button className="px-2 py-1 text-sm md:text-lg bg-gray-200 rounded hover:text-blue-800">
            View Deteils
          </button>
        </div>

        <p className="text-xl font-semibold">2,568 Orders</p>
        <p>
          <span className="text-red-600 font-bold">↓ 2.1%</span> vs last week
        </p>
        <p className="text-gray-500">Sales from 1–6 Dec, 2025</p>

        {/* Chart Section */}
        <div className="flex justify-center py-8">
          <div
            className="relative w-52 h-52 rounded-full flex items-center justify-center 
              bg-[conic-gradient(#5A6ACF_0deg_250deg,#E6E8EC_250deg_360deg)] shadow-md"
          >
            <div className="absolute bg-white w-32 h-32 rounded-full flex flex-col justify-center items-center shadow-inner">
              <p className="text-2xl font-bold text-gray-800">70%</p>
              <span className="text-gray-500 text-sm">Completed Orders</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-10 mt-6">
          <div className="flex gap-2 items-center">
            <p className="h-3 w-3 bg-[#5A6ACF] rounded-sm"></p>
            <span className="text-gray-700">Last Week – 70%</span>
          </div>
          <div className="flex gap-2 items-center">
            <p className="h-3 w-3 bg-[#E6E8EC] rounded-sm"></p>
            <span className="text-gray-700">This Week – 30%</span>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white p-2 md:p-6 rounded-lg shadow-md hover:shadow-blue-600 duration-300">
        <h2 className="md:text-xl font-bold mb-4">Daily Order Details</h2>
        <table className="min-w-full border border-gray-200 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-2 text-[10px] md:text-lg font-bold">Date</th>
              <th className="border px-2 py-2 text-[10px] md:text-lg font-bold">Total Orders</th>
              <th className="border px-2 py-2 text-[10px] md:text-lg font-bold">Completed</th>
              <th className="border px-2 py-2 text-[10px] md:text-lg font-bold">Pending</th>
              <th className="border px-2 py-2 text-[10px] md:text-lg font-bold">Change (vs last week)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: "01 Dec",
                total: 450,
                completed: 320,
                pending: 130,
                change: "+2%",
              },
              {
                date: "02 Dec",
                total: 380,
                completed: 270,
                pending: 110,
                change: "-1%",
              },
              {
                date: "03 Dec",
                total: 425,
                completed: 310,
                pending: 115,
                change: "+3%",
              },
              {
                date: "04 Dec",
                total: 360,
                completed: 250,
                pending: 110,
                change: "-2%",
              },
              {
                date: "05 Dec",
                total: 500,
                completed: 390,
                pending: 110,
                change: "+4%",
              },
              {
                date: "06 Dec",
                total: 453,
                completed: 320,
                pending: 133,
                change: "-1%",
              },
            ].map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border px-2 py-2 text-sm md:text-lg">{item.date}</td>
                <td className="border px-2 py-2 text-sm md:text-lg">{item.total}</td>
                <td className="border px-2 py-2 text-sm md:text-lg">{item.completed}</td>
                <td className="border px-2 py-2 text-sm md:text-lg">{item.pending}</td>
                <td
                  className={`border px-2 py-2 font-semibold ${
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
      <button onClick={()=> navigate (-1)} className="px-4 py-1 bg-red-500 hover:bg-red-600 hover:scale-95 duration-300 rounded my-5">← Back</button>
    </div>
  );
};

export default MostOrderReport;
