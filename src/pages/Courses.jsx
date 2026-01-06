import { useEffect} from 'react';
import { useCourses } from '../context/CourseContext';
import CourseFilter from '../components/Courses/CourseFilter';
import CourseGrid from '../components/Courses/CourseGrid';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './Courses.css';
import useTechiesColor from '../components/Common/useTechiesColor';

const Courses = () => {
  const { filteredCourses, selectedCategory, searchQuery, filterCourses } = useCourses();


  useEffect(() => {
    filterCourses(selectedCategory, searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchQuery]);

  return (
    <div className="courses-page">
      <div className="courses-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Our <span style={{ color: useTechiesColor() }}>Courses</span>
              </h1>
              <p className="page-description">
                Discover a wide range of courses designed to advance your career
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="courses-content section">
        <div className="container">
          <CourseFilter />
          <CourseGrid courses={filteredCourses} />
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Courses;

