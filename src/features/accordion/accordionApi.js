import { apiSlice } from "@/features/apiSlice";


export const accordionApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 5000,
  providesTags: ["Accordion"],
  endpoints: (builder) => ({
    getAccordionList: builder.query({
      query: (payload) => {
        let url = "/fmcsa-banner-list/";      
        const params = new URLSearchParams();      
            
        if (payload?.q) {
          params.append('q', payload.q.trim());
        }
      
        if (payload?.page > 0) {
          params.append('page', payload.page + 1);
        }
        if (payload?.size > 0) {
          params.append('size', payload.size);
        }
      
        // Append parameters to the URL only if there are any
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
      
        return {
          url: url,
          method: "GET"
        };
      },
      providesTags: ["Accordion"],
   
   
    }),
    editAccordion: builder.mutation({
      query: ({ form, id }) => {
        return {
          url: `/banner-update/${id}`,
          method: "PUT",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Accordion"]
    }),
    addAccordion: builder.mutation({
      query: (form) => {
        return {
          url: `/banner-create/`,
          method: "POST",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Accordion"]
    }),

 
    deleteAccordion: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/blog/api/blog/delete/${query}/`,
        method: 'DELETE',
       
      }),
      invalidatesTags: ["Accordion"]
     
    }),

    getAccordionDetail: builder.query({
      query: (id) => ({
        url: `/banner-update/${id}`,
        method: "GET"
      }),
      providesTags: ["Accordion"],
     
    }),
  
  
  })
});

export const {
  useEditAccordionMutation,
  useAddAccordionMutation,
  useGetAccordionDetailQuery,
  useDeleteAccordionMutation,
  useGetAccordionListQuery,

} = accordionApi;
