import React from 'react';
import { Home, Library, Wand2 } from 'lucide-react';
import { cn } from './cn';

type TabId = 'home' | 'add' | 'library';

export function MockBottomBar({ active = 'home' }: { active?: TabId }) {
  const tabs: Array<{ id: TabId; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }> = [
    { id: 'home', icon: Home },
    { id: 'add', icon: Wand2 },
    { id: 'library', icon: Library },
  ];

  return (
    <div className="absolute bottom-2 left-1/2 z-40 -translate-x-1/2">
      <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-border/40 bg-muted/80 px-3 sm:px-4 py-1.5 sm:py-2 shadow-2xl shadow-black/5 backdrop-blur-xl">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;

          return (
            <div
              key={tab.id}
              className="relative z-10 flex flex-col items-center justify-center outline-none flex-1"
            >
              <div className="relative flex items-center justify-center h-9 w-14 sm:h-10 sm:w-16 rounded-2xl">
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-primary shadow-md shadow-primary/20" />
                )}
                <Icon
                  className={cn(
                    'transition-all duration-300 relative z-10 size-5 sm:size-6',
                    isActive ? 'text-primary-foreground scale-110' : 'text-muted-foreground'
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
