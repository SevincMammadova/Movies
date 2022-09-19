/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

import { MediaType } from '../../types';
import { playerPageName } from './const';
import { getMovieDataThunk, getTvDataThunk } from './thunks';

type InitialStateType = {
    mediaData: MediaType;
};

const initialState: InitialStateType = {
    mediaData: {
        poster_path: '',
        title: '',
        adult: false,
        backdrop_path: '',
        belongs_to_collection: {
            id: 0,
            name: '',
            poster_path: '',
            backdrop_path: ''
        },
        budget: 0,
        genres: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
        video: false,
        videos: { results: [] },
        vote_average: 0,
        vote_count: 0
    }
};

export const playerSlice = createSlice({
    name: playerPageName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovieDataThunk.fulfilled, (state, action) => {
            state.mediaData = action.payload;
        });
        builder.addCase(getTvDataThunk.fulfilled, (state, action) => {
            state.mediaData = action.payload;
        });
    }
});

export const playerPageActions = {
    ...playerSlice.actions
};

export const playerPageReducer = playerSlice.reducer;
