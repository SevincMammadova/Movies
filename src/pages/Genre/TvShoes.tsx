import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { PATH_NAMES } from '../../packages';
import { Poster } from '../../packages/components';
import { IMG_API } from '../../packages/utils/apiKey';
import { RootState } from '../../store/store';
import { PosterBlock } from './styled';

export const TvShoes: FC = () => {
    const tvShoes = useSelector((state: RootState) => state.genrePage.tvGenreInfo);
    return (
        <PosterBlock>
            {tvShoes?.map((item: any) => (
                <Poster
                    key={item.id}
                    posterImage={IMG_API + item.poster_path}
                    posterName={item.name || item.title}
                    path={`tv/${item.title || item.name}/${item.id}}`}
                />
            ))}
        </PosterBlock>
    );
};
