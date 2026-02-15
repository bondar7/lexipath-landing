import React from 'react';
import { cn } from './cn';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
type ButtonLoadingStyle = 'sweep' | 'bar';

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
  destructive: 'bg-destructive text-white hover:bg-destructive/90 shadow-md hover:shadow-lg',
  outline: 'border-2 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/30',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg',
  ghost: 'text-primary hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-10 sm:h-12 px-4 sm:px-5 py-2.5 sm:py-3 has-[>svg]:px-3 sm:has-[>svg]:px-4 text-sm sm:text-base',
  sm: 'h-9 sm:h-10 rounded-lg gap-1 px-3 sm:px-4 has-[>svg]:px-2.5 sm:has-[>svg]:px-3 text-xs sm:text-sm',
  lg: 'h-12 sm:h-14 rounded-xl px-4 sm:px-6 has-[>svg]:px-4 sm:has-[>svg]:px-5 text-sm sm:text-base',
  icon: 'size-10 sm:size-12 rounded-xl',
  'icon-sm': 'size-9 sm:size-10 rounded-lg',
  'icon-lg': 'size-12 sm:size-14 rounded-xl',
};

export function MockButton({
  className,
  variant = 'default',
  size = 'default',
  loading = false,
  loadingStyle = 'sweep',
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingStyle?: ButtonLoadingStyle;
}) {
  const loaderClassName = loadingStyle === 'bar' ? 'btn-loader-bar' : 'btn-loader-sweep';

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive active:scale-[0.98]",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      aria-busy={loading}
      {...props}
    >
      {loading && <span aria-hidden="true" className={cn('absolute inset-0', loaderClassName)} />}
      <span className={cn('inline-flex items-center gap-2', loading ? 'relative z-10' : undefined)}>
        {children}
      </span>
    </button>
  );
}
