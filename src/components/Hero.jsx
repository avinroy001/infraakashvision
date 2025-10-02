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
    <div className="relative">
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
        <div className="absolute inset-0 bg-black/25 z-10"></div>
      </div>

      {/* === FIXED Top-left red quarter shape === */}
      <div className="absolute top-31 left-12 w-[100px] h-[60px] border-t-[20px] border-l-[20px] border-red-600 rounded-tl-[40px] z-30"></div>

      {/* === TEXT CONTENT PER SLIDE === */}
      <div className="absolute inset-0 flex items-start justify-start px-6 md:px-12 lg:px-24 pt-24 md:pt-32 lg:pt-40 z-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            {currentSlide.title}
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
            {currentSlide.subtitle}
          </p>
          <button className="bg-white text-[#1e3a8a] px-8 py-4 rounded-full text-lg md:text-xl font-bold hover:bg-gray-100 transition">
            {currentSlide.cta}
          </button>
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
