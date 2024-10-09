"use client";

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
// import carsReducer from './slices/carsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    // cars: carsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;