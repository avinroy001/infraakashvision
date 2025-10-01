// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import ExcellenceSection from "../components/ExcellenceSection";
import Display from "../components/Display";
import SustainabilitySection from "../components/SustainabilitySection";
import SafetySection from "../components/SafetySection";

const Home = () => {
  return (
    <>
      <Hero />
      <ExcellenceSection />
      <Display />
      <SustainabilitySection />
      <SafetySection />
    </>
  );
};

export default Home;
