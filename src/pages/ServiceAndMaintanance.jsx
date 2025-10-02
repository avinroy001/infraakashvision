import React from "react";
import { Link } from "react-router-dom";

import SER_MEN from "../assets/SER_MEN.webp";
import ENGG from "../assets/ENGG.webp";

const ServiceAndMaintanance = () => {
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
              Service & Maintenance
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#0b3b5d] leading-relaxed">
              Hanab Telecom Infra ensures stable and future-proof networks
              through smart management and maintenance.
            </p>
          </div>

          {/* RIGHT COLUMN: Image with Curved Bottom-Left Corner */}
          <div className="md:w-1/2 relative">
            <img
              src={SER_MEN}
              alt="Service and Maintenance"
              className="w-full h-auto object-cover rounded-bl-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Real-time network management block */}
      <div className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Real-time network management
          </h2>
          <p className="text-base md:text-lg text-[#0b3b5d] leading-relaxed mb-8">
            Prevention is better than cure — and that also applies to network
            management and maintenance. Using smart data analysis, we not only
            perform corrective maintenance, but also preventive maintenance.
            This way, we prevent outages and ensure that end users stay
            connected at all times.
          </p>
          <Link
            to="/noc"
            className="inline-flex items-center justify-center bg-[#1e3a8a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a306f] transition"
          >
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
            Discover our NOC
          </Link>
        </div>
      </div>

      {/* === NETWORK EXPERT SECTION === */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ENGG}
              alt="Network expert"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b5d] mb-4">
              The engineer
            </h2>
            <p className="text-base md:text-lg text-[#0b3b5d] mb-6 leading-relaxed">
              All work is carried out by the key players of our organization:
              our engineers. In addition to maintenance, quality checks, network
              optimizations and reconstructions, they connect both households
              and businesses to the network. This means we’re not only active in
              public spaces, but also welcome guests in homes and offices. For
              our engineers and colleagues at the Customer Service Desk, the
              keywords are quality, technical expertise, friendliness, service
              and customer focus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAndMaintanance;
