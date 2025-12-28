import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Common/Button';
import { validateEmail } from '../../utils/helpers';
import { config, getWhatsAppUrl } from '../../utils/config';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // ✅ Send email via EmailJS using config values
      await emailjs.send(
        config.email.serviceId,
        config.email.templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          subject: data.subject,
          message: data.message
        },
        config.email.publicKey
      );

      // ✅ Optional: Mailchimp subscription (only if configured)
      if (config.mailchimp.apiKey && config.mailchimp.listId && config.mailchimp.server) {
        await fetch(config.mailchimp.getApiUrl(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `apikey ${config.mailchimp.apiKey}`
          },
          body: JSON.stringify({
            email_address: data.email,
            status: 'subscribed',
            merge_fields: {
              FNAME: data.name,
              PHONE: data.phone || '',
              SUBJECT: data.subject,
              MSG: data.message
            }
          })
        });
      }

      setSubmitStatus({ type: 'success', message: '✅ Thank you! We will get back to you soon.' });
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            validate: (value) => validateEmail(value) || 'Invalid email address'
          })}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" {...register('phone')} />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject *</label>
        <input
          id="subject"
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className={errors.subject ? 'error' : ''}
        />
        {errors.subject && <span className="error-message">{errors.subject.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows="6"
          {...register('message', { required: 'Message is required' })}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="error-message">{errors.message.message}</span>}
      </div>

      {submitStatus && (
        <div className={`submit-status ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      <div className="form-actions">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          className="submit-button"
        >
          Send Message
        </Button>

        {/* WhatsApp integration via config */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <span>💬</span> Contact via WhatsApp
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
