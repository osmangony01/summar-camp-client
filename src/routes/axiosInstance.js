import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  // You can also include other Axios configuration options here
});

export default axiosInstance;
