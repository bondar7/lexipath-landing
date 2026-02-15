import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ComparisonSection from './components/sections/ComparisonSection';
import CTASection from './components/sections/CTASection';
import FeatureSection from './components/sections/FeatureSection';
import Footer from './components/sections/Footer';
import HeroSection from './components/sections/HeroSection';
import LearningStepsSection from './components/sections/LearningStepsSection';
import StatsSection from './components/sections/StatsSection';
import StructuredData from './components/StructuredData';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { trackPageView } from './lib/utils/analytics';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

// Component to track page views
const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    // Load reCAPTCHA v3 script - native implementation as per Google docs
    if (RECAPTCHA_SITE_KEY && !document.querySelector(`script[src*="recaptcha/api.js"]`)) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (!RECAPTCHA_SITE_KEY) {
      console.warn('VITE_RECAPTCHA_SITE_KEY is not configured');
    }
  }, []);

  return (
    <Router>
      <StructuredData />
      <Analytics />
      <Routes>
        <Route path="/" element={
          <div className="bg-gray-50 overflow-x-hidden">
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
