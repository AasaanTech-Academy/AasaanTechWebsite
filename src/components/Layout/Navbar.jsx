import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
     { path: '/', label: 'Home' }, 
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/services', label: 'Services' },
    { path: '/college-training', label: 'College Training' },
    { path: '/institutional-collaboration', label: 'Partnerships' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={false}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/images/Copilot_20251115_184623.png" alt="AasaanTech Academy" />
          <div className="brand-text">
            <div className="brand-line">
              <span className="aasaan">Aasaan</span>
              <span className="tech">Tech</span>
            </div>
            <span className="academy">— Academy —</span>
          </div>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="sign-in-btn">
            SIGN IN
          </Link>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/login"
              className="mobile-sign-in-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SIGN IN
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
