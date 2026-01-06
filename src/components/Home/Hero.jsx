import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Common/Button';
import './Hero.css';
import useTechiesColor from '../Common/useTechiesColor';

const Hero = () => {



  return (
    <section className="mh-section">
      <div className="mh-bg">
        <div className="mh-gradient"></div>
        <div className="mh-particles">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="mh-particle"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 10}%`,
              }}
              animate={{ y: [0, -80, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      <div className="mh-content">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mh-left"
        >
          <h1 className="mh-title">
            Empowering Tomorrow’s{' '}
            <span style={{ color: useTechiesColor() }}>{'Techies'}</span>
          </h1>

          <p className="mh-desc">
            Learn industry-ready skills from experts. Build real-world projects and launch a
            successful tech career with confidence.
          </p>

          <div className="mh-buttons">
            <Link to="/courses">
              <Button size="md" variant="primary">Explore Courses</Button>
            </Link>
            <Link to="/about">
              <Button size="md" variant="outline">Learn More</Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mh-right"
        >
          <div className="mh-img-wrapper">
            <img src="/images/herosection.jpg" alt="AasaanTech Academy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
