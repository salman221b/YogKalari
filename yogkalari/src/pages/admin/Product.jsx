import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import imageCompression from "browser-image-compression";

const AdminAddProduct = ({ onProductAdded }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    placement: "",
    gifting: "",
    stock: "",
    category: "",
    isLimited: false,
    isRecommended: false,
    titleAndValues: [{ title: "", value: "" }],
  });
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  /* ---------------------- Handlers ---------------------- */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTitleValueChange = (index, field, value) => {
    const newPairs = [...formData.titleAndValues];
    newPairs[index][field] = value;
    setFormData({ ...formData, titleAndValues: newPairs });
  };

  const addTitleValueField = () => {
    setFormData({
      ...formData,
      titleAndValues: [...formData.titleAndValues, { title: "", value: "" }],
    });
  };

  const removeTitleValueField = (index) => {
    const newPairs = formData.titleAndValues.filter((_, i) => i !== index);
    setFormData({ ...formData, titleAndValues: newPairs });
  };

  const handleImageChange = async (e) => {
    const files = [...e.target.files];
    try {
      const compressedFiles = await Promise.all(
        files.map((file) =>
          imageCompression(file, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
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

    const { name, price, description, category } = formData;
    if (!name || !price || !description || !category) {
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

    if (images.length > 5) {
      Swal.fire({
        title: "Too Many Images!",
        text: "You can upload a maximum of 5 images per product.",
        icon: "warning",
        confirmButtonColor: "#f6ad55",
      });
      return;
    }

    try {
      setSubmitting(true);
      const data = new FormData();

      // Append basic form data
      Object.keys(formData).forEach((key) => {
        if (key === "titleAndValues") {
          data.append("titleAndValues", JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key]);
        }
      });

      // Append image files
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

        // Reset form
        setFormData({
          name: "",
          description: "",
          price: "",
          placement: "",
          gifting: "",
          stock: "",
          category: "",
          isLimited: false,
          isRecommended: false,
          titleAndValues: [{ title: "", value: "" }],
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

  /* ---------------------- UI ---------------------- */
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
            placeholder="Product Name *"
            value={formData.name}
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
            name="price"
            placeholder="Price *"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="placement"
            placeholder="Placement"
            value={formData.placement}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="gifting"
            placeholder="Gifting"
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
          <input
            type="text"
            name="category"
            placeholder="Category *"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Dynamic title/value fields */}
          <div className="mt-4">
            <label className="font-semibold">Extra Details:</label>
            {formData.titleAndValues.map((pair, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={pair.title}
                  onChange={(e) =>
                    handleTitleValueChange(index, "title", e.target.value)
                  }
                  className="flex-1 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={pair.value}
                  onChange={(e) =>
                    handleTitleValueChange(index, "value", e.target.value)
                  }
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeTitleValueField(index)}
                  className="bg-red-500 text-white px-3 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTitleValueField}
              className="text-blue-600 text-sm mt-2"
            >
              + Add more
            </button>
          </div>

          {/* Checkboxes */}
          <div className="flex gap-4 mt-2">
            <label>
              <input
                type="checkbox"
                name="isLimited"
                checked={formData.isLimited}
                onChange={handleChange}
              />{" "}
              Limited
            </label>
            <label>
              <input
                type="checkbox"
                name="isRecommended"
                checked={formData.isRecommended}
                onChange={handleChange}
              />{" "}
              Recommended
            </label>
          </div>

          {/* Image upload */}
          <label className="mt-2">Upload Images (Max 5 images) *</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={submitting}
            className={`bg-blue-500 text-white p-2 rounded w-full ${
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
