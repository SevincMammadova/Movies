import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CustomPagination, Poster } from '../../packages/components';
import { Tumbler } from '../../packages/components/Tumbler';
import { IMG_API } from '../../packages/utils/apiKey';
import { AppDispatch, RootState } from '../../store/store';
import { MediaType } from '../../types';
import { ContentBlock, Wrapper, PaginationBlock } from './styled';
import { initThunk, getTopRatedMoviesThunk, getTopRatedTvThunk } from './thunks';
import { topPageActions } from './topSlice';

export const TopPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tumbler, topRatedMovies, topRatedTv } = useSelector(
        (state: RootState) => state.topPage
    );

    useEffect(() => {
        dispatch(initThunk());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topRatedMovies.page, topRatedTv.page]);

    const toggleMediaType = (value: string) => {
        dispatch(topPageActions.setTumblerValue(value));
    };

    return (
        <Wrapper>
            <Tumbler data={['MOVIE', 'TV']} callback={toggleMediaType} />

            <ContentBlock>
                {tumbler === 'MOVIE'
                    ? topRatedMovies?.results?.map((item: MediaType) => (
                          <Poster
                              key={item.id}
                              posterImage={IMG_API + item.poster_path}
                              posterName={item.name || item.title}
                              path={`movie/${item.title || item.name}/${item.id}`}
                          />
                      ))
                    : topRatedTv?.results?.map((item: MediaType) => (
                          <Poster
                              key={item.id}
                              posterImage={IMG_API + item.poster_path}
                              posterName={item.name || item.title}
                              path={`tv/${item.title || item.name}/${item.id}`}
                          />
                      ))}
            </ContentBlock>
            {tumbler === 'MOVIE' ? (
                <PaginationBlock>
                    <CustomPagination
                        totalPages={topRatedMovies.total_pages}
                        currentPage={topRatedMovies.page}
                        onPageChange={(value) => dispatch(getTopRatedMoviesThunk(value))}
                    />
                </PaginationBlock>
            ) : (
                <PaginationBlock>
                    <CustomPagination
                        totalPages={topRatedTv.total_pages}
                        currentPage={topRatedTv.page}
                        onPageChange={(value) => dispatch(getTopRatedTvThunk(value))}
                    />
                </PaginationBlock>
            )}
        </Wrapper>
    );
};
