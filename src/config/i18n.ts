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
        title: "Smart Word Lists",
        description: "Master vocabulary with curated lists for every level and goal.",
        features: [
          "Ready-made lists: IELTS, TOEFL, Business, Academic, A1, C2 and more",
          "Create custom lists with AI or import files", 
          "Track progress across all lists",
          "Smart reviews adapt to your pace"
        ]
      },
      
      smartGroups: {
        title: "Smart Word Groups",
        mainIdea: "🚀 THE MAIN IDEA!",
        description: "The proven way to learn vocabulary faster. Pick groups of 5-12 words and master them with 7 exercises!",
        features: [
          "Optimal group sizes (5-12 words)",
          "Practice with 7 different exercises",
          "One-click regeneration",
          "Research-backed learning method"
        ]
      },
      
      aiLists: {
        title: "AI-Powered Custom Lists", 
        description: "Build perfect word lists instantly. Manual creation or AI generation from any topic.",
        features: [
          "Manual word list creation",
          "AI generation from any topic",
          "Difficulty levels A1-C2",
          "Import from files"
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
