import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";

export default function Header({ toggleSidebar }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      {/* Menu and Title */}
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="lg:hidden text-2xl text-gray-600">
          <HiOutlineBars3 />
        </button>
        <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
      </div>

      {/* Profile Icon */}
      <div>
        <ImProfile className="text-2xl text-gray-600" />
      </div>
    </div>
  );
}
