import validator from 'validator';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export class EmailValidator {
  static validate(email: string): ValidationResult {
    if (!email?.trim()) {
      return { isValid: false, error: 'Email is required' };
    }

    const trimmedEmail = email.trim();

    if (!validator.isEmail(trimmedEmail)) {
      return { isValid: false, error: 'Please enter a valid email address' };
    }

    if (trimmedEmail.length > 254) {
      return { isValid: false, error: 'Email address is too long' };
    }

    return { isValid: true };
  }

  static normalize(email: string): string {
    return email.trim().toLowerCase();
  }
}