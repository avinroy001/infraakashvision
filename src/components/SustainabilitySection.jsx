import React from 'react';
import SUS from '../assets/SUS.jpg'; 
const SustainabilitySection = () => {
  return (
    <div className="w-full flex justify-center py-12 px-34">
    <section className="relative w-full h-[600px] overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${SUS})`,
  }}
></div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content Box (Bottom Right with Rounded Corner) */}
      <div className="absolute bottom-0 right-0 w-full md:w-2/3 lg:w-1/2 p-8 md:p-10 bg-[#1e3a8a]/50 text-white rounded-tl-[100px]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Sustainability</h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Total connectivity. With this goal in mind, Hanab Telecom Infra wants to make life not only easier and more pleasant, but also more sustainable.
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
          More about Sustainability
        </a>
      </div>
    </section>
    </div>
  );
};

export default SustainabilitySection;