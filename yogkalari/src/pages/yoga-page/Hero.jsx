import React from "react";
import img from "../../assets/logoHeroYoga.png";
const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center pt-16 lg:py-16"
      style={{
        background:
          "linear-gradient(to bottom, #96293fff 0%, #B15D6E 30%, #de8597ff 50%, #fbfaf8ff 95%, #F6F3EB 100%)",
      }}
    >
      {/* Title */}
      <h1 className="font-primary text-2xl 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 5xl:text-9xl pt-15 md:pt-25 text-center font-semibold text-[#F6F3EB]">
        YOGA THERAPY
      </h1>
      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-white text-center z-10 mt-3 px-4 md:px-0">
        Personalized practice. Rooted in śāstra. Designed for your healing
      </p>
      {/* Large Faded Background Text */}
      <img
        src={img}
        // className="absolute xs:h-50 xs:w-50 sm:h-80 sm:w-80 md:h-100 md:w-100 opacity-20 lg:h-150 lg:w-150 xl:w-200 xl:h-200 left-[-300px] sm:left-[-300px] lg:left-[-400px]"
        className="absolute left-0"
      />

      {/* Image */}
      <div className="mt-6">
        <img
          src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1759467162/1d2bf6558fe862ad5672b569315fc7a1789da629_1_iykckn.png"
          alt="YOGA THERAPY"
          className="w-[500px] sm:w-[550px] md:w-[650px] lg:w-[700px] relative z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
