import React from "react";

const Marquee = () => {
  return (
    <div className="bg-[#E3DECF] text-black py-1 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the message multiple times for seamless loop */}
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="mx-8 text-lg font-medium flex items-center">
            Use code BREATHE10 for 10% off your first session or terrarium
          </span>
        ))}
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee 8s linear infinite;
        }

        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
