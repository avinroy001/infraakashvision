import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import UNDERGROUND_IMG from '../assets/UNDERGROUND_IMG.webp';
import SM_IMG from '../assets/SM_IMG.webp';
import NET_DES from '../assets/NET_DES.webp'; // Add this file
import INFRA from '../assets/INFRA.webp';       // Add this file

const AreasOfExpertise = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Blue Header with Rounded Corner */}
      <div className="bg-[#1e3a8a] rounded-br-[200px] py-16 md:py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          {/* Red L-shaped Icon */}
          <div className="w-12 h-12 bg-[#E5483A] rounded-tl-full rounded-br-md"></div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Areas of expertise
          </h2>
        </div>
      </div>

      {/* White Content Section */}
      <div className="py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-[#0b3b5d] leading-relaxed mb-12">
            Hanab Telecom Infra lays the foundation for first-class networks, both underground and above ground. 
            We offer smart solutions for network management, maintenance, and design, and are ready to tackle any challenge.
          </p>

          {/* === UNDERGROUND SECTION === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={UNDERGROUND_IMG}
                alt="Underground work"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-4">Underground</h3>
              <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
                Hanab Telecom Infra designs, builds, and maintains reliable networks that provide fast and stable internet throughout the Netherlands.
              </p>
              <Link
                to="/underground"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                <FaArrowRight className="mr-2" /> Read more
              </Link>
            </div>
          </div>

          {/* === SERVICE & MAINTENANCE SECTION === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={SM_IMG}
                alt="Service & Maintenance"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-4">Service & Maintenance</h3>
              <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
                Hanab Telecom Infra delivers futureproof networks ready for the digital age through smart management and proactive maintenance.
              </p>
              <Link
                to="/service-maintenance"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                <FaArrowRight className="mr-2" /> Read more
              </Link>
            </div>
          </div>

          {/* === NETWORK DESIGN SECTION === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-4">Network Design</h3>
              <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
                A strong network starts with smart design. Hanab Telecom Infra uses advanced technologies such as XYZ measurements, BIM, and GIS to design networks efficiently and accurately.
              </p>
              <Link
                to="/network-design"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                <FaArrowRight className="mr-2" /> Read more
              </Link>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={NET_DES}
                alt="Network Design"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* === SMART INFRASTRUCTURE & SOLUTIONS SECTION === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-4">Smart Infrastructure & Solutions</h3>
              <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
                No smart applications without connectivity. Hanab Telecom Infra builds innovative data infrastructures that prepare urban areas, homes, and offices for the future.
              </p>
              <Link
                to="/smart-infrastructure"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                <FaArrowRight className="mr-2" /> Read more
              </Link>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={INFRA}
                alt="Smart Infrastructure"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;