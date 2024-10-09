"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { linkUrl, endpoints } from '../../utils/functions';

interface PostsState {
  posts: any[];
  isLoading: boolean;
  error: string | null;
  page: number;
  pagesLength: number | null;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
  page: 1,
  pagesLength: null,
};

// Async thunk to fetch posts
export const fetchPostsData = createAsyncThunk(
  'posts/fetchPostsData',
  async (lang: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=1&language_id=${lang}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Custom reducers (if needed)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.data;
        state.pagesLength = action.payload.last_page;
      })
      .addCase(fetchPostsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default postsSlice.reducer;