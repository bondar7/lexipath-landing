import { BookOpen, Sparkles, Target } from 'lucide-react';
import React from 'react';
import { i18n } from '../../config/i18n';
import AddCustomListModal from '../screens/AddCustomListModal';
import WordGroupSelectionScreen from '../screens/WordGroupSelectionScreen';
import WordsMainScreen from '../screens/WordsMainScreen';
import FeatureCard from '../ui/FeatureCard';

const FeatureSection: React.FC = () => {
  const t = i18n.en.features;

  return (
    <section className="py-12 md:py-18 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        <div className="space-y-10 md:space-y-12">
          <FeatureCard
            icon={Target}
            iconColor="purple"
            title={t.smartGroups.title}
            description={t.smartGroups.description}
            features={t.smartGroups.features}
            highlight={{
              text: t.smartGroups.mainIdea,
              description: t.smartGroups.description
            }}
            phoneScreen={<WordGroupSelectionScreen />}
          />
          
          <FeatureCard
            icon={BookOpen}
            iconColor="blue"
            title={t.smartLists.title}
            description={t.smartLists.description}
            features={t.smartLists.features}
            phoneScreen={<WordsMainScreen />}
          />

          <FeatureCard
            icon={Sparkles}
            iconColor="pink"
            title={t.aiLists.title}
            description={t.aiLists.description}
            features={t.aiLists.features}
            phoneScreen={<AddCustomListModal />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

