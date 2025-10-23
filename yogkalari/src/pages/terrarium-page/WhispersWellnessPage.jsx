import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react"; // for star icons

const testimonials = [
  {
    name: "Maria",
    initials: "M",
    title: "Thoughtful Gift",
    content:
      "I gifted the Turtle Ankur to my parents and they loved it instantly. The little turtle inside feels so meaningful — steady and protective. They were surprised how easy it is to maintain, the plants are still thriving months later with hardly any effort. It turned out to be such a thoughtful gift.",
  },
  {
    name: "Priya",
    initials: "P",
    title: "Feeling Peace",
    content:
      "My Buddha Sthira sits on my work desk and it’s like a small pause button for me. Even on stressful days, just looking at it helps me breathe better. It’s been over 5 months and I’ve watered it only twice — somehow it just looks after itself.",
  },
  {
    name: "Vivek",
    initials: "V",
    title: "Welcoming Feel",
    content:
      "The Brass Ganesha Ārāma was my housewarming gift to myself. The glow of Ganesha with the green backdrop looks stunning and gives a very welcoming feel. It feels both auspicious and stylish, the perfect start to a new home.",
  },
  {
    name: "Amina",
    initials: "A",
    title: "Strong, Beauty & Protection.",
    content:
      "The Evil Eye Turtle Ārāma is the first thing people notice when they walk into my home. The bonsai has grown strong and it looks so unique, like a piece of art with meaning. I love that it carries both beauty and protection.",
  },
  {
    name: "Anjali",
    initials: "A",
    title: "A Energised Feel",
    content:
      "The Shiva Ārāma terrarium sits in my puja room and honestly it adds a different energy. Every time I light the lamp, the calm face of Shiva with the greens behind feels like the space has come alive. It’s not just décor — it feels like prayer in a glass.",
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-[#084C2E] text-center">
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
                      <div className="bg-white rounded-2xl p-8  duration-300 w-full h-[380px] md:h-[300px] flex flex-col justify-between">
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
                        <p className="text-sm leading-relaxed ">{t.content}</p>

                        {/* Footer */}
                        <div className="flex items-center gap-3 mt-auto">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
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
      <div className="bg-[#084C2E] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center pb-5">
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
