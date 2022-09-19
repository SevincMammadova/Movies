import { createSlice } from '@reduxjs/toolkit';

import { genresPageName } from './const';
import { getGenresMovieThunk, getGenresTVThunk } from './thunks';
import { TumblerType } from './types';

type InitialStateType = {
    genresMovie: [];
    genresTv: [];
    tumbler: string;
};

const initialState: InitialStateType = {
    genresMovie: [],
    genresTv: [],
    tumbler: 'MOVIE'
};

export const genresSlice = createSlice({
    name: genresPageName,
    initialState,
    reducers: {
        setTumblerValue(state, action) {
            state.tumbler = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getGenresMovieThunk.fulfilled, (state, action) => {
            state.genresMovie = action.payload;
        });
        builder.addCase(getGenresTVThunk.fulfilled, (state, action) => {
            state.genresTv = action.payload;
        });
    }
});

export const genresPageActions = {
    ...genresSlice.actions
};

export const genresPageReducer = genresSlice.reducer;
