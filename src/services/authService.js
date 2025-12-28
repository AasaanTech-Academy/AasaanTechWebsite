import api from './api';
import { STORAGE_KEYS } from '../utils/constants';

export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.data.token);
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      // If backend is not connected, throw a user-friendly error
      if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
        throw new Error('Unable to connect to server. Please check your connection.');
      }
      throw error;
    }
  },
  
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      if (response.data.token) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.data.token);
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      // If backend is not connected, throw a user-friendly error
      if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
        throw new Error('Unable to connect to server. Please check your connection.');
      }
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  },
  
  getCurrentUser: () => {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }
};

