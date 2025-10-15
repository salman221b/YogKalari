import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Yoga Therapy",
    subtitle: "Corporate yoga | Private yoga | Yoga workshop",
    description:
      "Traditional yoga for real-life healing. Breath, gentle movement and deep rest ease pain, steady hormones and calm a wired mind. Tailored one-to-one care—quiet, attentive, effective—for women navigating burnout, cycles and stress. Private sessions and select workplace programs for those who value depth over trends.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890082/offering1_tipcfw_3e76c6.jpg",
    link: "/yoga",
  },
  {
    title: "Kalaripayattu - Martial Arts",
    subtitle: "Group classes | Private class | Kalaripayattu workshops",
    description:
      "India’s classical warrior art—taught with discipline and care. Flowing Kalari sequences build strength, agility and focus while cultivating humility and discipline. Beginners, adults and kids welcome. Join a small group or book private training to move with grounded power.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890835/d23090fecb048b2a3c06b0d74d81cea3d9909db1_hvprdm_a5f872.jpg",
    link: "/kalari",
  },
  {
    title: "Samriddhi Terrariums",
    subtitle: "Corporate Gifting | Sacred Home | Wellness Décor",
    description:
      "Closed-glass living terrariums that calm a room and invite pause. Low-maintenance and long-lasting—quietly elegant for gifting, desks and serene corners. Choose small to XL, or request a custom build around a figurine that carries your story.",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890523/182bec551d38436dcfb4352b31d485dcebdecedf_razufc_ebb494.jpg",
    link: "/terrariums",
  },
];

const ServiceCards = () => {
  return (
    <div className="bg-[#f8f5eb] flex flex-col items-center mb-20 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#084C2E] mb-10 text-center">
        Sanctuary for Reconnection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="group relative bg-[#F4F2ED] rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden group-hover:h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover p-3 hover:p-0 rounded-3xl transition-all duration-700 ease-in-out md:grayscale group-hover:grayscale-0 group-hover:h-full"
              />
            </div>

            {/* Normal Content */}
            <div className="p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-[#084C2E] text-sm mt-1">{card.subtitle}</p>
              <p className="text-[#555555] text-sm mt-3 leading-relaxed">
                {card.description}
              </p>
              <div className="sm:hidden mt-4 text-center">
                <a className="mt-4 border border-[#084C2E] text-[#084C2E] px-4 py-2 rounded-full transition-all duration-300 ">
                  Know more
                </a>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-[#084C2E] backdrop-blur-sm px-5 py-6 opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
              <p className="text-white text-sm mt-1">{card.subtitle}</p>
              <span className="mt-4 border border-white text-white px-4 py-2 rounded-full hover:bg-[#2F5E4E]  transition-all duration-300">
                Know more
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
