import AnimatedSection from '../components/Common/AnimatedSection';
import Card from '../components/Common/Card';
import BackToTop from '../components/UI/BackToTop';
import { useMemo } from 'react';
import './About.css';

// Component for heading with white + random color
const GradientHeading = ({ whiteText, colorText }) => {
  const colors = ['#48e180', '#18438e']; // green & blue
  const randomColor = useMemo(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  }, [colorText]);

  return (
    <h1 className="page-title">
      <span style={{ color: '#ffffff', marginRight: '4px' }}>{whiteText}</span>
      <span style={{ color: randomColor }}>{colorText}</span>
    </h1>
  );
};

const About = () => {
  const stats = [
    { number: '5000+', label: 'Students Enrolled' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '100+', label: 'Courses Available' },
    { number: '95%', label: 'Job Placement Rate' }
  ];

  const values = [
    { icon: '🎯', title: 'Excellence', description: 'We strive for excellence in everything we do' },
    { icon: '🤝', title: 'Integrity', description: 'Honest and transparent in all our dealings' },
    { icon: '💡', title: 'Innovation', description: 'Constantly evolving with latest technologies' },
    { icon: '❤️', title: 'Student Success', description: 'Your success is our ultimate goal' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header text-center">
              <GradientHeading whiteText="About" colorText="AasaanTech" />
              <p className="page-description">
                Empowering tomorrow's techies with world-class training
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="about-mission section">
        <div className="container mission-content">
          <AnimatedSection direction="left">
            <Card className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To provide accessible, high-quality technology education that
                empowers individuals to build successful careers in the tech industry.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Card className="mission-card">
              <h2>Our Vision</h2>
              <p>
                To become the leading technology training academy, recognized
                for producing skilled professionals who drive innovation.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="about-stats section">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="section-title text-center">Our Impact</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <Card className="stat-card">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="section-title text-center text-uppercase">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <Card className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default About;
