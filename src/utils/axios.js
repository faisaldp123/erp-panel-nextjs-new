import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  // Set the base URL for your API here
  baseURL: 'http://localhost:8801/',
  headers: {
    'Content-Type': 'application/json',
    
    // You can add more headers here as needed
    'Authorization': Cookies.get("access_token"),
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookie = Cookies.get("access_token");
    if (cookie) {
      config.headers.Authorization = cookie;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken();            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return axiosInstance(originalRequest);
  }
  return Promise.reject(error);
});

export default axiosInstance;
