// Configuration file for external integrations
// Replace placeholder values with your actual credentials

export const config = {
  // ===============================
  // WhatsApp Configuration
  // ===============================
  // Replace YOUR_WHATSAPP_NUMBER with your actual WhatsApp number
  // Format: countrycode + number (NO +, NO spaces)
  // Example: "919876543210"
  whatsapp: {
    number: '918903308041', //"919876543210" // ✅ REQUIRED: add your real WhatsApp number here
    message: 'Hello! I am interested in learning more about your training programs.',
    getUrl: () => {
      const number = config.whatsapp.number;
      const message = encodeURIComponent(config.whatsapp.message);
      return `https://wa.me/${number}?text=${message}`;
    }
  },

  // ===============================
  // Mailchimp Configuration
  // ===============================
  // (Not active yet – safe to keep empty)
  mailchimp: {
    apiKey: '',
    listId: '',
    server: '', // e.g., 'us1', 'us2'
    getApiUrl: () => {
      return `https://${config.mailchimp.server}.api.mailchimp.com/3.0/lists/${config.mailchimp.listId}/members`;
    }
  },

  // ===============================
  // Email Configuration
  // ===============================
  // For EmailJS / SendGrid / backend email
  email: {
    serviceId: '',
    templateId: '',
    publicKey: '',
    adminEmail: ''
  },

  // ===============================
  // Google Analytics
  // ===============================
  analytics: {
    trackingId: 'YOUR_GA_TRACKING_ID'
  },

  // ===============================
  // Stripe Configuration
  // ===============================
  stripe: {
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY'
    // ❗ Never expose secret key in frontend
  },

  // ===============================
  // Calendly Integration
  // ===============================
  calendly: {
    username: '',
    getEmbedUrl: (eventType = '') => {
      const base = `https://calendly.com/${config.calendly.username}`;
      return eventType ? `${base}/${eventType}` : base;
    }
  },

  // ===============================
  // Cal.com Integration
  // ===============================
  calcom: {
    username: '',
    getUrl: (eventType = '') => {
      const base = `https://cal.com/${config.calcom.username}`;
      return eventType ? `${base}/${eventType}` : base;
    }
  }
};

// ===============================
// WhatsApp Helper Function
// ===============================
export const getWhatsAppUrl = (customMessage = '') => {
  const number = config.whatsapp.number;
  const message = customMessage || config.whatsapp.message;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
