import Layout from "@/data/Layout";
import React from "react";

function ElementsSideBar() {
  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-2xl">
      {/* Title */}
      <h2 className="font-bold text-2xl text-gray-800 mb-6">Layouts</h2>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Layout.map((layout, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  bg-white shadow-md rounded-xl hover:shadow-xl transition-all border border-gray-200 hover:border-blue-500 cursor-pointer transform hover:scale-105"
          >
            {/* Icon */}
            <layout.icon className="text-blue-500 w-10 h-10 mb-4" />
            {/* Label */}
            <h2 className="text-gray-800 font-semibold text-lg">
              {layout.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElementsSideBar;
