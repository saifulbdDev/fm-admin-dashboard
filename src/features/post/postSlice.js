/* eslint-disable no-unsafe-optional-chaining */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  postList: [],
  snippets: [],
  banners: [],
  recommendedPost: [],
  explorelist: [],
  authorlist: [],
  taglist: [],
  categoryList: [],
  subCategoryList: []
};

const postSlice = createSlice({
  name: " post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postList = [...state.postList, ...action?.payload];
    },
    setCategoryList: (state, action) => {
      state.categoryList = [...state.categoryList, ...action?.payload];
    },
    setSubCategoryList: (state, action) => {
      state.subCategoryList = [...state.subCategoryList, ...action?.payload];
    },
    setSnippetsList: (state, action) => {
      state.snippets = [...state.snippets, ...action?.payload];
    },
    setBannerList: (state, action) => {
      state.banners = [...state.banners, ...action?.payload];
    },
    setRecommendedPostList: (state, action) => {
      state.recommendedPost = [...state.recommendedPost, ...action?.payload];
    },
    setTagList: (state, action) => {
      state.taglist = [...state.taglist, ...action?.payload];
    },
    setAuthorList: (state, action) => {
      state.authorlist = [...state.authorlist, ...action?.payload];
    },
    setExplorelist: (state, action) => {
      state.explorelist = [...state.explorelist, ...action?.payload];
    }
  }
});

export const {
  setPosts,
  setCategoryList,
  setSubCategoryList,
  setSnippetsList,
  setBannerList,
  setRecommendedPostList,
  setTagList,
  setAuthorList,
  setExplorelist
} = postSlice.actions;
export default postSlice.reducer;
