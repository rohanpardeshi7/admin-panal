import React, { useState } from "react";
import { SketchPicker } from 'react-color';

const AddColors = () => {
  const [colorName, setColorName] = useState("");
  const [order, setOrder] = useState("");
  const [color, setColor] = useState("#000000"); // Hex code string format me rahega

  // 💡 FIX 1: Submit handler ko open kiya aur synthetic event handle kiya
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data packet
    const newColor = {
      name: colorName,
      hexCode: color, // Isme ab shudh hex string jayegi (#1A62FF)
      order: Number(order),
    };

    console.log("Sending Data to Backend:", newColor);

    try {
      // 💡 Yahan apni real API ka URL daal dena jab connect karo
      // const res = await fetch("https://your-api-url.com/colors", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(newColor)
      // });
      // if (!res.ok) throw new Error("Failed to add color");
      // const data = await res.json();

      alert(`Color "${newColor.name}" updated locally successfully! 🎉`);

      // Reset Form fields
      setColorName("");
      setOrder("");
      setColor("#000000");
    } catch (err) {
      console.error(err);
      alert("Error adding color");
    }
  };

  return (
    <div className="max-w-xxl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl mt-10 overflow-hidden select-none">
      <h2 className="text-xl font-bold bg-gray-50 px-6 py-4 border-b border-gray-100 text-slate-800">
        Add Colors 🎨
      </h2>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Color Name Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Color Name</label>
          <input
            type="text"
            placeholder="e.g. Royal Blue, Crimson Red"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Color Picker Component Row */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Select Color</label>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            
            {/* 💡 FIX 2: SketchPicker se .hex nikal kar state me save kiya */}
            <div className="shadow-sm rounded-xl overflow-hidden border border-gray-100">
              <SketchPicker 
                color={color} 
                onChange={(updatedColor) => setColor(updatedColor.hex)} 
              />
            </div>

            {/* Live Color Block View Box */}
            <div className="flex flex-col items-center gap-2 bg-slate-50 border border-gray-100 p-4 rounded-2xl w-full sm:w-36 justify-center min-h-[150px]">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preview</span>
              <div
                className="w-16 h-16 border border-gray-200 rounded-2xl shadow-inner transition-all duration-200"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-xs font-mono font-bold bg-white px-2 py-1 border border-gray-200 rounded-md text-slate-600">
                {color}
              </span>
            </div>
          </div>
        </div>

        {/* Display/Sorting Order Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Order Sequence</label>
          <input
            type="number"
            placeholder="e.g. 1, 2, 3"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Submit Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            Add Color to Database
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddColors;