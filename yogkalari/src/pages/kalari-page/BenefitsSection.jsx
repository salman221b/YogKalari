import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react"; // for star icons

const testimonials = [
  {
    name: "Nishad Somanathan",
    initials: "NS",
    title: "A Transformative Experience",
    content:
      "My son and daughter have been attending Kalari lessons for the past two years @YogKalariSamriddhi, and the experience has been phenomenal. They have developed a strong physique and improved concentration levels. These lessons have significantly boosted their performance in sports and academics.",
  },
  {
    name: "Dilipkumar Sasidharan",
    initials: "DS",
    title: "Impressive Growth",
    content:
      "My child is really enjoying his Kaleri with his master. He didn’t have any base in the beginning but he really improved a lot. Thanks to Sachin Master.",
  },
  {
    name: "Ahana Mehta",
    initials: "AM",
    title: "Loved by the Kids",
    content:
      "Children love doing it, it has improved their flexibility and focus and is good for strengthening their body.",
  },
  {
    name: "Nethra Gneshan",
    initials: "NG",
    title: "Strong & Focused",
    content:
      "I’ve been learning Kalaripayattu with Sachin Gurukkal for about 4 years now, and it’s been an incredible experience. His deep knowledge and skill in Kalari make every class both challenging and rewarding.",
  },
  {
    name: "Nirupama R",
    initials: "NR",
    title: "A Blessing",
    content:
      "Learning Kalaripayattu, the ancient martial art of India, in Dubai under Sachin Sir has been a true blessing. For me, starting this art later in life has reignited confidence and discipline.",
  },
];
const BenefitsSection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
  };
  const benefits = [
    {
      title: "Physical Strength",
      desc: "Build functional strength, flexibility, and cardiovascular endurance through dynamic movements.",
    },
    {
      title: "Mental Clarity",
      desc: "Develop focus, concentration, and mental resilience through meditative practices.",
    },
    {
      title: "Self Defense",
      desc: "Learn practical self-defense techniques applicable in real-world situations.",
    },
    {
      title: "Balance & Coordination",
      desc: "Improve body awareness, balance, and coordination through precise movement patterns.",
    },
    {
      title: "Stress Relief",
      desc: "Release stress and tension through rhythmic movements and breathing exercises.",
    },
    {
      title: "Cultural Connection",
      desc: "Connect with ancient Indian traditions and philosophy through authentic practice.",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-12">
      {/* Benefits Heading */}
      <h2 className="text-center text-2xl md:text-3xl  text-[#AA6246] mb-10 font-semibold">
        Benefits of Kalaripayattu
      </h2>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-[#EDEAE0] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-700">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* Whispers of Wellness */}
      <div className="py-10 px-6">
         <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl 2xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-5 text-[#AA6246] text-center pb-10">
          Whispers of Wellness
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Every word shared here is a quiet echo of trust, transformation,
              and timeless care. Our clients don't just experience a service;
              they step into a philosophy.
            </p>
          </div>

          {/* Right Side - Testimonials Slider */}
          <div className="flex justify-center">
            <div className="w-full max-w-md md:max-w-2xl">
              <Slider {...settings}>
                {testimonials.map((t, i) => (
                  <div key={i}>
                    <div className="bg-white rounded-2xl p-8 duration-300 w-full h-[380px] md:h-[300px] flex flex-col justify-between">
                      {/* Quotation mark */}
                      <div className=" text-[#2F5C4E] mb-3">
                        <img
                          src="/quotes.png"
                          alt="Quotation Mark"
                          className="w-10 h-10"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold">{t.title}</h3>

                      {/* Content */}
                      <p className=" text-sm leading-relaxed">
                        {t.content}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center gap-3 mt-auto">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold ">
                          {t.initials}
                        </div>

                        {/* Name + Stars */}
                        <div>
                          <p className="font-medium ">{t.name}</p>
                          <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className="w-4 h-4 fill-yellow-500"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
