export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface WaitlistRequest {
  email: string;
}

export class WaitlistAPI {
  private static readonly SCRIPT_URL = import.meta.env.VITE_WAITLIST_API_URL;

  static async joinWaitlist(data: WaitlistRequest): Promise<WaitlistResponse> {
    if (!this.SCRIPT_URL) {
      console.error('VITE_WAITLIST_API_URL is not configured');
      return {
        success: false,
        error: 'Service temporarily unavailable. Please try again later.'
      };
    }

    try {
      const response = await fetch(this.SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Failed to join waitlist:', error);
      return {
        success: false,
        error: 'Failed to join waitlist. Please try again.'
      };
    }
  }
}