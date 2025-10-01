import React, { useState, useEffect } from 'react';
import HERO1 from '../assets/HERO1.webp'; 
import HERO2 from '../assets/HERO2.webp'; 
import HERO3 from '../assets/HERO3.webp'; 

const HERO_IMAGES = [
  {
    src: HERO1,
    title: "The energy to connect",
    subtitle: "A powerful indoor Wi-Fi network",
    cta: "Our projects"
  },
  {
    src: HERO2,
    title: "Unlimited video streaming and music downloads",
    subtitle: "Roll-out of fibre optics in remote areas",
    cta: "Learn more"
  },
  {
    src: HERO3,
    title: "Moving freely through the city",
    subtitle: "Use of mobile installation sites and small cells for additional network compaction",
    cta: "Discover how"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  const currentSlide = HERO_IMAGES[currentIndex];

  return (
    <div>
      {/* === HERO IMAGE SLIDER === */}
      <div className="relative h-screen overflow-hidden rounded-br-[220px]">
        {HERO_IMAGES.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex
                ? 'opacity-100 z-0 animate-zoom-out-slow'
                : 'opacity-0 z-[-1]'
            }`}
            onError={(e) => {
              e.target.src =
                'https://via.placeholder.com/1920x1080?text=Image+Not+Available';
              e.target.onerror = null;
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15 z-10"></div>
      </div>

      {/* === TEXT CONTENT PER SLIDE === */}
      <div className="absolute inset-0 flex items-center px-4 md:px-10 lg:px-20 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column: Title + Subtitle + CTA */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {currentSlide.title}
            </h1>
            <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
              {currentSlide.subtitle}
            </p>
            <button className="bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              {currentSlide.cta}
            </button>
          </div>

          {/* Right Column: Empty space or image details (optional) */}
          <div className="md:w-1/2 hidden md:block">
            {/* You can add a graphic, logo, or leave empty */}
          </div>
        </div>
      </div>

      {/* === TEXT SECTION BELOW IMAGE === */}
      <div className="py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column: Title */}
          <div className="md:w-1/3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
              The energy to connect
            </h1>
          </div>

          {/* Right Column: Description */}
          <div className="md:w-2/3">
            <p className="text-base md:text-lg text-[#1e3a8a] mb-4 leading-relaxed">
              Hanab Telecom Infra takes care of the entire process of delivering
              high-quality digital infrastructure — from analysis and design to
              construction, installation, maintenance and management.
            </p>
            <p className="text-base md:text-lg text-[#1e3a8a] leading-relaxed">
              Our ultimate goal? Optimal connectivity, down to the very last
              square centimetre. That’s how we help make living and working as
              comfortable as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
