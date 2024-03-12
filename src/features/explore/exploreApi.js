import { apiSlice } from "@/features/apiSlice";

export const exploreApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 5000,
  exploreTypes: ["Explore"],
  endpoints: (builder) => ({
    getExploreList: builder.query({
      query: (payload) => {
        let url = "/explore-list-with-pagination/";
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
      providesTags: ["Explore"]
    }),

    editExplore: builder.mutation({
      query: ({ form, id }) => {
        return {
          url: `/explore-f-op-create/${id}`,
          method: "PUT",
          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Explore"]
    }),
    addExplore: builder.mutation({
      query: (form) => {
        return {
          url: `/explore-f-op-create/`,
          method: "POST",

          body: form,
          formData: true
        };
      },
      invalidatesTags: ["Explore"]
    }),
    deleteExplore: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/blog/api/blog/delete/${query}/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Explore"]
    }),
    getExploreDetail: builder.query({
      query: (id) => ({
        url: `/explore-f-op-create/${id}`,
        method: "GET"
      }),
      providesTags: ["Explore"]
    })
  })
});

export const {
  useEditExploreMutation,
  useAddExploreMutation,
  useGetExploreDetailQuery,
  useDeleteExploreMutation,
  useGetExploreListQuery
} = exploreApi;
