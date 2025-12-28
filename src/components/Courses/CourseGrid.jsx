import CourseCard from './CourseCard';
import './CourseGrid.css';

const CourseGrid = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="course-grid-empty">
        <p>No courses found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="course-grid">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </div>
  );
};

export default CourseGrid;

