import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getMoviesGenreInfo, getTvGenreInfo, init } from './const';
import { MediaDataType } from './types';

export const getMoviesGenreInfoThunk = createAsyncThunk(
    getMoviesGenreInfo,
    async (id: string | undefined, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`
            );
            if (!response.ok) {
                throw new Error('Can not get movies genres. Server error.');
            }
            const data = await response.json();

            return data.results;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);
export const getTvGenreInfoThunk = createAsyncThunk(
    getTvGenreInfo,
    async (id: string | undefined, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${id}`
            );
            if (!response.ok) {
                throw new Error('Can not get tv genres. Server error.');
            }
            const data = await response.json();

            return data.results;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);

export const initThunk = createAsyncThunk(
    init,
    async (data: MediaDataType, { rejectWithValue, dispatch }) => {
        try {
            if (data.mediaType === 'movies') {
                dispatch(getMoviesGenreInfoThunk(data?.id));
            } else {
                dispatch(getTvGenreInfoThunk(data?.id));
            }
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);
