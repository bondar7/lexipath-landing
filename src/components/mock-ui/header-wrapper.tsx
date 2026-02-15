import React from 'react';
import { cn } from './cn';

interface HeaderWrapperProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
  bottomContent?: React.ReactNode;
  className?: string;
}

export function MockHeaderWrapper({
  left,
  center,
  right,
  title,
  bottomContent,
  className,
}: HeaderWrapperProps) {
  return (
    <div
      className={cn(
        'sticky top-0 z-40 flex w-full flex-col justify-center border-b bg-background shadow-sm transition-all',
        bottomContent ? 'pb-4' : 'pb-0',
        className,
      )}
    >
      <div className="grid h-12 sm:h-16 grid-cols-[1fr_auto_1fr] items-center px-2 sm:px-4">
        <div className="flex min-w-0 items-center justify-start">{left}</div>
        <div className="flex min-w-0 items-center justify-center px-1 sm:px-2 overflow-hidden">
          {title ? (
            <h2 className="w-full truncate text-center font-semibold sm:font-bold tracking-tight leading-tight text-base sm:text-2xl max-w-[calc(100vw-8.5rem)] sm:max-w-none">
              {title}
            </h2>
          ) : (
            center
          )}
        </div>
        <div className="flex min-w-0 items-center justify-end">{right}</div>
      </div>
      {bottomContent && <div className="w-full px-4 mt-2">{bottomContent}</div>}
    </div>
  );
}
