/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getPopularMovies, getPopularTv, init } from './const';
import { homePageActions } from './homeSlice';

export const getPopularMoviesThunk = createAsyncThunk(
    getPopularMovies,
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
            );

            const data = await response.json();
            dispatch(homePageActions.setPopularMovies(data?.results));

            if (!response.ok) {
                throw new Error('Can not get popiular movies. Server error.');
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getPopularTVThunk = createAsyncThunk(getPopularTv, async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`);

        const data = await response.json();

        console.log('releases', data);

        if (!response.ok) {
            throw new Error('Can not get popular Tv. Server error.');
        }
        return data.results;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const initThunk = createAsyncThunk(init, async (_, { rejectWithValue, dispatch }) => {
    try {
        dispatch(getPopularMoviesThunk());
        dispatch(getPopularTVThunk());
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
