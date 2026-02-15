import React, { useState } from 'react';
import { RotateCcw, Upload } from 'lucide-react';
import { MockHeaderWrapper } from '../mock-ui/header-wrapper';
import { MockButton } from '../mock-ui/button';
import { MockInput } from '../mock-ui/input';
import { MockBottomBar } from '../mock-ui/bottom-bar';
import { cn } from '../mock-ui/cn';

const TRENDING_TOPICS = [
  { emoji: '🎬', title: 'Harry Potter' },
  { emoji: '📺', title: 'Breaking Bad' },
  { emoji: '💼', title: 'Job Interview' },
  { emoji: '🏥', title: 'At the Doctor' },
  { emoji: '✈️', title: 'Airport & Travel' },
  { emoji: '🍕', title: 'Restaurant & Ordering' },
];

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function AddListGenerationMock() {
  const [topic, setTopic] = useState('At the Doctor');
  const [wordCount, setWordCount] = useState(30);
  const [selectedLevel, setSelectedLevel] = useState('B1');

  return (
    <div className="relative flex min-h-full flex-col">
      <MockHeaderWrapper
        left={
          <MockButton variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary">
            <Upload className="h-5 w-5" />
          </MockButton>
        }
        title="New List"
        right={
          <MockButton variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary">
            <RotateCcw className="h-5 w-5" />
          </MockButton>
        }
      />

      <main className="space-y-6 sm:space-y-8 px-3 sm:px-4 py-4 sm:py-6 pb-20 sm:pb-24">
        <div className="space-y-3">
          <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Topic
          </h3>
          <MockInput
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Space Exploration, French Cooking, AI Ethics"
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Number of words
          </h3>
          <MockInput
            id="word-count-input"
            type="number"
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            placeholder="30"
            min={1}
            max={1000}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">Select difficulty level</h3>
          <div className="grid grid-cols-6 gap-2">
            {LEVELS.map((level) => (
              <MockButton
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                onClick={() => setSelectedLevel(level)}
                className={cn('h-9 sm:h-10 text-xs sm:text-sm font-semibold px-2', selectedLevel === level && 'shadow-md')}
              >
                {level}
              </MockButton>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Suggested topics
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {TRENDING_TOPICS.map((item, index) => {
              const isSelected = topic === item.title;
              return (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onClick={() => setTopic(item.title)}
                  className={cn(
                    'flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all h-14 sm:h-20 hover:border-primary/50 hover:shadow-sm active:scale-[0.98]',
                    isSelected ? 'border-primary bg-primary/10 shadow-md' : 'bg-card border-border'
                  )}
                >
                  <span className="text-xl sm:text-3xl">{item.emoji}</span>
                  <span className="font-semibold text-xs sm:text-base">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <MockButton size="lg" className="w-full h-12 sm:h-14 text-sm sm:text-lg">
          Generate list
        </MockButton>
      </main>

      <MockBottomBar active="add" />
    </div>
  );
}
