import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import PhilosophySection from '../components/sections/PhilosophySection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <PortfolioPreview />
      <PhilosophySection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;