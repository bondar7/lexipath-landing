import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { useWaitlist } from '../../lib/hooks/useWaitlist';

const CTASection: React.FC = () => {
  const {
    email,
    isSubmitted,
    isLoading,
    error,
    handleSubmit,
    handleEmailChange,
  } = useWaitlist();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Vocabulary Learning?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 hidden lg:block">
          Join thousands of language learners who are already experiencing the future of vocabulary acquisition.
        </p>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="flex-1 relative">
              <label htmlFor="cta-email" className="sr-only">Email address</label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors ${
                  error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                }`}
                required
                disabled={isLoading}
                aria-describedby={error ? "cta-email-error" : undefined}
              />
              {error && (
                <p id="cta-email-error" role="alert" className="mt-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200 sm:absolute sm:top-full sm:left-0 sm:right-0 sm:mt-2 sm:z-20 sm:bg-white sm:shadow-lg">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none sm:self-start"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Get Early Access</span>
                  <ChevronRight className="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
          
          {/* Dynamic spacing based on error state */}
          <div className={`transition-all duration-300 ${error ? 'h-12 sm:h-8' : 'h-4 sm:h-0'}`} aria-hidden="true"></div>
          
          {isSubmitted && (
            <div role="status" aria-live="polite" className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                <p className="text-green-700 text-sm md:text-base font-medium">
                  You're on the waitlist! Check your email.
                </p>
              </div>
              <p className="text-green-600 text-xs md:text-sm">
                Don't see our email? Check your spam folder.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
