import React, { useState } from "react";

const AddMaterial = () => {
  const [materialName, setMaterialName] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle material submission logic here
    console.log({ materialName, order });
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="bg-gray-100 px-4 py-2 rounded-t">
        <h2 className="text-lg font-bold">Add Material</h2>
      </div>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category Name</label>
          <input
            type="text"
            placeholder="Material Name"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Order</label>
          <input
            type="number"
            placeholder="Order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded"
        >
          Add Material
        </button>
      </form>
    </div>
  );
};

export default AddMaterial;
