# AasaanTech Academy - Setup Guide

This guide will help you configure all the integrations and features for your AasaanTech Academy website.

## 📋 Table of Contents

1. [WhatsApp Integration](#whatsapp-integration)
2. [Mailchimp Integration](#mailchimp-integration)
3. [Email Service Configuration](#email-service-configuration)
4. [Google Analytics](#google-analytics)
5. [Stripe Payment Integration](#stripe-payment-integration)
6. [Calendly Integration](#calendly-integration)
7. [Color Palette Customization](#color-palette-customization)

---

## 📱 WhatsApp Integration

### Setup Steps:

1. Open `src/utils/config.js`
2. Find the `whatsapp` configuration section
3. Replace `YOUR_WHATSAPP_NUMBER` with your actual WhatsApp number

**Format:** Country code + number (no + or spaces)
- Example for India: `919876543210` (for +91 98765 43210)
- Example for USA: `12025551234` (for +1 202 555 1234)

```javascript
whatsapp: {
  number: '919876543210', // Replace with your number
  message: 'Hello! I am interested in learning more about your training programs.',
}
```

The WhatsApp links throughout the site will automatically use this configuration.

---

## 📧 Mailchimp Integration

### Setup Steps:

1. **Get your Mailchimp API Key:**
   - Log in to Mailchimp
   - Go to Account → Extras → API keys
   - Create a new API key or copy an existing one

2. **Get your List ID:**
   - Go to Audience → All contacts
   - Click on Settings → Audience name and defaults
   - Copy the Audience ID (this is your List ID)

3. **Get your Server Prefix:**
   - Check your API key - it will look like: `abc123def456-us1`
   - The part after the hyphen (e.g., `us1`) is your server prefix

4. **Update `src/utils/config.js`:**
```javascript
mailchimp: {
  apiKey: 'your-api-key-here',
  listId: 'your-list-id-here',
  server: 'us1', // Replace with your server prefix
}
```

5. **Update the College Training Form:**
   - Open `src/components/Forms/CollegeTrainingForm.jsx`
   - Find the `onSubmit` function
   - Uncomment and configure the Mailchimp API call:

```javascript
// Replace the simulated API call with actual Mailchimp integration
const response = await fetch(config.mailchimp.getApiUrl(), {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${config.mailchimp.apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(mailchimpData),
});
```

**Note:** For production, it's recommended to use a backend API endpoint to handle Mailchimp integration securely, as exposing API keys in frontend code is not secure.

---

## 📬 Email Service Configuration

### Option 1: EmailJS (Recommended for Quick Setup)

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an email service:**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an email template:**
   - Go to Email Templates → Create New Template
   - Use variables like `{{name}}`, `{{email}}`, `{{message}}`

4. **Update `src/utils/config.js`:**
```javascript
email: {
  serviceId: 'your-service-id',
  templateId: 'your-template-id',
  publicKey: 'your-public-key',
}
```

5. **Install EmailJS:**
```bash
npm install @emailjs/browser
```

6. **Update form components** to use EmailJS (see EmailJS documentation)

### Option 2: Backend API

Create a backend endpoint to handle email sending using services like:
- SendGrid
- AWS SES
- Nodemailer with SMTP

---

## 📊 Google Analytics

### Setup Steps:

1. **Create a Google Analytics account:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update `src/utils/config.js`:**
```javascript
analytics: {
  trackingId: 'G-XXXXXXXXXX', // Replace with your tracking ID
}
```

3. **Add Google Analytics to your app:**
   - Create `src/utils/analytics.js`:
```javascript
import { config } from './config';

export const initAnalytics = () => {
  if (config.analytics.trackingId && typeof window !== 'undefined') {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.trackingId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', config.analytics.trackingId);
  }
};
```

   - Call `initAnalytics()` in `src/main.jsx` or `src/App.jsx`

---

## 💳 Stripe Payment Integration

### Setup Steps:

1. **Create a Stripe account:**
   - Sign up at [Stripe](https://stripe.com/)
   - Get your Publishable Key from the Dashboard

2. **Update `src/utils/config.js`:**
```javascript
stripe: {
  publishableKey: 'pk_test_...', // Replace with your publishable key
}
```

3. **Install Stripe:**
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

4. **Important Security Note:**
   - Never use your Secret Key in frontend code
   - Create a backend API to handle payment processing securely
   - Use Stripe Elements for payment forms

5. **Implementation:**
   - Create payment components using Stripe Elements
   - Handle payments through your backend API

---

## 📅 Calendly Integration

### Setup Steps:

1. **Create a Calendly account:**
   - Sign up at [Calendly](https://calendly.com/)
   - Set up your event types
   - Get your username (from your Calendly URL)

2. **Update `src/utils/config.js`:**
```javascript
calendly: {
  username: 'aasaantech', // Replace with your Calendly username
}
```

3. **Add Calendly Widget:**
   - Install: `npm install react-calendly`
   - Use in components where you want to embed scheduling

4. **Example Usage:**
```javascript
import { InlineWidget } from 'react-calendly';
import { config } from '../utils/config';

<InlineWidget url={config.calendly.getEmbedUrl('consultation')} />
```

---

## 🎨 Color Palette Customization

The website uses a pastel color scheme. To customize:

1. **Open `src/styles/variables.css`**
2. **Update the color variables:**
```css
:root {
  --color-primary-blue: #A8C8E6;    /* Your primary blue */
  --color-primary-green: #B8E6C8;   /* Your primary green */
  --color-primary-orange: #FFD4B3;   /* Your accent color */
  /* ... more colors ... */
}
```

3. **All components will automatically use the new colors**

---

## 🔒 Security Recommendations

1. **Environment Variables:**
   - Move sensitive keys to environment variables
   - Create `.env` file (add to `.gitignore`)
   - Use `import.meta.env` in Vite to access them

2. **Backend API:**
   - Create a backend API for sensitive operations
   - Never expose API keys in frontend code
   - Use environment variables on the backend

3. **HTTPS:**
   - Ensure your production site uses HTTPS
   - Configure security headers

---

## 🚀 Deployment Checklist

- [ ] Configure WhatsApp number
- [ ] Set up Mailchimp (or use backend API)
- [ ] Configure email service
- [ ] Add Google Analytics tracking ID
- [ ] Set up Stripe (if using payments)
- [ ] Configure Calendly
- [ ] Update color palette if needed
- [ ] Test all forms and integrations
- [ ] Set up HTTPS
- [ ] Configure security headers
- [ ] Test on mobile devices

---

## 📝 Additional Notes

- All placeholder values are marked with `YOUR_*` in the config file
- Replace all placeholders before deploying to production
- Test integrations in a development environment first
- Consider using a backend API for sensitive operations
- Keep your API keys secure and never commit them to version control

---

## 🆘 Support

If you need help with any integration:
1. Check the official documentation for each service
2. Review the code comments in the relevant files
3. Test in development mode first
4. Use browser console to debug any issues

---

**Last Updated:** 2024



