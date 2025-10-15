import React from "react";
const Trainer = () => {
  return (
    <section
      className="py-16 px-6 sm:px-10 md:px-16 lg:px-24"
      id="trainer"
    >
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl text-[#B15D6E]">
        Meet your Wellness Guide
      </h2>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756893262/d9e86fc867dffaee8e6f5323a22409ca7d9c8229_on2dsz_ef9108.jpg"
            alt="Sucheta Chadha"
            className="rounded-xl shadow-lg w-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Sucheta Chadha
          </h3>
          <p className="text-gray-600 italic mt-1 text-lg">
            Yoga Therapist | Wellness Educator | Conscious Entrepreneur
          </p>

          {/* Intro */}
          <p className="mt-6 text-gray-700 leading-relaxed text-[1.05rem]">
            With over{" "}
            <span className="font-semibold">
              13 years of experience in therapeutic yoga
            </span>
            , Sucheta has guided
            <span className="font-semibold"> hundreds of individuals</span> —
            especially
            <span className="font-semibold">
              {" "}
              women navigating hormonal imbalances, burnout recovery
            </span>
            , and{" "}
            <span className="font-semibold">chronic health conditions</span>.
          </p>

          {/* Yoga Approach */}
          <p className="mt-5 text-gray-700 text-[1.05rem]">
            Her approach draws from the{" "}
            <span className="font-semibold">yoga śāstra</span>, integrating:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-[1.05rem]">
            <li>
              <span className="font-semibold">Prāṇāyāma</span> — breathwork to
              regulate subtle energy
            </li>
            <li>
              <span className="font-semibold">Āsana</span> — movement adapted to
              each body
            </li>
            <li>
              <span className="font-semibold">Manonigraha</span> — mental
              clarity and inner stillness
            </li>
            <li>
              <span className="font-semibold">Upayoga-inspired rituals</span> —
              accessible daily practices for real-life regulation
            </li>
          </ul>

          {/* Workplace Wellness */}
          <p className="mt-6 text-gray-700 leading-relaxed text-[1.05rem]">
            A{" "}
            <span className="font-semibold">former corporate professional</span>
            , Sucheta brings a unique
            <span className="font-semibold">
              {" "}
              perspective to workplace wellness
            </span>
            , helping professionals shift from
            <span className="italic"> depletion </span>to{" "}
            <span className="italic">ojas</span> — vital strength and presence.
          </p>

          {/* Philosophy */}
          <p className="mt-4 text-gray-700 leading-relaxed text-[1.05rem]">
            For Sucheta, the body is not just a vessel, but a
            <span className="italic"> sādhana-yantra</span> — a
            <span className="font-semibold"> sacred instrument</span> for
            restoring clarity, rhythm, and connection.
          </p>

          {/* Closing */}
          <p className="mt-4 text-gray-700 leading-relaxed text-[1.05rem]">
            This philosophy flows into her work with
            <span className="font-semibold"> Samriddhi Terrariums</span>, where
            <span className="italic">
              {" "}
              earth wisdom, care, and quiet beauty
            </span>{" "}
            meet in
            <span className="italic"> ritual form</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
