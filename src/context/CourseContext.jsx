import { createContext, useContext, useState } from 'react';
import { courses } from '../data/courses';

const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [allCourses] = useState(courses);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCourses = (category, query) => {
    let filtered = allCourses;

    if (category && category !== 'All') {
      filtered = filtered.filter(course => course.category === category);
    }

    if (query) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  };

  const getCourseById = (id) => {
    return allCourses.find(course => course.id === parseInt(id));
  };

  return (
    <CourseContext.Provider
      value={{
        allCourses,
        filteredCourses,
        selectedCategory,
        searchQuery,
        setSelectedCategory,
        setSearchQuery,
        filterCourses,
        getCourseById
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourses must be used within CourseProvider');
  }
  return context;
};

