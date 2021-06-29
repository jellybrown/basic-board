import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import postsSlice from './PostsSlice';

const reducer = combineReducers({
  posts: postsSlice,
});

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
