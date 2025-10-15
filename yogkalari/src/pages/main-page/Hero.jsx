import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className="font-primary text-2xl 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 5xl:text-9xl pt-42 pb-8 text-center font-semibold text-[#084C2E]">
        YOGKALARISAMRIDDHI
      </h1>
      <p className="sm:text-xl md:text-2xl lg:text-4xl mx-auto text-center">
        Where Wellness Meets Prosperity
      </p>
      <p className="xs:text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl mx-10 sm:mx-20 md:mx-50 lg:mx-50 xl:mx-70 mt-3 text-center">
        An integrated wellness offering born from Indian tradition, ritual, and
        rootedness. At YogKalariSamriddhi, we unite body, breath, and
        earth—through therapeutic Yoga, Kalaripayattu training, and curated
        living terrariums
      </p>
      <button
        className="transition duration-500 ease-in-out text-[084C2E] px-6 py-2 rounded-full mt-10 mx-auto block border-2 border-[#084C2E] cursor-pointer hover:bg-[#F4FCF6] hover:text-[#0A7646] hover:border-[#0A7646]"
        onClick={() => (window.location.href = "tel:+971563440979")}
      >
        Book An Appointment
      </button>
    </div>
  );
};

export default Hero;
