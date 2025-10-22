import React from "react";
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
    name: "Apurva Sarin",
    initials: "AS",
    title: "Impressive Growth",
    content:
      "I am so glad I took this hormone reset workshop. There was so much to learn and I felt absolutely rejuvenated after the abhyas and breath work. Sucheta is an amazing instructor and person! Really understands the pulse of her students. ❤",
  },
  {
    name: "Ahana Mehta",
    initials: "AM",
    title: "Loved by the Kids",
    content:
      "Children love doing it, it has improved their flexibility and focus and is good for strengthening their body.",
  },
  {
    name: "Sulbha",
    initials: "S",
    title: "Strong & Focused",
    content:
      "The quality of Samriddhi Terrariums is excellent and truly value for money. It’s been about 6 months since I got my Buddha Arama, and the plants are thriving beautifully. I absolutely love them and have even started actively gifting them to my friends and family. Every time I look at one, it brings a smile to my face.",
  },
  {
    name: "Usha Babur",
    initials: "UB",
    title: "A Blessing",
    content:
      "“I have thoroughly loved and enjoyed Sucheta's personal yoga sessions as they were specifically tailored to my health condition (Fibromyalgia) and catered to with absolute care & concern. It was not just a class but a holistic approach to mind body soul healing. Loved her soothing voice and her skill set combined.",
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 xl:mb-16 mt-10 xl:mt-20  text-[#084C2E] text-center">
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
                      <div className="bg-white rounded-2xl  p-8 duration-300 w-full h-[380px] md:h-[300px] flex flex-col">
                        {/* Quotation mark */}
                        <div className=" text-[#2F5C4E]">
                          <img
                            src="/quotes.png"
                            alt="Quotation Mark"
                            className="w-10 h-10"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold ">{t.title}</h3>

                        {/* Content */}
                        <p className=" text-sm leading-relaxed">{t.content}</p>

                        {/* Footer */}
                        <div className="flex items-center gap-3 mt-auto">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold ">
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

      {/* Bottom CTA Section */}
      <div className="bg-[#084C2E] py-13 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
            Let's help you find balance through body, breath, and earth
          </p>

          <a
            className="bg-transparent border-2 border-[#F5F2EB] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F5F2EB] hover:text-[#2F5C4E] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            href="tel:+971563440979"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhispersWellnessPage;
