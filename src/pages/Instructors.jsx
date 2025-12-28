import { Link } from 'react-router-dom';
import { instructors } from '../data/instructors';
import Card from '../components/Common/Card';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './Instructors.css';

const Instructors = () => {
  return (
    <div className="instructors-page">
      <div className="instructors-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Our <span className="text-gradient">Instructors</span>
              </h1>
              <p className="page-description">
                Learn from industry experts with years of real-world experience
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="instructors-content section">
        <div className="container">
          <div className="instructors-grid">
            {instructors.map((instructor, index) => (
              <AnimatedSection key={instructor.id} direction="up" delay={index * 0.1}>
                <Card className="instructor-card">
                  <div className="instructor-image-wrapper">
                    <img src={instructor.image} alt={instructor.name} />
                    <div className="instructor-overlay">
                      <div className="instructor-social">
                        {instructor.social.linkedin && (
                          <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer">
                            💼
                          </a>
                        )}
                        {instructor.social.twitter && (
                          <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer">
                            🐦
                          </a>
                        )}
                        {instructor.social.github && (
                          <a href={instructor.social.github} target="_blank" rel="noopener noreferrer">
                            💻
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="instructor-info">
                    <h3 className="instructor-name">{instructor.name}</h3>
                    <p className="instructor-title">{instructor.title}</p>
                    <p className="instructor-bio">{instructor.bio}</p>
                    <div className="instructor-stats">
                      <span>⭐ {instructor.rating}</span>
                      <span>👥 {instructor.students} students</span>
                    </div>
                    <div className="instructor-expertise">
                      <h4>Expertise:</h4>
                      <div className="expertise-tags">
                        {instructor.expertise.map((skill) => (
                          <span key={skill} className="expertise-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Instructors;

