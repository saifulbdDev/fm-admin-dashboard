// Main interceptor service

import axios from 'axios';
import Cookies from 'js-cookie';

const privateClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI
});

privateClient.interceptors.request.use(
  (request) => {
    const getToken: any = Cookies.get('accessToken');

    request.headers.Authorization = `Bearer ${getToken}`;
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
