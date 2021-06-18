import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (payload) => {
    console.log('load post');
    return axios.get(`/api/post?page=${payload}`);
  }
);

export const loadPost = createAsyncThunk('posts/loadPost', async (payload) => {
  return axios.get(`/api/post/${payload}`);
});

export const addPost = createAsyncThunk('posts/addPost', async (payload) => {
  console.log('fsdfsdfsdf');
  console.log(payload);
  return axios.post('/api/post', payload);
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    error: '',
    posts: [],
    postsCount: 0,
    currentPost: {},
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
      state.loading = false;
      state.posts = payload.data.posts;
      state.postsCount = payload.data.postsCount;
    },
    [loadPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [loadPost.pending]: (state, action) => {
      state.loading = true;
    },
    [loadPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.currentPost = payload.data.post;
    },
    [loadPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addPost.pending]: (state, action) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts.push(...payload.data.post);
    },
    [addPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

//export const { test1, test2 } = postSlice.actions;

export default postsSlice.reducer;
