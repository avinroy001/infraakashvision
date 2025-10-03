import React from "react";
import { FaHardHat, FaTools, FaProjectDiagram, FaCity } from "react-icons/fa";

// Wrapper for red rounded background with white icons
const IconWrapper = ({ children }) => (
  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-red-600 text-white">
    {children}
  </div>
);

const ExcellenceSection = () => {
  return (
    <section className="py-20 px-0 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b5d] mb-8">
          We're wired for excellence
        </h2>

        {/* Divider Line */}
        <div className="border-t border-[#4a90e2] mb-12"></div>

        {/* Grid: 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-25">
          {/* Underground */}
          <div className="flex flex-col items-start space-y-4 group">
            {/* Icon on top */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-red-600 text-white">
              <FaHardHat className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>

            {/* Text content below */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#0b3b5d] mb-2 group-hover:text-red-600 transition-colors duration-300">
                Underground
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Hanab Telecom Infra designs, builds, and maintains the networks
                that make fast and reliable internet possible.
              </p>
            </div>
          </div>

          {/* Service & Maintenance */}
            <div className="flex flex-col items-start space-y-4 group">
            {/* Icon on top */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-red-600 text-white">
              <FaTools className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>

            {/* Text content below */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#0b3b5d] mb-2 group-hover:text-red-600 transition-colors duration-300">
                Service & Maintenance
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We keep your network running, today and tomorrow with smart
                management and maintenance.
              </p>
            </div>
          </div>

          {/* Network Design */}

          <div className="flex flex-col items-start space-y-4 group">
            {/* Icon on top */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-red-600 text-white">
              <FaProjectDiagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>

            {/* Text content below */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#0b3b5d] mb-2 group-hover:text-red-600 transition-colors duration-300">
                Network design
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                A reliable network starts with a solid design. Hanab Telecom
                Infra uses advanced digital tools such as XYZ measurements, BIM
                and GIS to design smart and future-ready networks.
              </p>
            </div>
          </div>

          {/* Smart Infra */}
          <div className="flex flex-col items-start space-y-4 group">
            {/* Icon on top */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-red-600 text-white">
              <FaCity className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>

            {/* Text content below */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#0b3b5d] mb-2 group-hover:text-red-600 transition-colors duration-300">
                Smart Infrastructure & Solutions
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                No smart applications without connectivity. At Hanab Telecom
                Infra, we build the data infrastructures of tomorrow in urban
                areas, homes, and offices alike.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="border-t border-[#4a90e2] mt-12"></div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
