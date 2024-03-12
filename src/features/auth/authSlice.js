import { createSlice } from "@reduxjs/toolkit";

let access_token;
let refresh_token;
let user = {};
if (typeof window !== "undefined") {
  access_token = localStorage.getItem("access_token") || null;
  refresh_token = localStorage.getItem("refresh_token") || null;
  const storedUserJSONString = localStorage.getItem("user") || "{}";
  user = JSON.parse(storedUserJSONString);
}

const initialState = {
  access_token,
  refresh_token,
  user
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.access_token = action?.payload?.access_token;
      state.user = action?.payload?.user;
      state.refresh_token = action?.payload?.refresh_token;
      localStorage.setItem("user",  JSON.stringify(action?.payload?.user));
      localStorage.setItem("access_token", action?.payload?.access_token);
      localStorage.setItem("refresh_token", action?.payload?.refresh_token);
    },
    logout: (state) => {
      state.access_token = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
    getUser: (state, action) => {
      state.user = { ...action.payload };
    }
  }
});

export const { loggedIn, logout, getUser } = authSlice.actions;
export default authSlice.reducer;
