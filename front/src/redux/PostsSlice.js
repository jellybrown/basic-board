import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
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

export const editPost = createAsyncThunk(
  'post/editPost',
  async (payload, { getState }) => {
    const state = getState();
    return axios.put(`api/post/${state.posts.currentPost._id}`, payload);
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    error: '',
    posts: [],
    postsCount: 0,
    currentPost: {},
    currentPage: 1,
  },
  reducers: {
    editCurrentPage: (state, { payload }) => {
      console.log(payload);
      state.currentPage = payload;
    },
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
    [editPost.pending]: (state, action) => {
      state.loading = true;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { editCurrentPage } = postsSlice.actions;

export default postsSlice.reducer;
