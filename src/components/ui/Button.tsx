import React from 'react';
import { colors } from '../../config/colors';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: `bg-gradient-to-r from-${colors.primary}-500 to-${colors.primary}-600 text-white hover:from-${colors.primary}-600 hover:to-${colors.primary}-700 focus:ring-${colors.primary}-500 shadow-lg hover:shadow-xl`,
    secondary: `bg-gradient-to-r from-${colors.secondary}-500 to-${colors.secondary}-600 text-white hover:from-${colors.secondary}-600 hover:to-${colors.secondary}-700 focus:ring-${colors.secondary}-500 shadow-lg hover:shadow-xl`,
    success: `bg-${colors.success}-500 text-white hover:bg-${colors.success}-600 focus:ring-${colors.success}-500`,
    error: `bg-${colors.error}-500 text-white hover:bg-${colors.error}-600 focus:ring-${colors.error}-500`,
    outline: `border-2 border-${colors.primary}-500 text-${colors.primary}-500 hover:bg-${colors.primary}-500 hover:text-white focus:ring-${colors.primary}-500`,
    ghost: `text-${colors.neutral}-700 hover:bg-${colors.neutral}-100 focus:ring-${colors.neutral}-500`
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
