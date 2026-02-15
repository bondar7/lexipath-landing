import React from 'react';
import { cn } from './cn';

type InputSize = 'default' | 'sm' | 'lg';

const sizeClasses: Record<InputSize, string> = {
  default: 'h-10 px-3 py-2.5 text-sm rounded-xl',
  sm: 'h-9 px-3 py-2 text-xs rounded-lg',
  lg: 'h-12 px-4 py-3 text-sm rounded-xl',
};

export function MockInput({
  className,
  size = 'default',
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & { size?: InputSize }) {
  return (
    <input
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 border-2 bg-transparent shadow-sm transition-[color,box-shadow,border-color] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
