import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { getMoviesGenreInfo, getTvGenreInfo, init } from './const';
import { MediaDataType } from './types';

type TProps = {
    id: number | string | undefined;
    page: number | string;
};

export const getMoviesGenreInfoThunk = createAsyncThunk(
    getMoviesGenreInfo,
    async ({ id, page }: TProps, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`
            );
            if (!response.ok) {
                throw new Error('Can not get movies genres. Server error.');
            }
            const data = await response.json();

            return data;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);
export const getTvGenreInfoThunk = createAsyncThunk(
    getTvGenreInfo,
    async ({ id, page }: TProps, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${id}&page=${page}`
            );
            if (!response.ok) {
                throw new Error('Can not get tv genres. Server error.');
            }
            const data = await response.json();

            return data;
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
                dispatch(getMoviesGenreInfoThunk({ id: data?.id, page: data.moviePage }));
            } else {
                dispatch(getTvGenreInfoThunk({ id: data?.id, page: data.tVPage }));
            }
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);
