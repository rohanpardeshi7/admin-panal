import React from "react";

const NewslettersManagement = () => {
  return (
    <div className="p-4">
      <div className="border rounded-lg shadow overflow-hidden">
        <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-bold">Newsletters Management</h2>
          <div className="flex gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M17.657 17.657l-1.414-1.414M12 21v-2M6.343 17.657l1.414-1.414M3 12h2M6.343 6.343l1.414 1.414"
                />
              </svg>
              Filter
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">
              Change Status
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
              Delete
            </button>
          </div>
        </div>

        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-t">
            <tr>
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-gray-700">NAME</th>
              <th className="px-4 py-2 text-xs font-semibold text-gray-700">EMAIL ID</th>
              <th className="px-4 py-2 text-xs font-semibold text-gray-700">MOBILE NUMBER</th>
              <th className="px-4 py-2 text-xs font-semibold text-gray-700">STATUS</th>
              <th className="px-4 py-2 text-xs font-semibold text-gray-700">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {["Active", "Deactive"].map((status, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 font-medium">Neil Sims</td>
                <td className="px-4 py-2 text-gray-600">xyz@gmail.com</td>
                <td className="px-4 py-2 text-gray-600">9876543210</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded text-white text-xs font-semibold ${
                      status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536M9 11l6.536-6.536a2 2 0 112.828 2.828L11.828 13.828a2 2 0 01-1.414.586H7v-3a2 2 0 01.586-1.414z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewslettersManagement;
