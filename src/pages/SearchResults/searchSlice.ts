/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

import { MediaType } from '../../types';
import { searchPageName } from './const';
import { getSearchResultsThunk, getSearchResultsInPageThunk } from './thunks';

type InitialStateType = {
    searchResult: {
        page: number;
        results: MediaType[];
        total_pages: number;
        total_results: number;
    };
    query: string;
};

const initialState: InitialStateType = {
    searchResult: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    query: ''
};

export const searchSlice = createSlice({
    name: searchPageName,
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSearchResultsThunk.fulfilled, (state, action) => {
            state.searchResult = action.payload;
        });
        builder.addCase(getSearchResultsInPageThunk.fulfilled, (state, action) => {
            state.searchResult = action.payload;
        });
    }
});

export const searchPageActions = {
    ...searchSlice.actions
};

export const searchPageReducer = searchSlice.reducer;
