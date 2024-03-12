import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./apiSlice";
import postReducer from "./post/postSlice";
import authReducer from "./auth/authSlice";
export const store = configureStore({
    reducer: {   
      post: postReducer,
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,     
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
  });
  