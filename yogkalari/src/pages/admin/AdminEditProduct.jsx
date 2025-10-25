import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminEditProduct = ({ product, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: product.name || "",
    description: product.description || "",
    price: product.price || "",
    category: product.category || "",
    placement: product.placement || "",
    gifting: product.gifting || "",
    stock: product.stock || "",
    isLimited: product.isLimited || false,
    isRecommended: product.isRecommended || false,
  });

  const [titleValues, setTitleValues] = useState(
    product.titleValues && product.titleValues.length > 0
      ? product.titleValues
      : [{ title: "", value: "" }]
  );

  const [newImages, setNewImages] = useState([]);

  // ✅ Handle text and checkbox input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Handle dynamic title/value fields
  const handleTitleValueChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...titleValues];
    updated[index][name] = value;
    setTitleValues(updated);
  };

  const addTitleValue = () => {
    setTitleValues([...titleValues, { title: "", value: "" }]);
  };

  const removeTitleValue = (index) => {
    const updated = titleValues.filter((_, i) => i !== index);
    setTitleValues(updated);
  };

  // ✅ Handle image change
  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      data.append("titleValues", JSON.stringify(titleValues));
      newImages.forEach((img) => data.append("images", img));

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${product._id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        Swal.fire("Updated!", "Product updated successfully!", "success");
        onUpdated();
        onClose();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Update failed. Try again.", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-bold mb-3">Edit Product</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Basic Details */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* New Fields */}
          <input
            type="text"
            name="placement"
            placeholder="Placement (e.g., Home, Office)"
            value={formData.placement}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="gifting"
            placeholder="Gifting (e.g., Birthday, Anniversary)"
            value={formData.gifting}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Checkboxes */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isLimited"
              checked={formData.isLimited}
              onChange={handleChange}
            />
            <span>Limited</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isRecommended"
              checked={formData.isRecommended}
              onChange={handleChange}
            />
            <span>Recommended</span>
          </label>

          {/* Dynamic Title/Value Section */}
          <div className="border-t pt-3">
            <h4 className="font-semibold mb-2">Extra Details</h4>
            {titleValues.map((pair, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={pair.title}
                  onChange={(e) => handleTitleValueChange(index, e)}
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="value"
                  placeholder="Value"
                  value={pair.value}
                  onChange={(e) => handleTitleValueChange(index, e)}
                  className="w-1/2 p-2 border rounded"
                />
                {titleValues.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTitleValue(index)}
                    className="text-red-500 font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addTitleValue}
              className="text-blue-600 text-sm underline"
            >
              + Add More
            </button>
          </div>

          {/* Image Upload */}
          <label className="block">Replace Images (optional)</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />

          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProduct;
