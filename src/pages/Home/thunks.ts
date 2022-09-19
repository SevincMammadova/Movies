/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getPopularMovies, getPopularTv, init } from './const';
import { homePageActions } from './homeSlice';

export const getPopularMoviesThunk = createAsyncThunk(
    getPopularMovies,
    async (page: number | string, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${page}`
            );

            const data = await response.json();
            dispatch(homePageActions.setPopularMovies(data));

            if (!response.ok) {
                throw new Error('Can not get popular movies. Server error.');
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getPopularTVThunk = createAsyncThunk(
    getPopularTv,
    async (page: number | string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`
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
        dispatch(getPopularMoviesThunk(1));
        dispatch(getPopularTVThunk(1));
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
