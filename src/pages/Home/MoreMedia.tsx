import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CustomPagination, Poster } from '../../packages/components';
import { AppDispatch, RootState } from '../../store/store';
import { MediaType } from '../../types';
import { Wrapper, PosterBlock } from './styled';
import { getPopularMoviesThunk, getPopularTVThunk } from './thunks';

export const MoreMedia: FC = () => {
    const popularsMovies = useSelector((state: RootState) => state['@homePage'].popularMovies);
    const popularsTv = useSelector((state: RootState) => state['@homePage'].popularTV);

    const { mediaType } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const onMoviePageChange = (data: number | string) => {
        dispatch(getPopularMoviesThunk(data));
    };
    const onTVPageChange = (data: number | string) => {
        dispatch(getPopularTVThunk(data));
    };

    return (
        <>
            <Wrapper>
                <PosterBlock>
                    {mediaType === 'movie'
                        ? popularsMovies?.results?.map((item: MediaType) => (
                              <Poster
                                  key={item.id}
                                  posterName={item.title || item.name}
                                  posterImage={item.poster_path}
                                  path={`movie/${item.title || item.name}/${item.id}`}
                              />
                          ))
                        : popularsTv?.results?.map((item: MediaType) => (
                              <Poster
                                  key={item.id}
                                  posterName={item.title || item.name}
                                  posterImage={item.poster_path}
                                  path={`tv/${item.title || item.name}/${item.id}`}
                              />
                          ))}
                </PosterBlock>
                {mediaType === 'movie' ? (
                    <CustomPagination
                        totalPages={popularsMovies.total_pages}
                        currentPage={popularsMovies.page}
                        onPageChange={onMoviePageChange}
                    />
                ) : (
                    <CustomPagination
                        totalPages={popularsTv.total_pages}
                        currentPage={popularsTv.page}
                        onPageChange={onTVPageChange}
                    />
                )}
            </Wrapper>
        </>
    );
};
