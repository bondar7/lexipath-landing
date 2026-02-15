import React, { useMemo, useState } from 'react';
import { BarChart2, Calendar, CheckCircle2, ChevronDown, Flame, GraduationCap, Repeat, Settings, X, ArrowRight, Zap } from 'lucide-react';
import { MockCard } from '../mock-ui/card';
import { MockButton } from '../mock-ui/button';
import { MockHeaderWrapper } from '../mock-ui/header-wrapper';
import { MockBottomBar } from '../mock-ui/bottom-bar';
import { cn } from '../mock-ui/cn';

const mockStats = {
  total_vocabulary: 34,
  mastered_count: 12,
  learning_count: 8,
  streak: 1,
  due_words: 0,
  daily_history: Array.from({ length: 21 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (20 - i));
    return { date: d.toISOString().split('T')[0], count: i % 3 === 0 ? 12 : i % 2 === 0 ? 6 : 0 };
  }),
  recent_lists: [
    { id: '1', title: 'Práce - Úroveň B1', progress: 40 },
    { id: '2', title: 'Sport', progress: 1 },
    { id: '3', title: 'Běžná slovesa', progress: 22 },
    { id: '4', title: 'Věda', progress: 10 },
  ],
};

function TopStatsSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const days = useMemo(() => {
    const today = new Date();
    return mockStats.daily_history.map((item, idx) => {
      const d = new Date();
      d.setDate(today.getDate() - (20 - idx));
      return { date: d, count: item.count, isToday: idx === 20 };
    });
  }, []);

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short' }).format(date);

  return (
    <>
      <div
        className={cn(
          'absolute inset-0 z-20 bg-black/20 backdrop-blur-[1px] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute inset-x-0 top-0 z-30 h-auto bg-card border-b pt-16 transition-transform duration-300 ease-in-out shadow-xl',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex items-center justify-between px-3 sm:px-5 pt-3 sm:pt-4 pb-2">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 sm:size-5 text-primary" />
            <h3 className="font-bold text-base sm:text-lg tracking-tight">Daily history</h3>
          </div>
          <MockButton variant="ghost" size="icon" onClick={onClose} className="size-7 sm:size-8 rounded-full hover:bg-muted">
            <X className="size-4 sm:size-5" />
          </MockButton>
        </div>

        <div className="space-y-4 sm:space-y-6 px-3 sm:px-5 pb-6 sm:pb-8 pt-2">
          <div className="space-y-3">
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-3 sm:px-5 snap-x min-h-[64px] sm:min-h-[80px] items-center [scrollbar-width:none]">
              {days.map((day, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex flex-col items-center justify-between min-w-[60px] sm:min-w-[70px] h-[64px] sm:h-[80px] p-1.5 sm:p-2 rounded-xl border-2 snap-end transition-all',
                    day.isToday ? 'border-primary bg-primary/5 shadow-sm' : 'border-border bg-card text-muted-foreground'
                  )}
                >
                  <span className={cn('text-[9px] sm:text-[10px] font-bold uppercase', day.isToday ? 'text-primary' : 'text-muted-foreground/70')}>
                    {formatDate(day.date)}
                  </span>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className={cn('text-base sm:text-xl font-bold leading-none', day.isToday ? 'text-primary' : 'text-foreground')}>
                      {day.count}
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-medium opacity-60">words</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[
              { icon: GraduationCap, label: 'total', value: mockStats.total_vocabulary },
              { icon: BarChart2, label: 'mastered', value: mockStats.mastered_count },
              { icon: Repeat, label: 'learning', value: mockStats.learning_count },
              { icon: Flame, label: 'streak', value: mockStats.streak },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-muted/30 border-2 border-primary/20">
                <div className="p-1 sm:p-1.5 rounded-full bg-background border shadow-sm">
                  <item.icon className="size-3 sm:size-4 text-primary" />
                </div>
                <div className="text-center w-full flex flex-col items-center min-h-[1.5rem] justify-center">
                  <div className="text-sm sm:text-base font-bold text-primary">{item.value}</div>
                  <div className="text-[7px] sm:text-[8px] uppercase font-bold text-primary/70">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function HomeMockScreen() {
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const goal = 30;
  const todayCount = 15;
  const progress = Math.min(Math.round((todayCount / goal) * 100), 100);
  const circumference = 2 * Math.PI * 24;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex min-h-full flex-col">
      <MockHeaderWrapper
        left={
          <MockButton
            variant="ghost"
            size="icon"
            className={showStats ? 'h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary' : 'h-9 w-9 sm:h-10 sm:w-10 rounded-full text-muted-foreground hover:bg-muted'}
            onClick={() => setShowStats((v) => !v)}
          >
            <BarChart2 className="size-5 sm:size-6" />
          </MockButton>
        }
        center={
          <MockButton
            variant="outline"
            size="sm"
            className="h-9 sm:h-10 gap-2 rounded-full border border-border px-3 sm:px-4 font-bold max-w-[75vw] overflow-hidden whitespace-nowrap"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="relative shrink-0 size-6 sm:size-8 flex items-center justify-center">
                <span className="absolute text-lg sm:text-2xl z-20 leading-none">🇨🇿</span>
                <span className="absolute text-xs sm:text-base bottom-0 right-0 z-10 opacity-80 leading-none">🇬🇧</span>
              </span>
              <span className="min-w-0 truncate whitespace-nowrap text-xs sm:text-sm">Czech</span>
              <ChevronDown className="size-3.5 sm:size-4 shrink-0 text-muted-foreground opacity-50" />
            </span>
          </MockButton>
        }
        right={
          <button
            className={showSettings ? 'flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary transition-transform active:scale-95 hover:bg-primary/20 hover:border-primary' : 'flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-border transition-transform active:scale-95 hover:bg-muted'}
            onClick={() => setShowSettings((v) => !v)}
          >
            <Settings className="size-4.5 sm:size-5" />
          </button>
        }
      />

      <TopStatsSheet isOpen={showStats} onClose={() => setShowStats(false)} />

      {showSettings && (
        <div className="absolute right-4 top-16 z-50 w-48 rounded-xl border-2 bg-card shadow-xl">
          <div className="px-3 py-2 text-sm font-medium text-muted-foreground">User settings</div>
          <div className="border-t" />
          <button className="w-full px-3 py-2 text-left text-sm font-medium hover:bg-primary/10">Theme</button>
          <button className="w-full px-3 py-2 text-left text-sm font-medium hover:bg-primary/10">Language</button>
          <div className="border-t" />
          <button className="w-full px-3 py-2 text-left text-sm font-medium hover:bg-primary/10">Log out</button>
        </div>
      )}

      <main className="space-y-5 sm:space-y-8 px-2 sm:px-4 py-3 sm:py-6 pb-24 sm:pb-28">
        <div className="w-full">
          <MockCard className="relative overflow-hidden border p-0 shadow-lg min-h-[100px] sm:min-h-[124px] gap-2.5">
            <div className="flex flex-col gap-2 p-2.5 sm:p-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-lg font-bold tracking-tight">Daily Focus</h3>
                  <p className="text-muted-foreground text-[11px] sm:text-sm font-medium">{todayCount} / {goal} words practiced</p>
                </div>
                <div className="relative flex size-11 sm:size-16 items-center justify-center">
                  <svg className="size-full -rotate-90" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" className="stroke-border" strokeWidth="4" fill="none" />
                    <circle
                      cx="28" cy="28" r="24" className="stroke-primary transition-all duration-1000 ease-out" strokeWidth="4" fill="none"
                      strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[9px] sm:text-xs font-bold text-foreground">{progress}%</span>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-full bg-background border shadow-sm">
                    <GraduationCap className="size-3 sm:size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-foreground">{mockStats.total_vocabulary} words</p>
                    <p className="text-muted-foreground text-[8px] sm:text-[10px] font-medium uppercase">total</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-full bg-background border shadow-sm">
                    <Flame className="size-3 sm:size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-foreground">{mockStats.streak} days</p>
                    <p className="text-muted-foreground text-[8px] sm:text-[10px] font-medium uppercase">streak</p>
                  </div>
                </div>
              </div>
            </div>
          </MockCard>
        </div>

        <section className="space-y-4">
          {mockStats.due_words > 0 ? (
            <div className="group relative flex h-20 w-full items-center justify-between overflow-hidden rounded-2xl border-2 border-destructive/20 bg-destructive/5 px-4 py-4 text-left transition-all active:scale-[0.98] hover:bg-destructive/10">
              <div className="absolute -right-4 -top-4 size-24 rounded-full bg-destructive/10 blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <Repeat className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-destructive">Review due</span>
                  <span className="text-sm font-medium text-muted-foreground">{mockStats.due_words} due words</span>
                </div>
              </div>
              <div className="mr-2 text-destructive/50 transition-transform group-hover:translate-x-1 group-hover:text-destructive">
                <ArrowRight className="size-6" />
              </div>
            </div>
          ) : (
            <div className="relative flex h-12 sm:h-16 w-full items-center gap-3 sm:gap-4 overflow-hidden rounded-2xl border-2 border-primary/10 bg-primary/5 px-3 sm:px-4 py-2 sm:py-3">
              <div className="absolute -right-4 -top-4 size-24 rounded-full bg-primary/5 blur-2xl" />
              <div className="flex size-7 sm:size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="size-4 sm:size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-base font-bold text-foreground">No words for review today!</span>
              </div>
            </div>
          )}

          <div className="relative w-full">
            <button className="group relative flex h-12 sm:h-16 w-full items-center justify-between overflow-hidden rounded-2xl bg-primary px-3 sm:px-4 py-2 sm:py-3 text-left transition-all active:scale-[0.98] shadow-lg shadow-primary/25 cursor-pointer">
              <div className="absolute -right-4 -top-4 size-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="flex items-center gap-4 pointer-events-none">
                <div className="flex size-7 sm:size-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                  <Zap className="size-4 sm:size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-lg font-semibold text-white">Start Learning</span>
                </div>
              </div>
            </button>
            <button
              type="button"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-md transition-all min-w-[36px] sm:min-w-[44px] min-h-[36px] sm:min-h-[44px] flex items-center justify-center z-10 border-0 outline-none"
              style={{ background: 'transparent' }}
            >
              <Settings className="size-4 sm:size-6 text-white opacity-80 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between px-0.5">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">Jump back in</h3>
            <button className="text-[11px] sm:text-xs font-bold text-primary hover:underline">View all</button>
          </div>
          <div className="flex snap-x gap-2 sm:gap-3 overflow-x-auto px-1 sm:px-4 pb-2 [scrollbar-width:none]">
            {mockStats.recent_lists.map((list) => (
              <div key={list.id} className="group relative min-w-[140px] sm:min-w-[180px] snap-start outline-none">
                <MockCard className="flex h-full flex-col justify-between border-2 p-1.5 sm:p-3 transition-colors hover:border-primary/50">
                  <h4 className="line-clamp-2 text-[9px] sm:text-sm font-bold leading-tight">{list.title}</h4>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="h-1 sm:h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-primary transition-all" style={{ width: `${list.progress}%` }} />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[7px] sm:text-[10px] font-bold text-muted-foreground">{list.progress}%</span>
                    </div>
                  </div>
                </MockCard>
              </div>
            ))}
          </div>
        </section>
      </main>

      <MockBottomBar active="home" />
    </div>
  );
}
