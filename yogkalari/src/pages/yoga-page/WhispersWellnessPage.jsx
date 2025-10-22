import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react"; // for star icons

const testimonials = [
  {
    name: "Apurva Sarin",
    initials: "AS",
    title: "A Transformative Experience",
    content:
      "I am so glad I took this hormone reset workshop. There was so much to learn and I felt absolutely rejuvenated after the abhyas and breath work. Sucheta is an amazing instructor and person! Really understands the pulse of her students. ❤",
  },
  {
    name: "NAMRATA KHUBCHANDANI",
    initials: "NK",
    title: "Impressive Growth",
    content:
      "Sucheta is all. Learning yoga with her has helped me recover from my thyroid issues, be happier and stronger physically and mentally. She's one of the best combination of a teacher and friend ",
  },
  {
    name: "Sindhu Sudhir",
    initials: "SS",
    title: "Enriching Experience",
    content:
      "My yoga journey with Sucheta has been a very enriching experience. I have evolved as a person, improved my fitness and endurance levels through her guidance. Would recommend her in a heartbeat.",
  },
  {
    name: "Hitesh Shahani",
    initials: "HS",
    title: "Strong & Focused",
    content:
      "Sucheta helped me believe that sciatica can be worked upon too and relieve the pain. Her understanding and patience helped me to get rid of pain and be able to practice stretches and poses on my own. Sucheta really works to find a mid ground from where you are to get you where you would want to be and helps you reach your optimal point.",
  },
  {
    name: "Usha Babur",
    initials: "UB",
    title: "A Blessing",
    content:
      "I have thoroughly loved and enjoyed Sucheta's personal yoga sessions as they were specifically tailored to my health condition (Fibromyalgia) and catered to with absolute care & concern. It was not just a class but a holistic approach to mind body soul healing. Loved her soothing voice and her skill set combined.",
  },
];

const WhispersWellnessPage = () => {
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

  return (
    <div className=" bg-[#F5F2EB]">
      {/* Top Section with Testimonials */}
      <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl 2xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-5 text-[#B15D6E] text-center pb-10">
            Whispers of Wellness
          </h1>

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
                      <div className="bg-white rounded-2xl  p-8 duration-300 w-full h-[380px] md:h-[300px] flex flex-col justify-between">
                        {/* Quotation mark */}
                        <div className=" text-[#2F5C4E] mb-3">
                          <img
                            src="/quotes.png"
                            alt="Quotation Mark"
                            className="w-10 h-10"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semiboldmb-2">{t.title}</h3>

                        {/* Content */}
                        <p className="text-sm leading-relaxed mb-6">
                          {t.content}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                            {t.initials}
                          </div>

                          {/* Name + Stars */}
                          <div>
                            <p className="font-medium">{t.name}</p>
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

export default WhispersWellnessPage;
