import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import imageCompression from "browser-image-compression";

const AdminAddProduct = ({ onProductAdded }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    reviews: "",
    description: "",
    category: "",
    isLimited: false,
    isRecommended: false,
  });
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = async (e) => {
    const files = [...e.target.files];
    try {
      const compressedFiles = await Promise.all(
        files.map((file) =>
          imageCompression(file, {
            maxSizeMB: 1, // Max size in MB
            maxWidthOrHeight: 1024, // Max width or height
            useWebWorker: true, // Use web worker for faster processing
          })
        )
      );
      setImages(compressedFiles);
    } catch (err) {
      console.error("Image compression error:", err);
      Swal.fire("Error", "Failed to compress images", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, price, rating, reviews, description, category } = formData;
    if (!name || !price || !rating || !reviews || !description || !category) {
      Swal.fire({
        title: "Missing Fields!",
        text: "Please fill all required fields before submitting.",
        icon: "warning",
        confirmButtonColor: "#f6ad55",
      });
      return;
    }
    if (images.length === 0) {
      Swal.fire({
        title: "No Images!",
        text: "Please upload at least one image.",
        icon: "warning",
        confirmButtonColor: "#f6ad55",
      });
      return;
    }

    try {
      setSubmitting(true);
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      images.forEach((img) => data.append("images", img));

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/products`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        setFormData({
          name: "",
          price: "",
          rating: "",
          reviews: "",
          description: "",
          category: "",
          isLimited: false,
          isRecommended: false,
        });
        setImages([]);
        setShowForm(false);

        if (onProductAdded) onProductAdded(res.data.product);
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to add product. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`px-4 py-2 rounded text-white ${
            showForm ? "bg-red-500" : "bg-green-600"
          }`}
        >
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Price *"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating *"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="reviews"
            placeholder="Reviews *"
            value={formData.reviews}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description *"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Category *"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <label>
            <input
              type="checkbox"
              name="isLimited"
              checked={formData.isLimited}
              onChange={handleChange}
            />{" "}
            Limited
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isRecommended"
              checked={formData.isRecommended}
              onChange={handleChange}
            />{" "}
            Recommended
          </label>
          <br />

          <label>Upload Images *</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            disabled={submitting}
            className={`bg-blue-500 text-white p-2 rounded w-full cursor-pointer ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Submitting..." : "Submit Product"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminAddProduct;
