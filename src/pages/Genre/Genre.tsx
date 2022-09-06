import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

import { PATH_NAMES } from '../../packages';
import { Poster } from '../../packages/components';
import { ChevronLeftIcon } from '../../packages/icons';
import { IMG_API } from '../../packages/utils/apiKey';
import { AppDispatch, RootState } from '../../store/store';
import { Wrapper, GoBackButton, PosterBlock } from './styled';
import { initThunk } from './thunks';

export const GenrePage: FC = () => {
    const movies = useSelector((state: RootState) => state.genrePage.movieGenreInfo);
    const tvShoes = useSelector((state: RootState) => state.genrePage.tvGenreInfo);

    const navigate = useNavigate();
    const { mediaType, id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initThunk({ mediaType, id }));
    }, [dispatch]);

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
                        ? movies?.map((item: any) => (
                              <Poster
                                  key={item.id}
                                  posterImage={IMG_API + item.poster_path}
                                  posterName={item.name || item.title}
                                  path={`movie/${item.title || item.name}/${item.id}`}
                              />
                          ))
                        : tvShoes?.map((item: any) => (
                              <Poster
                                  key={item.id}
                                  posterImage={IMG_API + item.poster_path}
                                  posterName={item.name || item.title}
                                  path={`tv/${item.title || item.name}/${item.id}`}
                              />
                          ))}
                </PosterBlock>
            </Wrapper>
        </>
    );
};
