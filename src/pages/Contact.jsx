import AnimatedSection from '../components/Common/AnimatedSection';
import ContactForm from '../components/Forms/ContactForm';
import Card from '../components/Common/Card';
import BackToTop from '../components/UI/BackToTop';
import './Contact.css';

// Import icons from react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Gandhi Road, Kallakurichi, TN 606202'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      content: '+91 79041 23290'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@aasaantech.com'
    },
    {
      icon: <FaClock />,
      title: 'Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="page-description">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection direction="left">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                  Have questions? We're here to help! Reach out to us through
                  any of the following channels.
                </p>
                <div className="contact-info-grid">
                  {contactInfo.map((info) => (
                    <Card key={info.title} className="contact-info-card">
                      <div className="contact-info-icon">{info.icon}</div>
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Card className="contact-form-card">
                <h2>Send us a Message</h2>
                <ContactForm />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Contact;
