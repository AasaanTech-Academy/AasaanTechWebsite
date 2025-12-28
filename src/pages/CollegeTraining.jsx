import { useState } from 'react';
import { motion } from 'framer-motion';
import { collegePrograms, programCategories } from '../data/collegePrograms';
import CollegeTrainingForm from '../components/Forms/CollegeTrainingForm';
import AnimatedSection from '../components/Common/AnimatedSection';
import Button from '../components/Common/Button';
import Card from '../components/Common/Card';
import './CollegeTraining.css';

const CollegeTraining = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showForm, setShowForm] = useState(false);

  const filteredPrograms = selectedCategory === 'All' 
    ? collegePrograms 
    : collegePrograms.filter(program => program.category === selectedCategory);

  const handleRequestTraining = () => {
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="college-training-page">
      <section className="college-training-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            College Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Empowering students with industry-relevant skills through on-campus training and workshops
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleRequestTraining}
            >
              Request Training
            </Button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <AnimatedSection className="inquiry-section">
          <div className="container">
            <h2>Request Training for Your College</h2>
            <p className="section-description">
              Fill out the form below and our team will contact you to discuss your training requirements.
            </p>
            <CollegeTrainingForm onSuccess={() => setShowForm(false)} />
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="programs-section">
        <div className="container">
          <h2>Our Training Programs</h2>
          <p className="section-description">
            Choose from our comprehensive range of training programs designed specifically for college students
          </p>

          <div className="category-filter">
            {programCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="programs-grid">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="program-card">
                  <div className="program-image">
                    <img src={program.image} alt={program.title} />
                    <div className="program-badge">{program.format}</div>
                  </div>
                  <div className="program-content">
                    <div className="program-category">{program.category}</div>
                    <h3>{program.title}</h3>
                    <p className="program-description">{program.description}</p>
                    
                    <div className="program-details">
                      <div className="detail-item">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">{program.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Format:</span>
                        <span className="detail-value">{program.format}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Max Students:</span>
                        <span className="detail-value">{program.maxStudents}</span>
                      </div>
                    </div>

                    <div className="program-modules">
                      <h4>Key Modules:</h4>
                      <ul>
                        {program.modules.slice(0, 4).map((module, index) => (
                          <li key={index}>{module}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="program-suitable">
                      <strong>Suitable for:</strong> {program.suitableFor.join(', ')}
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleRequestTraining}
                      className="request-btn"
                    >
                      Request This Program
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="features-section">
        <div className="container">
          <h2>Why Choose Our College Training Programs?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h3>Customizable Modules</h3>
              <p>Tailored curriculum to match your department's specific needs and learning objectives</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of real-world experience</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📜</div>
              <h3>Certification</h3>
              <p>Receive branded certificates upon completion to enhance student portfolios</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Performance Reports</h3>
              <p>Optional detailed reports for institutions on student performance and progress</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>Industry-Relevant</h3>
              <p>Curriculum aligned with current industry standards and job market demands</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Flexible Scheduling</h3>
              <p>Programs designed to fit your academic calendar and student availability</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CollegeTraining;



