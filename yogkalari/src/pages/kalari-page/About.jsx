import React from "react";
const KalaripayattuDetails = () => {
  return (
    <section className=" px-6 sm:px-10 md:px-16 lg:px-24 py-16 text-gray-800 font-sans leading-relaxed">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#AA6246] font-semibold mb-4">
            "देहस्य विजय आत्मानः जयः"
          </h2>
          <p className="text-[#AA6246] mb-4">
            Victory over the body is victory over the Self.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Kalaripayattu</span> is one of the
            oldest <span className="font-semibold">martial traditions</span> in
            the world — a sophisticated and sacred system of movement, breath,
            and awareness that originated in Kerala’s ancient temple arenas
            (khestras).
          </p>
          <p className="mb-4">
            More than a fighting style, Kalari is a discipline of self-mastery —
            training the body to move like water and the mind to remain anchored
            like earth.
          </p>
          <p className="mb-4">
            At YogKalariSamriddhi, our Kalari offerings are guided by Sachin
            Gurukkal, a respected teacher with{" "}
            <span className="font-semibold">
              15 years of teaching experience,
            </span>
            including the past{" "}
            <span className="font-semibold">8 years in Dubai.</span> Trained in
            the gurukula system and deeply immersed in both northern and
            southern Kalari traditions, he brings the rigor of lineage with a
            rhythm that resonates in modern times.
          </p>
          <p>
            His approach is rooted in{" "}
            <span className="font-semibold">
              discipline, flow, and precision — making{" "}
            </span>
            Kalari accessible for all bodies, while preserving its sacred power.
          </p>
        </div>

        {/* Right Column Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702709/kalari1_zflvdw.jpg"
            alt="Kalaripayattu Warriors"
            className="rounded-3xl  w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* What Kalari Builds Section */}
      <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center md:flex md:flex-col-reverse">
        {/* Left Image */}
        <div className="sm:order-1">
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887485/5d8c5325bf81539f89354ea46bfbdf69bd7b8f22_nql2q8.jpg"
            alt="Kalari Training"
            className="rounded-3xl  w-full h-[400px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="sm:order-2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#AA6246] font-semibold">
            What Kalari builds
          </h3>
          <ul className="mt-4 space-y-7 text-gray-700">
            <li>
              <strong>
                {" "}
                <span className="text-[#AA6246]">Śarīra niyantraṇa: </span>
              </strong>{" "}
              physical control and coordination
            </li>
            <li>
              <strong>
                {" "}
                <span className="text-[#AA6246]">Śvāsa sādhanā: </span>
              </strong>{" "}
              breath training and focus
            </li>
            <li>
              <strong>
                {" "}
                <span className="text-[#AA6246]">Bala & dhṛtā:</span>
              </strong>{" "}
              strength, stamina, and grounded power
            </li>
            <li>
              <strong>
                {" "}
                <span className="text-[#AA6246]">Manas shithilī: </span>
              </strong>{" "}
              mental clarity, discipline, and stillness
            </li>
            <li>
              <strong>
                {" "}
                <span className="text-[#AA6246]">Aṅga śuddhi: </span>
              </strong>{" "}
              fluid body awareness and injury prevention
            </li>
          </ul>
          <p className="mt-4 text-gray-700 pb-5">
            From dynamic movement sequences (<em>Meipayattu</em>) to breath-led
            transitions and eventually weapon forms — Kalari trains the body,
            breath, and being together.
          </p>
        </div>
      </div>

      {/* Who Is It For Section */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#AA6246] font-semibold">
            Who is it for
          </h3>
          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-[#AA6246]">
                Children & Teenagers:
              </span>{" "}
              Build śarīra niyantraṇa (body discipline) and manas sthiratā
              (mental steadiness). Kalari sharpens focus, fosters respect, and
              nurtures quiet confidence beyond academics.
            </p>
            <p>
              <span className="font-semibold text-[#AA6246]">Adults:</span>{" "}
              Strength with humility, flow with resilience. Women discover
              empowerment and grace; men develop stamina and composure. For all,
              Kalari is abhyāsa—a steady discipline that grounds body and mind.
            </p>
            <p>
              <span className="font-semibold text-[#AA6246]">
                Professionals & Entrepreneurs:
              </span>{" "}
              In Dubai’s fast pace, Kalari offers a reset. Breath-led movements
              sharpen focus, release tension, and cultivate leadership through
              patience, clarity, and inner balance.
            </p>
            <p>
              <span className="font-semibold text-[#AA6246]">
                Seekers of Tradition & Depth:
              </span>{" "}
              More than martial practice, Kalari is a living heritage. Rooted in
              temple kshetras and passed through lineage, it blends movement,
              breath, and awareness—ancient yet timeless.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887564/bebd4d1cee589cbf5110041aac80e2f20cfc7ded_zqqqwo.jpg"
            alt="Kalari Students"
            className="rounded-3xl w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="mt-16 text-center">
        <h4 className="text-xl md:text-2xl font-semibold text-[#AA6246]">
          Ancient lineage. Modern energy
        </h4>
        <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
          Kalari is where your body becomes all eyes — fully alert, fully
          grounded, fully alive.
        </p>
        <p className="mt-2 text-gray-700  mx-auto">
          Whether you're returning to your body after years or deepening an
          existing movement practice, this ancient art offers something far
          beyond fitness: Presence. Awareness. Fire.
        </p>
      </div>
    </section>
  );
};

export default KalaripayattuDetails;
