/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getTvData, getMovieData, init } from './const';

export const getMovieDataThunk = createAsyncThunk(
    getMovieData,
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`
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

export const getTvDataThunk = createAsyncThunk(
    getTvData,
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=videos`
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

export const initThunk = createAsyncThunk(
    init,
    async (data: any, { rejectWithValue, dispatch }) => {
        try {
            if (data.mediaType === 'movie') {
                dispatch(getMovieDataThunk(data.id));
            } else {
                dispatch(getTvDataThunk(data.id));
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
