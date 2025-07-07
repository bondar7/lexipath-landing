import { BookOpen, Brain, Target, Plus, Users, Sparkles, RotateCcw, Clock } from 'lucide-react';

export const learningStepsData = [
  { 
    icon: BookOpen, 
    color: 'green' 
  },
  { 
    icon: Brain, 
    color: 'orange' 
  },
  { 
    icon: Target, 
    color: 'blue' 
  },
  { 
    icon: Plus, 
    color: 'purple' 
  },
  { 
    icon: Users, 
    color: 'teal' 
  },
  { 
    icon: Sparkles, 
    color: 'pink' 
  },
  { 
    icon: RotateCcw, 
    color: 'red' 
  },
  { 
    icon: Clock, 
    color: 'blue' 
  }
] as const;

export type LearningStepData = typeof learningStepsData[number];
