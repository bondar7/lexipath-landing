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
        </div>
      </div>
    </div>
  );
};

export default LearningStepsSection;
