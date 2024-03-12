import { apiSlice } from "@/features/apiSlice";

export const authorApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 5000,
  authorTypes: ["Author"],
  endpoints: (builder) => ({
    getAuthorList: builder.query({
      query: (payload) => {
        let url = "/fmcsa-author-list/";
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
      providesTags: ["Author"]
    }),

    editAuthor: builder.mutation({
      query: ({ form, id }) => {
        return {
          url: `/authors-update/${id}`,
          method: "PUT",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Author"]
    }),
    addAuthor: builder.mutation({
      query: (form) => {
        return {
          url: `/author-create/`,
          method: "POST",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Author"]
    }),

    deleteAuthor: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/blog/api/blog/delete/${query}/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Author"]
    }),

    getAuthorDetail: builder.query({
      query: (id) => ({
        url: `/authors-update/${id}`,
        method: "GET"
      }),
      providesTags: ["Author"]
    })
  })
});

export const {
  useEditAuthorMutation,
  useAddAuthorMutation,
  useGetAuthorDetailQuery,
  useDeleteAuthorMutation,
  useGetAuthorListQuery
} = authorApi;
