import { useState, useEffect } from 'react';
import { useCourses } from '../../context/CourseContext';
import { categories } from '../../data/courses';
import { debounce } from '../../utils/helpers';
import './CourseFilter.css';

const CourseFilter = () => {
  const {
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery,
    filterCourses
  } = useCourses();

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const debouncedFilter = debounce((category, query) => {
    filterCourses(category, query);
  }, 300);

  useEffect(() => {
    debouncedFilter(selectedCategory, localSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, localSearch]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    setSearchQuery(value);
  };

  return (
    <div className="course-filter">
      <div className="filter-search">
        <input
          type="text"
          placeholder="Search courses..."
          value={localSearch}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      <div className="filter-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;

