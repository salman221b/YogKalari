import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminEditProduct = ({ product, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    rating: product.rating,
    reviews: product.reviews,
    description: product.description,
    category: product.category,
    isLimited: product.isLimited,
    isRecommended: product.isRecommended,
  });
  const [newImages, setNewImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) data.append(key, formData[key]);
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
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h3 className="text-lg font-bold mb-3">Edit Product</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Product Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Price */}
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Rating */}
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (0-5)"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Reviews */}
          <input
            type="number"
            name="reviews"
            placeholder=" Reviews"
            value={formData.reviews}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
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

          {/* Image Upload */}
          <label>Replace Images (optional)</label>
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
