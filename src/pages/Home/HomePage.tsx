import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import PosterImg from '../../assets/images/home_bg.jpg';
import { Poster } from '../../packages/components';
import { IMG_API } from '../../packages/utils/apiKey';
import { AppDispatch, RootState } from '../../store/store';
import { MediaType } from '../../types';
import {
    Wrapper,
    PosterContainer,
    WelcomeImage,
    PosterText,
    PosterTextBlock,
    ListBlock,
    MoreButton,
    BlockTitle,
    PosterBlock
} from './styled';
import { initThunk } from './thunks';

export const HomePage: FC = () => {
    const popularsMovies = useSelector((state: RootState) => state['@homePage'].popularMovies);
    const popularsTv = useSelector((state: RootState) => state['@homePage'].popularTV);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initThunk());
    }, [dispatch]);

    const firstPartOfPopularMovies: MediaType[] = popularsMovies?.results?.slice(0, 5);
    const firstPartOfPopularTV: MediaType[] = popularsTv?.results?.slice(0, 5);

    return (
        <>
            <Wrapper>
                <PosterContainer>
                    <WelcomeImage src={PosterImg} />
                    <PosterTextBlock>
                        <PosterText>Welcome in MovieNight</PosterText>
                        <PosterText size='20px'>
                            Millions of movies and series. Explore now.
                        </PosterText>
                    </PosterTextBlock>
                </PosterContainer>
                <ListBlock>
                    <BlockTitle>Popular TV</BlockTitle>
                    <PosterBlock>
                        {firstPartOfPopularTV?.map((item: MediaType) => (
                            <Poster
                                key={item.id}
                                posterName={item.title || item.name}
                                posterImage={item.poster_path}
                                path={`tv/${item.title || item.name}/${item.id}`}
                            />
                        ))}
                    </PosterBlock>
                    <MoreButton to='more/tv'>Watch More</MoreButton>
                </ListBlock>
                <ListBlock>
                    <BlockTitle>Popular Movies</BlockTitle>
                    <PosterBlock>
                        {firstPartOfPopularMovies?.map((item: MediaType) => (
                            <Poster
                                key={item.id}
                                posterName={item.title || item.name}
                                posterImage={IMG_API + item.poster_path}
                                path={`movie/${item.title || item.name}/${item.id}`}
                            />
                        ))}
                    </PosterBlock>
                    <MoreButton to='more/movie'>Watch More</MoreButton>
                </ListBlock>
            </Wrapper>
        </>
    );
};
