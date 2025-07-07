// Semantic color mappings to Tailwind classes
export const colors = {
  primary: 'blue',
  secondary: 'purple', 
  success: 'green',
  error: 'red',
  warning: 'orange',
  info: 'cyan',
  
  // Additional semantic colors
  neutral: 'gray',
  accent: 'pink',
} as const;

export type ColorName = keyof typeof colors;
export type TailwindColor = typeof colors[ColorName];
