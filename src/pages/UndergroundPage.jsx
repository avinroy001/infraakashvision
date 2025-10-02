import React from 'react';
import { Link } from 'react-router-dom';

import UNDERGROUND_IMG from "../assets/UNDERGROUND_IMG.webp";
import NET_EXP from "../assets/NET_EXP.webp";
import FIBER_DEMAND from "../assets/FIBER_DEMAND.webp";
import ROTTER from "../assets/ROTTER.webp";

const UndergroundPage = () => {
  return (
    <div className="underground-page">
      {/* === MAIN SECTION (Text + Image Side by Side) === */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* LEFT COLUMN: Text */}
          <div className="md:w-1/2 space-y-6">
            {/* Red L-shaped Icon + Tag */}
            {/* <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#E5483A] rounded-tl-full rounded-br-md"></div>
              <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-sm font-medium">
                Expertise
              </span>
            </div> */}

            <div className="relative inline-block">
      {/* Red quarter bar */}
      <div className="w-25 h-15 border-t-[20px] border-l-[20px] border-red-600 rounded-tl-4xl"></div>

      {/* Blue pill label */}
      <div className="absolute bottom-[-0.5rem] left-10 bg-[#0b3b5d] text-white font-semibold px-2 py-1 rounded-md shadow">
        Expertise
      </div>
    </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Underground
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#0b3b5d] leading-relaxed">
              Hanab Telecom Infra designs, builds, and maintains the networks that enable fast and reliable internet.
            </p>
          </div>

          {/* RIGHT COLUMN: Image with Curved Bottom-Left Corner */}
          <div className="md:w-1/2 relative">
            <img
              src={UNDERGROUND_IMG}
              alt="Underground network"
              className="w-full h-auto object-cover rounded-bl-[200px]"
            />
          </div>
        </div>
      </section>

      {/* === NETWORK EXPERT SECTION === */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={NET_EXP}
              alt="Network expert"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-4">Network expert</h2>
            <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
              On-demand TV. Working from home on your company’s network. Video calls with family or colleagues on the other side of the world. Every day, we rely on fast and reliable connections to live and work. Hanab Telecom Infra makes the networks behind those connections possible — from laying fibre-optic backbones between cities to installing connections in homes and businesses.
            </p>
            <p className="text-base md:text-lg text-[#0b3b5d] leading-relaxed">
              We also have the expertise and experience to maintain, upgrade, or renew those networks. Our clients include businesses, telecom providers, and government organisations.
            </p>
          </div>
        </div>
      </section>

      {/* === OPTIMAL COMMUNICATION SECTION === */}
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-6">Optimal communication</h2>
          <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
            We take care of the entire process: from planning and installation to testing and commissioning. No challenge is too complex. Hanab Telecom Infra ensures seamless delivery of network infrastructure.
          </p>
          <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
            Clear communication with all parties involved is our strength. We work closely with landowners, utility companies and local residents to limit disruption and keep everyone informed.
          </p>
          <p className="text-base md:text-lg text-[#0b3b5d] leading-relaxed">
            Our approach is modern and safe. With real-time insight into the project, from the office to the excavation site, we stay in control and can adjust whenever needed.
          </p>
        </div>
      </section>

{/* === RELATED PROJECTS SECTION === */}
<section className="py-30 px-4 md:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-8">Related projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Project 1 */}
      <div className="rounded-xl overflow-hidden shadow-lg group">
        <div className="relative h-64 md:h-80">
          <img
            src={FIBER_DEMAND}
            alt="Fiber demand"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Blue "Project" tag */}
          <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
            Project
          </div>
          {/* Title + Location overlay (bottom) */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-semibold mb-1">Fiber as the answer to growing demand</h3>
            <p className="text-sm opacity-90">The Netherlands</p>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="rounded-xl overflow-hidden shadow-lg group">
        <div className="relative h-64 md:h-80">
          <img
            src={ROTTER}
            alt="Rotterdam project"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
            Project
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-semibold mb-1">High-quality dark fibre network in Rotterdam</h3>
            <p className="text-sm opacity-90">Rotterdam</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default UndergroundPage;