import React from 'react';
import { CheckCircle, XCircle, Zap } from 'lucide-react';
import { i18n } from '../../config/i18n';

const ComparisonSection: React.FC = () => {
  const t = i18n.en.comparison;

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Revolutionary Approach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Traditional Apps */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t.traditional.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.traditional.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WordMaster */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t.wordmaster.title}
                </h3>
                <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium mt-2">
                  <Zap className="w-3 h-3 mr-1" />
                  Better Results
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {t.wordmaster.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center font-medium shadow-lg">
            <span className="mr-2">🚀</span>
            Experience the difference yourself
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
