import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { PATH_NAMES } from '../../packages';
import { Poster } from '../../packages/components';
import { IMG_API } from '../../packages/utils/apiKey';
import { RootState } from '../../store/store';
import { PosterBlock } from './styled';

export const Movies: FC = () => {
    const movies = useSelector((state: RootState) => state.genrePage.movieGenreInfo);
    // return <Poster />;
    return (
        <PosterBlock>
            {movies?.map((item: any) => (
                <Poster
                    key={item.id}
                    posterImage={IMG_API + item.poster_path}
                    posterName={item.name || item.title}
                    path={`movies/${item.title || item.name}/${item.id}}`}
                />
            ))}
        </PosterBlock>
    );
};
