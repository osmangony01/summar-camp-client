import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  // You can also include other Axios configuration options here
});

export default instance;
