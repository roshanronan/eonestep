import axios from 'axios';
import { toast } from "react-toastify";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://eonestep-backend.onrender.com/api',
  // timeout: 20000, // 10 second timeout
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session')).token : null ;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration
    if (error.response?.status === 498) {
      // Clear invalid token
       toast.error("Your session has expired. Please log in again.", { autoClose: 3000 });
      localStorage.removeItem('session');
      // Optionally redirect to login
      setTimeout(() => {  
      window.location.href = '/'; 
      }, 2000);
    }
    
    // Return structured error
    return Promise.reject({
      message: error.response?.data?.message || error.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

// Generic request handler
const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    return response.data;
  } catch (error) {
    throw error;
  }
};

// HTTP methods
const apiService = {
  get: (url, config = {}) => handleRequest(() => api.get(url, config)),
  
  post: (url, data = {}, config = {}) => handleRequest(() => api.post(url, data, config)),
  
  put: (url, data = {}, config = {}) => handleRequest(() => api.put(url, data, config)),
  
  patch: (url, data = {}, config = {}) => handleRequest(() => api.patch(url, data, config)),
  
  delete: (url, config = {}) => handleRequest(() => api.delete(url, config)),
};

export default apiService;