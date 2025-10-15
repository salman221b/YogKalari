import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-center py-16 pt-100 xs:pt-100 sm:pt-150 md:pt-190 bg-cover bg-center bg-no-repeat
                 bg-[url('https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887436/5f559bbdd3c549582b72b03a0da938256f33c829_wzrsgu.jpg')]
                 md:bg-[url('https://res.cloudinary.com/dpjfm1pha/image/upload/v1759311133/ca6eb6e9dec4cb936719d36d637b96a76bda0fa5_aceimh.jpg')]"
    >
      {/* Optional overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-white/40"></div> */}

      {/* Title */}
      <h1 className="font-primary px-10 relative text-2xl 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 5xl:text-9xl pt-25 md:pt-15 font-semibold text-[#AA6246] z-10">
        KALARIPAYATTU
      </h1>

      {/* Subtitle */}
      <p className="relative text-sm sm:text-base md:text-lg text-[#F6F3EB] z-10 mt-3 px-10">
        Traditional Techniques for Modern Warriors
      </p>
    </section>
  );
};

export default Hero;
