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
        languages: "15+ Languages"
      },
      cta: {
        placeholder: "Enter your email for early access",
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
        description: "Organize vocabulary with pre-generated topic lists (A2, B1, C2), verbs, nouns, and custom collections.",
        features: [
          "Pre-generated lists: Travel, Business, Family",
          "Custom lists with AI generation",
          "Progress tracking per list"
        ]
      },
      
      smartGroups: {
        title: "Smart Word Groups",
        mainIdea: "🚀 THE MAIN IDEA!",
        description: "Pick customizable groups of words (5-12) to learn together. Regenerate anytime!",
        features: [
          "Customizable group sizes (5-12 words)",
          "One-click regeneration",
          "Optimized learning batches"
        ]
      },
      
      aiLists: {
        title: "AI-Powered Custom Lists",
        description: "Create custom word lists manually or let AI generate them based on any topic you choose.",
        features: [
          "Manual list creation with custom words",
          "AI generation by any topic",
          "Difficulty level selection (A1-C2)"
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
          "No pronunciation help"
        ]
      },
      wordmaster: {
        title: "WordMaster",
        features: [
          "7 different exercise types",
          "AI-generated examples",
          "Scientific spaced repetition",
          "Unlimited AI topics",
          "Native pronunciation"
        ]
      }
    }
  }
} as const;

export type Language = keyof typeof i18n;
export type TranslationKeys = keyof typeof i18n.en;
