import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl, config } from '../../utils/config';
import './AskIba.css';

const AskIba = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'book'
  const [status, setStatus] = useState(null);
  const [adminEmail, setAdminEmail] = useState(config.email?.adminEmail || '');

  return (
    <div className="ask-iba-container">
      <AnimatePresence>
        {open && (
          <motion.div
            className="ask-iba-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="ask-iba-header">
              <div className="ask-iba-avatar">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=faces"
                  alt="Ask Iba"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* <span className="ask-iba-emoji" aria-hidden>👶🏻</span> */}
              </div>
              <div className="ask-iba-title">
                <div className="ask-iba-name">Ask Iba</div>
                <div className="ask-iba-subtitle">How can I help you?</div>
              </div>
              <button
                className="ask-iba-close"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="ask-iba-tabs">
              <button
                className={`ask-iba-tab ${activeTab === 'chat' ? 'active' : ''}`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
              <button
                className={`ask-iba-tab ${activeTab === 'book' ? 'active' : ''}`}
                onClick={() => setActiveTab('book')}
              >
                Book
              </button>
            </div>

            {activeTab === 'chat' && (
              <div className="ask-iba-body">
                <div className="ask-iba-message bot">
                  Hi! I’m Iba. Ask me about courses, schedules, fees, or college trainings.
                </div>
                <div className="ask-iba-quick-actions">
                  <button onClick={() => window.location.href = '/courses'}>View Courses</button>
                  <button onClick={() => window.location.href = '/college-training'}>College Training</button>
                  <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
                </div>
                <form
                  className="ask-iba-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const message = formData.get('message')?.toString() || '';
                    const url = getWhatsAppUrl(`Hi! I have a query: ${message}`);
                    window.open(url, '_blank', 'noopener,noreferrer');
                    e.currentTarget.reset();
                  }}
                >
                  <input
                    type="text"
                    name="message"
                    placeholder="Type your question..."
                    aria-label="Your message"
                    required
                  />
                  <button type="submit" className="ask-iba-send">Send</button>
                </form>
                <a
                  className="ask-iba-whatsapp"
                  href={getWhatsAppUrl('Hello Iba! I need assistance.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            )}

            {activeTab === 'book' && (
              <div className="ask-iba-body">
                <div className="ask-iba-message bot">
                  I can help schedule an appointment. Please share a few details.
                </div>
                {/* <div className="ask-iba-admin-field"> */}
                  {/* <label htmlFor="adminEmail">Admin email</label>
                  <input
                    id="adminEmail"
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@example.com"
                  /> */}
                {/* </div> */}
                <form
                  className="ask-iba-book-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setStatus(null);
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name')?.toString() || '';
                    const email = formData.get('email')?.toString() || '';
                    const phone = formData.get('phone')?.toString() || '';

                    // Prefer Cal.com if configured, fallback to Calendly, else mailto
                    if (config.calcom?.username) {
                      const calUrl = config.calcom.getUrl();
                      window.open(calUrl, '_blank', 'noopener,noreferrer');
                    } else if (config.calendly?.username && config.calendly.username !== 'YOUR_CALENDLY_USERNAME') {
                      const calendlyUrl = `${config.calendly.getEmbedUrl()}?hide_gdpr_banner=1&prefill%5Bemail%5D=${encodeURIComponent(email)}`;
                      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
                    } else {
                      const subject = encodeURIComponent('New Appointment Request');
                      const body = encodeURIComponent(
                        `Please schedule an appointment:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n`
                      );
                      window.location.href = `mailto:${adminEmail || config.email?.adminEmail}?subject=${subject}&body=${body}`;
                    }

                    // Attempt Mailchimp subscription (frontend note: for production, proxy via backend)
                    try {
                      const mcPayload = {
                        email_address: email || 'jannath.sarahibrat@gmail.com',
                        status: 'subscribed',
                        merge_fields: {
                          FNAME: name,
                          PHONE: phone
                        }
                      };

                      await fetch(config.mailchimp.getApiUrl(), {
                        method: 'POST',
                        headers: {
                          'Authorization': `Bearer ${config.mailchimp.apiKey}`,
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(mcPayload)
                      });

                      setStatus({ type: 'success', message: 'Booked via Calendly. You’re added to our updates!' });
                      e.currentTarget.reset();
                    } catch (err) {
                      setStatus({ type: 'info', message: 'Opened Calendly. We could not add you to updates.' });
                    }
                  }}
                >
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="tel" name="phone" placeholder="Phone" required />
                  <input type="email" name="email" placeholder="Email (for confirmation)" />
                  <button type="submit" className="ask-iba-send">Book Appointment</button>
                </form>
                {status && (
                  <div className={`ask-iba-status ${status.type}`}>{status.message}</div>
                )}
                <div className="ask-iba-note">We’ll confirm via email/SMS shortly.</div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="ask-iba-button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Open Ask Iba chatbot"
      >
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=faces"
          alt="Ask Iba"
          className="ask-iba-btn-avatar"
        />
        <span className="ask-iba-label">Ask Iba</span>
      </motion.button>
    </div>
  );
};

export default AskIba;


