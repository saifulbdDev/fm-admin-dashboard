import { apiSlice } from '@/features/apiSlice';
import { logout, loggedIn } from './authSlice';
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
   
    login: builder.mutation({
      query: (data) => ({
        url: `/api/login/`,
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled,  dispatch}) {
        try {
          const response = await queryFulfilled;
       
          if (response?.data?.access_token) {
            dispatch(loggedIn(response?.data));

          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/api/logout/`,
        method: 'POST'
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if(result?.data?.status === 'success'){

            dispatch(logout());
          }

        } catch (err) {
          // do nothing
        }
      }
    }),
  
  
  })
});

export const {

  useLoginMutation,
 
  useLogoutMutation
} = authApi;
