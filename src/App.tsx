import ComparisonSection from './components/sections/ComparisonSection';
import CTASection from './components/sections/CTASection';
import FeatureSection from './components/sections/FeatureSection';
import Footer from './components/sections/Footer';
import HeroSection from './components/sections/HeroSection';
import LearningStepsSection from './components/sections/LearningStepsSection';
import StatsSection from './components/sections/StatsSection';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
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