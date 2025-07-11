import { useState } from 'react';
import { WaitlistAPI } from '../api/waitlist';
import { EmailValidator } from '../validation/email';

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
      const result = await WaitlistAPI.joinWaitlist({ 
        email: EmailValidator.normalize(email) 
      });

      if (result.success) {
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