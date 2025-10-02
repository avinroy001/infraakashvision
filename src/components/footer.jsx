import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { SlArrowRightCircle } from "react-icons/sl";
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
    <footer className="relative min-h-[400px] pt-20 pb-16 px-4 md:px-12 lg:px-20 rounded-tl-[120px] overflow-hidden">
      {/* Blob shape (bottom right) */}
      
      {/* <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#057442] opacity-30 z-0"></div>
      <div className="absolute top-0 left-0 w-[80%] h-full bg-[#318fd3] opacity-30 rounded-br-[190px] z-10"></div>
  <div className="absolute top-0 left-0 w-[75%] h-[80%] bg-[#771515] opacity-30 rounded-br-[120px] z-20"></div>
  </div> */}

  <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-[35%] h-[100%] bg-[#057442] opacity-30 z-[-100] rounded-tl-[150px]"></div>
      <div className="absolute top-0 left-0 w-[80%] h-full bg-[#318fd3] opacity-30 rounded-br-[190px] z-[3]"></div>
      <div className="absolute top-0 left-0 w-[75%] h-[80%] bg-[#771515] opacity-30 rounded-br-[120px] z-[5]"></div>
  </div>
  
      {/* Main Content */}
      <div className="relative z-50 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 lg:gap-46">
        {/* COLUMN 1: Contact Info */}
        <div className="space-y-6 w-3xl">
          <div className="flex items-center space-x-2">
            <img
              src={LOGO}
              alt="Hanab Telecom Infra"
              className="h-15 w-auto object-contain"
            />
            {/* <div className="text-[#0b3b5d] text-sm">
              <p>Telecom Infra</p>
            </div> */}
          </div>

          <address className="not-italic text-[#0b3b5d] text-md font-medium leading-relaxed space-y-1">
            <p>Ravenswade 4a, 3439 LD Nieuwegein</p>
            <p>Postbus 8101, 3503 RC Utrecht</p>
            <p className="mt-2 text-base">
              Tel <a href="tel:+31881860666" className="underline hover:no-underline hover:text-[#E5483A]">+31 88 186 06 66</a>
            </p>
          </address>

          <div className="flex items-center text-md font-medium text-[#E5483A] gap-2 group">
            <SlArrowRightCircle size={20} className="group-hover:text-[#0b3b5d]"/>
            <a href="#" className="hover:underline group-hover:text-[#0b3b5d]">
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
              "About us",
              "Working with us",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center gap-3 text-sm font-bold hover:text-[#E5483A] hover:underline"
              >
                <SlArrowRightCircle size={20}/>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Follow Us + Newsletter */}
        <div className="md:col-span-2 ml-40 -translate-y-8 relative">
          <h4 className="text-lg font-bold mb-4 text-[#0b3b5d]">Follow us</h4>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8 text-3xl gap-4 text-[#0b3b5d]">
            <a href="https://linkedin.com" className="hover:text-[#E5483A]">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" className="hover:text-[#E5483A]">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" className="hover:text-[#E5483A]">
              <FaFacebook />
            </a>
            <a href="https://x.com" className="hover:text-[#E5483A]">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" className="hover:text-[#E5483A]">
              <FaYoutube />
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="p-7 px-9 rounded-xl shadow-lg bg-[#1e3a8a] w-100">
            <p className="text-white text-md font-semibold mb-4 leading-tight">
              Stay up to date with the latest news? Receive our newsletter in your mailbox!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex mb-4 rounded-full overflow-hidden bg-white">
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
                  className="flex items-center justify-center w-11 transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#E5483A' ,borderRadius: '100px'}}
        
                >
                  <SiMinutemailer size={20} color="white"/>
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
                <a href="#" className="underline ml-1 hover:no-underline">
                  privacy statement.
                </a>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="pt-6 relative top-10 border-[#c0d6e8] flex flex-col sm:flex-row justify-start sm:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm font-medium text-[#0b3b5d]">
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