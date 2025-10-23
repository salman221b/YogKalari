import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const RecommendationSlider = ({ products }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [loading, setLoading] = useState(true); // ✅ Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Handle responsive slide count
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 480) setSlidesToShow(2);
      else if (width <= 768) setSlidesToShow(2);
      else if (width <= 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    // ✅ Simulate loading for smoother UI
    if (products && products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="bg-[#F6F3EB] pt-25 py-10">
      <div className="max-w-9xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#084C2E] mb-6 px-5 sm:px-7 lg:px-10">
          Our Recommendation
        </h2>

        {/* ✅ Loading Spinner */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-700 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading recommendations...</p>
          </div>
        ) : products.length > 0 ? (
          <Slider {...settings}>
            {products.map((product) => (
              <div
                key={product._id}
                className="px-3 py-3 cursor-pointer"
                onClick={() => navigate(`/products/${product._id}`)}
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
                  <div className="relative w-full h-50 md:h-80 lg:h-110 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-2xl px-2 py-2"
                    />
                    {product.isLimited && (
                      <span className="absolute top-3 right-3 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full shadow">
                        Limited Edition
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-md md:text-lg text-gray-900 leading-tight">
                      {product.name}
                    </h3>
                    <p className="flex items-center gap-1 font-semibold mt-2 text-md md:text-lg">
                      <img
                        src="/AED.png"
                        alt="AED"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                      <span>{product.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-600 py-10">
            No recommendations available.
          </p>
        )}
      </div>
    </section>
  );
};

export default RecommendationSlider;
