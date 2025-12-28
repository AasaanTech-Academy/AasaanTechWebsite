import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { formatPrice } from '../utils/helpers';
import { instructors } from '../data/instructors';
import { courses } from '../data/courses';
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import Card from '../components/Common/Card';
import CourseCard from '../components/Courses/CourseCard';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const { getCourseById } = useCourses();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const course = getCourseById(id);
  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="container">
          <h1>Course not found</h1>
          <Link to="/courses">Back to Courses</Link>
        </div>
      </div>
    );
  }

  const instructor = instructors.find((inst) => inst.id === course.instructorId);
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="course-detail-page">
      <div className="course-hero">
        <div className="course-hero-overlay"></div>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="course-hero-content">
              <span className="course-category-badge">{course.category}</span>
              <h1 className="course-hero-title">{course.title}</h1>
              <p className="course-hero-description">{course.description}</p>
              <div className="course-hero-meta">
                <span>⭐ {course.rating}</span>
                <span>👥 {course.students} students</span>
                <span>⏱ {course.duration}</span>
              </div>
              <Button
                size="lg"
                variant="primary"
                onClick={() => setIsEnrollModalOpen(true)}
              >
                Get Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="course-content section">
        <div className="container">
          <div className="course-tabs">
            {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
              <button
                key={tab}
                className={`course-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="course-tab-content">
            {activeTab === 'overview' && (
              <AnimatedSection direction="up">
                <div className="tab-panel">
                  <h2>Course Overview</h2>
                  <p>{course.description}</p>
                  <div className="course-details-grid">
                    <Card className="detail-card">
                      <h3>Duration</h3>
                      <p>{course.duration}</p>
                    </Card>
                    <Card className="detail-card">
                      <h3>Level</h3>
                      <p>{course.level}</p>
                    </Card>
                    <Card className="detail-card">
                      <h3>Schedule</h3>
                      <p>{course.schedule}</p>
                    </Card>
                    <Card className="detail-card">
                      <h3>Students</h3>
                      <p>{course.students} enrolled</p>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {activeTab === 'curriculum' && (
              <AnimatedSection direction="up">
                <div className="tab-panel">
                  <h2>Course Curriculum</h2>
                  <ul className="curriculum-list">
                    {course.curriculum.map((item, index) => (
                      <li key={index} className="curriculum-item">
                        <span className="curriculum-number">{index + 1}</span>
                        <span className="curriculum-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}

            {activeTab === 'instructor' && instructor && (
              <AnimatedSection direction="up">
                <div className="tab-panel">
                  <h2>Instructor</h2>
                  <Card className="instructor-card">
                    <div className="instructor-header">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="instructor-image"
                      />
                      <div className="instructor-info">
                        <h3>{instructor.name}</h3>
                        <p className="instructor-title">{instructor.title}</p>
                        <div className="instructor-rating">
                          <span>⭐ {instructor.rating}</span>
                          <span>👥 {instructor.students} students</span>
                        </div>
                      </div>
                    </div>
                    <p className="instructor-bio">{instructor.bio}</p>
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
                  </Card>
                </div>
              </AnimatedSection>
            )}

            {activeTab === 'reviews' && (
              <AnimatedSection direction="up">
                <div className="tab-panel">
                  <h2>Student Reviews</h2>
                  <p>Reviews coming soon...</p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>

      {relatedCourses.length > 0 && (
        <div className="related-courses section">
          <div className="container">
            <AnimatedSection direction="up">
              <h2 className="section-title">Related Courses</h2>
              <div className="related-courses-grid">
                {relatedCourses.map((relatedCourse) => (
                  <CourseCard key={relatedCourse.id} course={relatedCourse} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      )}

      <Modal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        title="Request Quote"
      >
        <div className="enroll-modal-content">
          <h3>{course.title}</h3>
          <p>Please provide your details and we'll send you a customized quote for this course.</p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);
              
              // Send email with quote request
              const emailBody = `
                Quote Request for Course:
                
                Course: ${course.title}
                Name: ${data.name}
                Email: ${data.email}
                Phone: ${data.phone || 'N/A'}
                Message: ${data.message || 'N/A'}
              `;
              
              // In production, integrate with email service
              console.log('Quote request:', emailBody);
              alert('Thank you! We will send you a quote via email shortly.');
              setIsEnrollModalOpen(false);
            }}
            className="quote-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Requirements</label>
              <textarea id="message" name="message" rows="3"></textarea>
            </div>
            <div className="enroll-modal-actions">
              <Button type="submit" variant="primary">
                Request Quote
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEnrollModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <BackToTop />
    </div>
  );
};

export default CourseDetail;

