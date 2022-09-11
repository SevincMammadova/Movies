/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getTopRatedMovies, getTopRatedTv, init } from './const';

export const getTopRatedMoviesThunk = createAsyncThunk(
    getTopRatedMovies,
    async (currenPage: number | string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currenPage}`
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Can not get popiular movies. Server error.');
            }

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getTopRatedTvThunk = createAsyncThunk(
    getTopRatedTv,
    async (currenPage: number | string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=${currenPage}`
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Can not get popular Tv. Server error.');
            }
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const initThunk = createAsyncThunk(init, async (_, { rejectWithValue, dispatch }) => {
    try {
        dispatch(getTopRatedMoviesThunk(1));
        dispatch(getTopRatedTvThunk(1));
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
