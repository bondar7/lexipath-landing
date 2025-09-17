import { useState } from 'react';
import { WaitlistAPI } from '../api/waitlist';
import { EmailValidator } from '../validation/email';
import { trackEmailSignup } from '../utils/analytics';

// Global type for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export interface UseWaitlistReturn {
  email: string;
  setEmail: (email: string) => void;
  isSubmitted: boolean;
  isLoading: boolean;
  error: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useWaitlist(): UseWaitlistReturn {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = EmailValidator.validate(email);
    if (!validation.isValid) {
      setError(validation.error || 'Please enter a valid email');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Execute reCAPTCHA v3 on form submission - native approach
      let recaptchaToken: string | null = null;
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        try {
          recaptchaToken = await new Promise<string>((resolve, reject) => {
            window.grecaptcha.ready(() => {
              window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'email_signup' })
                .then(resolve)
                .catch(reject);
            });
          });
          console.log('reCAPTCHA token generated successfully');
        } catch (recaptchaError) {
          console.warn('reCAPTCHA execution failed:', recaptchaError);
        }
      } else {
        console.warn('reCAPTCHA not available');
      }

      const result = await WaitlistAPI.joinWaitlist({ 
        email: EmailValidator.normalize(email),
        recaptchaToken
      });

      if (result.success) {
        // Track the signup
        trackEmailSignup();
        
        setIsSubmitted(true);
        setEmail('');
        
        // Hide success message after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } else {
        setError(result.error || 'Failed to join waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isSubmitted,
    isLoading,
    error,
    handleSubmit,
    handleEmailChange,
  };
}