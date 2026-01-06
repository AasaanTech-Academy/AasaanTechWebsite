import { motion } from 'framer-motion';
import { collegeTestimonials } from '../data/collegeTestimonials';
import AnimatedSection from '../components/Common/AnimatedSection';
import Button from '../components/Common/Button';
import Card from '../components/Common/Card';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/config';
import './InstitutionalCollaboration.css';
import useTechiesColor from '../components/Common/useTechiesColor';

const InstitutionalCollaboration = () => {
  return (
    <div className="institutional-collaboration-page">
      <section className="collaboration-hero">
        <div className="hero-content">
          <h1>
            <span className="hero-title-white">Institutional </span>
            <span style={{ color: useTechiesColor() }}>Collaboration</span>
          </h1>
          <p>
            Partnering with educational institutions to bridge the gap between academia and industry
          </p>
        </div>
      </section>

      <AnimatedSection className="partnerships-section">
        <div className="container">
          <h2>Our Partnerships</h2>
          <p className="section-description">
            We've successfully collaborated with numerous colleges and universities across the country,
            delivering high-quality training programs that enhance student employability.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Institutions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Training Programs</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="highlights-section">
        <div className="container">
          <h2>Training Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Industry-Aligned Curriculum</h3>
              <p>Our programs are designed in collaboration with industry experts to ensure students learn the most relevant and in-demand skills.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>Hands-On Learning</h3>
              <p>Practical, project-based approach that allows students to apply concepts in real-world scenarios and build a portfolio.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📈</div>
              <h3>Placement Support</h3>
              <p>Enhanced placement opportunities with resume building, interview preparation, and industry connections.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🏆</div>
              <h3>Certification</h3>
              <p>Recognized certificates that add value to student profiles and demonstrate their commitment to professional development.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>Performance Analytics</h3>
              <p>Detailed reports and analytics for institutions to track student progress and program effectiveness.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔄</div>
              <h3>Continuous Support</h3>
              <p>Ongoing support and resources even after program completion, including access to learning materials and community.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="testimonials-section">
        <div className="container">
          <h2>What Our Partners Say</h2>
          <p className="section-description">
            Hear from faculty members, coordinators, and administrators who have worked with us
          </p>

          <div className="testimonials-grid">
            {collegeTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="testimonial-card">
                  <div className="testimonial-header">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                      onError={(e) => {
                        e.target.src = '/images/herosection.jpg';
                      }}
                    />
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                      <p className="testimonial-college">{testimonial.college}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-program">
                    <strong>Program:</strong> {testimonial.program}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="certification-section">
        <div className="container">
          <div className="certification-content">
            <div className="certification-text">
              <h2>Certification & Reporting</h2>
              <p>
                We provide comprehensive certification and reporting services to help institutions
                track and showcase student achievements.
              </p>
              <ul className="certification-features">
                <li>✓ Branded certificates for all participants</li>
                <li>✓ Digital certificates with verification</li>
                <li>✓ Detailed performance reports for institutions</li>
                <li>✓ Analytics on student engagement and progress</li>
                <li>✓ Customizable certificate templates</li>
                <li>✓ Batch-wise performance summaries</li>
              </ul>
            </div>
            <div className="certification-visual">
              <div className="certificate-preview">
                <div className="certificate-content">
                  <h3>Certificate of Completion</h3>
                  <p>This certifies that</p>
                  <div className="certificate-name">Student Name</div>
                  <p>has successfully completed</p>
                  <div className="certificate-program">Program Name</div>
                  <div className="certificate-date">Date: ___________</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Join our network of partner institutions and provide your students with
              industry-relevant training that enhances their career prospects.
            </p>
            <div className="cta-buttons">
              <Link to="/college-training">
                <Button variant="primary" size="lg">
                  Request Training
                </Button>
              </Link>
              <a
                href={getWhatsAppUrl('Hello! I am interested in partnering with AasaanTech for college training programs.')}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta"
              >
                <span>💬</span> Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default InstitutionalCollaboration;

