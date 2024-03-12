import { apiSlice } from "@/features/apiSlice";
import { updateData } from "@/utils/postData";

import {
  setSnippetsList,
  setCategoryList,
  setBannerList,
  setRecommendedPostList,
  setTagList,
  setAuthorList,
  setSubCategoryList,
  setExplorelist
} from "./postSlice";
export const postApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 5000,
  exploreTypes: ["Page"],
  endpoints: (builder) => ({
    getPostList: builder.query({
      query: (payload) => {
        let url = "/secretQWERTY/admin/blog/api/blog/";
        const params = new URLSearchParams();
        if (payload?.category) {
          params.append("category", payload.category);
        }
        if (payload?.subcategory) {
          params.append("subcategory", payload.subcategory);
        }
        if (payload?.query) {
          params.append("title", payload.query.trim());
        }

        if (payload?.page > 0) {
          params.append("page", payload.page + 1);
        }

        // Append parameters to the URL only if there are any
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return {
          url: url,
          method: "GET"
        };
      }
    }),
    getPageList: builder.query({
      query: (payload) => {
        let url = "/secretQWERTY/admin/api/page/";
        const params = new URLSearchParams();

        if (payload?.query) {
          params.append("title", payload.query.trim());
        }

        if (payload?.page > 0) {
          params.append("page", payload.page + 1);
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

      providesTags: ["Page"]
    }),
    addPage: builder.mutation({
      query: (post) => {
        let formData = new FormData();
        formData.append("title", post.name_post);
        formData.append("content_1", post.content_1);
        formData.append("content_2", post.content_2);
        formData.append("content_3", post.content_3);
        formData.append("status", post.status);
        formData.append("title_seo", post.seo_name_post);
        formData.append("description_seo", post.description_post);
        formData.append("keywords_seo", post.keywords_seo);
        formData.append("robots", post.robots);
        formData.append("slug_seo", post.slug);
        if (post.snippet_1_id > 0) {
          formData.append("snippet_1_id", post.snippet_1_id);
        }
        if (post.snippet_2_id > 0) {
          formData.append("snippet_2_id", post.snippet_2_id);
        }
        if (post.image_post !== null) {
          formData.append("featured_image", post.image_post);
        }
        return {
          url: `secretQWERTY/admin/api/page/add/`,
          method: "POST",
          body: formData,
          formData: true
        };
      },
      invalidatesTags: ["Page"]
    }),
    updatePage: builder.mutation({
      query: (post) => {
        let formData = new FormData();
        formData.append("title", post.name_post);
        formData.append("content_1", post.content_1);
        formData.append("content_2", post.content_2);
        formData.append("content_3", post.content_3);
        formData.append("status", post.status);
        formData.append("title_seo", post.seo_name_post);
        formData.append("description_seo", post.description_post);
        formData.append("keywords_seo", post.keywords_seo);
        formData.append("robots", post.robots);
        formData.append("slug_seo", post.slug);
        if (post.snippet_1_id > 0) {
          formData.append("snippet_1_id", post.snippet_1_id);
        }
        if (post.snippet_2_id > 0) {
          formData.append("snippet_2_id", post.snippet_2_id);
        }
        const imageTypeRegExp = /^image\//;
        if (
          post?.image_post !== null &&
          imageTypeRegExp.test(post?.image_post?.type)
        ) {
          formData.append("featured_image", post?.image_post);
        }
        return {
          method: "POST",
          url: `secretQWERTY/admin/api/page/edit/${post.id}/`,
          body: formData,
          formData: true
        };
      },
      invalidatesTags: ["Page"]
    }),
    deletePage: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/api/page/delete/${query}/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Page"]
    }),
    getPageDetails: builder.query({
      query: (id) => ({
        url: `secretQWERTY/admin/api/page/detail/${id}`,
        method: "GET"
      }),
      providesTags: ["Page"],
      transformResponse: (response) => {
        let {
          featured_image,
          updated_at,
          created_at,
          title,
          snippet_1,
          snippet_2,
          url,
          content_1,
          content_2,
          content_3,
          status
        } = response?.data[0] || {};
        let {
          keywords,
          title: seo_name_post,
          description,
          slug,
          robots
        } = response?.data[1] || {};
        let ViewUrl = url ? import.meta.env.VITE_APP_URL + "/" + url : "";
        let pageData = {
          slug,
          robots,
          seo_name_post,
          description_post: description,
          keywords_seo: keywords,
          image_post: featured_image,
          updated_at,
          created_at,
          title,
          snippet_1_id: snippet_1?.id,
          snippet_2_id: snippet_2?.id,
          url: ViewUrl,
          content_1,
          content_2,
          content_3,
          status
        };

        return { pageData };
      }
    }),

    getCategoryList: builder.query({
      query: () => ({
        url: `/secretQWERTY/admin/blog/api/category/list/`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item.id,
              label: item.category
            }));
            dispatch(setCategoryList(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getSubCategoryList: builder.query({
      query: (value) => ({
        url: `secretQWERTY/admin/blog/api/subcategory/list/?category_id=${value}`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item.id,
              label: item.name
            }));
            dispatch(
              setSubCategoryList([{ value: "all", label: "All" }, ...options])
            );
          } else {
            dispatch(setSubCategoryList([{ value: "all", label: "All" }]));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getSubCategorysList: builder.query({
      query: () => ({
        url: `secretQWERTY/admin/blog/api/subcategory/list/`,
        method: "GET"
      })
    }),
    getSnippetsList: builder.query({
      query: () => ({
        url: `/secretQWERTY/admin/api/page/snippets/`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item?.id,
              label: item?.name
            }));
            dispatch(setSnippetsList(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getBannerList: builder.query({
      query: () => ({
        url: `/all-banner-list`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item?.id,
              label: item?.title
            }));
            dispatch(setBannerList(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getRecommendedPostList: builder.query({
      query: () => ({
        url: `/all-recommended-post-list/`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item?.id,
              label: item?.title
            }));
            dispatch(setRecommendedPostList(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getExploreList: builder.query({
      query: () => ({
        url: `/explore-all-list/`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item?.explore_f_op_id,
              label: item?.explore_f_op_name
            }));
            dispatch(setExplorelist(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getTagList: builder.query({
      query: () => ({
        url: `/post-tag-list/`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item?.post_tag_id,
              label: item?.tag_texts
            }));
            dispatch(setTagList(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getAuthorList: builder.query({
      query: () => ({
        url: `/all-author-list/`,
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response?.data?.data?.length) {
            const options = response.data?.data?.map((item) => ({
              value: item?.fmcsa_author_id,
              label: item?.author_name
            }));
            dispatch(setAuthorList(options));
          }
        } catch (err) {
          // do nothing
        }
      }
    }),
    getBlogDetail: builder.query({
      query: (id) => ({
        url: `/secretQWERTY/admin/blog/api/blog/detail/${id}`,
        method: "GET"
      })
    }),

    getBlogDetailWith: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          // Use Promise.all to execute all API calls concurrently
          const [
            blogResult,
            bannerResult,
            exploreResult,
            posttagResult,
            recommendedPostResult
          ] = await Promise.all([
            fetchWithBQ(`secretQWERTY/admin/blog/api/blog/detail/${_arg}`),
            fetchWithBQ(`banner-with-post/?post=${_arg}`),
            fetchWithBQ(`explore-with-post/?post_id=${_arg}`),
            fetchWithBQ(`post-tag-with-post/?post_id=${_arg}`),
            fetchWithBQ(`recommended-post-with-post-list/?post_id=${_arg}`)
          ]);

          // Check for errors in any of the API calls
          if (
            blogResult?.error ||
            bannerResult?.error ||
            exploreResult?.error ||
            posttagResult?.error ||
            recommendedPostResult?.error
          ) {
            throw new Error("Something went wrong, retrying in 3s...");
          }

          // Execute the data transformation once all API calls are complete
          const editdata = await updateData(
            blogResult?.data?.data,
            bannerResult?.data?.data,
            exploreResult?.data?.data,
            posttagResult?.data?.data,
            recommendedPostResult?.data?.data
          );

          // Return the result
          return { data: editdata };
        } catch (error) {
          // Handle any errors that occurred during the process
          console.error(error);
          return {
            error: error.message || "Something went wrong, retrying in 3s..."
          };
        }
      }
    }),

    deletePost: builder.mutation({
      query: (query) => ({
        url: `secretQWERTY/admin/blog/api/blog/delete/${query}/`,
        method: "DELETE"
      })
    })
  })
});

export const {
  useDeletePageMutation,
  useDeletePostMutation,
  useUpdatePageMutation,
  useAddPageMutation,
  useGetBannerListQuery,
  useGetSubCategoryListQuery,
  useGetSubCategorysListQuery,
  useGetCategoryListQuery,
  useGetSnippetsListQuery,
  useGetExploreListQuery,
  useGetAuthorListQuery,
  useGetTagListQuery,
  useGetRecommendedPostListQuery,
  useGetPostListQuery,
  useGetPageListQuery,
  useGetPageDetailsQuery,
  useGetBlogDetailQuery,
  useGetBlogDetailWithQuery
} = postApi;
