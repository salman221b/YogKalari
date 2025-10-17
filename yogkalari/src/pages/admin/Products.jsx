import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminEditProduct from "./AdminEditProduct";

const AdminShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false); // optional loading state

  // ✅ Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products`
      );
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to fetch products", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Delete product
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
      );
      if (res.data.success) {
        Swal.fire("Deleted!", "Product has been deleted.", "success");
        fetchProducts();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Delete failed", "error");
    }
  };

  return (
    <div className="mt-30">
      <div className="flex justify-between items-center mx-10 mb-4">
        <h2 className="text-xl text-[#084C2E] font-bold">All Products</h2>
        <button
          onClick={fetchProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="overflow-x-auto mx-10">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Image</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Limited</th>
                <th className="border p-2">Recommended</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod._id}>
                  <td className="border p-2">
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2">{prod.name}</td>
                  <td className="border p-2">{prod.price}</td>
                  <td className="border p-2">{prod.category}</td>
                  <td className="border p-2">{prod.isLimited ? "✅" : "❌"}</td>
                  <td className="border p-2">
                    {prod.isRecommended ? "✅" : "❌"}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button
                      className="bg-yellow-400 text-white px-2 py-1 rounded"
                      onClick={() => setEditingProduct(prod)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(prod._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Edit modal */}
      {editingProduct && (
        <AdminEditProduct
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdated={fetchProducts}
        />
      )}
    </div>
  );
};

export default AdminShowProducts;
