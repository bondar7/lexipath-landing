import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComparisonSection from './components/sections/ComparisonSection';
import CTASection from './components/sections/CTASection';
import FeatureSection from './components/sections/FeatureSection';
import Footer from './components/sections/Footer';
import HeroSection from './components/sections/HeroSection';
import LearningStepsSection from './components/sections/LearningStepsSection';
import StatsSection from './components/sections/StatsSection';
import StructuredData from './components/StructuredData';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <StructuredData />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <main>
              <HeroSection />
              <FeatureSection />
              <LearningStepsSection />
              <ComparisonSection />
              <StatsSection />
              <CTASection />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;