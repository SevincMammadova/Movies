import { createSlice } from '@reduxjs/toolkit';

import { homePagaSliceName } from './const';
import { getPopularTVThunk } from './thunks';

type InitialStateType = {
    popularMovies: [];
    popularTV: [];
};

const initialState: InitialStateType = {
    popularMovies: [],
    popularTV: []
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
