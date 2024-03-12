import { apiSlice } from "@/features/apiSlice";


export const tagApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 5000,
  tagTypes: ["Tag"],
  endpoints: (builder) => ({
    getTagList: builder.query({
      query: (payload) => {
        let url = "/post-tag-list-with-pagination/";
        const params = new URLSearchParams();

        if (payload?.q) {
          params.append("q", payload.q.trim());
        }

        if (payload?.page > 0) {
          params.append("page", payload.page + 1);
        }
        if (payload?.size > 0) {
          params.append("size", payload.size);
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
      providesTags: ["Tag"],

    
    }),

    editTag: builder.mutation({
      query: ({ form, id }) => {
        return {
          url: `/post-tag-update/${id}`,
          method: "PUT",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Tag"]
    }),
    addTag: builder.mutation({
      query: (form) => {
        return {
          url: `/post-tag-create`,
          method: "POST",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Tag"]
    }),

    deleteTag: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/blog/api/blog/delete/${query}/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Tag"]
    }),

    getTagDetail: builder.query({
      query: (id) => ({
        url: `/post-tag-update/${id}`,
        method: "GET"
      }),
      providesTags: ["Tag"]
    })
  })
});

export const {
  useEditTagMutation,
  useAddTagMutation,
  useGetTagDetailQuery,
  useDeleteTagMutation,
  useGetTagListQuery
} = tagApi;
