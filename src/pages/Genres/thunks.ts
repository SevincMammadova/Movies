import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getGenresMovie, getGenresTV, init } from './const';

export const getGenresMovieThunk = createAsyncThunk(
    getGenresMovie,
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
            );
            if (!response.ok) {
                throw new Error('Can not get movies genres. Server error.');
            }
            const data = await response.json();

            return data.genres;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);
export const getGenresTVThunk = createAsyncThunk(getGenresTV, async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`
        );
        if (!response.ok) {
            throw new Error('Can not get tv genres. Server error.');
        }
        const data = await response.json();

        return data.genres;
    } catch (error: any) {
        rejectWithValue(error.message);
    }
});

export const initThunk = createAsyncThunk(init, async (_, { rejectWithValue, dispatch }) => {
    try {
        dispatch(getGenresMovieThunk());
        dispatch(getGenresTVThunk());
    } catch (error: any) {
        rejectWithValue(error.message);
    }
});
