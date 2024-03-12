/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from './auth/authSlice';
// import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
  mode: 'cors',
  baseUrl: import.meta.env.VITE_APP_API,
  prepareHeaders: async (headers, {getState,  endpoint }) => {
    const token = getState()?.auth?.access_token || localStorage.getItem('access_token');  
    headers.set('Content-Type', 'application/json');
   
   
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    // console.log(result?.error?.data.error
    //   , 'result?.error >>>')
    if (result?.error?.status === 401) {
      // api.dispatch(logout());
      // localStorage.clear();
    }
    return result;
  },
  endpoints: (builder) => ({}),
});
