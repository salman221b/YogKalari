import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // get current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/yoga", label: "Yoga" },
    { path: "/kalari", label: "Kalari" },
    { path: "/terrariums", label: "Terrariums" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="text-white fixed w-full z-30 bg-[rgba(246,243,235)] backdrop-blur-md py-1">
      <div className="w-full mx-auto px-5 sm:px-12 md:px-15 lg:px-18">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <Link to="/" className="cursor-pointer">
            <img src="/logo-main.png" alt="logo" className="h-10 w-30" />
          </Link>

          {/* Middle - Desktop Links */}
          <ul
            className="hidden lg:flex space-x-8 text-sm bg-[#E3DECF] px-20 py-3 rounded-full"
            style={{ height: "44px" }}
          >
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    location.pathname === link.path ||
                    (link.path === "/terrariums" &&
                      location.pathname.startsWith("/products"))
                      ? "text-[#084C2E] underline underline-offset-8 font-medium"
                      : "text-[#1C1C1B] hover:text-[#084C2E] hover:bg-[#EDEAE0] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - WhatsApp Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/971563440979?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#084C2E] flex items-center gap-2 px-5 py-2 rounded-3xl font-semibold hover:bg-[#0A7646] transition text-white"
            >
              <FaWhatsapp className="text-xl" />
              <span>Let's Chat</span>
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={26} className="text-[#2F5C4E]" />
            ) : (
              <FaBars size={26} className="text-[#2F5C4E]" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-[#F6F3EB] lg:hidden text-black flex flex-col items-center gap-6 text-lg font-medium absolute w-full left-0 transition-all duration-700 ease-in-out ${
          isOpen ? "top-16 opacity-100 pb-5" : "-top-96 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`transition ${
              location.pathname === link.path
                ? "text-[#084C2E] underline"
                : "text-black hover:text-[#084C2E]"
            }`}
          >
            <span className="font-normal">{link.label}</span>
          </Link>
        ))}

        {/* WhatsApp Button - Mobile */}
        <a
          href="https://wa.me/971563440979?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#084C2E] flex items-center gap-2 px-5 py-2 rounded-3xl font-semibold hover:bg-[#0A7646] transition text-white"
        >
          <FaWhatsapp className="text-xl" />
          <span>Let's Chat</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
