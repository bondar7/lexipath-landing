import React from 'react';
import { colors } from '../../config/colors';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'sm',
  border = false,
  hover = false
}) => {
  const baseClasses = `bg-white rounded-xl transition-shadow duration-300`;
  
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
    xl: 'p-8 md:p-12'
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const borderClass = border ? `border border-${colors.neutral}-200` : '';
  const hoverClass = hover ? `hover:shadow-lg` : '';
  
  const combinedClasses = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClass} ${hoverClass} ${className}`.trim();
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
