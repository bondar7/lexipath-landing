import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

interface ReCaptchaV3Props {
  onVerify: (token: string | null) => void;
  onError?: () => void;
  action?: string;
  className?: string;
}

export interface ReCaptchaV3Ref {
  execute: () => Promise<void>;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export const ReCaptchaV3 = forwardRef<ReCaptchaV3Ref, ReCaptchaV3Props>((
  {
    onVerify,
    onError,
    action = 'email_signup',
    className = ''
  },
  ref
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  // Don't render if no site key is configured
  if (!RECAPTCHA_SITE_KEY) {
    console.warn('VITE_RECAPTCHA_SITE_KEY is not configured');
    return null;
  }

  useEffect(() => {
    // Load reCAPTCHA v3 script if not already loaded
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        window.grecaptcha.ready(() => {
          setIsLoaded(true);
        });
      };
      
      script.onerror = () => {
        console.error('Failed to load reCAPTCHA v3');
        onError?.();
      };
      
      document.head.appendChild(script);
    } else {
      window.grecaptcha.ready(() => {
        setIsLoaded(true);
      });
    }
  }, [onError]);

  const executeRecaptcha = async () => {
    if (!isLoaded || isExecuting) {
      return;
    }

    setIsExecuting(true);

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: action
      });
      
      onVerify(token);
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      onVerify(null);
      onError?.();
    } finally {
      setIsExecuting(false);
    }
  };

  // Expose execute method to parent components
  useImperativeHandle(ref, () => ({
    execute: executeRecaptcha
  }));

  return (
    <div className={`recaptcha-v3 ${className}`}>
      {!isLoaded && (
        <div className="text-sm text-gray-600 flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading security check...</span>
        </div>
      )}
      
      {isLoaded && !isExecuting && (
        <div className="text-sm text-green-600 flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span>Security ready</span>
        </div>
      )}
      
      {isExecuting && (
        <div className="text-sm text-blue-600 flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Verifying security...</span>
        </div>
      )}
      
      <div className="text-xs text-gray-500 mt-2">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>{' '}
        apply.
      </div>
    </div>
  );
});

ReCaptchaV3.displayName = 'ReCaptchaV3';

// Keep the old export name for compatibility
export const ReCaptchaEnterprise = ReCaptchaV3;
