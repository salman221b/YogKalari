import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import MarqueeBanner from "./Marquee";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappCountry: "+971",
    whatsapp: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const filteredValue =
      name === "whatsapp" ? value.replace(/\D/g, "") : value;
    setFormData({ ...formData, [name]: filteredValue });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required.";
    } else if (formData.whatsapp.length < 7) {
      newErrors.whatsapp = "WhatsApp number is too short.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate form
    if (!validateForm()) {
      // show inline errors only (no Swal popup)
      return;
    }

    const emailData = {
      ...formData,
      whatsappFull: `${formData.whatsappCountry} ${formData.whatsapp}`,
    };

    // send via EmailJS
    emailjs
      .send(
        "service_xq04glg",
        "template_jy2u90d",
        emailData,
        "XgiLvulQ_qgPGI3Pt"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "We'll get back to you within 24 hours.",
            confirmButtonColor: "#065F46",
          });
          setFormData({
            fullName: "",
            email: "",
            whatsappCountry: "+971",
            whatsapp: "",
            message: "",
          });
          setErrors({});
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#065F46",
          });
        }
      );
  };

  return (
    <>
      <section className="py-16 px-6 pt-35" style={{ backgroundColor: "#F5F3ED" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-10 gap-6">
            {/* Left Card */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm p-12">
              <h2
                className="text-6xl font-bold leading-tight mb-20"
                style={{
                  fontFamily: "Clash Display, sans-serif",
                  color: "#084C2E",
                }}
              >
                DISCUSS
                <br />
                WITH
                <br />
                US
              </h2>

              <div className="space-y-6" style={{ color: "#084C2E" }}>
                <div>
                  <p className="font-semibold text-base mb-1">WhatsApp Us</p>
                  <a href="tel:+971563440979" className="text-base hover:underline">
                    +971 563440979
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-base mb-1">E-mail</p>
                  <a
                    href="mailto:info@yogkalarisamriddhi.com"
                    className="text-base hover:underline"
                  >
                    info@yogkalarisamriddhi.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card - Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="whatsappCountry"
                          value={formData.whatsappCountry}
                          onChange={handleChange}
                          className="w-25 md:w-30 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                        >
                          <option value="+971">🇦🇪 (+971)</option>
                          <option value="+91">🇮🇳 (+91)</option>
                          <option value="+1">🇺🇸 (+1)</option>
                          <option value="+44">🇬🇧 (+44)</option>
                          <option value="+61">🇦🇺 (+61)</option>
                        </select>
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="Enter number"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="flex-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                      </div>
                      {errors.whatsapp && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.whatsapp}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Enter your Message"
                      rows={9}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-10 py-2.5 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#084C2E" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
};

export default ContactForm;
