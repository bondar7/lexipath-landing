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
  // Define color mappings to ensure Tailwind generates the classes
  const colorClasses = {
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      circle: 'bg-green-500'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      circle: 'bg-orange-500'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      circle: 'bg-blue-500'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      circle: 'bg-purple-500'
    },
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      circle: 'bg-teal-500'
    },
    pink: {
      bg: 'bg-pink-100',
      text: 'text-pink-600',
      circle: 'bg-pink-500'
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      circle: 'bg-red-500'
    }
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`${colorClass.bg} p-3 rounded-xl`}>
          <Icon className={`w-6 h-6 ${colorClass.text}`} />
        </div>
        <div className={`w-8 h-8 ${colorClass.circle} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
          {step}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LearningStep;
