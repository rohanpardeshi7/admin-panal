import React from "react";
import { Pencil } from "lucide-react";

const ViewColor = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t">
        <h2 className="text-lg font-bold">View Color</h2>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded">
            <span className="text-lg">🔽</span>
          </button>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-1 rounded">
            Change Status
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1 rounded">
            Delete
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Color Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Code
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Order
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2 font-medium text-gray-900">Red</td>
              <td className="px-4 py-2 text-blue-600">#er33rv</td>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Active</span>
              </td>
              <td className="px-4 py-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                  <Pencil size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewColor;
