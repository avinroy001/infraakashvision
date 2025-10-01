import React from 'react';
import SAFETY from '../assets/SAFETY.webp';

const SafetySection = () => {
  return (
    <div className="w-full flex justify-center py-8 px-34">
    <section className="relative w-full h-[600px] overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      {/* Background Image — Working & High Quality */}
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:`url(${SAFETY})`,
  }}
></div>

      {/* Dark Overlay (optional for readability) */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content Box (Bottom Right with Rounded Corner) */}
      <div className="absolute bottom-0 right-0 w-full md:w-2/3 lg:w-1/2 p-8 md:p-10 bg-[#1e3a8a]/50 text-white rounded-tl-[100px]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Safety</h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          At Hanab Telecom Infra, safety is our top priority, whether working at great heights or in tight spaces.
          Every day, our employees and subcontractors dedicate themselves to connecting the Netherlands and keeping it connected.
          Our most important goal? That everyone goes home safe at the end of the day.
          To underline this commitment, we introduced our own safety identity: “Everyone home safe.”
        </p>
        <a href="#" className="flex items-center text-sm font-medium hover:underline">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          More about safety
        </a>
      </div>
    </section>
    </div>
  );
};

export default SafetySection;