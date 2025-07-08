import { CheckCircle } from 'lucide-react';
import React from 'react';
import { colors } from '../../config/colors';
import PhoneFrame from './PhoneFrame';

export interface FeatureCardProps {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  description: string;
  features: readonly string[];
  children?: React.ReactNode;
  phoneScreen?: React.ReactNode;
  highlight?: {
    text: string;
    description: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  iconColor,
  title,
  description,
  features,
  children,
  phoneScreen,
  highlight
}) => {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-5 md:p-7 border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-5">
          <div className="flex items-center space-x-3">
            <div className={`bg-${iconColor}-100 p-3 rounded-xl`}>
              <Icon className={`w-6 md:w-8 h-6 md:h-8 text-${iconColor}-600`} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
          </div>
          
          {highlight && (
            <div className={`bg-gradient-to-r from-${colors.secondary}-50 to-${colors.accent}-50 p-4 rounded-xl border border-${colors.secondary}-200`}>
              <p className={`text-base md:text-lg font-semibold text-${colors.secondary}-900 mb-2`}>
                {highlight.text}
              </p>
              <p className="text-lg md:text-xl text-gray-700">{highlight.description}</p>
            </div>
          )}
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className={`w-5 h-5 text-${colors.success}-500 flex-shrink-0 mt-0.5`} />
                <span className="text-base md:text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          {children}
        </div>
        
        {phoneScreen && (
          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneFrame>
              {phoneScreen}
            </PhoneFrame>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
