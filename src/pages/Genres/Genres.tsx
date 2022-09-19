import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Button, Tumbler } from '../../packages/components';
import { AppDispatch, RootState } from '../../store/store';
import { genresPageActions } from './genresSlice';
import { Wrapper, GenresBlock } from './styled';
import { initThunk } from './thunks';

export const Genres: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tumbler, genresMovie, genresTv } = useSelector((state: RootState) => state.genresPage);

    useEffect(() => {
        dispatch(initThunk());
    }, [dispatch]);

    const toggleMediaType = (value: string) => {
        dispatch(genresPageActions.setTumblerValue(value));
    };

    return (
        <Wrapper>
            <Tumbler data={['MOVIE', 'TV']} callback={toggleMediaType} />
            <GenresBlock>
                {tumbler === 'MOVIE'
                    ? genresMovie?.map((item: any) => (
                          <Button
                              key={item.id}
                              btnText={item.name}
                              path={`movies/${item.name}/${item.id}`}
                          />
                      ))
                    : genresTv?.map((item: any) => (
                          <Button
                              key={item.id}
                              btnText={item.name}
                              path={`tv/${item.name}/${item.id}`}
                          />
                      ))}
            </GenresBlock>
        </Wrapper>
    );
};
