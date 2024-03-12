import { apiSlice } from "@/features/apiSlice";

export const snippetApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 5000,
  snippetTypes: ["Snippet"],
  endpoints: (builder) => ({
    getSnippetList: builder.query({
      query: () => {
        let url = "/secretQWERTY/admin/api/page/snippets/";
      
        return {
          url: url,
          method: "GET"
        };
      },
      providesTags: ["Snippet"]
    }),

    updateSnippet: builder.mutation({
      query: (values) => {
        const postBody = JSON.stringify(values)       
        return {
          url: `/secretQWERTY/admin/api/page/snippets/edit/${values.id}/`,
          method: "POST",
          body: postBody,
          formData: true
        };
      },
      invalidatesTags: ["Snippet"]
    }),
    addSnippet: builder.mutation({
      query: (values) => {
        const postBody = JSON.stringify(values)      
        return {        
          url: `/secretQWERTY/admin/api/page/snippets/add/`,
          method: "POST",
          body: postBody,
         
        };
      },
      invalidatesTags: ["Snippet"]
    }),

    deleteSnippet: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/blog/api/blog/delete/${query}/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Snippet"]
    }),
    
    getSnippetDetail: builder.query({
      query: (id) => ({
        url: `/secretQWERTY/admin/api/page/snippets/detail/${id}`,
        method: "GET"
      }),
      providesTags: ["Snippet"]
    }),
    getSnippetCategory: builder.query({
      query: () => ({
        url: `secretQWERTY/admin/api/page/snippets/category`,
        method: "GET"
      }),
   
      transformResponse: (response) => {
     
        const snippetCategory = response.data?.map((item) => ({
          value: item.id,
          label: item.name
        }));

        return { snippetCategory };
      }
    })
  })
});

export const {
  useUpdateSnippetMutation,
  useAddSnippetMutation,
  useGetSnippetDetailQuery,
  useDeleteSnippetMutation,
  useGetSnippetCategoryQuery,
  useGetSnippetListQuery
} = snippetApi;
