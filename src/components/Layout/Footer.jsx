import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/services', label: 'Services' },
      { path: '/contact', label: 'Contact' },
      { path: '/blog', label: 'Blog' }
    ],
    courses: [
      { path: '/courses', label: 'All Courses' },
      { path: '/courses?category=web', label: 'Web Development' },
      { path: '/courses?category=data', label: 'Data Science' },
      { path: '/courses?category=cloud', label: 'Cloud Computing' }
    ],
    support: [
      { path: '/contact', label: 'Help Center' },
      { path: '/contact', label: 'FAQs' },
      { path: '/contact', label: 'Privacy Policy' },
      { path: '/contact', label: 'Terms of Service' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/Copilot_20251115_184623.png" alt="AasaanTech Academy" />
              <div className="footer-brand">
                <div className="footer-brand-line">
                  <span className="footer-aasaan">Aasaan</span>
                  <span className="footer-tech">Tech</span>
                </div>
                <div className="footer-academy">Academy</div>
              </div>
            </div>
            <p className="footer-description">
              Empowering tomorrow's techies with cutting-edge training and industry expertise.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Courses</h4>
            <ul className="footer-links">
              {footerLinks.courses.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-text">
              Subscribe to get updates on new courses and offers.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <motion.button
                type="submit"
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} AasaanTech Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
