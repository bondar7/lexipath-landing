import React, { useState } from 'react';
import { Info, X, ChevronDown } from 'lucide-react';
import { MockHeaderWrapper } from '../mock-ui/header-wrapper';
import { MockButton } from '../mock-ui/button';
import { MockInput } from '../mock-ui/input';
import { cn } from '../mock-ui/cn';
import { MOCK_LISTS } from './mock-lists';

const WORD_COUNTS = [5, 10, 15, 20];
const MODES = [
  { id: 'short', label: 'Short session', tooltip: 'Quick review with fewer words.' },
  { id: 'long', label: 'Long session', tooltip: 'Deeper practice with more words.' },
  { id: 'flashcards', label: 'Flashcards', tooltip: 'Focused recall with flashcards.' },
];

export default function LearningSessionConfigMock() {
  const [selectedCount, setSelectedCount] = useState(10);
  const [selectedMode, setSelectedMode] = useState('short');
  const [rememberChoice, setRememberChoice] = useState(true);
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [selectedListId, setSelectedListId] = useState(MOCK_LISTS[0]?.id ?? '');

  return (
    <div className="flex flex-col">
      <MockHeaderWrapper
        title="Start New Session"
        right={
          <MockButton variant="ghost" size="icon" className="p-0">
            <X className="size-5" />
          </MockButton>
        }
      />

      <main className="flex-1 overflow-y-auto px-3 py-4 pb-20">
        {/* Currently learning from */}
        <div className="mb-6">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Currently learning from
          </h3>
          <div className="relative">
            <select
              value={selectedListId}
              onChange={(e) => setSelectedListId(e.target.value)}
              className="w-full h-10 px-3 py-2.5 text-sm rounded-xl border-2 border-input bg-transparent shadow-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] appearance-none"
            >
              {MOCK_LISTS.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div className="my-6 h-px w-full bg-border" />

        {/* Word count */}
        <div className="mb-6">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Number of words
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {WORD_COUNTS.map((count) => (
              <MockButton
                key={count}
                variant={selectedCount === count ? 'default' : 'outline'}
                onClick={() => setSelectedCount(count)}
                className={cn('h-9 text-xs font-semibold', selectedCount === count && 'shadow-md')}
              >
                {count}
              </MockButton>
            ))}
          </div>
        </div>

        <div className="my-6 h-px w-full bg-border" />

        {/* Learning mode */}
        <div className="mb-6">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Learning mode
          </h3>
          <div className="flex flex-col gap-3">
            {MODES.map((mode) => (
              <div key={mode.id} className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedMode(mode.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg border-2 p-3 text-left transition-all',
                    selectedMode === mode.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  <span className={cn('inline-flex size-4 items-center justify-center rounded-full border-2', selectedMode === mode.id ? 'border-primary' : 'border-muted-foreground/40')}>
                    <span className={cn('size-2 rounded-full', selectedMode === mode.id ? 'bg-primary' : 'bg-transparent')} />
                  </span>
                  <span className="text-sm font-medium">{mode.label}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOpenTooltip(openTooltip === mode.id ? null : mode.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center"
                >
                  <Info className="size-4" />
                </button>

                {openTooltip === mode.id && (
                  <div className="absolute right-2 top-full mt-2 z-10 w-48 rounded-lg border-2 bg-card p-2 text-[11px] text-muted-foreground shadow-lg">
                    {mode.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 h-px w-full bg-border" />

        {/* Remember choice */}
        <div className="flex items-start gap-3 rounded-xl border border-border p-3 bg-muted/20">
          <button
            type="button"
            onClick={() => setRememberChoice((v) => !v)}
            className={cn('mt-0.5 size-5 rounded border-2 flex items-center justify-center', rememberChoice ? 'border-primary bg-primary/10' : 'border-muted-foreground/40')}
          >
            {rememberChoice && <span className="size-2 rounded bg-primary" />}
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Remember my choice</span>
            <span className="text-[11px] text-muted-foreground">We’ll reuse these settings next time.</span>
          </div>
        </div>

        <div className="mt-6">
          <a href="https://app.lexipath.xyz" className="block w-full">
            <MockButton size="lg" className="w-full h-12 text-sm">
              Start Learning
            </MockButton>
          </a>
        </div>
      </main>
    </div>
  );
}
