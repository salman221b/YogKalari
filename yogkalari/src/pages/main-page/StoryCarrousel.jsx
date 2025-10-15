import React, { useState, useEffect } from "react";

const StoryCarousel = () => {
  const stories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468672/62fe3e22bc68b1f9c8c2828e32195e303891e5cc_iulkoi.jpg",
      title: "Story 1",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759470269/c715afba25082f168a9425be119c5f75bf52e700_1_k6gurv.jpg",
      title: "Story 2",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468674/42deff99815ae5baa6f94c29e7689133493381b3_y0nvq1.jpg",
      title: "Story 3",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468668/4283dce941d2ff7b1b4f192c4636d03cd42c9d34_ogmf9s.jpg",
      title: "Story 4",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468658/77c26b0e36a5f853cf27f8c8e584c863e85a6179_os55pe.jpg",
      title: "Story 5",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468679/41d0a24f97d9f9bb6ae48e9b42e332fae7d97924_lvbzr6.jpg",
      title: "Story 6",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468661/ec785276157a69f6e7dbbac5ce6e4092c0c492f0_v2acnd.jpg",
      title: "Story 7",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468655/3d28346cfa6d1ad60c9eb19b94f5f723de96fc92_wcdbk7.jpg",
      title: "Story 8",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468401/50b324c8c9551ecde57b0d3b8320a23ecb133fbc_yjhe3h.jpg",
      title: "Story 9",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759469760/6ff4023bdac456660969f85f8b9c2e7a589c0af6_zgoph0.jpg",
      title: "Story 10",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468664/3be659bca2266070c12b2fbee5572de98c8171a1_faeqr1.jpg",
      title: "Story 11",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468303/3fab7f18392832189b3f40311efb181191bb2fab_1_v2khzp.jpg",
      title: "Story 12",
    },
    {
      id: 13,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468285/d69c14d0480a8fa1464af0d83b17a75f33a204cf_wuijyv.jpg",
      title: "Story 13",
    },
    {
      id: 14,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468658/614ca7d605f1f2af409207c87adfa92e23cc27ea_icpyhc.jpg",
      title: "Story 14",
    },
    {
      id: 15,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759469761/d22053ac8a59909c4e20fa84c906539ebd0e060c_ym0oi9.jpg",
      title: "Story 15",
    },
    {
      id: 16,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468272/2cdac66776c2966cc3d55de1f86b505e94a8d517_buvzji.jpg",
      title: "Story 16",
    },
    {
      id: 17,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468248/cf33080cb8e756e8c3bc6c3fc785225e6c095d13_d4nwj4.jpg",
      title: "Story 17",
    },
    {
      id: 18,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468215/87ab4389a4cf8e2290f72ecc2103ea5428c6b1fb_ajewxy.jpg",
      title: "Story 18",
    },
    {
      id: 19,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468210/dd8be9d52c09c811084d530c885fa3a9e005a127_ylvcgq.jpg",
      title: "Story 19",
    },
    {
      id: 20,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468152/e0d59685fb6372b901ae4d7e6eb0ab0f4f548f8c_zgfw2w.jpg",
      title: "Story 20",
    },
    {
      id: 21,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759469759/ae3416fe07a7a5b9f1de236e30e8d1eb4143534d_kggeyn.jpg",
      title: "Story 21",
    },
    {
      id: 22,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759469759/7790d97c4d2ed08619ea1c4c2e6f91d0be419405_i7dkmy.jpg",
      title: "Story 22",
    },
    {
      id: 23,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759470275/49f6d9965d4d330289fc28425722ce365c04ff5c_1_w8vu7k.jpg",
      title: "Story 23",
    },
    {
      id: 24,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468133/fa91573bf122371c5214b850bbfb6da98dddcc97_krgdkl.jpg",
      title: "Story 24",
    },
    {
      id: 25,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759470277/fd35772465a36c9361a6aee2b29a4aa5377712bf_1_qjh2sq.jpg",
      title: "Story 25",
    },
    {
      id: 26,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759468559/0b89aec7d2a89fd24be8f5f37327895396876505_rdab6z.jpg",
      title: "Story 26",
    },
    {
      id: 27,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759469755/182bec551d38436dcfb4352b31d485dcebdecedf_wkvohl.jpg",
      title: "Story 27",
    },
    {
      id: 28,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1759469994/d23090fecb048b2a3c06b0d74d81cea3d9909db1_hvprdm_mkyg1m.jpg",
      title: "Story 28",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getItemPosition = (index) => {
    const total = stories.length;
    const diff = (index - currentIndex + total) % total;
    const half = Math.floor(total / 2);
    const normalizedDiff = diff > half ? diff - total : diff;

    const absDistance = Math.abs(normalizedDiff);

    // Show 7 items (3 left + center + 3 right)
    if (absDistance > 3) {
      return {
        transform: `translateX(${
          normalizedDiff > 0 ? "1000px" : "-1000px"
        }) scale(0)`,
        zIndex: 0,
        opacity: 0,
      };
    }

    // Responsive spacings and sizes
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;

    // Base image width (unscaled) - matches the CSS classes
    const baseImgWidth = isMobile ? 80 : isTablet ? 160 : 240;

    // Consistent gap between images
    const gap = isMobile ? 16 : isTablet ? 24 : 32;

    const archHeight = isMobile ? 20 : isTablet ? 30 : 40;

    // Active (center) item
    if (absDistance === 0) {
      return {
        transform: `translateX(0px) translateY(0px) scale(1.4)`,
        zIndex: 20,
        opacity: 1,
      };
    }

    // Calculate spacing to maintain consistent gaps
    // We need to account for the scaled widths of previous items
    let translateX = 0;
    for (let i = 1; i <= absDistance; i++) {
      const prevScale = i === absDistance ? 1.4 : 1 - i * 0.15;
      const scaledWidth = baseImgWidth * prevScale;
      translateX += scaledWidth + gap;
    }

    // Apply direction
    translateX = normalizedDiff > 0 ? translateX : -translateX;

    const translateY = Math.pow(absDistance, 1.3) * archHeight;

    // More gradual scaling/opacity
    const scale = 1 - absDistance * 0.15;
    const opacity = 1 - absDistance * 0.15;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex: 20 - absDistance,
      opacity,
    };
  };

  return (
    <div className="w-full flex items-center justify-center bg-[#F6F3EB] py-10">
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Carousel */}
        <div className="relative w-full h-full flex items-center justify-center">
          {stories.map((story, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={story.id}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer group"
                style={getItemPosition(index)}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={story.image}
                  alt={`Story ${index + 1}`}
                  className={`w-20 h-25 sm:w-40 sm:h-45 md:w-52 md:h-57 lg:w-60 lg:h-67 rounded-[20px] object-cover transition-all duration-500 ${
                    isActive
                      ? "grayscale-0"
                      : "grayscale group-hover:grayscale-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoryCarousel;
