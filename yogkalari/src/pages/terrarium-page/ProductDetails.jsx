import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Marquee from "./Marquee2";
import ScrollToTop from "../../components/ScrollToTop";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
        );
        if (res.data.success) {
          setProduct(res.data.product);
          setSelectedImage(res.data.product.images[0] || ""); // default first image
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <section className="py-10 pt-30">
      <div className="text-sm text-gray-500 mb-6 px-5 md:px-20 lg:pl-20 2xl:pl-40">
        <Link to="/">Home </Link> &gt;
        <Link to="/terrariums"> Terrariums </Link> &gt;{" "}
        <span className="text-gray-800">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left: Product Images */}
        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="rounded-xl shadow-lg w-full h-[750px] object-cover"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img ? "border-green-700" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-green-800">{product.name}</h1>

          {/* Description */}
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-1 text-gray-700 font-medium">
            Category: {product.category}
          </p>

          {/* Care Guide Link */}
          <p className="italic text-gray-500 text-sm mt-3">
            Includes a digital care guide. For full instructions click{" "}
            <span
              className="underline cursor-pointer text-blue-600"
              onClick={() => setIsModalOpen(true)}
            >
              Terrariums Care Instructions
            </span>
          </p>

          {/* Price */}
          <div className="mt-6">
            <img src="/AED.png" alt="AED" className="inline w-6 h-6 mb-2" />
            <p className="inline text-2xl font-semibold">{product.price}</p>
            {product.stock ? (
              <p className="text-red-600 text-sm mt-1">
                Hurry Up! Only {product.stock} left
              </p>
            ) : (
              <p className="text-red-600 text-sm mt-1">
                {" "}
                Hurry Up! Only 3 Pieces left
              </p>
            )}
          </div>

          {/* Buy Button */}
          <div className="mt-4">
            <a
              href={`https://wa.me/971563440979?text=Hello, I am enquiring about the product *${product.name}* priced at *${product.price}*.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#084C2E] text-white px-8 py-3 rounded-full shadow hover:bg-[#0A7646] inline-block text-center"
            >
              Buy Now
            </a>
          </div>

          {/* Why Sections */}
          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">Special Offer</h3>
              <p>
                WhatsApp us with the code BREATHE10 to get 10% off your first
                wellness session or terrarium experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Why Brass Ganesha?</h3>
              <p>
                Heritage material with auspicious energy. Carries durability and
                sacred longevity.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Why Ārāma?</h3>
              <p>
                Layered greens and moss evoke a forest temple, turning this
                terrarium into a devotional centerpiece.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                If you have any questions please get in touch with us!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Care Instructions
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Light:</span> Place in indirect
                sunlight & near AC. Monitor the condensation cycle.
              </li>
              <li>
                <span className="font-semibold">Water:</span> Mist when the soil
                feels dry to the touch.
              </li>
              <li>
                <span className="font-semibold">Trim:</span> Prune excess growth
                and propagate if you wish!
              </li>
              <li>
                <span className="font-semibold">Clean:</span> Use a paper towel
                to wipe the glass for a clear view.
              </li>
              <li>
                <span className="font-semibold">Air:</span> Open the lid for
                5–10 minutes daily to allow ventilation. It’s designed for easy
                upkeep.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-green-800 mt-6 mb-4">
              Terms & Conditions
            </h2>
            <p className="text-gray-700 mb-2">
              Plant Replacement Guarantee: If the plants in your Samriddhi
              Terrarium begin to show signs of deterioration within 7 days from
              the date of purchase, please contact us immediately.
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Exemptions:</span> The guarantee
              does not apply if the terrarium has been:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Placed in direct sunlight</li>
              <li>Kept in a non-air-conditioned room</li>
              <li>The jar has been left open for more than 05–10 minutes</li>
              <li>
                Any owner-related damage, such as breaking the jar or
                mishandling the plants or items inside
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              Post 7-Day Replacement: If any component of the terrarium (plants,
              jar, statue, etc.) requires replacement after the 7-day period, we
              are happy to assist. However, charges will apply for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Time</li>
              <li>Delivery</li>
              <li>Replacement of plants, jar, statue, or any other item</li>
            </ul>

            <p className="mt-4 text-gray-700">
              Care Instructions: To ensure the longevity of your Samriddhi
              Terrarium, please follow the care guide tips provided at the time
              of purchase. If you have any further questions, feel free to
              contact us for guidance.
            </p>
          </div>
        </div>
      )}

      <div className="mt-10">
        <Marquee />
      </div>
      <ScrollToTop />
    </section>
  );
};

export default ProductDetails;
