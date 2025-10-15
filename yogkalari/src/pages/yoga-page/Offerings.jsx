import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Private Yoga & Energy Reset Sessions",
    description:
      "Stillness-based, one-on-one sessions to gently realign the subtle body and calm the energetic field.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890082/offering1_tipcfw_3e76c6.jpg",
    link: "",
  },
  {
    title: "Corporate Wellness",
    description:
      "Breathwork, chair yoga, and stress-relief programs for workplaces seeking calmer, more creative teams.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757393352/a688b748dc5bb0f408128ab2878043b4578fc9ed_xshqix_c1e215.jpg",
    link: "",
  },
  {
    title: "Yoga Workshops",
    description:
      "Live offerings including the Hormone Harmony series and therapeutic intensives.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757393444/4f19df3973f28100dc5f53221da8e569220f76e1_nba6xg_6546a6.jpg",
    link: "",
  },
];

const Offerings = () => {
  return (
    <section className="bg-[#EDEAE0] py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl text-[#A97375]">Offerings</h2>
      <p className="text-gray-600 mt-2 mx-auto text-sm sm:text-base mb-7">
        Based in Dubai. (Classes offered in select locations. Contact us to
        explore starting a group near you.)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full lg:mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden group-hover:h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-2xl transition-all duration-700 ease-in-out md:grayscale group-hover:grayscale-0 group-hover:h-full"
              />
            </div>

            {/* Normal Content */}
            <div className="p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {card.description}
              </p>
              <div className="sm:hidden mt-4 text-center">
                <a
                  className="mt-4 border border-[#084C2E] text-[#084C2E] px-4 py-2 rounded-full transition-all duration-300 "
                  href="https://wa.me/971563440979?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm">Chat with Us</span>
                </a>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-[#084C2E] backdrop-blur-sm px-5 py-6 opacity-0 group-hover:opacity-80 transition-all duration-500 flex flex-col items-center">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
              <p className="text-white text-sm mt-3 leading-relaxed">
                {card.description}
              </p>
              <a
                href="https://wa.me/971563440979?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border border-white text-white px-4 py-2 rounded-full hover:bg-[#2F5E4E]  transition-all duration-300"
              >
                <span className="text-sm">Chat with Us</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
