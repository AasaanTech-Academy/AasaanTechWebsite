import { Link } from 'react-router-dom';
import AnimatedSection from '../components/Common/AnimatedSection';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import BackToTop from '../components/UI/BackToTop';
import './Services.css';
import useTechiesColor from '../components/Common/useTechiesColor';

const Services = () => {
  const services = [
    {
      icon: '🎓',
      title: 'Individual Training',
      description: 'Personalized one-on-one training sessions tailored to your learning pace and goals.',
      features: ['Flexible scheduling', 'Personalized curriculum', 'Direct instructor access', 'Progress tracking']
    },
    {
      icon: '🏢',
      title: 'Corporate Training',
      description: 'Comprehensive training programs designed for teams and organizations.',
      features: ['Customized programs', 'On-site or remote', 'Team assessments', 'Certification support']
    },
    {
      icon: '📜',
      title: 'Certification Programs',
      description: 'Industry-recognized certification courses to boost your career credentials.',
      features: ['Industry standards', 'Exam preparation', 'Practice tests', 'Certification badge']
    },
    {
      icon: '💼',
      title: 'Career Counseling',
      description: 'Expert guidance to help you navigate your tech career path.',
      features: ['Resume review', 'Interview prep', 'Career planning', 'Job placement support']
    },
    {
      icon: '🔧',
      title: 'Custom Training',
      description: 'Bespoke training solutions designed for your specific needs.',
      features: ['Tailored curriculum', 'Flexible duration', 'Specialized topics', 'Ongoing support']
    },
    {
      icon: '🌐',
      title: 'Online Learning Platform',
      description: 'Access our comprehensive online learning platform anytime, anywhere.',
      features: ['24/7 access', 'Video lectures', 'Interactive exercises', 'Community forum']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Our <span style={{ color: useTechiesColor() }}>Services</span>
              </h1>
              <p className="page-description">
                Comprehensive training solutions to meet all your learning needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="services-content section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
                <Card className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Button variant="outline" className="service-button">
                    Learn More
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="services-cta section">
        <div className="container">
          <AnimatedSection direction="up">
            <Card className="cta-card">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today to discuss your training needs</p>
              <Link to="/contact">
                <Button size="lg" variant="primary">
                  Contact Us
                </Button>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Services;

