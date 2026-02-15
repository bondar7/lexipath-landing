export const i18n = {
  en: {
    hero: {
      badge: "Powered by Advanced AI",
      title: "Master Any Language",
      subtitle: "10x Faster",
      description: "Revolutionary AI-powered vocabulary learning that adapts to your brain.",
      exercises: "7 scientifically-proven exercises",
      exercisesSuffix: "in one seamless experience.",
      stats: {
        retention: "3x Retention Rate",
        timePerDay: "30 Min/Day",
        languages: "Multi Languages"
      },
      cta: {
        placeholder: "Enter your email",
        button: "Get Early Access",
        success: "You're on the waitlist! Check your email.",
        trust: {
          free: "Free to start",
          noCard: "No credit card",
          cancel: "Cancel anytime"
        }
      }
    },
    
    features: {
      title: "See the Future of Vocabulary Learning",
      subtitle: "Explore revolutionary features that make learning words more effective and enjoyable.",
      
      smartLists: {
        title: "Your Daily Practice",
        description: "Stay on track with daily goals, smart reviews, and progress you can see.",
        features: [
          "Daily focus shows how close you are to your goal",
          "Jump back into recent lists in one tap",
          "Smart review queue adapts to your pace",
          "Quick start learning from your home screen"
        ]
      },
      
      smartGroups: {
        title: "Smart Word Groups",
        mainIdea: "",
        description: "Small, focused groups keep practice fast and effective — finish a set, feel the progress.",
        features: [
          "Optimal group sizes (5-20 words)",
          "Practice with 7 different exercises",
          "Research-backed learning method"
        ]
      },
      
      aiLists: {
        title: "Magic Custom Lists", 
        description: "Get a complete list for any topic in seconds — with definitions, translations, example sentences, and audio included.",
        features: [
          "Get your list for any topic — interview prep, travel, dining, and more",
          "Auto‑filled words, translations, sentences, and audio",
          "Edit and expand lists easily whenever you want",
          "Save time with smart autofill for every field"
        ]
      }
    },
    
    learningSteps: {
      title: "7-Step Learning Process",
      subtitle: "Our scientifically-proven method ensures deep understanding and long-term retention.",
      steps: [
        {
          title: "Introduction & Context",
          description: "Learn words with definitions, translations, and examples"
        },
        {
          title: "Active Recall",
          description: "Test your memory with type or voice input"
        },
        {
          title: "Match Exercise",
          description: "Connect words with their meanings through drag & drop"
        },
        {
          title: "Gap Fill",
          description: "Practice words in realistic story contexts"
        },
        {
          title: "Build Sentence",
          description: "Construct translations word by word"
        },
        {
          title: "Creative Tasks",
          description: "Write original sentences using new vocabulary"
        },
        {
          title: "Error Correction",
          description: "Review and fix mistakes for targeted improvement"
        }
      ]
    },
    
    comparison: {
      title: "Why Our Method Works Better",
      subtitle: "Traditional vocabulary apps are broken. Here's how we're different.",
      traditional: {
        title: "Traditional Apps",
        features: [
          "Simple flashcards only",
          "No context or examples",
          "Random review timing",
          "Limited topic coverage",
          "Mostly only English"
        ]
      },
      lexipath: {
        title: "Lexipath",
        features: [
          "7 different exercise types",
          "AI-generated examples",
          "Scientific spaced repetition",
          "Unlimited AI topics",
          "Multi-language support"
        ]
      }
    }
  }
} as const;

export type Language = keyof typeof i18n;
export type TranslationKeys = keyof typeof i18n.en;
