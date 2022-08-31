import { createSlice } from '@reduxjs/toolkit';

import { genrePageName, getMoviesGenreInfo } from './const';
import { getMoviesGenreInfoThunk, getTvGenreInfoThunk } from './thunks';

type InitialStateType = {
    tvGenreInfo: [];
    movieGenreInfo: [];
};

const initialState: InitialStateType = {
    tvGenreInfo: [],
    movieGenreInfo: []
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
