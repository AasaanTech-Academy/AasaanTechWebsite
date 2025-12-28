import AnimatedSection from '../components/Common/AnimatedSection';
import Card from '../components/Common/Card';
import BackToTop from '../components/UI/BackToTop';
import './About.css';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Students Enrolled' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '100+', label: 'Courses Available' },
    { number: '95%', label: 'Job Placement Rate' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest and transparent in all our dealings'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving with latest technologies'
    },
    {
      icon: '❤️',
      title: 'Student Success',
      description: 'Your success is our ultimate goal'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                About <span className="text-gradient">AasaanTech</span>
              </h1>
              <p className="page-description">
                Empowering tomorrow's techies with world-class training
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="about-mission section">
        <div className="container">
          <div className="mission-content">
            <AnimatedSection direction="left">
              <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                  To provide accessible, high-quality technology education that
                  empowers individuals to build successful careers in the tech
                  industry. We believe that everyone deserves the opportunity to
                  learn and grow, regardless of their background.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="mission-text">
                <h2>Our Vision</h2>
                <p>
                  To become the leading technology training academy, recognized
                  for producing skilled professionals who drive innovation and
                  excellence in the tech industry. We envision a future where
                  quality tech education is accessible to all.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="about-stats section">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="section-title text-center">Our Impact</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} direction="up" delay={index * 0.1}>
                  <Card className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="about-values section">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="section-title text-center">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} direction="up" delay={index * 0.1}>
                  <Card className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default About;

