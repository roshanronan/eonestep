import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 second timeout
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
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
    if (error.response?.status === 401) {
      // Clear invalid token
      localStorage.removeItem('token');
      // Optionally redirect to login
      window.location.href = '/login';
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