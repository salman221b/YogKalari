import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import Marquee from "./Marquee";
import RecommendationSlider from "./RecommendationSlider";

const ProductCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleSearch = () => {
    // Reset any existing filtered data (optional visual clear)
    setSearchQuery(""); // clear first
    setCurrentPage(1);

    // Wait a tick to ensure reset, then set new query
    setTimeout(() => {
      setSearchQuery(searchInput);
    }, 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page change
  };

  return (
    <section className="bg-[#F6F3EB] py-10">
      <div className="max-w-full mx-auto px-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#084C2E]">
              Terrariums
            </h1>

            {/* Search Bar */}
            <div className="flex items-center space-x-2">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#084C2E] focus:border-transparent"
                />
                <img
                  src="/Search.png"
                  alt="Search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                />
              </div>

              <button
                className="px-6 py-2 bg-[#084C2E] text-white rounded-full hover:bg-[#0A7646] transition"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer bg-white"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="relative w-full h-40 md:h-60 lg:h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl px-2 py-2"
                />
              </div>
              <div className="p-4">
                <h3 className="text-md md:text-lg text-gray-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm md:text-md mt-1">{product.description}</p>
                <p className="font-semibold mt-2 text-md md:text-lg">
                  <img
                    src="/AED.png"
                    alt="AED"
                    className="inline  w-5 h-5 md:w-6 md:h-6  mr-1 mb-1"
                  />
                  <span className="inline">{product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found matching your search.
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-end text-right mt-10 space-x-2">
            <button
              className="px-3 py-1 rounded-md bg-[#EDEAE0] text-white disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <img src="/ArrowLeft.png" alt="Previous" className="w-6 h-6" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-[#084C2E] text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="px-3 py-1 rounded-md bg-[#EDEAE0] text-white disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <img src="/ArrowRight.png" alt="Next" className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
      <RecommendationSlider products={products.slice(0, 6)} />

      <div className="mt-10">
        <Marquee />
      </div>
    </section>
  );
};

export default ProductCard;
