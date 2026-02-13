import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: '7', label: 'Exercise Types' },
    { number: 'Multi', label: 'Languages' },
    { number: '10k+', label: 'Pre-made Word Lists' },
    { number: '∞', label: 'AI-Generated Topics' }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">Lexipath Statistics</h2>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-white">
              <dt className="text-2xl md:text-3xl font-bold mb-2">{number}</dt>
              <dd className="text-blue-100 text-sm md:text-base">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsSection;
