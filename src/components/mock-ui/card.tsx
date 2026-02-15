import React from 'react';
import { cn } from './cn';

type CardSize = 'default' | 'sm' | 'lg';

const sizeClasses: Record<CardSize, string> = {
  default: 'gap-6 py-6',
  sm: 'gap-4 py-4',
  lg: 'gap-8 py-8',
};

export function MockCard({
  className,
  size = 'default',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: CardSize }) {
  return (
    <div
      data-slot="card"
      className={cn('bg-card text-card-foreground flex flex-col rounded-2xl border-2 shadow-md', sizeClasses[size], className)}
      {...props}
    />
  );
}
