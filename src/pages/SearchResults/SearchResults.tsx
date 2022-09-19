import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { CustomPagination, Poster } from '../../packages/components';
import { SearchIcon } from '../../packages/icons';
import { AppDispatch, RootState } from '../../store/store';
import { MediaType } from '../../types';
import { searchPageActions } from './searchSlice';
import {
    Wrapper,
    QueryResult,
    ContentBlock,
    NotFound,
    SearchButton,
    SearchIconBlock,
    SearchInput
} from './styled';
import { getSearchResultsThunk, getSearchResultsInPageThunk } from './thunks';

export const SearchResults: FC = () => {
    const results = useSelector((state: RootState) => state.searchResults.searchResult.results);
    const query = useSelector((state: RootState) => state.searchResults.query);
    const page = useSelector((state: RootState) => state.searchResults.searchResult.page);
    const totalResults = useSelector(
        (state: RootState) => state.searchResults.searchResult.total_results
    );
    const totalPages = useSelector(
        (state: RootState) => state.searchResults.searchResult.total_pages
    );

    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch<AppDispatch>();

    const url = new URL(window.location.href);

    const params = new URLSearchParams(url.search);

    useEffect(() => {
        dispatch(
            getSearchResultsThunk({
                page: searchParams.get('page'),
                query: searchParams.get('query')
            })
        );
    }, []);

    useEffect(() => {
        setSearchParams({ query, page: String(page) });
    }, [query, page]);

    const onPageChange = (value: any) => {
        dispatch(getSearchResultsThunk({ page: value, query }));
    };

    const setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchPageActions.setQuery(e.target.value.trim()));
    };

    const onEnterClick = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(getSearchResultsInPageThunk(query));
        }
    };

    const onIconClick = () => {
        dispatch(getSearchResultsInPageThunk(query));
    };

    return (
        <Wrapper>
            {totalResults ? (
                <>
                    <SearchButton>
                        <SearchInput
                            defaultValue={params.get('query')?.toString()}
                            placeholder='Search...'
                            onChange={setSearchValue}
                            onKeyDown={(e) => onEnterClick(e)}
                        />
                        <SearchIconBlock onClick={onIconClick}>
                            <SearchIcon />
                        </SearchIconBlock>
                    </SearchButton>
                    <QueryResult>{`${totalResults} answers found for your query`}</QueryResult>
                    <ContentBlock>
                        {results?.map((item: MediaType) => (
                            <Poster
                                key={item.id}
                                posterImage={item.poster_path}
                                posterName={item.name || item.title}
                                path={`${item.media_type}/${item.title || item.name}/${item.id}`}
                            />
                        ))}
                    </ContentBlock>
                    <CustomPagination
                        currentPage={page ? Number(page) : 0}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </>
            ) : (
                <NotFound>
                    <QueryResult>
                        Sorry, site search did not return any results. Try changing or shortening
                        your request.
                    </QueryResult>
                </NotFound>
            )}
        </Wrapper>
    );
};
