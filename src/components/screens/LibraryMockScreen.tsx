import React, { useMemo, useState } from 'react';
import { ChevronRight, Pin, Pencil, SlidersHorizontal, Search, Trash } from 'lucide-react';
import { MockHeaderWrapper } from '../mock-ui/header-wrapper';
import { MockButton } from '../mock-ui/button';
import { MockInput } from '../mock-ui/input';
import { MockBottomBar } from '../mock-ui/bottom-bar';
import { cn } from '../mock-ui/cn';

const headerIconButtonClass =
  'h-9 w-9 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary';
const headerButtonClass =
  'h-9 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary';

const mockLists = [
  { id: '1', title: 'Práce - Úroveň B1', wordCount: 30, status: 'Started', isPinned: false },
  { id: '2', title: 'Běžná slovesa', wordCount: 373, status: 'Started', isPinned: false },
  { id: '3', title: 'Věda', wordCount: 207, status: 'Started', isPinned: false },
  { id: '4', title: 'Běžná přídavná jména', wordCount: 446, status: 'New', isPinned: false },
  { id: '5', title: 'Vzdělávání', wordCount: 346, status: 'Started', isPinned: false },
  { id: '6', title: 'Rodina', wordCount: 86, status: 'New', isPinned: false },
  { id: '7', title: 'Nakupování', wordCount: 105, status: 'New', isPinned: false },
  { id: '8', title: 'Dovolená', wordCount: 128, status: 'Started', isPinned: false },
  { id: '9', title: 'Jídlo', wordCount: 220, status: 'Started', isPinned: false },
  { id: '10', title: 'Domácnost', wordCount: 64, status: 'New', isPinned: false },
];

function ListItem({
  id,
  title,
  wordCount,
  status,
  isPinned,
  isEditMode,
  isSelected,
  onToggleSelect,
}: {
  id: string;
  title: string;
  wordCount: number;
  status: 'New' | 'Mastered' | 'Started' | number;
  isPinned: boolean;
  isEditMode: boolean;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}) {
  let displayStatus = typeof status === 'number' ? `${status} due words` : status;
  let statusColorClass = typeof status === 'number'
    ? 'text-destructive'
    : status === 'New'
      ? 'text-primary'
      : status === 'Mastered'
        ? 'text-success'
        : status === 'Started'
          ? 'text-blue-500'
          : 'text-muted-foreground';

  return (
    <div
      className={cn(
        'flex h-16 cursor-pointer items-center justify-between border-b px-3 py-3 transition-colors duration-150 ease-in-out',
        !isEditMode && 'active:bg-muted/50'
      )}
    >
      <div className="flex items-center space-x-3">
        {isEditMode ? (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggleSelect(id)}
            className="h-4 w-4"
          />
        ) : (
          <button
            className="p-0.5 rounded-full hover:bg-muted/70 transition-colors duration-150 ease-in-out"
            aria-label={isPinned ? 'Unpin list' : 'Pin list'}
          >
            {isPinned ? (
              <Pin className="h-4 w-4 text-primary" fill="currentColor" />
            ) : (
              <Pin className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground flex items-center gap-2">{title}</p>
          <p className="text-xs text-muted-foreground">
            {wordCount} words • <span className={cn(statusColorClass)}>{displayStatus}</span>
          </p>
        </div>
      </div>
      {!isEditMode && <ChevronRight className="h-5 w-5 text-primary" />}
    </div>
  );
}

export default function LibraryMockScreen() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() =>
    mockLists.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const pinnedLists = filtered.filter((l) => l.isPinned);
  const otherLists = filtered.filter((l) => !l.isPinned);

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="relative flex min-h-full flex-col">
      {isEditMode ? (
        <MockHeaderWrapper
          left={
            <MockButton variant="ghost" onClick={() => setIsEditMode(false)} className={headerButtonClass}>
              Done
            </MockButton>
          }
          title={`Selected ${selectedItems.size}`}
          right={
            <MockButton variant="ghost" size="icon" className={cn(headerIconButtonClass, 'text-destructive hover:text-destructive')}>
              <Trash className="h-5 w-5" />
            </MockButton>
          }
        />
      ) : (
        <MockHeaderWrapper
          left={
            <MockButton
              variant="ghost"
              size="icon"
              onClick={() => setIsEditMode(true)}
              className={headerIconButtonClass}
              aria-label="Edit"
            >
              <Pencil className="h-5 w-5" />
            </MockButton>
          }
          title="My Library"
          right={
            <div className="relative">
              <MockButton
                variant="ghost"
                size="icon"
                className={headerIconButtonClass}
                onClick={() => setShowDropdown((v) => !v)}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </MockButton>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border-2 bg-card shadow-xl z-50">
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-muted">Add manually</button>
                  <div className="border-t" />
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-muted">Import list</button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-muted">Generate with AI</button>
                </div>
              )}
            </div>
          }
        />
      )}

      <div className="relative p-3">
        <Search className="absolute left-6 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <MockInput
          type="text"
          placeholder="Search lists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 pr-3"
          disabled={isEditMode}
        />
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {pinnedLists.length > 0 && (
          <div className="mb-6">
            <h3 className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Pinned</h3>
            <div className="bg-card">
              {pinnedLists.map((list) => (
                <ListItem
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  wordCount={list.wordCount}
                  status={list.status}
                  isPinned={list.isPinned}
                  isEditMode={isEditMode}
                  isSelected={selectedItems.has(list.id)}
                  onToggleSelect={toggleSelectItem}
                />
              ))}
            </div>
          </div>
        )}

        <h3 className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">All lists</h3>
        <div className="bg-card">
          {otherLists.map((list) => (
            <ListItem
              key={list.id}
              id={list.id}
              title={list.title}
              wordCount={list.wordCount}
              status={list.status}
              isPinned={list.isPinned}
              isEditMode={isEditMode}
              isSelected={selectedItems.has(list.id)}
              onToggleSelect={toggleSelectItem}
            />
          ))}
        </div>
      </div>

      <MockBottomBar active="library" />
    </div>
  );
}
