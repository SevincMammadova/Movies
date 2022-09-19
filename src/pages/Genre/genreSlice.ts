/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

import { MediaType } from '../../types';
import { genrePageName, getMoviesGenreInfo } from './const';
import { getMoviesGenreInfoThunk, getTvGenreInfoThunk } from './thunks';

type InitialStateType = {
    tvGenreInfo: {
        page: number;
        results: MediaType[];
        total_pages: number;
    };
    movieGenreInfo: {
        page: number;
        results: MediaType[];
        total_pages: number;
    };
};

const initialState: InitialStateType = {
    tvGenreInfo: {
        page: 1,
        results: [],
        total_pages: 0
    },
    movieGenreInfo: {
        page: 1,
        results: [],
        total_pages: 0
    }
};

export const genreSlice = createSlice({
    name: genrePageName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMoviesGenreInfoThunk.fulfilled, (state, action) => {
            state.movieGenreInfo = action.payload;
        });
        builder.addCase(getTvGenreInfoThunk.fulfilled, (state, action) => {
            state.tvGenreInfo = action.payload;
        });
    }
});

export const genrePageActions = {
    ...genreSlice.actions
};

export const genrePageReducer = genreSlice.reducer;
