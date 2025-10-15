import React from "react";

const KalaripayattuDetails = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 leading-relaxed ">
      {/* Section 1 - Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#B15D6E] font-semibold">
            “शरीरम् आद्यं खलु धर्मसाधनम्”
          </h2>

          <p className="text-[#B15D6E] mb-6">
            The body is the foremost instrument for dharma.— Kālidāsa
          </p>

          <p className="mb-4">
            Each session is a sādhanā—a living ritual, adapted to your prakṛti
            (constitution), vikṛti (imbalance), and the ṛtu (season or cycle)
            you’re in. At YogKalariSamriddhi, our approach to yoga is not about
            flexibility or performance—it is about healing, regulation, and
            returning to your unique rhythm.
          </p>
          <p className="mb-4">
            Led by Sucheta Chadha, an{" "}
            <strong>
              experienced yoga therapist with over 13 years of one-on-one
              practice
            </strong>
            , this offering is grounded in the yoga śāstras, designed to support
            both physical recovery and energetic realignment.
          </p>
          <p className="mb-4">
            Whether you’re navigating a health condition or seeking deeper
            connection with your body, our therapeutic programs integrate:
          </p>
          <ul className="space-y-2">
            <li>
              <strong>
                <span className="text-[#B15D6E]">Āsana:</span>
              </strong>{" "}
              Postural support tailored to your capacity
            </li>
            <li>
              <strong>
                <span className="text-[#B15D6E]">Prāṇāyāma:</span>
              </strong>{" "}
              Breath regulation to restore nervous system balance
            </li>
            <li>
              <strong>
                {" "}
                <span className="text-[#B15D6E]">Dhyāna:</span>
              </strong>{" "}
              Meditation for clarity and inner quiet
            </li>
            <li>
              <strong>
                {" "}
                <span className="text-[#B15D6E]">Daily Vihāra Kriyās:</span>
              </strong>{" "}
              Small, accessible rituals for everyday regulation
            </li>
          </ul>
        </div>

        {/* Right Column Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890082/offering1_tipcfw_3e76c6.jpg"
            alt="Yoga Therapy"
            className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[600px]"
          />
        </div>
      </div>

      {/* Section 2 - Support Clients */}
      <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center md:flex md:flex-col-reverse">
        {/* Left Image */}
        <div className="sm:order-1">
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756704038/795e8cc62a0e7256200c0ee507bfbd8d6c4a91a7_bzoniw.jpg"
            alt="Yoga Therapy Clients"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="sm:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-[32px] text-[#B15D6E] font-semibold pt-10 md:pt-0">
            We support clients with
          </h2>
          <ul className="mt-3 space-y-3 text-gray-700 list-disc list-inside pb-10">
            <li>
              Hormonal health (PCOS, perimenopause, thyroid, menstrual
              irregularities)
            </li>
            <li>
              Immune & energy imbalances (chronic fatigue, long COVID,
              autoimmune conditions)
            </li>
            <li>
              Stress & nervous system dysregulation (anxiety, burnout, sleep
              disorders)
            </li>
            <li>
              Pain management (arthritis, spine issues, tension-based patterns)
            </li>
            <li>
              Restorative support for leaders, creatives & sensitive systems
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3 - What Makes Different */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[32px] text-[#B15D6E] font-semibold mb-6">
            What makes our Yoga Therapy different?
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>
                {" "}
                <span className="text-[#B15D6E]">Personal, not generic</span>
              </strong>{" "}
              <br />
              No two sessions are the same. Each practice adapts to your prakṛti
              (constitution), energy, and life stage.
            </li>
            <li>
              <strong>
                <span className="text-[#B15D6E]">Beyond performance</span>
              </strong>{" "}
              <br />
              Yoga here is not about flexibility or poses—it is about śarīra
              niyantraṇa (body regulation) and inner awareness.
            </li>
            <li>
              <strong>
                <span className="text-[#B15D6E]">A living ritual</span>
              </strong>{" "}
              <br />
              Each session is guided with presence, blending breath, movement,
              stillness, and subtle practices for real-life balance.
            </li>
            <li>
              <strong>
                <span className="text-[#B15D6E]">Energy realignment</span>
              </strong>{" "}
              <br />
              Alongside postures and breathwork, we integrate energy practices
              that release blocks and restore clarity.
            </li>
            <li>
              <strong>
                <span className="text-[#B15D6E]">Calm in a fast city</span>
              </strong>{" "}
              <br />
              Sessions become a sanctuary of steadiness, offering regulation and
              reconnection in the midst of Dubai’s pace.
            </li>
            <li>
              <strong>
                <span className="text-[#B15D6E]">Tradition with relevance</span>
              </strong>{" "}
              <br />
              Rooted in śāstra yet shaped for modern challenges—this is yoga
              therapy as medicine for body, mind, and spirit.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756704191/c715afba25082f168a9425be119c5f75bf52e700_1_jzyes8.jpg"
            alt="Meditation"
            className="rounded-lg shadow-lg w-full object-cover h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KalaripayattuDetails;
