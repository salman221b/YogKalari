import React from "react";
import "./MarqueeBanner.css"; // Import custom CSS

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-[#94563D] overflow-hidden">
      <div className="marquee py-2">
        <span className="text-white text-sm md:text-base">
          - Use code <b>BREATHE10</b> for 10% off your first session or
          terrarium
        </span>
        <span className="text-white text-sm md:text-base">
          - Use code <b>BREATHE10</b> for 10% off your first session or
          terrarium
        </span>
        <span className="text-white text-sm md:text-base">
          - Use code <b>BREATHE10</b> for 10% off your first session or
          terrarium
        </span>
        <span className="text-white text-sm md:text-base">
          - Use code <b>BREATHE10</b> for 10% off your first session or
          terrarium
        </span>
      </div>
      <div className="bg-[#084C2E] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
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

export default MarqueeBanner;
