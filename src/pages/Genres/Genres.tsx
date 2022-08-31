import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Button } from '../../packages/components';
import { AppDispatch, RootState } from '../../store/store';
import { mediaType } from './const';
import { genresPageActions } from './genresSlice';
import { TumblerButton, TumblerWrapper, Wrapper, GenresBlock } from './styled';
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
            <TumblerWrapper>
                {mediaType?.map((item: any) => (
                    <TumblerButton
                        key={item.id}
                        isActive={item.name === tumbler}
                        onClick={() => toggleMediaType(item.name)}
                    >
                        {item.name}
                    </TumblerButton>
                ))}
            </TumblerWrapper>
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
                              path={`tv/${item.name}${item.id}`}
                          />
                      ))}
            </GenresBlock>
        </Wrapper>
    );
};
