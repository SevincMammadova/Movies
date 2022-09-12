import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PATH_NAMES } from '../../packages';
import { CustomPagination, Poster } from '../../packages/components';
import { AppDispatch, RootState } from '../../store/store';
import { MediaType } from '../../types';
import { Wrapper, QueryResult, ContentBlock, NotFound } from './styled';
import { getSearchResultsThunk } from './thunks';

export const SearchResults: FC = () => {
    const results = useSelector((state: RootState) => state.searchResults.searchResult.results);
    const page = useSelector((state: RootState) => state.searchResults.searchResult.page);
    const totalResults = useSelector(
        (state: RootState) => state.searchResults.searchResult.total_results
    );
    const query = useSelector((state: RootState) => state.searchResults.query);
    const totalPages = useSelector(
        (state: RootState) => state.searchResults.searchResult.total_pages
    );

    const dispatch = useDispatch<AppDispatch>();

    const onPageChange = (value: any) => {
        dispatch(getSearchResultsThunk({ page: value, query }));
    };
    return (
        <Wrapper>
            {totalResults ? (
                <>
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
                        currentPage={page}
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
