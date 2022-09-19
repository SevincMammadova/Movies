import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { CustomPagination, Poster } from '../../packages/components';
import { ChevronLeftIcon } from '../../packages/icons';
import { IMG_API } from '../../packages/utils/apiKey';
import { AppDispatch, RootState } from '../../store/store';
import { Wrapper, GoBackButton, PosterBlock } from './styled';
import { getMoviesGenreInfoThunk, getTvGenreInfoThunk, initThunk } from './thunks';

export const GenrePage: FC = () => {
    const movies = useSelector((state: RootState) => state.genrePage.movieGenreInfo);
    const tvShoes = useSelector((state: RootState) => state.genrePage.tvGenreInfo);

    const navigate = useNavigate();
    const { mediaType, id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initThunk({ mediaType, id, moviePage: movies?.page, tVPage: tvShoes?.page }));
    }, [dispatch]);

    const onMoviePageChange = (value: number | string) => {
        dispatch(getMoviesGenreInfoThunk({ id, page: value }));
    };

    const onTVPageChange = (value: number | string) => {
        dispatch(getTvGenreInfoThunk({ id, page: value }));
    };

    const goBack = () => navigate(-1);

    return (
        <>
            <Wrapper>
                <GoBackButton onClick={() => goBack()}>
                    <ChevronLeftIcon />
                    Go Back
                </GoBackButton>
                <PosterBlock>
                    {mediaType === 'movies'
                        ? movies?.results?.map((item: any) => (
                              <Poster
                                  key={item.id}
                                  posterImage={item.poster_path}
                                  posterName={item.name || item.title}
                                  path={`movie/${item.title || item.name}/${item.id}`}
                              />
                          ))
                        : tvShoes?.results?.map((item: any) => (
                              <Poster
                                  key={item.id}
                                  posterImage={IMG_API + item.poster_path}
                                  posterName={item.name || item.title}
                                  path={`tv/${item.title || item.name}/${item.id}`}
                              />
                          ))}
                </PosterBlock>
                {mediaType === 'movies' ? (
                    <CustomPagination
                        totalPages={movies?.total_pages}
                        currentPage={movies?.page}
                        onPageChange={onMoviePageChange}
                    />
                ) : (
                    <CustomPagination
                        totalPages={tvShoes?.total_pages}
                        currentPage={tvShoes?.page}
                        onPageChange={onTVPageChange}
                    />
                )}
            </Wrapper>
        </>
    );
};
