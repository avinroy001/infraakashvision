import React from 'react';

// Replace these with actual SVGs or use react-icons if available
const UndergroundIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E53E3E" />
    <path d="M16 8H8V10H16V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 14L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 16L15 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ServiceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E53E3E" />
    <path d="M12 8C12 7.44772 12.4477 7 13 7H11C10.4477 7 10 7.44772 10 8V10H12V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 14L15 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const NetworkDesignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E53E3E" />
    <path d="M8 16L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 12L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 8L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SmartInfraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E53E3E" />
    <path d="M8 16L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 12L14 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4L10 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4L14 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ExcellenceSection = () => {
  return (
    <section className="py-16 px-4 bg-[#f0f7ff]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b5d] mb-8">
          We're wired for excellence
        </h2>

        {/* Divider Line */}
        <div className="border-t border-[#4a90e2] mb-12"></div>

        {/* Grid: 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Row 1 */}
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <UndergroundIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0b3b5d] mb-2">Underground</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Hanab Telecom Infra designs, builds, and maintains the networks that make fast and reliable internet possible.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <ServiceIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0b3b5d] mb-2">Service & Maintenance</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We keep your network running, today and tomorrow with smart management and maintenance.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <NetworkDesignIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0b3b5d] mb-2">Network design</h3>
              <p className="text-gray-700 text-sm md:text-base">
                A reliable network starts with a solid design. Hanab Telecom Infra uses advanced digital tools such as XYZ measurements, BIM and GIS to design smart and future-ready networks.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <SmartInfraIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0b3b5d] mb-2">Smart Infrastructure & Solutions</h3>
              <p className="text-gray-700 text-sm md:text-base">
                No smart applications without connectivity. At Hanab Telecom Infra, we build the data infrastructures of tomorrow in urban areas, homes, and offices alike.
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