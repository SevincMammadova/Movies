/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

import { MediaType } from '../../types';
import { topPageName } from './const';
import { getTopRatedMoviesThunk, getTopRatedTvThunk } from './thunks';

type InitialStateType = {
    topRatedMovies: {
        page: number;
        results: MediaType[];
        total_pages: number;
    };
    topRatedTv: {
        page: number;
        results: MediaType[];
        total_pages: number;
    };
    tumbler: string;
};

const initialState: InitialStateType = {
    topRatedMovies: {
        page: 1,
        results: [],
        total_pages: 0
    },
    topRatedTv: {
        page: 1,
        results: [],
        total_pages: 0
    },
    tumbler: 'MOVIE'
};

export const topSlice = createSlice({
    name: topPageName,
    initialState,
    reducers: {
        setTumblerValue: (state, action) => {
            state.tumbler = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTopRatedMoviesThunk.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload;
        });
        builder.addCase(getTopRatedTvThunk.fulfilled, (state, action) => {
            state.topRatedTv = action.payload;
        });
    }
});

export const topPageActions = {
    ...topSlice.actions
};

export const topPageReducer = topSlice.reducer;
