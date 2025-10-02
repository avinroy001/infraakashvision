import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlobeEurope, FaArrowRight } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import LOGO from "../assets/LOGO.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false); // New state for About Us dropdown

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-3 px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white text-[#1e3a8a] shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <img
        src={LOGO}
        alt="Hanab Logo"
        className={`h-10 w-auto transition-opacity ${
          scrolled ? "" : "filter brightness-0 invert"
        }`}
      />

      {/* Nav Links */}
      <div className="flex items-center space-x-5">
        <ul
          className={`hidden md:flex space-x-5 font-semibold ${
            scrolled ? "text-[#364465]" : "text-white"
          }`}
        >
          {/* Our Services with Dropdown */}
          <li
            className="relative cursor-pointer hover:opacity-80"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
            onClick={() => setShowServices(!showServices)} // for mobile
          >
            Our services ▼
            {showServices && (
              <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-screen bg-white text-[#1e3a8a] border border-gray-200 rounded-lg shadow-lg p-8 max-w-5xl">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Column 1 */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Area of expertise
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Hanab Telecom Infra specialises in the construction of
                      above-ground and underground networks, as well as in
                      network design, management, and maintenance.
                    </p>
                    <Link
                      to="/areas-of-expertise"
                      className="flex items-center text-sm font-medium text-[#1e3a8a] hover:underline"
                    >
                      <FaArrowRight className="mr-2" /> Read more
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <Link
                      to="/underground"
                      className="flex items-center text-xl font-bold mb-4 hover:text-[#E5483A]"
                    >
                      <FaArrowRight className="mr-2" /> Underground
                    </Link>
                    <p className="text-gray-700">
                      Hanab Telecom Infra designs, builds, and maintains the
                      networks that enable fast and reliable internet
                      connectivity.
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <Link
                      to="/service-maintenance"
                      className="flex items-center text-xl font-bold mb-4 hover:text-[#E5483A]"
                    >
                      <FaArrowRight className="mr-2" /> Service & Maintenance
                    </Link>
                    <p className="text-gray-700">
                      Our smart management and maintenance ensures stable and
                      future-proof networks.
                    </p>
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-8">
                    <div>
                      <Link
                      to="/smart-infrastructure-solutions"
                      className="flex items-center text-xl font-bold mb-4 hover:text-[#E5483A]"
                    >
                        <FaArrowRight className="mr-2" /> Smart Infrastructure &
                        Solutions
                      </Link>
                      <p className="text-gray-700">
                        No smart applications without connectivity.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <FaArrowRight className="mr-2" /> Network Design
                      </h3>
                      <p className="text-gray-700">
                        A strong network starts at the drawing board.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:opacity-80">Projects</li>
          <li className="cursor-pointer hover:opacity-80">News</li>

          {/* About Us with Dropdown */}
          <li
            className="relative cursor-pointer hover:opacity-80"
            onMouseEnter={() => setShowAboutUs(true)}
            onMouseLeave={() => setShowAboutUs(false)}
            onClick={() => setShowAboutUs(!showAboutUs)} // for mobile
          >
            About us ▼
            {showAboutUs && (
              <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-screen bg-white text-[#1e3a8a] border border-gray-200 rounded-lg shadow-lg p-8 max-w-xl">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Column 1: About us */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">About us</h3>
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-[#1e3a8a] hover:underline"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Read more
                    </a>
                  </div>

                  {/* Column 2: Who we are, Compliance, Hanab */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Who we are
                      </h3>
                      <p className="text-gray-700">
                        Without connectivity, there are no smart solutions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Compliance
                      </h3>
                      <p className="text-gray-700">
                        At Hanab Telecom Infra, we take our obligations
                        seriously and meet them in a variety of ways.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Hanab
                      </h3>
                      <p className="text-gray-700">
                        We are one of six divisions that make up Hanab.
                      </p>
                    </div>
                  </div>

                  {/* Column 3: Sustainability, Safety, Our locations */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Sustainability
                      </h3>
                      <p className="text-gray-700">
                        Total connectivity: our goal is to make life not only
                        easier, but also more sustainable.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Safety
                      </h3>
                      <p className="text-gray-700">
                        Everyone home safe. That's our goal. So we work safely,
                        or we don't work at all.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Our locations
                      </h3>
                      <p className="text-gray-700">
                        We're always nearby, because Hanab Telecom Infra
                        operates throughout the Netherlands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:opacity-80">Careers</li>
        </ul>

        {/* Contact Button */}
        <button
          className={`px-5 py-2 rounded-full font-bold ${
            scrolled
              ? "bg-[#a9383c] text-white hover:bg-white hover:text-[#a9383c] border border-[#a9383c]"
              : "bg-[#4CAF50] text-white hover:bg-[#45a049]"
          }`}
        >
          Contact
        </button>

        {/* Search Icon */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
            scrolled
              ? "border border-[#1e3a8a] text-[#1e3a8a]"
              : "border border-white text-white"
          }`}
        >
          <TfiSearch />
        </div>

        {/* Language Selector */}
        <div
          className={`flex items-center px-3 h-10 rounded-full cursor-pointer ${
            scrolled
              ? "border border-[#1e3a8a] text-[#1e3a8a]"
              : "border border-white text-white"
          }`}
        >
          <FaGlobeEurope className="mr-1" />
          <span>EN ▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
