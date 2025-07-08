import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: '7', label: 'Exercise Types' },
    { number: '15+', label: 'Languages Supported' },
    { number: '10k+', label: 'Pre-made Word Lists' },
    { number: '∞', label: 'AI-Generated Topics' }
  ];

  return (
    <div className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-white">
              <div className="text-2xl md:text-3xl font-bold mb-2">{number}</div>
              <div className="text-blue-100 text-sm md:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
