import { Link } from 'react-router-dom';
import { useCourses } from '../../context/CourseContext';
import CourseGrid from '../Courses/CourseGrid';
import AnimatedSection from '../Common/AnimatedSection';
import Button from '../Common/Button';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const { allCourses } = useCourses();
  const featuredCourses = allCourses.slice(0, 6);

  return (
    <section className="featured-courses section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="section-header">
            <h2 className="section-title">
              Featured <span className="text-gradient">Courses</span>
            </h2>
            <p className="section-description">
              Explore our most popular courses designed to boost your career
            </p>
          </div>
        </AnimatedSection>
        <CourseGrid courses={featuredCourses} />
        <AnimatedSection direction="up" delay={0.3}>
          <div className="section-footer">
            <Link to="/courses">
              <Button size="lg" variant="primary">
                View All Courses
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedCourses;

