import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const founders = [
  {
    name: "Sachin Gurukkal",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756891653/33230a6f775caee0b3dd48812f50e8f57b707db9_k44gpp_6e330c.jpg",
    description:
      "Sachin Gurukkal is a lineage-trained Kalaripayattu teacher with 15+ years teaching. He leads adults and kids through flowing Kalari that builds strength, agility, focus and humility. Grounded and safe, his training honors tradition while meeting modern bodies—cultivating courage, discipline and quiet power.",
    link: "/kalari#trainer",
  },
  {
    name: "Yogini Sucheta",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756891710/9f87695ca0470a54f3eecfd28a53a3590fc5f1ab_n5ooqd_c1a3ab.jpg",
    description:
      "Sucheta is a yoga therapist who helps people come home to their bodies. With 13+ years of one-to-one work, she supports women’s health, pain, burnout, stress and recovery using breath, gentle movement, meditation and deep rest. Her calm, tradition-rooted care guides steady change—better sleep and a quieter mind.",
    link: "/yoga#trainer",
  },
];

const FounderCards = () => {
  return (
    <div className="bg-[#f8f5eb] min-h-screen flex flex-col items-center mb-20 md:mb-0 px-6">
      <h2 className="text-3xl md:text-4xl  font-semibold text-[#084C2E] mb-10 text-center">
        Meet the Founders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-4xl w-full">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="group relative bg-[#F4F2ED] rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]"
          >
            <HashLink smooth to={founder.link}>
              {/* Founder Image */}
              <div className="overflow-hidden group-hover:h-full">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-all duration-500 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 "
                />
              </div>

              {/* Content (Before Hover) */}

              <div className="p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="text-2xl font-semibold">{founder.name}</h3>
                <p className=" text-sm mt-2 leading-relaxed">
                  {founder.description}
                </p>
                <p className="mt-3 text-[#084C2E] font-medium hover:underline text-center sm:hidden">
                  Know More
                </p>
              </div>
            </HashLink>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-[#084C2E] backdrop-blur-sm p-5 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col items-center">
              <h3 className="text-white text-2xl font-semibold">
                {founder.name}
              </h3>
              <HashLink
                smooth
                className="mt-3 border border-white text-white px-4 py-2 rounded-full hover:bg-[#2F5E4E] hover:text-white transition-all duration-300"
                to={founder.link}
              >
                Know more
              </HashLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderCards;
