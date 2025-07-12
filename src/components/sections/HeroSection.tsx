import React from 'react';
import { Sparkles, Zap, CheckCircle, TrendingUp, Clock, Globe, Gift } from 'lucide-react';
import { colors } from '../../config/colors';
import { i18n } from '../../config/i18n';
import { useWaitlist } from '../../lib/hooks/useWaitlist';

const HeroSection: React.FC = () => {
  const t = i18n.en.hero;
  const {
    email,
    isSubmitted,
    isLoading,
    error,
    handleSubmit,
    handleEmailChange,
  } = useWaitlist();

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-20 xl:pb-44">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">{t.badge}</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.title}
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.subtitle}
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.description}
            <br />
            <span className={`text-${colors.primary}-300 font-semibold`}>{t.exercises}</span> {t.exercisesSuffix}
          </p>
          
          {/* Simple Giveaway Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-8">
            <Gift className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-amber-300 font-semibold text-sm">100 Free Pro Subscriptions for Waitlist Members</span>
          </div>
          
          {/* Stats Row */}
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10">
            <li className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className={`w-5 h-5 text-${colors.success}-400 flex-shrink-0`} />
              <span className="text-white font-semibold">{t.stats.retention}</span>
            </li>
            <li className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className={`w-5 h-5 text-${colors.success}-400 flex-shrink-0`} />
              <span className="text-white font-semibold">{t.stats.timePerDay}</span>
            </li>
            <li className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className={`w-5 h-5 text-${colors.success}-400 flex-shrink-0`} />
              <span className="text-white font-semibold">{t.stats.languages}</span>
            </li>
          </ul>
          
          {/* CTA Section */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative">
                <label htmlFor="hero-email" className="sr-only">Email address</label>
                <input
                  id="hero-email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={t.cta.placeholder}
                  className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 text-base transition-colors ${
                    error ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-white/20'
                  }`}
                  required
                  disabled={isLoading}
                  aria-describedby={error ? "hero-email-error" : undefined}
                />
                {/* Error message */}
                {error && (
                  <p id="hero-email-error" role="alert" className="mt-2 text-red-300 text-sm bg-red-500/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-400/30 sm:absolute sm:top-full sm:left-0 sm:right-0 sm:mt-2 sm:z-20">
                    {error}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                aria-describedby={isLoading ? "button-loading" : undefined}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-base shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none sm:self-start"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin flex-shrink-0" aria-hidden="true"></div>
                    <span id="button-loading">Joining...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{t.cta.button}</span>
                  </>
                )}
              </button>
            </form>

            {/* Add spacing to prevent overlap with content below */}
            <div className={`transition-all duration-300 ${error ? 'h-12 sm:h-8' : 'h-4 sm:h-0'}`} aria-hidden="true"></div>

            {/* Success Message */}
            {isSubmitted && (
              <div role="status" aria-live="polite" className="mt-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-green-300 font-medium">{t.cta.success}</span>
                </div>
                <p className="text-green-200 text-sm">
                  Don't see our email? Check your spam folder.
                </p>
              </div>
            )}
            
            {/* Trust Indicators */}
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/90 font-medium text-md">{t.cta.trust.free}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/90 font-medium text-md">{t.cta.trust.noCard}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/90 font-medium text-md">{t.cta.trust.cancel}</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
      {/* Bottom Wave - Only on lg screens and above */}
      <div className="absolute bottom-0 left-0 right-0 block -mb-1" aria-hidden="true">
        <svg className="w-full h-12 md:h-8 lg:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}} aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-gray-50 hidden xl:block"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-gray-50 hidden xl:block"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-gray-50 hidden xl:block"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

