import React from "react";
import { Link } from "react-router-dom";
import TnC from "../assets/TnC.pdf";
import FAQs from "../assets/FAQs.pdf";
const YogaFooter = () => {
  return (
    <footer className="bg-[#F5F2EB] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4 text-center sm:text-left">
            <div>
              {/* <h3
                className="text-lg sm:text-xl md:text-xl font-bold text-[#084C2E] tracking-wide leading-tight"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                YOGKALARISAMRIDDHI
              </h3> */}
              <img
                src="footer-logo.png"
                alt="YogKalariSamriddhi"
                className="mx-auto sm:mx-0"
              />
              <p className="text-sm text-gray-600 italic mt-2">
                Where Wellness Meets Prosperity
              </p>
            </div>
            <div className="flex space-x-3 justify-center sm:justify-start">
              {/* YouTube Icon */}
              <a
                href="https://youtube.com/@yogkalarisamriddhi?si=MQ0ASPrUvkQEgwl1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center hover:bg-[#78756D] transition-colors duration-300 flex-shrink-0"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/yogkalarisamriddhi?igsh=Z2ZsajluODg2c2Vh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center hover:bg-[#78756D] transition-colors duration-300 flex-shrink-0"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/971563440979?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center hover:bg-[#78756D] transition-colors duration-300 flex-shrink-0"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left ">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/yoga"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  Yoga
                </Link>
              </li>
              <li>
                <Link
                  to="/kalari"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  Kalari
                </Link>
              </li>
              <li>
                <Link
                  to="/terrariums"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  Terrariums
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <p className="text-gray-500 text-sm">Dubai, UAE</p>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
              Legal Info
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={TnC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a
                  href={FAQs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#084C2E] transition-colors text-sm block"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500 px-2">
            © All Rights Reserved by Yogkalarisamriddhi FCCZC LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default YogaFooter;
