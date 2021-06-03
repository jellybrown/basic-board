import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  console.log("load post");
  return axios.get("/api/post");
});

// 사용시 addPost({ 게시물 })
// addPost를 dipatch 하게되면, 이 함수는 게시물인 payload를 받아서,
//(필요하다면 가공후) 서버에게 보낸다.(return)
export const addPost = createAsyncThunk("posts/addPost", async (payload) => {
  console.log("fsdfsdfsdf");
  console.log(payload);
  return axios.post("/api/post", payload);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    error: "",
    posts: [],
    postCount: "",
  },
  reducers: {
    // test1: (state) => (state.value += 1),
    // test2: (state) => (state.value -= 1)
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [loadPosts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.posts.push(...payload.data.posts);
    },
    [loadPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addPost.pending]: (state, action) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.posts.push(...payload.data.post);
      console.log("성공");
    },
    [addPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

//export const { test1, test2 } = postSlice.actions;

export default postsSlice.reducer;
