// Main interceptor service

import axios from 'axios';


const privateClient = axios.create({
  baseURL:import.meta.env.VITE_APP_API,
});

privateClient.interceptors.request.use(
  (request) => {
    const token =  localStorage.getItem('access_token');  

    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => error
);

privateClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      //   logout();
    }
  }
);

export default privateClient;
