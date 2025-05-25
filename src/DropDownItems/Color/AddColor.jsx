import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const AddColors = () => {
  const [colorName, setColorName] = useState("");
  const [order, setOrder] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold bg-gray-100 px-4 py-2 rounded-t">Add Colors</h2>
      <div className="p-4 space-y-6">
        {/* Color Name */}
        <div>
          <label className="block font-medium mb-1">Color Name</label>
          <input
            type="text"
            placeholder="Enter Color Name"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Color Picker */}
        <div>
          <label className="block font-medium mb-1">Color Picker</label>
          <div className="flex items-center gap-4">
            <HexColorPicker color={color} onChange={setColor} />
            <div
              className="w-10 h-10 border rounded"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>

        {/* Order */}
        <div>
          <label className="block font-medium mb-1">Order</label>
          <input
            type="text"
            placeholder="Enter Order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded">
            Add Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddColors;
