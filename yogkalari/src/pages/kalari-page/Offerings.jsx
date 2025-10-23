import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Group Kalari Classes",
    description: "Contact us for active batches.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757395058/005f53581a53c9a9f672b8fa754613aef8b45778_o3idzr_e5b262.png",
    link: "",
  },
  {
    title: "Private Training",
    description: "Adults & kids — by appointment.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757394362/63e1749fb00d6770e27f484a334cdf38dcf6f0b4_vuaoav_ed7022.png",
    link: "",
  },
  {
    title: "Pop-Up Workshops",
    description: "Festivals, wellness events, schools.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757394448/cc1b79a1d34d7663d3b70b2b539b72054c55196c_scmvva_295cdc.png",
    link: "",
  },
];

const Offerings = () => {
  return (
    <section className="bg-[#EDEAE0] py-16 px-6 sm:px-10 md:px-16 lg:px-24 ">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl  text-[#AA6246] text-center font-semibold mb-4">
        Offerings
      </h2>
      <p className="text-gray-600 mt-2 mx-auto text-sm sm:text-base mb-7 text-center">
        Based in Dubai. (Classes offered in select locations. Contact us to
        explore starting a group near you.)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full lg:mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            to={card.link}
            className="group relative bg-[#F4F2ED] rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden group-hover:h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover p-3 hover:p-0 rounded-2xl transition-all duration-700 ease-in-out md:grayscale group-hover:grayscale-0 group-hover:h-full"
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
              <h3
                className="text-white text-lg font-semibold"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {card.title}
              </h3>
              <p
                className="text-white text-sm mt-3 leading-relaxed"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {card.description}
              </p>
              <a
                className="mt-4 border border-white text-white px-4 py-2 rounded-full hover:bg-[#2F5E4E] transition-all duration-300"
                href="https://wa.me/971563440979?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
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
