export const i18n = {
  en: {
    hero: {
      title: "Your interests. Your words.",
      subtitle: "",
      description:
        "Build your own word library fast — learn the way that fits you best",
      exercises: "7 scientifically-proven exercises",
      exercisesSuffix: "in one seamless experience.",
      stats: {
        retention: "Long-term retention",
        timePerDay: "30 Min/Day",
        languages: "10 Languages",
      },
      cta: {
        placeholder: "Enter your email",
        button: "Get Early Access",
        success: "You're on the waitlist! Check your email.",
        trust: {
          free: "Completely free",
          noCard: "No credit card",
          cancel: "No subscription",
        },
      },
    },

    features: {
      title: "See the Future of Vocabulary Learning",
      subtitle: "7 scientifically-proven exercises in one seamless experience",

      smartLists: {
        title: "Your Daily Practice",
        description:
          "Stay on track with daily goals, smart reviews, and progress you can see.",
        features: [
          "Daily focus shows how close you are to your goal",
          "Jump back into recent lists in one tap",
          "Smart review queue adapts to your pace",
        ],
      },

      smartGroups: {
        title: "Smart Word Groups",
        mainIdea: "",
        description:
          "Small, focused groups keep practice fast and effective — finish a set, feel the progress.",
        features: [
          "Optimal group sizes (5-20 words)",
          "Practice with 7 different exercises",
          "Research-backed learning method",
        ],
      },

      aiLists: {
        title: "Magic Custom Lists",
        description:
          "Get a complete list for any topic in seconds — with definitions, translations, example sentences, and audio included.",
        features: [
          "Get your list for any topic — interview prep, travel, dining, and more",
          "Auto‑filled words, translations, sentences, and audio",
          "Edit and expand lists easily whenever you want",
          "Save time with smart autofill for every field",
        ],
      },
    },

    learningSteps: {
      title: "7-Step Learning Process",
      subtitle:
        "Our scientifically-proven method ensures deep understanding and long-term retention.",
      steps: [
        {
          title: "Introduction & Context",
          description:
            "Learn words with definitions, translations, and examples",
        },
        {
          title: "Active Recall",
          description: "Test your memory with type or voice input",
        },
        {
          title: "Match Exercise",
          description: "Connect words with their meanings through drag & drop",
        },
        {
          title: "Gap Fill",
          description: "Practice words in realistic story contexts",
        },
        {
          title: "Build Sentence",
          description: "Construct translations word by word",
        },
        {
          title: "Creative Tasks",
          description: "Write original sentences using new vocabulary",
        },
        {
          title: "Error Correction",
          description: "Review and fix mistakes for targeted improvement",
        },
      ],
    },

    comparison: {
      title: "Why Our Method Works Better",
      subtitle:
        "Any words. Real context exercises. Not a static course.",
      traditional: {
        title: "Traditional Apps",
        features: [
          "Static course path",
          "Their words, not yours",
          "Mostly flashcards",
          "No dynamic exercises",
          "Slow list creation",
        ],
      },
      lexipath: {
        title: "Lexipath",
        features: [
          "Your words, not a fixed course",
          "Generate any topic list in seconds",
          "Practice words in real context",
          "7 exercise types, not just flashcards",
          "Spaced repetition built in",
        ],
      },
    },
  },
} as const;

export type Language = keyof typeof i18n;
export type TranslationKeys = keyof typeof i18n.en;
