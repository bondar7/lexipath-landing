import React from 'react';
import LearningStep from '../ui/LearningStep';
import { i18n } from '../../config/i18n';
import { learningStepsData } from '../../config/learningSteps';

const LearningStepsSection: React.FC = () => {
  const t = i18n.en.learningSteps;

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Regular 7 steps */}
          {t.steps.map((step, index) => {
            const stepData = learningStepsData[index];
            return (
              <LearningStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={stepData.icon}
                color={stepData.color}
              />
            );
          })}
          
          {/* 8th step - Smart Review System with special styling */}
          <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 relative">
            {/* Beautiful plus indicator */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg">
                +
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-4 mt-2">
              <div className="bg-blue-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Review System</h3>
            <p className="text-gray-600">Spaced repetition for long-term retention of mastered words</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningStepsSection;
