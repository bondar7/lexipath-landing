import React from 'react';
import { colors } from '../../config/colors';

export interface LearningStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const LearningStep: React.FC<LearningStepProps> = ({
  step,
  title,
  description,
  icon: Icon,
  color
}) => {
  return (
    <div className={`bg-${colors.neutral}-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className={`bg-${color}-100 p-3 rounded-xl`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className={`w-8 h-8 bg-${color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
          {step}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LearningStep;
