import { CheckCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation immediately on mount
    setIsVisible(true);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl md:rounded-3xl shadow-xl p-5 md:p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div className={`order-1 space-y-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
          <div className="flex items-center space-x-3">
            <div className={`bg-${iconColor}-100 p-3 rounded-xl transition-transform duration-300 hover:scale-110`}>
              <Icon className={`w-6 md:w-8 h-6 md:h-8 text-${iconColor}-600`} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
          </div>

          {highlight && (
            <div className={`bg-gradient-to-r from-${colors.secondary}-50 to-${colors.accent}-50 p-4 rounded-xl border border-${colors.secondary}-200`}>
              {highlight.text && (
                <p className={`text-base md:text-lg font-semibold text-${colors.secondary}-900 mb-2`}>
                  {highlight.text}
                </p>
              )}
              <p className="text-lg md:text-xl text-gray-700">
                {(() => {
                  const emDashParts = highlight.description.split('—');
                  if (emDashParts.length > 1) {
                    return (
                      <>
                        {emDashParts[0].trim()} —{' '}
                        <span className="ink-underline">
                          {emDashParts.slice(1).join('—').trim()}
                        </span>
                      </>
                    );
                  }
                  const dashParts = highlight.description.split('-');
                  if (dashParts.length > 1) {
                    return (
                      <>
                        {dashParts[0].trim()} —{' '}
                        <span className="ink-underline">
                          {dashParts.slice(1).join('-').trim()}
                        </span>
                      </>
                    );
                  }
                  return highlight.description;
                })()}
              </p>
            </div>
          )}

          {!highlight && (
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <CheckCircle className={`w-5 h-5 text-${colors.success}-500 flex-shrink-0 mt-0.5`} />
                <span className="text-base md:text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {children}
        </div>

        {phoneScreen && (
          <div className={`order-2 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
            <PhoneFrame className="transition-transform duration-300">
              {phoneScreen}
            </PhoneFrame>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
