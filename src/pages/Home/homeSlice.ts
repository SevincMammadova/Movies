/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';
import { MediaType } from '../../types';

import { homePagaSliceName } from './const';
import { getPopularTVThunk } from './thunks';

type InitialStateType = {
    popularMovies: {
        page: number;
        results: MediaType[];
        total_pages: number;
    };
    popularTV: {
        page: number;
        results: MediaType[];
        total_pages: number;
    };
};

const initialState: InitialStateType = {
    popularMovies: {
        page: 1,
        results: [],
        total_pages: 0
    },
    popularTV: {
        page: 1,
        results: [],
        total_pages: 0
    }
};

export const homeSlice = createSlice({
    name: homePagaSliceName,
    initialState,
    reducers: {
        setPopularMovies(state, action) {
            state.popularMovies = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPopularTVThunk.fulfilled, (state, action) => {
            state.popularTV = action.payload;
        });
    }
});

export const homePageActions = {
    ...homeSlice.actions
};

export const homePageReducer = homeSlice.reducer;
