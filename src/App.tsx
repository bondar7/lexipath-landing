import React from 'react';
import HeroSection from './components/sections/HeroSection';
import FeatureSection from './components/sections/FeatureSection';
import LearningStepsSection from './components/sections/LearningStepsSection';
import ComparisonSection from './components/sections/ComparisonSection';
import StatsSection from './components/sections/StatsSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <LearningStepsSection />
      <ComparisonSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;