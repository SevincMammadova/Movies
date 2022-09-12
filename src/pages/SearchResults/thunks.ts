/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiKey } from '../../packages/utils/apiKey';
import { MediaType } from '../../types';
import { getSearchResults } from './const';

type RequestType = {
    page: number;
    query: string;
};

export const getSearchResultsThunk = createAsyncThunk(
    getSearchResults,
    async ({ page, query }: RequestType, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&page=${page}&query=${query}&include_adult=false`
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Can not get popiular movies. Server error.');
            }

            const filterData = data?.results?.filter(
                (item: MediaType) => item.media_type !== 'person'
            );

            const result = {
                ...data,
                results: filterData
            };

            return result;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
