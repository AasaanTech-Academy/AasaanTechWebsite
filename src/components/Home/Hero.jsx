import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => {
            const randomX = (i % 10) * 10 - 50;
            const randomDuration = 2 + (i % 3);
            const randomDelay = (i % 5) * 0.4;
            return (
              <motion.div
                key={i}
                className="particle"
                style={{
                  left: `${(i % 10) * 10}%`,
                  top: `${(Math.floor(i / 10)) * 10}%`
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, randomX, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Empowering Tomorrow's{' '}
            <span className="text-gradient">Techies</span>
          </h1>
          <p className="hero-description">
            Join us now and elevate your tech skills to new heights! Master
            cutting-edge technologies with industry experts and build a
            successful career in tech.
          </p>
          <div className="hero-buttons">
            <Link to="/courses">
              <Button size="lg" variant="primary">
                Explore Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <div className="hero-image-wrapper">
            <img src="/images/herosection.jpg" alt="AasaanTech Academy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

