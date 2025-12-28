export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  COURSES: '/courses',
  COURSE_DETAIL: '/courses/:id',
  SERVICES: '/services',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  BLOG: '/blog',
  BLOG_POST: '/blog/:id',
  INSTRUCTORS: '/instructors',
  DASHBOARD: '/dashboard',
  EXAM_PORTAL: '/exams'
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data'
};

