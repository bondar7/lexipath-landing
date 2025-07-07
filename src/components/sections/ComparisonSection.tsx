import React from 'react';
import { ArrowRight } from 'lucide-react';
import { i18n } from '../../config/i18n';
import Card from '../ui/Card';

const ComparisonSection: React.FC = () => {
  const t = i18n.en.comparison;

  return (
    <div className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Traditional Apps */}
          <Card padding="lg" shadow="md" hover className="bg-red-50">
            <h3 className="text-lg font-semibold text-red-900 flex items-center mb-4">
              <span className="text-red-600 mr-2">✗</span>
              {t.traditional.title}
            </h3>
            <ul className="text-sm text-red-700 space-y-2">
              {t.traditional.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-md">
              <ArrowRight className="w-8 h-8 text-white transform md:rotate-0 rotate-90" />
            </div>
          </div>

          {/* WordMaster */}
          <Card padding="lg" shadow="md" hover className="bg-green-50">
            <h3 className="text-lg font-semibold text-green-900 flex items-center mb-4">
              <span className="text-green-600 mr-2">✓</span>
              {t.wordmaster.title}
            </h3>
            <ul className="text-sm text-green-700 space-y-2">
              {t.wordmaster.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
