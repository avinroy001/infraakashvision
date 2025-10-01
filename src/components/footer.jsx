import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import LOGO from '../assets/LOGO.png';

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked && email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
      setIsChecked(false);
    } else if (!isChecked) {
      alert("Please agree to the privacy statement.");
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <footer className="bg-[#d6eaf8] pt-20 pb-16 px-6 md:px-12 lg:px-20 rounded-tl-[120px] relative overflow-hidden">
      {/* Blob shape (bottom right) */}
      <div
        className="absolute top-0 left-0 w-[60%] h-[85%] bg-[#c48c8c] opacity-30 rounded-br-[120px]"
        style={{ zIndex: 1 }}
      ></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 lg:gap-16">
        {/* COLUMN 1: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <img
              src={LOGO}
              alt="Hanab Telecom Infra"
              className="h-8 w-auto object-contain"
            />
            <div className="text-[#0b3b5d] text-sm">
              <p>Telecom Infra</p>
            </div>
          </div>

          <address className="not-italic text-[#0b3b5d] text-sm leading-relaxed space-y-1">
            <p>Ravenswade 4a, 3439 LD Nieuwegein</p>
            <p>Postbus 8101, 3503 RC Utrecht</p>
            <p className="mt-2 text-base font-semibold">
              Tel <a href="tel:+31881860666" className="underline">+31 88 186 06 66</a>
            </p>
          </address>

          <div className="flex items-center text-sm font-medium text-[#E5483A]">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a href="#" className="border-b border-dashed border-current pb-0.5 hover:border-solid">
              Contact
            </a>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#0b3b5d]">Quick Links</h4>
          <div className="space-y-3 text-[#0b3b5d]">
            {[
              "Expertises",
              "Projects",
              "News",
              "About us",
              "Working with us",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2 text-[#0b3b5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Follow Us + Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-bold mb-4 text-[#0b3b5d]">Follow us</h4>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8 text-2xl text-[#0b3b5d]">
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://x.com">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com">
              <FaYoutube />
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="p-6 rounded-xl shadow-lg bg-[#1e3a8a]">
            <p className="text-white text-lg font-semibold mb-4 leading-tight">
              Stay up to date with the latest news? Receive our newsletter in your mailbox!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex mb-4 rounded-full overflow-hidden border border-white/20">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow p-3 text-sm focus:outline-none placeholder-gray-300 text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-12 transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#E5483A' }}
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2v7z" />
                  </svg>
                </button>
              </div>

              <label className="flex items-center text-xs text-white cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="form-checkbox h-4 w-4 rounded mr-2"
                />
                I agree to the{" "}
                <a href="#" className="underline ml-1 hover:text-red-300">
                  privacy statement.
                </a>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="mt-12 pt-4 border-t border-[#c0d6e8] flex flex-col sm:flex-row justify-start sm:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm font-medium text-[#0b3b5d]">
        <a href="#" className="transition-colors hover:text-red-500 underline">
          Change cookie settings
        </a>
        <a href="#" className="transition-colors hover:text-red-500 underline">
          Cookie policy
        </a>
        <a href="#" className="transition-colors hover:text-red-500 underline">
          Privacy policy
        </a>
        <a href="#" className="transition-colors hover:text-red-500 underline">
          Disclaimer
        </a>
      </div>
    </footer>
  );
};

export default Footer;