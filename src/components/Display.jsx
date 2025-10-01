import React from 'react';
import NEWS from '../assets/DIS-NEWS.webp';
import PROJECT from '../assets/DIS-PROJECT.webp';

// Example images for second section (replace with your assets)
import PROJECT1 from '../assets/PROJECT1.webp';
import NEWS1 from '../assets/NEWS1.webp';
import PROJECT2 from '../assets/PROJECT2.webp';
import NEWS2 from '../assets/NEWS2.webp';

// 👇 NEW IMAGES FOR BOTTOM SECTION (replace with actual assets if available)
import SMART_SENSOR_IMG from '../assets/SMART_SENSOR_IMG.webp';
import LESSONS_IMG from '../assets/LESSONS_IMG.webp';

const Display = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ---------------- TOP SECTION ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b5d] leading-snug">
              Hanab Telecom Infra Updates
            </h2>

            {/* News Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={NEWS}
                  alt="News"
                  className="w-full h-52 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
                  News
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-[#0b3b5d] mb-2">
                  VolkerWessels Telecom selects Cradlepoint to extend their managed network services offerings
                </h3>
                <p className="text-gray-500 text-sm">5 March 2023</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Project */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <img
              src={PROJECT}
              alt="Project"
              className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              Project
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 drop-shadow">
                A complete lockdown – offshore engineering in action
              </h3>
              <p className="text-white text-sm opacity-80">India</p>
            </div>
          </div>
        </div>

        {/* ---------------- BOTTOM MASONRY SECTION ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Left big project card */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 md:row-span-2 group">
            <img
              src={PROJECT1}
              alt="Project"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              Project
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow">
                Fiber as the answer to growing demand
              </h3>
              <p className="text-white text-sm opacity-80">The Netherlands</p>
            </div>
          </div>

          {/* Middle top news card */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <img
              src={NEWS1}
              alt="News"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              News
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow">
                VolkerWessels Telecom Becomes a Juniper Networks Elite Partner
              </h3>
              <p className="text-white text-sm opacity-80">23 February 2023</p>
            </div>
          </div>

          {/* Right big project card */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 md:row-span-2 group">
            <img
              src={PROJECT2}
              alt="Project"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              Project
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow">
                Connectivity on the North Sea
              </h3>
              <p className="text-white text-sm opacity-80">North Sea</p>
            </div>
          </div>

          {/* Middle bottom news card */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <img
              src={NEWS2}
              alt="News"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              News
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow">
                Case study: VolkerWessels Telecom Lays Foundation for Smart Buildings
              </h3>
              <p className="text-white text-sm opacity-80">17 December 2020</p>
            </div>
          </div>
        </div>

        {/* ---------------- NEW SECTION: BOTTOM CARDS + LINKS ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT CARD: Project */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <img
              src={SMART_SENSOR_IMG}
              alt="Monitoring using smart sensors"
              className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              Project
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow border-b border-white pb-1">
                Monitoring using smart sensors
              </h3>
              <p className="text-white text-sm opacity-80 mt-2">n/a</p>
            </div>
          </div>

          {/* RIGHT CARD: News */}
          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <img
              src={LESSONS_IMG}
              alt="Lessons for a smart future"
              className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs font-medium">
              News
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow">
                Lessons for a smart future
              </h3>
              <p className="text-white text-sm opacity-80">3 August 2020</p>
            </div>
          </div>
        </div>

        {/* ---------------- MORE LINKS ---------------- */}
        <div className="flex flex-col sm:flex-row justify-start sm:justify-start gap-6 pt-6">
          <a
            href="#"
            className="flex items-center text-red-600 font-medium hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            More news
          </a>
          <a
            href="#"
            className="flex items-center text-red-600 font-medium hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            More projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Display;
