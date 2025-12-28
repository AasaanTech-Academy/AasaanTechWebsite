import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../Common/Card';
import { formatPrice } from '../../utils/helpers';
import './CourseCard.css';

const CourseCard = ({ course, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/courses/${course.id}`} className="course-card-link">
        <Card className="course-card">
          <div className="course-image-wrapper">
            <img src={course.image} alt={course.title} />
            <div className="course-overlay">
              <span className="course-category">{course.category}</span>
              <div className="course-rating">
                <span>⭐</span>
                <span>{course.rating}</span>
              </div>
            </div>
          </div>
          <div className="course-content">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <span className="course-duration">⏱ {course.duration}</span>
              <span className="course-students">👥 {course.students} students</span>
            </div>
            <div className="course-footer">
              <div className="course-price">Get Quote</div>
              {/* <div className="course-instructor">By {course.instructor}</div> */}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CourseCard;

