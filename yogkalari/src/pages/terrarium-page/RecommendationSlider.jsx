import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const RecommendationSlider = ({ products }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 480) setSlidesToShow(2);
      else if (width <= 768) setSlidesToShow(2);
      else if (width <= 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlides(); // run on mount
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

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
        <h2 className="text-2xl md:text-3xl font-semibold text-[#084C2E] mb-6">
          Our Recommendation
        </h2>

        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="px-3 py-3"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
                <div className="relative w-full h-56 overflow-hidden">
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
                  {/* <p className="text-sm md:text-md mt-1">
                    {product.description}
                  </p> */}
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
      </div>
    </section>
  );
};

export default RecommendationSlider;
