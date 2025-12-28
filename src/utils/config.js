// Configuration file for external integrations
// Replace placeholder values with your actual credentials

export const config = {
  // WhatsApp Configuration
  // Replace YOUR_WHATSAPP_NUMBER with your actual WhatsApp number (country code + number, no + or spaces)
  // Example: "919876543210" for Indian number +91 98765 43210
  whatsapp: {
    number: '', // e.g., '919876543210'
    message: 'Hello! I am interested in learning more about your training programs.',
    getUrl: () => {
      const number = config.whatsapp.number;
      const message = encodeURIComponent(config.whatsapp.message);
      return `https://wa.me/${number}?text=${message}`;
    }
  },

  // Mailchimp Configuration
  // Get your API key and list ID from Mailchimp dashboard
  mailchimp: {
    apiKey: '',
    listId: '',
    server: '', // e.g., 'us1', 'us2', etc.
    // API endpoint will be: https://{server}.api.mailchimp.com/3.0/lists/{listId}/members
    getApiUrl: () => {
      return `https://${config.mailchimp.server}.api.mailchimp.com/3.0/lists/${config.mailchimp.listId}/members`;
    }
  },

  // Email Configuration (for sending notifications)
  // You can use services like EmailJS, SendGrid, or your own backend
  email: {
    serviceId: '', // For EmailJS
    templateId: '',
    publicKey: '',
    adminEmail: ''
  },

  // Google Analytics
  analytics: {
    trackingId: 'YOUR_GA_TRACKING_ID' // e.g., 'G-XXXXXXXXXX'
  },

  // Stripe Configuration (for payment processing)
  stripe: {
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    // Note: Never expose your secret key in frontend code
    // Use a backend API for actual payment processing
  },

  // Calendly Integration
  calendly: {
    username: '', // e.g., 'aasaantech'
    getEmbedUrl: (eventType = '') => {
      const base = `https://calendly.com/${config.calendly.username}`;
      return eventType ? `${base}/${eventType}` : base;
    }
  },

  // Cal.com (Open-source scheduling alternative)
  calcom: {
    username: '', // e.g., 'skillforge' -> https://cal.com/skillforge
    getUrl: (eventType = '') => {
      const base = `https://cal.com/${config.calcom.username}`;
      return eventType ? `${base}/${eventType}` : base;
    }
  }
};

// Helper function to update WhatsApp links throughout the app
export const getWhatsAppUrl = (customMessage = '') => {
  const number = config.whatsapp.number;
  const message = customMessage || config.whatsapp.message;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};


