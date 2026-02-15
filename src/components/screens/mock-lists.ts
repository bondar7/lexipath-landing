export type MockList = {
  id: string;
  title: string;
  wordCount: number;
  status: 'New' | 'Mastered' | 'Started' | number;
};

export const MOCK_LISTS: MockList[] = [
  { id: '1', title: 'Work Basics - B1', wordCount: 30, status: 'Started' },
  { id: '2', title: 'Everyday Verbs', wordCount: 373, status: 'Started' },
  { id: '3', title: 'Science', wordCount: 207, status: 'Started' },
  { id: '4', title: 'Common Adjectives', wordCount: 446, status: 'New' },
  { id: '5', title: 'Education', wordCount: 346, status: 'Started' },
  { id: '6', title: 'Family', wordCount: 86, status: 'New' },
  { id: '7', title: 'Shopping', wordCount: 105, status: 'New' },
  { id: '8', title: 'Vacation', wordCount: 128, status: 'Started' },
  { id: '9', title: 'Food', wordCount: 220, status: 'Started' },
  { id: '10', title: 'Home & House', wordCount: 64, status: 'New' },
];

export const MOCK_RECENT_LISTS = [
  { id: '1', title: 'Work Basics - B1', progress: 40 },
  { id: '2', title: 'Sports', progress: 1 },
  { id: '3', title: 'Everyday Verbs', progress: 22 },
  { id: '4', title: 'Science', progress: 10 },
];
