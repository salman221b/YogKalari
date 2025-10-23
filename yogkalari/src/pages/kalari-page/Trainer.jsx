import React from "react";
const Trainer = () => {
  return (
    <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24" id="trainer">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl text-[#AA6246] font-semibold">
        Meet your Kalari Gurukkal
      </h2>

      <div className="mt-15 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 items-start">
        {/* Left Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887436/5f559bbdd3c549582b72b03a0da938256f33c829_wzrsgu.jpg"
            alt="Sachin Gurukkal"
            className="rounded-xl shadow-lg w-[100%] h-[730px] md:h-[730px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#1C1C1B]">
            Sachin Gurukkal
          </h3>
          <p className="text-[#1C1C1B] font-medium mt-1">
            Traditional Kalari Teacher | Lineage Holder | Movement Guide
          </p>

          {/* Intro */}
          <p className="mt-4 text-[#1C1C1B] leading-relaxed text-[1.05rem]">
            Sachin Gurukkal, trained in the{" "}
            <span className="font-semibold">
              ancient gurukula tradition of Kerala
            </span>
            , brings{" "}
            <span className="font-semibold">15+ years of expertise</span> in
            Kalaripayattu instruction, including{" "}
            <span className="font-semibold">
              8 years of immersive teaching in Dubai
            </span>
            . His approach offers Kalaripayattu as a transformative practice—a
            dynamic fusion of{" "}
            <span className="italic">movement, breathwork,</span> and{" "}
            <span className="italic">inner stillness</span>.
          </p>

          {/* Roots */}
          <p className="mt-4 text-[#1C1C1B] leading-relaxed text-[1.05rem]">
            Rooted in the <span className="font-semibold">marma system</span>{" "}
            and{" "}
            <span className="font-semibold">
              temple traditions of southern India
            </span>
            , his teaching transmits not just form and technique but also{" "}
            <span className="italic">śarīra śikṣaṇa</span> (body education),{" "}
            <span className="font-semibold">energetic discipline</span>, and{" "}
            <span className="font-semibold">grounded awareness</span>.
          </p>

          {/* Classes */}
          <p className="mt-4 text-[#1C1C1B] leading-relaxed text-[1.05rem]">
            His classes are rigorous yet graceful, inviting students of all ages
            to embody:
          </p>
          <ul className="mt-2 space-y-3 text-[#1C1C1B] list-disc list-inside text-[1.05rem]">
            <li>Strength through surrender</li>
            <li>Power through stillness</li>
            <li>Discipline through presence</li>
          </ul>

          {/* Integration */}
          <p className="mt-4 text-[#1C1C1B] leading-relaxed text-[1.05rem]">
            Sachin Gurukkal’s work bridges ancient Kalari wisdom with modern
            wellness spaces—
            <span className="font-semibold">
              without dilution, without compromise.
            </span>
          </p>

          {/* Brand */}
          <p className="mt-6 font-semibold text-[#1C1C1B]">
            YogKalariSamriddhi: A Ritual-Rooted Wellness Brand
          </p>
          <p className="mt-2 text-[#1C1C1B] leading-relaxed text-[1.05rem]">
            From <span className="italic">breath-led yoga</span> to{" "}
            <span className="italic">living terrariums</span> to the{" "}
            <span className="italic">fire and form of Kalari</span>, every
            offering from YogKalariSamriddhi is:
          </p>
          <ul className="mt-2 space-y-3 text-[#1C1C1B] list-disc list-inside text-[1.05rem]">
            <li>
              <span className="font-semibold">
                Guided by śāstra and aligned with ṛta
              </span>{" "}
              (cosmic rhythm)
            </li>
            <li>
              <span className="font-semibold">
                Inspired by the pañca mahābhūtas
              </span>{" "}
              — earth, water, fire, air, and space
            </li>
            <li>
              <span className="font-semibold">
                Designed to cultivate inner prosperity and outer harmony
              </span>
            </li>
          </ul>

          {/* Closing */}
          <p className="mt-4 text-[#1C1C1B] leading-relaxed text-[1.05rem]">
            This is{" "}
            <span className="font-semibold">
              not performance-driven wellness
            </span>
            . This is{" "}
            <span className="italic font-semibold">wellness as sādhana</span> —
            a sacred return to what is essential, timeless, and true.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
